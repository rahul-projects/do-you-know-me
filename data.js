const gameData = [
  {
    id: 1,
    title: "Level 1: Fruits & Veggies",
    questions: [
      {
        id: "q1_1",
        type: "guess",
        clues: [
          "I am red and round.",
          "I keep the doctor away.",
          "I grow on trees."
        ],
        answer: "Apple",
        options: [
          { text: "Apple", emoji: "🍎" },
          { text: "Banana", emoji: "🍌" },
          { text: "Carrot", emoji: "🥕" },
          { text: "Grapes", emoji: "🍇" }
        ]
      },
      {
        id: "q1_2",
        type: "guess",
        clues: [
          "I am yellow and curved.",
          "Monkeys love to eat me.",
          "You have to peel me."
        ],
        answer: "Banana",
        options: [
          { text: "Orange", emoji: "🍊" },
          { text: "Banana", emoji: "🍌" },
          { text: "Watermelon", emoji: "🍉" },
          { text: "Lemon", emoji: "🍋" }
        ]
      },
      {
        id: "q1_3",
        type: "guess",
        clues: [
          "I am orange and crunchy.",
          "Rabbits love to eat me.",
          "I grow under the ground."
        ],
        answer: "Carrot",
        options: [
          { text: "Potato", emoji: "🥔" },
          { text: "Strawberry", emoji: "🍓" },
          { text: "Carrot", emoji: "🥕" },
          { text: "Tomato", emoji: "🍅" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Level 2: Friendly Animals",
    questions: [
      {
        id: "q2_1",
        type: "guess",
        clues: [
          "I say 'Woof! Woof!'",
          "I love to play fetch.",
          "I am man's best friend."
        ],
        answer: "Dog",
        options: [
          { text: "Cat", emoji: "🐱" },
          { text: "Dog", emoji: "🐶" },
          { text: "Cow", emoji: "🐮" },
          { text: "Pig", emoji: "🐷" }
        ]
      },
      {
        id: "q2_2",
        type: "guess",
        clues: [
          "I say 'Meow!'",
          "I love to chase mice.",
          "I purr when I'm happy."
        ],
        answer: "Cat",
        options: [
          { text: "Mouse", emoji: "🐭" },
          { text: "Cat", emoji: "🐱" },
          { text: "Horse", emoji: "🐴" },
          { text: "Rabbit", emoji: "🐰" }
        ]
      },
      {
        id: "q2_3",
        type: "guess",
        clues: [
          "I have black and white stripes.",
          "I look like a horse.",
          "I live in Africa."
        ],
        answer: "Zebra",
        options: [
          { text: "Lion", emoji: "🦁" },
          { text: "Horse", emoji: "🐴" },
          { text: "Zebra", emoji: "🦓" },
          { text: "Tiger", emoji: "🐅" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Level 3: Things that Go!",
    questions: [
      {
        id: "q3_1",
        type: "guess",
        clues: [
          "I have four wheels.",
          "Your parents drive me.",
          "I go beep beep!"
        ],
        answer: "Car",
        options: [
          { text: "Bicycle", emoji: "🚲" },
          { text: "Car", emoji: "🚗" },
          { text: "Train", emoji: "🚂" },
          { text: "Boat", emoji: "⛵" }
        ]
      },
      {
        id: "q3_2",
        type: "guess",
        clues: [
          "I fly high in the sky.",
          "I have wings.",
          "People use me to travel far."
        ],
        answer: "Aeroplane",
        options: [
          { text: "Helicopter", emoji: "🚁" },
          { text: "Rocket", emoji: "🚀" },
          { text: "Aeroplane", emoji: "✈️" },
          { text: "Bird", emoji: "🐦" }
        ]
      },
      {
        id: "q3_3",
        type: "guess",
        clues: [
          "I run on tracks.",
          "I go choo-choo!",
          "I pull many cars behind me."
        ],
        answer: "Train",
        options: [
          { text: "Bus", emoji: "🚌" },
          { text: "Tractor", emoji: "🚜" },
          { text: "Train", emoji: "🚂" },
          { text: "Truck", emoji: "🚚" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Level 4: Numbers",
    questions: [
      {
        id: "q4_1",
        type: "guess",
        clues: [
          "I come after two.",
          "I have three points like a triangle.",
          "One, two, ..."
        ],
        answer: "Three",
        options: [
          { text: "One", emoji: "1️⃣" },
          { text: "Three", emoji: "3️⃣" },
          { text: "Five", emoji: "5️⃣" },
          { text: "Seven", emoji: "7️⃣" }
        ]
      },
      {
        id: "q4_2",
        type: "guess",
        clues: [
          "I am the number of fingers on one hand.",
          "I come after four.",
          "Half of ten."
        ],
        answer: "Five",
        options: [
          { text: "Four", emoji: "4️⃣" },
          { text: "Five", emoji: "5️⃣" },
          { text: "Ten", emoji: "🔟" },
          { text: "Two", emoji: "2️⃣" }
        ]
      },
      {
        id: "q4_3",
        type: "guess",
        clues: [
          "I look like a snowman.",
          "I am two circles on top of each other.",
          "I come before nine."
        ],
        answer: "Eight",
        options: [
          { text: "Six", emoji: "6️⃣" },
          { text: "Zero", emoji: "0️⃣" },
          { text: "Eight", emoji: "8️⃣" },
          { text: "Nine", emoji: "9️⃣" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Level 5: In the House",
    questions: [
      {
        id: "q5_1",
        type: "guess",
        clues: [
          "I keep your food cold.",
          "You open me to get milk.",
          "I am big and usually in the kitchen."
        ],
        answer: "Refrigerator",
        options: [
          { text: "Oven", emoji: "🍳" },
          { text: "Refrigerator", emoji: "🧊" },
          { text: "Washing Machine", emoji: "🧺" },
          { text: "Microwave", emoji: "🍲" }
        ]
      },
      {
        id: "q5_2",
        type: "guess",
        clues: [
          "You watch cartoons on me.",
          "I have a screen.",
          "I have a remote control."
        ],
        answer: "Television",
        options: [
          { text: "Computer", emoji: "💻" },
          { text: "Radio", emoji: "📻" },
          { text: "Television", emoji: "📺" },
          { text: "Book", emoji: "📖" }
        ]
      },
      {
        id: "q5_3",
        type: "guess",
        clues: [
          "You sleep on me.",
          "I am soft and have pillows.",
          "You use a blanket with me."
        ],
        answer: "Bed",
        options: [
          { text: "Sofa", emoji: "🛋️" },
          { text: "Chair", emoji: "🪑" },
          { text: "Table", emoji: "🪚" },
          { text: "Bed", emoji: "🛏️" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Level 6: Cool Places",
    questions: [
      {
        id: "q6_1",
        type: "guess",
        clues: [
          "You go here to learn.",
          "You see teachers and friends here.",
          "You bring a backpack."
        ],
        answer: "School",
        options: [
          { text: "Park", emoji: "🏞️" },
          { text: "School", emoji: "🏫" },
          { text: "Hospital", emoji: "🏥" },
          { text: "Store", emoji: "🏪" }
        ]
      },
      {
        id: "q6_2",
        type: "guess",
        clues: [
          "There is lots of sand.",
          "You can swim in the ocean.",
          "You might find seashells."
        ],
        answer: "Beach",
        options: [
          { text: "Mountain", emoji: "⛰️" },
          { text: "Forest", emoji: "🌲" },
          { text: "Beach", emoji: "🏖️" },
          { text: "City", emoji: "🏙️" }
        ]
      },
      {
        id: "q6_3",
        type: "guess",
        clues: [
          "You go here to see animals.",
          "Animals live in enclosures.",
          "You might see lions and elephants."
        ],
        answer: "Zoo",
        options: [
          { text: "Farm", emoji: "🚜" },
          { text: "Zoo", emoji: "🦁" },
          { text: "Circus", emoji: "🎪" },
          { text: "Library", emoji: "📚" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Level 7: Colors & Shapes",
    questions: [
      {
        id: "q7_1",
        type: "guess",
        clues: [
          "I am the color of the sun.",
          "I am the color of a banana.",
          "I am bright and happy."
        ],
        answer: "Yellow",
        options: [
          { text: "Red", emoji: "🔴" },
          { text: "Blue", emoji: "🔵" },
          { text: "Green", emoji: "🟢" },
          { text: "Yellow", emoji: "🟡" }
        ]
      },
      {
        id: "q7_2",
        type: "guess",
        clues: [
          "I have four sides all the same length.",
          "I look like a box.",
          "I am not a circle."
        ],
        answer: "Square",
        options: [
          { text: "Triangle", emoji: "🔺" },
          { text: "Circle", emoji: "🔵" },
          { text: "Square", emoji: "🟥" },
          { text: "Star", emoji: "⭐" }
        ]
      },
      {
        id: "q7_3",
        type: "guess",
        clues: [
          "I have no corners.",
          "I look like a ball.",
          "I am round."
        ],
        answer: "Circle",
        options: [
          { text: "Square", emoji: "🟥" },
          { text: "Triangle", emoji: "🔺" },
          { text: "Circle", emoji: "🔵" },
          { text: "Diamond", emoji: "♦️" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Level 8: Yummy Treats",
    questions: [
      {
        id: "q8_1",
        type: "guess",
        clues: [
          "I am cold and sweet.",
          "I melt in the sun.",
          "You lick me from a cone."
        ],
        answer: "Ice Cream",
        options: [
          { text: "Cake", emoji: "🎂" },
          { text: "Cookie", emoji: "🍪" },
          { text: "Ice Cream", emoji: "🍦" },
          { text: "Candy", emoji: "🍬" }
        ]
      },
      {
        id: "q8_2",
        type: "guess",
        clues: [
          "I am round and have cheese on top.",
          "I have tomato sauce.",
          "You cut me into slices."
        ],
        answer: "Pizza",
        options: [
          { text: "Burger", emoji: "🍔" },
          { text: "Hot Dog", emoji: "🌭" },
          { text: "Taco", emoji: "🌮" },
          { text: "Pizza", emoji: "🍕" }
        ]
      },
      {
        id: "q8_3",
        type: "guess",
        clues: [
          "You eat me on your birthday.",
          "I usually have candles on top.",
          "You make a wish before blowing them out."
        ],
        answer: "Birthday Cake",
        options: [
          { text: "Pancakes", emoji: "🥞" },
          { text: "Donut", emoji: "🍩" },
          { text: "Birthday Cake", emoji: "🎂" },
          { text: "Pie", emoji: "🥧" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Level 9: Our Body",
    questions: [
      {
        id: "q9_1",
        type: "guess",
        clues: [
          "You have two of these to see.",
          "You close them when you sleep.",
          "They can be blue, brown, or green."
        ],
        answer: "Eyes",
        options: [
          { text: "Ears", emoji: "👂" },
          { text: "Nose", emoji: "👃" },
          { text: "Mouth", emoji: "👄" },
          { text: "Eyes", emoji: "👁️" }
        ]
      },
      {
        id: "q9_2",
        type: "guess",
        clues: [
          "You use me to smell flowers.",
          "I am in the middle of your face.",
          "You sneeze through me."
        ],
        answer: "Nose",
        options: [
          { text: "Ear", emoji: "👂" },
          { text: "Nose", emoji: "👃" },
          { text: "Hand", emoji: "🖐️" },
          { text: "Foot", emoji: "🦶" }
        ]
      },
      {
        id: "q9_3",
        type: "guess",
        clues: [
          "You use me to walk and run.",
          "You put shoes on me.",
          "I have toes."
        ],
        answer: "Foot",
        options: [
          { text: "Hand", emoji: "🖐️" },
          { text: "Arm", emoji: "💪" },
          { text: "Leg", emoji: "🦵" },
          { text: "Foot", emoji: "🦶" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Level 10: Mixed Challenge",
    questions: [
      {
        id: "q10_1",
        type: "guess",
        clues: [
          "I shine bright in the night sky.",
          "I am big and round.",
          "Astronauts have walked on me."
        ],
        answer: "Moon",
        options: [
          { text: "Sun", emoji: "☀️" },
          { text: "Earth", emoji: "🌍" },
          { text: "Cloud", emoji: "☁️" },
          { text: "Moon", emoji: "🌕" }
        ]
      },
      {
        id: "q10_2",
        type: "guess",
        clues: [
          "I am very tall.",
          "I have leaves.",
          "Birds build nests in me."
        ],
        answer: "Tree",
        options: [
          { text: "Flower", emoji: "🌻" },
          { text: "Tree", emoji: "🌳" },
          { text: "Grass", emoji: "🌿" },
          { text: "Bush", emoji: "🪴" }
        ]
      },
      {
        id: "q10_3",
        type: "guess",
        clues: [
          "You open me when it rains.",
          "I keep you dry.",
          "I look like a little roof you carry."
        ],
        answer: "Umbrella",
        options: [
          { text: "Hat", emoji: "🧢" },
          { text: "Coat", emoji: "🧥" },
          { text: "Umbrella", emoji: "☂️" },
          { text: "Boots", emoji: "👢" }
        ]
      }
    ]
  }
];