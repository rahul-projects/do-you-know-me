document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const screens = {
    home: document.getElementById('homeScreen'),
    game: document.getElementById('gameScreen'),
    result: document.getElementById('resultScreen'),
    fact: document.getElementById('factScreen'),
    passcode: document.getElementById('passcodeScreen'),
    parental: document.getElementById('parentalScreen')
  };
  
  const levelGrid = document.getElementById('levelGrid');
  const currentLevelTitle = document.getElementById('currentLevelTitle');
  const previousClueText = document.getElementById('previousClueText');
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
    nextPuzzle: document.getElementById('nextPuzzleBtn'),
    closeFact: document.getElementById('closeFactBtn'),
    parental: document.getElementById('parentalBtn'),
    backFromPasscode: document.getElementById('backFromPasscodeBtn'),
    backFromParental: document.getElementById('backFromParentalBtn'),
    changePasscode: document.getElementById('changePasscodeBtn')
  };

  const passcodeDisplay = document.getElementById('passcodeDisplay');
  const numpadBtns = document.querySelectorAll('.num-btn');
  const streaksTableBody = document.getElementById('streaksTableBody');

  const interestingFacts = [
    { text: "Octopuses have three hearts!", emoji: "🐙" },
    { text: "Honey never spoils. You can eat 3,000-year-old honey!", emoji: "🍯" },
    { text: "Cows have best friends and get sad when separated.", emoji: "🐄" },
    { text: "A day on Venus is longer than a year on Venus.", emoji: "🪐" },
    { text: "Butterflies taste with their feet.", emoji: "🦋" },
    { text: "Sloths can hold their breath longer than dolphins can!", emoji: "🦥" },
    { text: "Wombat poop is cube-shaped!", emoji: "💩" },
    { text: "Elephants are the only animals that can't jump.", emoji: "🐘" },
    { text: "A shrimp's heart is in its head.", emoji: "🦐" },
    { text: "Flamingos are naturally white, they turn pink from eating shrimp!", emoji: "🦩" }
  ];

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
  let currentOptions = [];
  let enteredPasscode = '';
  let passcodeMode = 'login'; // 'login', 'change_old', 'change_new'

  // Initialize Passcode
  if (!localStorage.getItem('knowme_passcode')) {
    localStorage.setItem('knowme_passcode', '0701');
  }

  // Gather all unique options across the game for random replacements
  const allPossibleOptions = gameData.flatMap(level => level.questions.flatMap(q => q.options));
  const uniqueOptions = [];
  const optionNames = new Set();
  allPossibleOptions.forEach(opt => {
    if (!optionNames.has(opt.text)) {
      optionNames.add(opt.text);
      uniqueOptions.push(opt);
    }
  });

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
  function checkFactAndShowHome() {
    initHome(); // Make sure to initialize the home screen buttons
    const lastFactTime = parseInt(localStorage.getItem('knowme_last_fact_time')) || 0;
    const now = Date.now();
    // 1 hour = 3600000 ms
    if (now - lastFactTime > 3600000) {
      showFactScreen();
    } else {
      showScreen('home');
    }
  }

  function showFactScreen() {
    const fact = interestingFacts[Math.floor(Math.random() * interestingFacts.length)];
    document.getElementById('factEmoji').textContent = fact.emoji;
    document.getElementById('factText').textContent = fact.text;

    localStorage.setItem('knowme_last_fact_time', Date.now());

    // Force show fact screen without triggering initHome loop
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    screens.fact.classList.remove('hidden');
  }

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
    currentOptions = [...currentQuestion.options];
    updateAttemptsDisplay();
    
    showQuestion();
  }

  function showQuestion() {
    // Wait, let's keep clue order fixed as they usually go from hard to easy.
    previousClueText.classList.add('hidden');
    previousClueText.textContent = '';
    clueText.textContent = currentQuestion.clues[currentClueIndex];
    
    // Manage Next Clue button visibility
    if (currentClueIndex < currentQuestion.clues.length - 1) {
      nextClueBtn.classList.remove('hidden');
    } else {
      nextClueBtn.classList.add('hidden');
    }

    renderOptions();
  }

  function renderOptions() {
    optionsGrid.innerHTML = '';
    // Shuffle options so they aren't always in the same position
    const shuffledOptions = shuffleArray(currentOptions);
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
      incrementScore();
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
      
      // Disable this button temporarily to prevent spamming
      btnElement.style.pointerEvents = 'none';

      setTimeout(() => {
        // Shuffle and possibly replace a wrong option with a new one
        if (Math.random() > 0.5) {
          // Replace one wrong option
          const wrongOptions = currentOptions.filter(o => o.text !== currentQuestion.answer);
          if (wrongOptions.length > 0) {
            const optionToReplace = wrongOptions[Math.floor(Math.random() * wrongOptions.length)];

            // Find a replacement from uniqueOptions that is not currently in currentOptions
            const availableReplacements = uniqueOptions.filter(uo => !currentOptions.some(co => co.text === uo.text) && uo.text !== currentQuestion.answer);
            if (availableReplacements.length > 0) {
              const replacement = availableReplacements[Math.floor(Math.random() * availableReplacements.length)];

              const replaceIndex = currentOptions.findIndex(o => o.text === optionToReplace.text);
              if (replaceIndex !== -1) {
                currentOptions[replaceIndex] = replacement;
              }
            }
          }
        }

        renderOptions();

        // Automatically show next clue if available
        if (currentClueIndex < currentQuestion.clues.length - 1) {
          showNextClue();
        }
      }, 600);
    }
  }

  function showNextClue() {
    if (currentClueIndex < currentQuestion.clues.length - 1) {
      previousClueText.textContent = currentQuestion.clues[currentClueIndex];
      previousClueText.classList.remove('hidden');

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

  // Parental Controls Logic
  function updatePasscodeDisplay() {
    passcodeDisplay.textContent = enteredPasscode.padEnd(4, '_').split('').join(' ');
  }

  function handlePasscodeEntry(digit) {
    if (enteredPasscode.length < 4) {
      enteredPasscode += digit;
      updatePasscodeDisplay();

      if (enteredPasscode.length === 4) {
        setTimeout(processPasscode, 300);
      }
    }
  }

  function processPasscode() {
    const savedPasscode = localStorage.getItem('knowme_passcode');
    if (passcodeMode === 'login') {
      if (enteredPasscode === savedPasscode) {
        showParentalScreen();
      } else {
        playSound('error');
        passcodeDisplay.classList.add('wrong');
        setTimeout(() => passcodeDisplay.classList.remove('wrong'), 400);
      }
    } else if (passcodeMode === 'change_old') {
      if (enteredPasscode === savedPasscode) {
        playSound('success');
        passcodeMode = 'change_new';
        document.getElementById('passcodeTitle').textContent = "Enter New Passcode";
      } else {
        playSound('error');
        passcodeDisplay.classList.add('wrong');
        setTimeout(() => passcodeDisplay.classList.remove('wrong'), 400);
      }
    } else if (passcodeMode === 'change_new') {
      localStorage.setItem('knowme_passcode', enteredPasscode);
      playSound('success');
      alert("Passcode successfully changed!");
      showParentalScreen();
    }

    enteredPasscode = '';
    updatePasscodeDisplay();
  }

  function showParentalScreen() {
    showScreen('parental');
    renderStreaks();
  }

  function renderStreaks() {
    streaksTableBody.innerHTML = '';
    const streaks = JSON.parse(localStorage.getItem('knowme_streaks') || '[]');
    // Sort streaks descending by time
    streaks.slice().reverse().forEach(streak => {
      const tr = document.createElement('tr');
      tr.style.borderBottom = "1px solid #eee";

      const date = new Date(streak.startTime).toLocaleString(undefined, {
        month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
      });

      const durationMs = streak.lastActivityTime - streak.startTime;
      const durationMins = Math.floor(durationMs / 60000);
      const durationSecs = Math.floor((durationMs % 60000) / 1000);
      const durationStr = `${durationMins}m ${durationSecs}s`;

      tr.innerHTML = `
        <td style="padding: 8px;">${date}</td>
        <td style="padding: 8px;">${durationStr}</td>
        <td style="padding: 8px;">${streak.score || 0}</td>
      `;
      streaksTableBody.appendChild(tr);
    });
  }

  numpadBtns.forEach(btn => {
    btn.addEventListener('click', (e) => handlePasscodeEntry(e.target.textContent));
  });

  buttons.parental.addEventListener('click', () => {
    passcodeMode = 'login';
    enteredPasscode = '';
    document.getElementById('passcodeTitle').textContent = "Enter Passcode";
    updatePasscodeDisplay();
    showScreen('passcode');
  });

  buttons.backFromPasscode.addEventListener('click', () => showScreen('home'));
  buttons.backFromParental.addEventListener('click', () => showScreen('home'));

  buttons.changePasscode.addEventListener('click', () => {
    passcodeMode = 'change_old';
    enteredPasscode = '';
    document.getElementById('passcodeTitle').textContent = "Enter Current Passcode";
    updatePasscodeDisplay();
    showScreen('passcode');
  });

  // Event Listeners
  buttons.back.addEventListener('click', () => showScreen('home'));
  buttons.home.addEventListener('click', () => showScreen('home'));
  buttons.closeFact.addEventListener('click', () => showScreen('home'));
  buttons.playAgain.addEventListener('click', () => startGame(currentLevelId));
  buttons.nextLevel.addEventListener('click', () => startGame(currentLevelId + 1));
  buttons.nextPuzzle.addEventListener('click', () => {
    currentQuestionIndex++;
    startPuzzle();
    showScreen('game');
  });
  nextClueBtn.addEventListener('click', showNextClue);

  // Streak tracking
  function recordActivity() {
    const now = Date.now();
    let streaks = JSON.parse(localStorage.getItem('knowme_streaks') || '[]');

    if (streaks.length === 0) {
      streaks.push({ startTime: now, lastActivityTime: now, score: 0 });
    } else {
      let currentStreak = streaks[streaks.length - 1];
      if (now - currentStreak.lastActivityTime > 5 * 60 * 1000) {
        // More than 5 minutes since last activity, start a new streak
        streaks.push({ startTime: now, lastActivityTime: now, score: 0 });
      } else {
        currentStreak.lastActivityTime = now;
      }
    }

    localStorage.setItem('knowme_streaks', JSON.stringify(streaks));
  }

  function incrementScore() {
    let streaks = JSON.parse(localStorage.getItem('knowme_streaks') || '[]');
    const now = Date.now();
    if (streaks.length > 0) {
      let currentStreak = streaks[streaks.length - 1];
      if (now - currentStreak.lastActivityTime > 5 * 60 * 1000) {
        streaks.push({ startTime: now, lastActivityTime: now, score: 1 });
      } else {
        currentStreak.score = (currentStreak.score || 0) + 1;
        currentStreak.lastActivityTime = now;
      }
    } else {
      streaks.push({ startTime: now, lastActivityTime: now, score: 1 });
    }
    localStorage.setItem('knowme_streaks', JSON.stringify(streaks));
  }

  // Record activity on any click
  document.addEventListener('click', recordActivity);

  // Start App
  checkFactAndShowHome();
});