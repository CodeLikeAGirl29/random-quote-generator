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
		source: "Carol Burnett",
	},

	{
		quote:
			"Keep your face always toward the sunshine, and shadows will fall behind you.",
		source: "Walt Whitman",
		citation: "Leaves of Grass",
		year: 1855,
	},
	{
		quote: "Be curious, not judgmental.",
		source: "Walt Whitman",
		year: 1855,
	},
	{
		quote:
			"Success is not final, failure is not fatal: it is the courage to continue that counts.",
		source: "Winston Churchill",
	},
	{
		quote:
			"Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on.",
		source: "Lady Gaga",
	},
	{
		quote: "The mind is everything. What you think you become",
		source: "Buddha",
	},
	{
		quote:
			"You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
		source: "Dr. Seuss",
	},
];
console.log(quotes);

//getRandomQuote function

function getRandomQuote() {
	console.log(quotes);

	//randomNumber generator
	var randomNumberGenerator = Math.floor(Math.random() * quotes.length);

	// Storing randomNumber in Quote Array
	var randomQuote = quotes[randomNumberGenerator];

	// returning random quote
	console.log(randomQuote);
	return randomQuote;
}
getRandomQuote();

//printQuote function

function printQuote() {
	let quoteObject = getRandomQuote();
	let html = `
    <p class ="quote"> ${quoteObject["quote"]}</p>
    <p class ="source"> ${quoteObject["source"]}`;

	// adding citation and year
	if (quoteObject["citation"]) {
		html += `<span class="citation"> ${quoteObject["citation"]}</span>`;
	}
	if (quoteObject["year"]) {
		html += `<span class ="year"> ${quoteObject["year"]}</span>`;
	}
	if (quoteObject["tags"]) {
		html += `<span class="tags"> <br> Tags: ${quoteObject["tags"].join(
			", "
		)} </span>`;
	}
	html += "</p>";

	document.getElementById("quote-box").innerHTML = html;
}

printQuote();

document
	.getElementById("load-quote")
	.addEventListener("click", printQuote, false);
