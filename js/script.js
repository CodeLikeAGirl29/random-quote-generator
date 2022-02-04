/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: '“When you have a dream, you’ve got to grab it and never let go."',
    source: 'Carol Burnett'
  },

  {
    quote: ' “Keep your face always toward the sunshine, and shadows will fall behind you.”',
    source: 'Walt Whitman',
    citation: 'Leaves of Grass',
    year: 1855
  },
  {
    quote: '"Be curious, not judgmental."',
    source: 'Walt Whitman',
    year: 1855
  }
  {
    quote: '"Success is not final, failure is not fatal: it is the courage to continue that counts."',
    source: 'Winston Churchill'
  },
  {
    quote: '“Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.”',
    source: 'Lady Gaga'
  },
  {
    quote: '"The mind is everything. What you think you become."',
    source: 'Buddha'
  },
  {
    quote: '"You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams."',
    source: 'Dr. Seuss'
  }
];

let random = 0;
let previousNumber = 0;

// Print function
function print(message) {
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = message;
};


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  while (previousNumber === random) {
  random = Math.floor(Math.random() * quotes.length);
  };
  previousNumber = random;
  return random;
};

/***
 * `printQuote` function
***/

function printQuote() {
  var randomQuote = quotes[getRandomQuote()];
  message = '';
  message += '<p class="quote">' + randomQuote.quote + '</p>';
  message += '<p class="source">' + randomQuote.source;
  message += '</p>';
  console.log(message);
  print(message);
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);