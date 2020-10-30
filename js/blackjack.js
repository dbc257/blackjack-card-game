//Deck object with all 52 cards inside of it.
var deck = [
  { name: 'twoSpades', value: 2, suit: 'spades' },
  { name: 'threeSpades', value: 3, suit: 'spades' },
  { name: 'fourSpades', value: 4, suit: 'spades' },
  { name: 'fiveSpades', value: 5, suit: 'spades' },
  { name: 'sixSpades', value: 6, suit: 'spades' },
  { name: 'sevenSpades', value: 7, suit: 'spades' },
  { name: 'eightSpades', value: 8, suit: 'spades' },
  { name: 'nineSpades', value: 9, suit: 'spades' },
  { name: 'tenSpades', value: 10, suit: 'spades' },
  { name: 'jackSpades', value: 10, suit: 'spades' },
  { name: 'queenSpades', value: 10, suit: 'spades' },
  { name: 'kingSpades', value: 10, suit: 'spades' },
  { name: 'aceSpades', value: 11, suit: 'spades' },
  { name: 'twoClubs', value: 2, suit: 'clubs' },
  { name: 'threeClubs', value: 3, suit: 'clubs' },
  { name: 'fourClubs', value: 4, suit: 'clubs' },
  { name: 'fiveClubs', value: 5, suit: 'clubs' },
  { name: 'sixClubs', value: 6, suit: 'clubs' },
  { name: 'sevenClubs', value: 7, suit: 'clubs' },
  { name: 'eightClubs', value: 8, suit: 'clubs' },
  { name: 'nineClubs', value: 9, suit: 'clubs' },
  { name: 'tenClubs', value: 10, suit: 'clubs' },
  { name: 'jackClubs', value: 10, suit: 'clubs' },
  { name: 'queenClubs', value: 10, suit: 'clubs' },
  { name: 'kingClubs', value: 10, suit: 'clubs' },
  { name: 'aceClubs', value: 11, suit: 'clubs' },
  { name: 'twoDiamonds', value: 2, suit: 'diamonds' },
  { name: 'threeDiamonds', value: 3, suit: 'diamonds' },
  { name: 'fourDiamonds', value: 4, suit: 'diamonds' },
  { name: 'fiveDiamonds', value: 5, suit: 'diamonds' },
  { name: 'sixDiamonds', value: 6, suit: 'diamonds' },
  { name: 'sevenDiamonds', value: 7, suit: 'diamonds' },
  { name: 'eightDiamonds', value: 8, suit: 'diamonds' },
  { name: 'nineDiamonds', value: 9, suit: 'diamonds' },
  { name: 'tenDiamonds', value: 10, suit: 'diamonds' },
  { name: 'jackDiamonds', value: 10, suit: 'diamonds' },
  { name: 'queenDiamonds', value: 10, suit: 'diamonds' },
  { name: 'kingDiamonds', value: 10, suit: 'diamonds' },
  { name: 'aceDiamonds', value: 11, suit: 'diamonds' },
  { name: 'twoHearts', value: 2, suit: 'hearts' },
  { name: 'threeHearts', value: 3, suit: 'hearts' },
  { name: 'fourHearts', value: 4, suit: 'hearts' },
  { name: 'fiveHearts', value: 5, suit: 'hearts' },
  { name: 'sixHearts', value: 6, suit: 'hearts' },
  { name: 'sevenHearts', value: 7, suit: 'hearts' },
  { name: 'eightHearts', value: 8, suit: 'hearts' },
  { name: 'nineHearts', value: 9, suit: 'hearts' },
  { name: 'tenHearts', value: 10, suit: 'hearts' },
  { name: 'jackHearts', value: 10, suit: 'hearts' },
  { name: 'queenHearts', value: 10, suit: 'hearts' },
  { name: 'kingHearts', value: 10, suit: 'hearts' },
  { name: 'aceHearts', value: 11, suit: 'hearts' }
];

//Empty arrays declared for dealer and player hands to be dealt into
var dealerHand = [];
var playerHand = [];

//Function used to reset entire game
function resetGame() {
  deck = [
    { name: 'twoSpades', value: 2, suit: 'spades' },
    { name: 'threeSpades', value: 3, suit: 'spades' },
    { name: 'fourSpades', value: 4, suit: 'spades' },
    { name: 'fiveSpades', value: 5, suit: 'spades' },
    { name: 'sixSpades', value: 6, suit: 'spades' },
    { name: 'sevenSpades', value: 7, suit: 'spades' },
    { name: 'eightSpades', value: 8, suit: 'spades' },
    { name: 'nineSpades', value: 9, suit: 'spades' },
    { name: 'tenSpades', value: 10, suit: 'spades' },
    { name: 'jackSpades', value: 10, suit: 'spades' },
    { name: 'queenSpades', value: 10, suit: 'spades' },
    { name: 'kingSpades', value: 10, suit: 'spades' },
    { name: 'aceSpades', value: 11, suit: 'spades' },
    { name: 'twoClubs', value: 2, suit: 'clubs' },
    { name: 'threeClubs', value: 3, suit: 'clubs' },
    { name: 'fourClubs', value: 4, suit: 'clubs' },
    { name: 'fiveClubs', value: 5, suit: 'clubs' },
    { name: 'sixClubs', value: 6, suit: 'clubs' },
    { name: 'sevenClubs', value: 7, suit: 'clubs' },
    { name: 'eightClubs', value: 8, suit: 'clubs' },
    { name: 'nineClubs', value: 9, suit: 'clubs' },
    { name: 'tenClubs', value: 10, suit: 'clubs' },
    { name: 'jackClubs', value: 10, suit: 'clubs' },
    { name: 'queenClubs', value: 10, suit: 'clubs' },
    { name: 'kingClubs', value: 10, suit: 'clubs' },
    { name: 'aceClubs', value: 11, suit: 'clubs' },
    { name: 'twoDiamonds', value: 2, suit: 'diamonds' },
    { name: 'threeDiamonds', value: 3, suit: 'diamonds' },
    { name: 'fourDiamonds', value: 4, suit: 'diamonds' },
    { name: 'fiveDiamonds', value: 5, suit: 'diamonds' },
    { name: 'sixDiamonds', value: 6, suit: 'diamonds' },
    { name: 'sevenDiamonds', value: 7, suit: 'diamonds' },
    { name: 'eightDiamonds', value: 8, suit: 'diamonds' },
    { name: 'nineDiamonds', value: 9, suit: 'diamonds' },
    { name: 'tenDiamonds', value: 10, suit: 'diamonds' },
    { name: 'jackDiamonds', value: 10, suit: 'diamonds' },
    { name: 'queenDiamonds', value: 10, suit: 'diamonds' },
    { name: 'kingDiamonds', value: 10, suit: 'diamonds' },
    { name: 'aceDiamonds', value: 11, suit: 'diamonds' },
    { name: 'twoHearts', value: 2, suit: 'hearts' },
    { name: 'threeHearts', value: 3, suit: 'hearts' },
    { name: 'fourHearts', value: 4, suit: 'hearts' },
    { name: 'fiveHearts', value: 5, suit: 'hearts' },
    { name: 'sixHearts', value: 6, suit: 'hearts' },
    { name: 'sevenHearts', value: 7, suit: 'hearts' },
    { name: 'eightHearts', value: 8, suit: 'hearts' },
    { name: 'nineHearts', value: 9, suit: 'hearts' },
    { name: 'tenHearts', value: 10, suit: 'hearts' },
    { name: 'jackHearts', value: 10, suit: 'hearts' },
    { name: 'queenHearts', value: 10, suit: 'hearts' },
    { name: 'kingHearts', value: 10, suit: 'hearts' },
    { name: 'aceHearts', value: 11, suit: 'hearts' }
  ];
  dealerHand = [];
  playerHand = [];
  $('#playerPoints').text("");
  $('#dealerPoints').text("");
  $('#messages').text("");
  $('#playerHand').html("");
  $('#dealerHand').html("");
  $('#hitButton').prop('disabled', false);
  $('#standButton').prop('disabled', false);
}


//Function used to deal and remove random card from deck, while appending the image.
function dealCard(hand, element, holeCard) {
  var card = deck[Math.floor(Math.random() * deck.length)];
  deck.pop(card);
  hand.push(card);
  var url = '<img src="images-2/'+ card.name + '.png"/>';
  $(element).append(url);
}

//Function to calculate total points in player or dealer hands
function calculatePoints(hand) {
  var sum = 0;
  for (var i =0; i < hand.length; i++) {
    var card = hand[i];
    sum = sum + card.value;
  }
  return sum;
}

//Function to check for a bust for both the player and dealer. If either is busted, it declares the winner accordingly, and disables the 'hit' and 'stand' buttons. Also increments the bankroll accordingly.
function checkForBust() {
  var playerPoints = calculatePoints(playerHand);
  if (playerPoints > 21) {
    $('#messages').text("You Busted!");
    $('#hitButton').prop('disabled', true);
    $('#standButton').prop('disabled', true);
    return true;
  }
  var dealerPoints = calculatePoints(dealerHand);
  if (dealerPoints > 21) {
    $('#messages').text("Dealer Busted! You Won!");
    playerMoney += 5;
    playerMoney += 5;
    updateBank();
    $('#hitButton').prop('disabled', true);
    $('#standButton').prop('disabled', true);
    return true;
  }
  return false;
}


//Variable declaring the amount of money the player starts with.
var playerMoney = 500;


//Main function controlling all of the click actions on the buttons and all of the functions attached to clicking them.
$(function() {

  updateBank();

  $('#dealButton').click(function() {
    resetGame();
    dealCard(playerHand, '#playerHand');
    dealCard(dealerHand, '#dealerHand');
    dealCard(playerHand, '#playerHand');
    dealCard(dealerHand, '#dealerHand');
    checkForBust();
    playerMoney -= 5;
    updateBank();
  });

  $('#hitButton').click(function() {
    dealCard(playerHand, '#playerHand');
    checkForBust();
  });

  $('#standButton').click(function() {
    var dealerPoints = calculatePoints(dealerHand);
    while (dealerPoints < 17) {
      dealCard(dealerHand, '#dealerHand');
      dealerPoints = calculatePoints(dealerHand);
    }
    if (checkForBust() === false) {
      var playerPoints = calculatePoints(playerHand);
      dealerPoints = calculatePoints(dealerHand);
      if (playerPoints > dealerPoints) {
        $('#messages').text('You Won!');
        playerMoney += 5;
        playerMoney += 5;
        updateBank();
        $('#hitButton').prop('disabled', true);
        $('#standButton').prop('disabled', true);
      } else if (playerPoints === dealerPoints) {
        $('#messages').text('Push');
        updateBank();
        $('#hitButton').prop('disabled', true);
        $('#standButton').prop('disabled', true);
      } else {
        $('#messages').text('You Lost!');
        $('#hitButton').prop('disabled', true);
        $('#standButton').prop('disabled', true);

      }
    }
  });

});

//Function that updates the player's bankroll.
function updateBank() {
  $('#money').text('Bankroll: $' + playerMoney);
}
