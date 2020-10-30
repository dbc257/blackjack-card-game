window.addEventListener("DOMContentLoaded", function () {
  let how_many_cards = 0;
  let deck = [];
  let playerHand = [];
  let dealerHand = [];
  let playerAces = 0;
  let dealerAces = 0;
  let dealerPoints = 0;
  let playerPoints = 0;
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  let dealerTurn = false;
  let dealerBust = false;
  function buildDeck() {
    for (var i = 0; i < suits.length; i++) {
      for (var x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i] };
        deck.push(card);
      }
    }
    return deck;
  }
  function pointCalc() {
    playerPoints -= playerPoints;
    for (let index = 0; index < playerHand.length; index++) {
      const point = playerHand[index];
      if (
        point.value === "jack" ||
        point.value === "queen" ||
        point.value === "king"
      ) {
        playerPoints += 10;
      } else if (point.value === "ace") {
        playerPoints += 1;
        playerAces += 1;
      } else {
        playerPoints += point.value;
      }
    }
    if (playerPoints < 12 && playerAces > 0) {
      playerPoints += 10;
    }
    console.log(playerPoints);
    document.getElementById("player-points").textContent = `${playerPoints}`;
    if (playerPoints > 21) {
      setTimeout(function () {
        alert("You bust!");
        location.reload();
      }, 500);
    }
    return playerPoints;
  }
  function dealerCalc() {
    dealerPoints -= dealerPoints;
    for (let index = 0; index < dealerHand.length; index++) {
      const point = dealerHand[index];
      if (
        point.value === "jack" ||
        point.value === "queen" ||
        point.value === "king"
      ) {
        dealerPoints += 10;
      } else if (point.value === "ace") {
        dealerPoints += 1;
        dealerAces += 1;
      } else {
        dealerPoints += point.value;
      }
    }
    if (dealerPoints < 12 && dealerAces > 0) {
      dealerPoints += 10;
    }

    if (dealerTurn === true) {
      document.getElementById("dealer-points").textContent = `${dealerPoints}`;
    } else {
      document.getElementById("dealer-points").textContent = `?`;
    }
    if (dealerPoints > 21) {
      setTimeout(function () {
        dealerBust = true;
        alert("Dealer bust! Play again!");
        location.reload();
      }, 500);
    }
    return dealerPoints;
  }

  function playerCard() {
    let max = deck.length;
    const card = deck.splice(Math.floor(Math.random() * max), 1)[0];
    playerHand.unshift(card);
    let card1 = document.createElement("img");
    card1.setAttribute("src", `images/${card.value}_of_${card.suit}.png`);
    console.log(card1);
    document.getElementById("playerHand").appendChild(card1);
  }

  function hiddenCard() {
    let max = deck.length;
    const card = deck.splice(Math.floor(Math.random() * max), 1)[0];
    dealerHand.unshift(card);
    console.log(card);
    let card1 = document.createElement("img");
    card1.setAttribute("src", `images/back_of_card.png`);
    card1.setAttribute("id", "hidden");
    console.log(card1);
    document.getElementById("dealerHand").appendChild(card1);
  }

  function dealerCard() {
    let max = deck.length;
    const card = deck.splice(Math.floor(Math.random() * max), 1)[0];
    dealerHand.unshift(card);
    let card1 = document.createElement("img");
    card1.setAttribute("src", `images/${card.value}_of_${card.suit}.png`);
    document.getElementById("dealerHand").appendChild(card1);
    return dealerHand;
  }

  buildDeck();
  document.getElementById("dealButton").addEventListener("click", function () {
    if (how_many_cards === 1) {
      if (confirm("Start a new game?")) {
        location.reload();
        return;
      }
      return;
    }

    hiddenCard();

    setTimeout(function () {
      playerCard();
    }, 500);

    setTimeout(function () {
      dealerCard();
    }, 1000);

    setTimeout(function () {
      playerCard();
    }, 1500);
    setTimeout(function () {
      pointCalc();
    }, 1501);
    setTimeout(function () {
      dealerCalc();
    }, 1501);
    setTimeout(function () {
      if (dealerPoints === 21 && playerPoints != 21) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        setTimeout(function () {
          alert("The dealer got Blackjack! Try again!");
          location.reload();
        }, 1008);
      }
      console.log(playerPoints);
      console.log(dealerPoints);
      if (playerPoints === 21 && dealerPoints != 21) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        setTimeout(function () {
          alert("You got blackjack! Play again?");
          location.reload();
        }, 1008);
      }
      if (dealerPoints === 21 && playerPoints === 21) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        alert("You both got Blackjack! A push! Try Again!");
      }
    }, 1502);
    how_many_cards++;
  });
  document.getElementById("hitButton").addEventListener("click", function () {
    if (playerHand.length === 0) {
      return;
    }
    playerCard();
    pointCalc();
  });
  document
    .getElementById("standButton")
    .addEventListener("click", function () {
      document
        .getElementById("hidden")
        .setAttribute(
          "src",
          `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
        );
      dealerTurn = true;
      dealerCalc();
      if (dealerPoints < 17 && dealerPoints < playerPoints) {
        function dealAgain() {
          dealerCard();
          dealerCalc();

          if (dealerPoints < 17) {
            setTimeout(dealAgain, 750);
          }
        }
        dealAgain();
      }
      if (dealerPoints > playerPoints && dealerPoints < 22) {
        setTimeout(function () {
          alert("You lose! Try again?");
          location.reload();
        }, 1008);
      } else if (dealerPoints === playerPoints) {
        setTimeout(function () {
          alert("It's a push! Try again?");
          location.reload();
        }, 1008);
      } else if (
        playerPoints > dealerPoints &&
        playerPoints < 22 &&
        dealerPoints < 22
      ) {
        console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("You win! Play again?");
          location.reload();
        }, 1008);
      }
    });
});
