
var cards = [ 
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];
var cardsInPlay = []
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
};
function flipCard(cardId){
	console.log("User flipped" + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit)
	cards[cardId].rank.push(cardsInPlay);



if (length === length)
	if (cardOne === cardTwo)
		alert("You found a match!")
	
		else (cardOne !== cardTwo)
			alert("Sorry, try again")
		

};

function createBoard()
	for ()
		var cardId[0] = document.createElement('img');
		var cardId[1] = document.createElement('img');
		var cardId[2] = document.createElement('img');
		var cardId[3] = document.createElement('img');
		cardElement.setAttribute(src "images/back.png");
		cardElement.setAttribute(data-id = i)
		cardElement.addEventListener(click) = call.flipCard;
		call.createBoard(0);
