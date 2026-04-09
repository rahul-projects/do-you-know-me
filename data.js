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
          { text: "Orange", emoji: "🍊" },
          { text: "Carrot", emoji: "🥕" },
          { text: "Grapes", emoji: "🍇" }
        ]
      },
      {
        id: "q1_2",
        type: "guess",
        clues: [
          "I am yellow and sweet inside.",
          "I wear a spiky crown.",
          "I have a prickly outside."
        ],
        answer: "Pineapple",
        options: [
          { text: "Orange", emoji: "🍊" },
          { text: "Pineapple", emoji: "🍍" },
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
          { text: "Cucumber", emoji: "🥒" },
          { text: "Carrot", emoji: "🥕" },
          { text: "Tomato", emoji: "🍅" }
        ]
      },
      {
        id: "q1_4",
        type: "guess",
        clues: [
          "I am cold and refreshing.",
          "I am red on the inside, green outside.",
          "I have black seeds."
        ],
        answer: "Watermelon",
        options: [
          { text: "Lemon", emoji: "🍋" },
          { text: "Orange", emoji: "🍊" },
          { text: "Watermelon", emoji: "🍉" },
          { text: "Pear", emoji: "🍐" }
        ]
      },
      {
        id: "q1_5",
        type: "guess",
        clues: [
          "I look like a tiny green tree.",
          "I am a healthy vegetable.",
          "I am fun to eat with cheese!"
        ],
        answer: "Broccoli",
        options: [
          { text: "Carrot", emoji: "🥕" },
          { text: "Broccoli", emoji: "🥦" },
          { text: "Cucumber", emoji: "🥒" },
          { text: "Lettuce", emoji: "🥬" }
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
          { text: "Wolf", emoji: "🐺" },
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
          { text: "Dog", emoji: "🐶" },
          { text: "Cat", emoji: "🐱" },
          { text: "Mouse", emoji: "🐭" },
          { text: "Rabbit", emoji: "🐰" }
        ]
      },
      {
        id: "q2_3",
        type: "guess",
        clues: [
          "I live in Australia.",
          "I hop around on my big back legs.",
          "I carry my baby in a pouch!"
        ],
        answer: "Kangaroo",
        options: [
          { text: "Koala", emoji: "🐨" },
          { text: "Horse", emoji: "🐴" },
          { text: "Kangaroo", emoji: "🦘" },
          { text: "Tiger", emoji: "🐅" }
        ]
      },
      {
        id: "q2_4",
        type: "guess",
        clues: [
          "I have a very long trunk.",
          "I have big floppy ears.",
          "I am the largest land animal."
        ],
        answer: "Elephant",
        options: [
          { text: "Hippo", emoji: "🦛" },
          { text: "Elephant", emoji: "🐘" },
          { text: "Giraffe", emoji: "🦒" },
          { text: "Horse", emoji: "🐴" }
        ]
      },
      {
        id: "q2_5",
        type: "guess",
        clues: [
          "I am a bird but I cannot fly.",
          "I love to swim in very cold water.",
          "I waddle when I walk!"
        ],
        answer: "Penguin",
        options: [
          { text: "Duck", emoji: "🦆" },
          { text: "Bear", emoji: "🐻" },
          { text: "Seal", emoji: "🦭" },
          { text: "Penguin", emoji: "🐧" }
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
      },
      {
        id: "q3_4",
        type: "guess",
        clues: [
          "I float on the water.",
          "I have sails to catch the wind.",
          "You ride me in the ocean."
        ],
        answer: "Boat",
        options: [
          { text: "Car", emoji: "🚗" },
          { text: "Canoe", emoji: "🛶" },
          { text: "Boat", emoji: "⛵" },
          { text: "Aeroplane", emoji: "✈️" }
        ]
      },
      {
        id: "q3_5",
        type: "guess",
        clues: [
          "I have two wheels.",
          "You have to pedal to make me go.",
          "Don't forget to wear a helmet!"
        ],
        answer: "Bicycle",
        options: [
          { text: "Car", emoji: "🚗" },
          { text: "Motorcycle", emoji: "🏍️" },
          { text: "Train", emoji: "🚂" },
          { text: "Bicycle", emoji: "🚲" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Level 4: In the House",
    questions: [
      {
        id: "q4_1",
        type: "guess",
        clues: [
          "You sleep in me at night.",
          "I have soft pillows.",
          "I have a warm blanket."
        ],
        answer: "Bed",
        options: [
          { text: "Couch", emoji: "🛋️" },
          { text: "Bed", emoji: "🛏️" },
          { text: "Chair", emoji: "🪑" },
          { text: "Table", emoji: "🪟" }
        ]
      },
      {
        id: "q4_2",
        type: "guess",
        clues: [
          "You sit on me to eat dinner.",
          "I have four legs.",
          "I go with a table."
        ],
        answer: "Chair",
        options: [
          { text: "Bed", emoji: "🛏️" },
          { text: "Chair", emoji: "🪑" },
          { text: "Door", emoji: "🚪" },
          { text: "Lamp", emoji: "🛋️" }
        ]
      },
      {
        id: "q4_3",
        type: "guess",
        clues: [
          "I keep your food cold.",
          "I have ice inside.",
          "I live in the kitchen."
        ],
        answer: "Fridge",
        options: [
          { text: "Oven", emoji: "🍳" },
          { text: "Fridge", emoji: "🧊" },
          { text: "Sink", emoji: "🚰" },
          { text: "Trash Can", emoji: "🗑️" }
        ]
      },
      {
        id: "q4_4",
        type: "guess",
        clues: [
          "You watch cartoons on me.",
          "I have a screen.",
          "You use a remote to change my channels."
        ],
        answer: "Television",
        options: [
          { text: "Radio", emoji: "📻" },
          { text: "Computer", emoji: "💻" },
          { text: "Television", emoji: "📺" },
          { text: "Phone", emoji: "📱" }
        ]
      },
      {
        id: "q4_5",
        type: "guess",
        clues: [
          "I tell you what time it is.",
          "I have numbers and hands.",
          "I go tick-tock."
        ],
        answer: "Clock",
        options: [
          { text: "Watch", emoji: "⌚" },
          { text: "Clock", emoji: "⏰" },
          { text: "Calendar", emoji: "📅" },
          { text: "Book", emoji: "📖" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Level 5: Under the Sea",
    questions: [
      {
        id: "q5_1",
        type: "guess",
        clues: [
          "I live in the ocean and love to jump.",
          "I am very smart and playful.",
          "I am not a fish, I breathe air."
        ],
        answer: "Dolphin",
        options: [
          { text: "Fish", emoji: "🐟" },
          { text: "Shark", emoji: "🦈" },
          { text: "Dolphin", emoji: "🐬" },
          { text: "Whale", emoji: "🐋" }
        ]
      },
      {
        id: "q5_2",
        type: "guess",
        clues: [
          "I live deep in the sea.",
          "I have squishy arms with suction cups.",
          "I have eight legs!"
        ],
        answer: "Octopus",
        options: [
          { text: "Crab", emoji: "🦀" },
          { text: "Squid", emoji: "🦑" },
          { text: "Octopus", emoji: "🐙" },
          { text: "Starfish", emoji: "🌟" }
        ]
      },
      {
        id: "q5_3",
        type: "guess",
        clues: [
          "I have a hard shell.",
          "I like to walk sideways on the beach.",
          "I have two pinching claws."
        ],
        answer: "Crab",
        options: [
          { text: "Lobster", emoji: "🦞" },
          { text: "Turtle", emoji: "🐢" },
          { text: "Octopus", emoji: "🐙" },
          { text: "Crab", emoji: "🦀" }
        ]
      },
      {
        id: "q5_4",
        type: "guess",
        clues: [
          "I am a very big fish.",
          "I have sharp teeth.",
          "I have a fin on my back that sticks out of the water."
        ],
        answer: "Shark",
        options: [
          { text: "Dolphin", emoji: "🐬" },
          { text: "Shark", emoji: "🦈" },
          { text: "Whale", emoji: "🐋" },
          { text: "Fish", emoji: "🐟" }
        ]
      },
      {
        id: "q5_5",
        type: "guess",
        clues: [
          "I can swim in the ocean or walk on land.",
          "I move very slowly.",
          "I carry my house on my back."
        ],
        answer: "Turtle",
        options: [
          { text: "Crab", emoji: "🦀" },
          { text: "Snail", emoji: "🐌" },
          { text: "Turtle", emoji: "🐢" },
          { text: "Frog", emoji: "🐸" }
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
          "You can go down the slide here.",
          "You can swing high in the sky.",
          "Kids love to play here."
        ],
        answer: "Park",
        options: [
          { text: "School", emoji: "🏫" },
          { text: "Beach", emoji: "🏖️" },
          { text: "Park", emoji: "🏞️" },
          { text: "Store", emoji: "🏪" }
        ]
      },
      {
        id: "q6_2",
        type: "guess",
        clues: [
          "There is a lot of sand here.",
          "You can build sandcastles.",
          "It is right next to the ocean."
        ],
        answer: "Beach",
        options: [
          { text: "Desert", emoji: "🏜️" },
          { text: "Mountain", emoji: "⛰️" },
          { text: "Park", emoji: "🏞️" },
          { text: "Beach", emoji: "🏖️" }
        ]
      },
      {
        id: "q6_3",
        type: "guess",
        clues: [
          "There are many animals to see.",
          "The animals live in big enclosures.",
          "You might see lions and elephants."
        ],
        answer: "Zoo",
        options: [
          { text: "Farm", emoji: "🚜" },
          { text: "Zoo", emoji: "🦁" },
          { text: "Circus", emoji: "🎪" },
          { text: "Library", emoji: "📚" }
        ]
      },
      {
        id: "q6_4",
        type: "guess",
        clues: [
          "You go here when you are sick.",
          "There are doctors and nurses here.",
          "Sometimes you ride here in an ambulance."
        ],
        answer: "Hospital",
        options: [
          { text: "School", emoji: "🏫" },
          { text: "Hospital", emoji: "🏥" },
          { text: "Store", emoji: "🏪" },
          { text: "Park", emoji: "🏞️" }
        ]
      },
      {
        id: "q6_5",
        type: "guess",
        clues: [
          "It is full of books.",
          "You must be very quiet here.",
          "You can borrow things to read."
        ],
        answer: "Library",
        options: [
          { text: "School", emoji: "🏫" },
          { text: "Library", emoji: "📚" },
          { text: "Museum", emoji: "🖼️" },
          { text: "Cinema", emoji: "🍿" }
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
      },
      {
        id: "q7_4",
        type: "guess",
        clues: [
          "I am the color of the grass.",
          "I am the color of a frog.",
          "Yellow and blue make me."
        ],
        answer: "Green",
        options: [
          { text: "Red", emoji: "🔴" },
          { text: "Blue", emoji: "🔵" },
          { text: "Yellow", emoji: "🟡" },
          { text: "Green", emoji: "🟢" }
        ]
      },
      {
        id: "q7_5",
        type: "guess",
        clues: [
          "I have three sides.",
          "I have three pointy corners.",
          "I look like a slice of pizza."
        ],
        answer: "Triangle",
        options: [
          { text: "Circle", emoji: "🔵" },
          { text: "Square", emoji: "🟥" },
          { text: "Triangle", emoji: "🔺" },
          { text: "Star", emoji: "⭐" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Level 8: Our Body",
    questions: [
      {
        id: "q8_1",
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
        id: "q8_2",
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
        id: "q8_3",
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
      },
      {
        id: "q8_4",
        type: "guess",
        clues: [
          "You use me to listen to music.",
          "I am on the side of your head.",
          "You have two of me."
        ],
        answer: "Ears",
        options: [
          { text: "Eyes", emoji: "👁️" },
          { text: "Nose", emoji: "👃" },
          { text: "Mouth", emoji: "👄" },
          { text: "Ears", emoji: "👂" }
        ]
      },
      {
        id: "q8_5",
        type: "guess",
        clues: [
          "You use me to hold things.",
          "I have five fingers.",
          "You use me to wave hello."
        ],
        answer: "Hand",
        options: [
          { text: "Foot", emoji: "🦶" },
          { text: "Arm", emoji: "💪" },
          { text: "Hand", emoji: "🖐️" },
          { text: "Leg", emoji: "🦵" }
        ]
      }
    ]
  },
  {
    id: 9,
    title: "Level 9: Community Helpers",
    questions: [
      {
        id: "q9_1",
        type: "guess",
        clues: [
          "I work in a hospital or clinic.",
          "I use a stethoscope to listen to your heart.",
          "I help you feel better when you are sick."
        ],
        answer: "Doctor",
        options: [
          { text: "Teacher", emoji: "🧑‍🏫" },
          { text: "Firefighter", emoji: "🚒" },
          { text: "Doctor", emoji: "🩺" },
          { text: "Police Officer", emoji: "🚓" }
        ]
      },
      {
        id: "q9_2",
        type: "guess",
        clues: [
          "I wear a big helmet and heavy boots.",
          "I drive a big red truck with a loud siren.",
          "I use a hose to put out fires."
        ],
        answer: "Firefighter",
        options: [
          { text: "Firefighter", emoji: "🚒" },
          { text: "Chef", emoji: "🧑‍🍳" },
          { text: "Pilot", emoji: "✈️" },
          { text: "Farmer", emoji: "🧑‍🌾" }
        ]
      },
      {
        id: "q9_3",
        type: "guess",
        clues: [
          "I work in a school classroom.",
          "I help you learn how to read and write.",
          "I have a blackboard or a smartboard."
        ],
        answer: "Teacher",
        options: [
          { text: "Doctor", emoji: "🩺" },
          { text: "Teacher", emoji: "🧑‍🏫" },
          { text: "Police Officer", emoji: "🚓" },
          { text: "Astronaut", emoji: "🧑‍🚀" }
        ]
      },
      {
        id: "q9_4",
        type: "guess",
        clues: [
          "I wear a uniform and a badge.",
          "I drive a car with flashing blue and red lights.",
          "I help keep the city safe."
        ],
        answer: "Police Officer",
        options: [
          { text: "Builder", emoji: "👷" },
          { text: "Firefighter", emoji: "🚒" },
          { text: "Police Officer", emoji: "🚓" },
          { text: "Mail Carrier", emoji: "✉️" }
        ]
      },
      {
        id: "q9_5",
        type: "guess",
        clues: [
          "I work in a kitchen or a restaurant.",
          "I wear a tall white hat.",
          "I cook yummy food for people to eat!"
        ],
        answer: "Chef",
        options: [
          { text: "Doctor", emoji: "🩺" },
          { text: "Chef", emoji: "🧑‍🍳" },
          { text: "Teacher", emoji: "🧑‍🏫" },
          { text: "Pilot", emoji: "✈️" }
        ]
      }
    ]
  },
  {
    id: 10,
    title: "Level 10: Famous India",
    questions: [
      {
        id: "q10_1",
        type: "guess",
        clues: [
          "I am a very famous building in India.",
          "I am made of beautiful white marble.",
          "An emperor built me for his wife out of love."
        ],
        answer: "Taj Mahal",
        options: [
          { text: "Castle", emoji: "🏰" },
          { text: "Taj Mahal", emoji: "🕌" },
          { text: "Pyramid", emoji: "🏜️" },
          { text: "Statue", emoji: "🗽" }
        ]
      },
      {
        id: "q10_2",
        type: "guess",
        clues: [
          "I am known as the 'Father of the Nation'.",
          "I always wore round glasses and carried a walking stick.",
          "I helped India get freedom using peace."
        ],
        answer: "Mahatma Gandhi",
        options: [
          { text: "Scientist", emoji: "🧑‍🔬" },
          { text: "Mahatma Gandhi", emoji: "👓" },
          { text: "King", emoji: "👑" },
          { text: "Teacher", emoji: "🧑‍🏫" }
        ]
      },
      {
        id: "q10_3",
        type: "guess",
        clues: [
          "People love to call me the 'Missile Man'.",
          "I loved teaching children and dreaming big.",
          "I was the 11th President of India!"
        ],
        answer: "A.P.J. Abdul Kalam",
        options: [
          { text: "Singer", emoji: "🎤" },
          { text: "Astronaut", emoji: "🧑‍🚀" },
          { text: "A.P.J. Abdul Kalam", emoji: "🚀" },
          { text: "Doctor", emoji: "🧑‍⚕️" }
        ]
      },
      {
        id: "q10_4",
        type: "guess",
        clues: [
          "I am known as the 'God of Cricket' in India.",
          "I hit many, many centuries!",
          "I wore jersey number 10 for Team India."
        ],
        answer: "Sachin Tendulkar",
        options: [
          { text: "Soccer Player", emoji: "⚽" },
          { text: "Tennis Player", emoji: "🎾" },
          { text: "Sachin Tendulkar", emoji: "🏏" },
          { text: "Swimmer", emoji: "🏊" }
        ]
      },
      {
        id: "q10_5",
        type: "guess",
        clues: [
          "I am a very big, historical fort located in Delhi.",
          "As my name says, I am made of red stone!",
          "The Prime Minister hoists the flag here on Independence Day."
        ],
        answer: "Red Fort",
        options: [
          { text: "Red Fort", emoji: "🏰" },
          { text: "Taj Mahal", emoji: "🕌" },
          { text: "Office", emoji: "🏢" },
          { text: "House", emoji: "🏠" }
        ]
      }
    ]
  },
  {
    id: 11,
    title: "Level 11: India Trivia",
    questions: [
      {
        id: "q11_1",
        type: "guess",
        clues: [
          "I am a very busy city.",
          "The Prime Minister of India lives here.",
          "I am the capital of India!"
        ],
        answer: "New Delhi",
        options: [
          { text: "Mumbai", emoji: "🏙️" },
          { text: "New Delhi", emoji: "🏛️" },
          { text: "Chennai", emoji: "🏖️" },
          { text: "Kolkata", emoji: "🌉" }
        ]
      },
      {
        id: "q11_2",
        type: "guess",
        clues: [
          "I am a big, wild cat.",
          "I have orange fur with black stripes.",
          "I am the national animal of India."
        ],
        answer: "Tiger",
        options: [
          { text: "Lion", emoji: "🦁" },
          { text: "Tiger", emoji: "🐅" },
          { text: "Elephant", emoji: "🐘" },
          { text: "Bear", emoji: "🐻" }
        ]
      },
      {
        id: "q11_3",
        type: "guess",
        clues: [
          "I am a beautiful bird.",
          "I dance when it rains.",
          "I have colorful blue and green feathers and I am India's national bird."
        ],
        answer: "Peacock",
        options: [
          { text: "Parrot", emoji: "🦜" },
          { text: "Pigeon", emoji: "🐦" },
          { text: "Eagle", emoji: "🦅" },
          { text: "Peacock", emoji: "🦚" }
        ]
      },
      {
        id: "q11_4",
        type: "guess",
        clues: [
          "I am a beautiful pink or white flower.",
          "I grow floating on top of the water.",
          "I am the national flower of India."
        ],
        answer: "Lotus",
        options: [
          { text: "Rose", emoji: "🌹" },
          { text: "Sunflower", emoji: "🌻" },
          { text: "Lotus", emoji: "🪷" },
          { text: "Tulip", emoji: "🌷" }
        ]
      },
      {
        id: "q11_5",
        type: "guess",
        clues: [
          "I am very sweet and juicy.",
          "I am yellow or orange inside.",
          "I am the national fruit of India and everyone loves me in summer!"
        ],
        answer: "Mango",
        options: [
          { text: "Apple", emoji: "🍎" },
          { text: "Mango", emoji: "🥭" },
          { text: "Banana", emoji: "🍌" },
          { text: "Grapes", emoji: "🍇" }
        ]
      }
    ]
  },
  {
    id: 12,
    title: "Level 12: Seasons & Nature",
    questions: [
      {
        id: "q12_1",
        type: "guess",
        clues: [
          "I fall from dark grey clouds.",
          "I make the plants grow and turn green.",
          "You need an umbrella to stay dry from me."
        ],
        answer: "Rain",
        options: [
          { text: "Snow", emoji: "❄️" },
          { text: "Sun", emoji: "☀️" },
          { text: "Rain", emoji: "🌧️" },
          { text: "Wind", emoji: "💨" }
        ]
      },
      {
        id: "q12_2",
        type: "guess",
        clues: [
          "I appear in the sky after it rains.",
          "I am very colorful and beautiful.",
          "I have seven colors!"
        ],
        answer: "Rainbow",
        options: [
          { text: "Cloud", emoji: "☁️" },
          { text: "Rainbow", emoji: "🌈" },
          { text: "Moon", emoji: "🌙" },
          { text: "Star", emoji: "⭐" }
        ]
      },
      {
        id: "q12_3",
        type: "guess",
        clues: [
          "I am a season that is very cold.",
          "You have to wear heavy coats and sweaters.",
          "Sometimes snow falls during this time."
        ],
        answer: "Winter",
        options: [
          { text: "Summer", emoji: "☀️" },
          { text: "Winter", emoji: "❄️" },
          { text: "Rain", emoji: "🌧️" },
          { text: "Spring", emoji: "🌸" }
        ]
      },
      {
        id: "q12_4",
        type: "guess",
        clues: [
          "I am the hottest season of the year.",
          "Kids have long school holidays during this time.",
          "You eat a lot of ice cream to stay cool!"
        ],
        answer: "Summer",
        options: [
          { text: "Winter", emoji: "❄️" },
          { text: "Summer", emoji: "☀️" },
          { text: "Rain", emoji: "🌧️" },
          { text: "Autumn", emoji: "🍂" }
        ]
      },
      {
        id: "q12_5",
        type: "guess",
        clues: [
          "I start as a tiny caterpillar.",
          "I have big, colorful wings.",
          "I love to fly from flower to flower."
        ],
        answer: "Butterfly",
        options: [
          { text: "Bee", emoji: "🐝" },
          { text: "Bird", emoji: "🐦" },
          { text: "Spider", emoji: "🕷️" },
          { text: "Butterfly", emoji: "🦋" }
        ]
      }
    ]
  }
];
