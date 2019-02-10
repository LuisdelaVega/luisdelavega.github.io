// Values for the bingo squares
const values = [
  'Aris forgets what day it is',
  'Aris mentions his car',
  'Says a donation message isn\'t funny, while trying and failing not to laugh',
  'Other Twitch/FGC personality in chat',
  'Aris addresses someone in chat by the color of their name',
  'Aris mentions Fortnite',
  'Aris asks n0pants for a favour',
  'Aris speaks with a British accents or ends a word with "-er" instead of "-a"',
  'Aris tries and fails to remember something',
  'Aris references Harada',
  'Aris calls into question somebody\'s upbringing',
  '"Ninja"',
  'Aris mentions pizza',
  'Random Sienfeld Reference',
  'Stoner submits repetitive donation message during break music',
  'Aris references speedrinnung',
  'Aris startled and yells',
  'Aris references "Rule #1"',
  'Aris parries a donation message',
  'Random Simpsons Reference',
  'Somebody asks a question, Aris orders mods to shoot',
  'Successful atpRtsd 1,2,3 & 4 combo in chat',
  'Something in-game makes Aris burst out laughing',
  'Reference to Char',
  '"My mustache is fucked up"',
  '"This game is sick"',
  '"Is it break time?"',
  'Aris mispronounces a game name to make fun of it',
  'Aris tries and fails to speak spanish',
  '"Ok, be cool"'
]

function getNewNum() {
  return Math.floor(Math.random() * values.length)
}

let usedVals = {}
function setSquare(thisSquare) {
  let currSquare = `square${thisSquare}`
  let newVal

  do {
    newVal = values[getNewNum()]
  }
  while (usedVals[newVal])

  usedVals[newVal] = true
  document.getElementById(currSquare).innerHTML = newVal
}

// Starting loop through each square card
function newCard() {
  for(let i = 0; i < 24; i++) {
    setSquare(i)
  }
}

// onClick action. Toggles the square's selected class
function selectSquare() {
  this.classList.toggle('selected')
}

function deselectSquare(square) {
  square.classList.remove('selected')
}

// Get all squares and add the onClick functionality
const squares = document.querySelectorAll('.square')
squares.forEach(square => square.addEventListener('click', selectSquare))

function anotherCard() {
  // Reset the squares, values and create a new card
  squares.forEach(square => deselectSquare(square))
  usedVals = {}
  newCard()
}