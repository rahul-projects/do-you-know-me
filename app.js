document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const screens = {
    home: document.getElementById('homeScreen'),
    game: document.getElementById('gameScreen'),
    result: document.getElementById('resultScreen')
  };
  
  const levelGrid = document.getElementById('levelGrid');
  const currentLevelTitle = document.getElementById('currentLevelTitle');
  const clueText = document.getElementById('clueText');
  const optionsGrid = document.getElementById('optionsGrid');
  const nextClueBtn = document.getElementById('nextClueBtn');
  const attemptsCountSpan = document.getElementById('attemptsCount');
  const finalAnswerSpan = document.getElementById('finalAnswer');
  
  const buttons = {
    back: document.getElementById('backBtn'),
    playAgain: document.getElementById('playAgainBtn'),
    home: document.getElementById('homeBtn'),
    nextLevel: document.getElementById('nextLevelBtn'),
    nextPuzzle: document.getElementById('nextPuzzleBtn')
  };

  const sounds = {
    success: document.getElementById('successSound'),
    error: document.getElementById('errorSound')
  };

  // Game State
  let unlockedLevels = parseInt(localStorage.getItem('knowme_unlocked')) || 1;
  let currentLevelId = null;
  let levelQuestions = [];
  let currentQuestionIndex = 0;
  let currentQuestion = null;
  let currentClueIndex = 0;
  let attempts = 0;

  // Utility to shuffle an array
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Initialize Home Screen
  function initHome() {
    levelGrid.innerHTML = '';
    gameData.forEach(level => {
      const btn = document.createElement('button');
      const isLocked = level.id > unlockedLevels;
      
      btn.className = `level-btn ${isLocked ? 'locked' : ''}`;
      btn.innerHTML = `
        <span style="font-size: 2rem; margin-bottom: 5px;">${isLocked ? '🔒' : '⭐'}</span>
        <span>${level.title.split(':')[0]}</span>
      `;
      
      if (!isLocked) {
        btn.addEventListener('click', () => startGame(level.id));
      } else {
        btn.addEventListener('click', () => {
          playSound('error');
          // Add a little shake to indicate it's locked
          btn.style.animation = 'shake 0.4s';
          setTimeout(() => btn.style.animation = '', 400);
        });
      }
      
      levelGrid.appendChild(btn);
    });
  }

  // Navigation
  function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens[screenName].classList.remove('hidden');
    if (screenName === 'home') initHome();
  }

  // Audio helper
  function playSound(type) {
    // Attempt to play, catch error if user hasn't interacted yet
    try {
      if (sounds[type]) {
        sounds[type].currentTime = 0;
        sounds[type].play().catch(e => console.log("Audio play prevented:", e));
      }
    } catch (e) {}
  }

  // Game Logic
  function startGame(levelId) {
    currentLevelId = levelId;
    const levelData = gameData.find(l => l.id === levelId);
    
    // Pick 3 random distinct questions from the level
    const shuffledQuestions = shuffleArray(levelData.questions);
    levelQuestions = shuffledQuestions.slice(0, 3);
    currentQuestionIndex = 0;
    
    startPuzzle();
    showScreen('game');
  }

  function startPuzzle() {
    const levelData = gameData.find(l => l.id === currentLevelId);
    currentLevelTitle.textContent = `${levelData.title} (${currentQuestionIndex + 1}/3)`;
    currentQuestion = levelQuestions[currentQuestionIndex];
    
    currentClueIndex = 0;
    attempts = 0;
    updateAttemptsDisplay();
    
    showQuestion();
  }

  function showQuestion() {
    // Shuffle the clues so they aren't always in the same order
    // But keep the first clue consistently easy/hard based on logic? 
    // Wait, let's keep clue order fixed as they usually go from hard to easy.
    clueText.textContent = currentQuestion.clues[currentClueIndex];
    
    // Manage Next Clue button visibility
    if (currentClueIndex < currentQuestion.clues.length - 1) {
      nextClueBtn.classList.remove('hidden');
    } else {
      nextClueBtn.classList.add('hidden');
    }

    // Render options
    optionsGrid.innerHTML = '';
    // Shuffle options so they aren't always in the same position
    const shuffledOptions = shuffleArray(currentQuestion.options);
    shuffledOptions.forEach(option => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `
        <span class="option-emoji">${option.emoji}</span>
        <span class="option-text">${option.text}</span>
      `;
      
      btn.addEventListener('click', () => handleGuess(option, btn));
      optionsGrid.appendChild(btn);
    });
  }

  function handleGuess(option, btnElement) {
    attempts++;
    updateAttemptsDisplay();

    if (option.text === currentQuestion.answer) {
      // Correct!
      playSound('success');
      btnElement.classList.add('correct');
      
      // Disable all other buttons
      Array.from(optionsGrid.children).forEach(child => {
        child.style.pointerEvents = 'none';
      });

      setTimeout(() => showResult(true), 1000);
    } else {
      // Wrong
      playSound('error');
      btnElement.classList.add('wrong');
      
      // Automatically show next clue if available
      if (currentClueIndex < currentQuestion.clues.length - 1) {
        setTimeout(showNextClue, 500);
      }
    }
  }

  function showNextClue() {
    if (currentClueIndex < currentQuestion.clues.length - 1) {
      currentClueIndex++;
      clueText.textContent = currentQuestion.clues[currentClueIndex];
      
      if (currentClueIndex === currentQuestion.clues.length - 1) {
        nextClueBtn.classList.add('hidden');
      }
    }
  }

  function updateAttemptsDisplay() {
    attemptsCountSpan.textContent = attempts;
  }

  function showResult(isSuccess) {
    if (isSuccess) {
      finalAnswerSpan.textContent = `${currentQuestion.answer} ${currentQuestion.options.find(o => o.text === currentQuestion.answer).emoji}`;
      
      buttons.nextPuzzle.classList.add('hidden');
      buttons.nextLevel.classList.add('hidden');
      
      if (currentQuestionIndex < levelQuestions.length - 1) {
        // Not done with level yet
        document.querySelector('.success-title').textContent = '🎉 Great Job! 🎉';
        buttons.nextPuzzle.classList.remove('hidden');
      } else {
        // Level complete
        document.querySelector('.success-title').textContent = '🏆 Level Complete! 🏆';
        if (currentLevelId == unlockedLevels && unlockedLevels < gameData.length) {
          unlockedLevels++;
          localStorage.setItem('knowme_unlocked', unlockedLevels);
        }
        if (currentLevelId < gameData.length) {
          buttons.nextLevel.classList.remove('hidden');
        }
      }
      
      showScreen('result');
    }
  }

  // Event Listeners
  buttons.back.addEventListener('click', () => showScreen('home'));
  buttons.home.addEventListener('click', () => showScreen('home'));
  buttons.playAgain.addEventListener('click', () => startGame(currentLevelId));
  buttons.nextLevel.addEventListener('click', () => startGame(currentLevelId + 1));
  buttons.nextPuzzle.addEventListener('click', () => {
    currentQuestionIndex++;
    startPuzzle();
    showScreen('game');
  });
  nextClueBtn.addEventListener('click', showNextClue);

  // Start App
  initHome();
});