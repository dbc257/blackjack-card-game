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
  function BuildDeck() {
    for (var i = 0; i < suits.length; i++) {
      for (var x = 0; x < values.length; x++) {
        let card = { value: values[x], suit: suits[i] };
        deck.push(card);
      }
    }
    return deck;
  }
  function PointCalc() {
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
    document.getElementById("player-points").textContent = `${playerPoints}`;
    // if (playerPoints > 21) {
    //   setTimeout(function () {
    //     alert("You bust by going over 21 points! The Dealer wins!");
    //     location.reload();
    //   }, 500);
    // }
    return playerPoints;
  }
  function DealerCalc() {
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
    // if (dealerPoints > 21) {
    //   setTimeout(function () {
    //     dealerBust = true;
    //     alert("The Dealer bust by going over 21 points! You win!");
    //     location.reload();
    //   }, 500);
    // }
    return dealerPoints;
  }

  function DealPlayerCard() {
    let max = deck.length;
    let randomPlayerCard = deck.splice(Math.floor(Math.random() * max), 1)[0];
    playerHand.push(randomPlayerCard)
    deck.unshift(randomPlayerCard);
    let playerCard = document.createElement("img");
    playerCard.setAttribute("src", `images/${randomPlayerCard.value}_of_${randomPlayerCard.suit}.png`);
    document.getElementById("playerHand").appendChild(playerCard);
  }

  function DealHiddenCard() {
    let max = deck.length;
    let randomHiddenCard = deck.splice(Math.floor(Math.random() * max), 1)[0];
    dealerHand.push(randomHiddenCard)
    deck.unshift(randomHiddenCard);
    let hiddenCard = document.createElement("img");
    hiddenCard.setAttribute("src", `images/back_of_card.png`);
    hiddenCard.setAttribute("id", "hidden");
    console.log(dealerHand);
    document.getElementById("dealerHand").appendChild(hiddenCard);
  }

  function DealDealerCard() {
    let max = deck.length;
    let randomDealerCard = deck.splice(Math.floor(Math.random() * max), 1)[0];
    dealerHand.push(randomDealerCard)
    deck.unshift(randomDealerCard);
    let dealerCard = document.createElement("img");
    dealerCard.setAttribute("src", `images/${randomDealerCard.value}_of_${randomDealerCard.suit}.png`);
    document.getElementById("dealerHand").appendChild(dealerCard);
    return dealerHand;
  }
  function DealAgain() {
    DealDealerCard();
    DealerCalc();
  }

  BuildDeck();
  document.getElementById("dealButton").addEventListener("click", function () {
    if (how_many_cards === 1) {
      if (confirm("Start a new game?")) {
        location.reload();
        return;
      }
      return;
    }

    DealDealerCard(); 

    setTimeout(function () {
      DealPlayerCard();
    }, 500);

    setTimeout(function () {
      DealHiddenCard();
    }, 1000);

    setTimeout(function () {
      DealPlayerCard();
    }, 1500);
    setTimeout(function () {
      PointCalc();
    }, 1501);
    setTimeout(function () {
      DealerCalc();
    }, 1501);
    setTimeout(function () {
      if (
        dealerPoints === 21 && 
        playerPoints < 21 
        // &&
        // playerPoints !== 21
        ) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        setTimeout(function () {
          document.getElementById("dealer-points").textContent = `${dealerPoints}`;
          alert("The Dealer got Blackjack! The Dealer wins!");
            setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      }
      if (
        playerPoints === 21 && 
        // dealerPoints < 21 
        // &&
        dealerPoints !== 21
        ) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        setTimeout(function () {
          alert("You got Blackjack! You win!");
            setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      }
      if (
        dealerPoints === 21 && playerPoints === 21
        ) {
        document
          .getElementById("hidden")
          .setAttribute(
            "src",
            `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
          );
        setTimeout(function () {
          alert("It's a push! No one wins!");
            setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      }
    }, 1502);
    how_many_cards++;
  });
  document.getElementById("hitButton").addEventListener("click", function () {
    if (playerHand.length === 0) {
      return;
    }
    DealPlayerCard();
    PointCalc();
    if (
      playerPoints === 21 && 
      // dealerPoints < 21 
      // &&
      dealerPoints !== 21
      ) {
      document
        .getElementById("hidden")
        .setAttribute(
          "src",
          `images/${dealerHand[1].value}_of_${dealerHand[1].suit}.png`
        );
      setTimeout(function () {
        alert("You got Blackjack! You win!");
        setTimeout(function () {
          location.reload();
          }, 1000);
      }, 1008);
    }
    if (
      playerPoints > 21 &&
      dealerPoints < 21 
      // &&
      // dealerPoints > playerPoints
    ) {
      // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
      setTimeout(function () {
        alert("The Dealer wins! You bust by going over 21 points!");
        setTimeout(function () {
        location.reload();
        }, 1000);
      }, 1008);
    } 
    if (
      dealerPoints > 21 &&
      playerPoints < 21 
      // &&
      // playerPoints < dealerPoints
    ) {
      // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
      setTimeout(function () {
        alert("You win! The Dealer bust by going over 21 points!");
        setTimeout(function () {
          location.reload();
          }, 1000);
      }, 1008);
    }
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
      DealerCalc();
      while (dealerPoints < 18 && dealerPoints < playerPoints) {
        // if (dealerPoints < 18) {
          // if (dealerPoints < 18 && dealerPoints < playerPoints) {
          //   setTimeout(function () {
          //     DealAgain()
          //   }, 750);  
          // }
        //   setTimeout(function () {
        //     DealAgain()
        //   }, 750);
        // }
      DealAgain();
    } 
    // else if (dealerPoints < 18 && dealerPoints < playerPoints) {
    //   DealAgain();
    // } else 
    if (
        dealerPoints === 21 && 
        playerPoints < 21 && 
        dealerPoints > playerPoints
        ) {
        setTimeout(function () {
          document.getElementById("dealer-points").textContent = `${dealerPoints}`;
          alert("The Dealer got Blackjack! The Dealer wins!");
          setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      } 
      if (
        playerPoints > 21 &&
        dealerPoints < 21 
        // &&
        // dealerPoints > playerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("The Dealer wins! You bust by going over 21 points!");
          setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      } 
      if (
        // playerPoints > 21 &&
        dealerPoints < 21 &&
        playerPoints < 21 &&
        dealerPoints > playerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("The Dealer wins! The Dealer has more points than you without going over 21 points!");
          setTimeout(function () {
            location.reload();
            }, 1000);
        }, 1008);
      }
      if (
        dealerPoints === playerPoints
        ) {
        setTimeout(function () {
          alert("It's a push! No one wins!");
                  setTimeout(function () {
        location.reload();
        }, 1000);
        }, 1008);
      } 
      if (
        playerPoints === 21 &&
        dealerPoints !== 21 
        // &&
        // playerPoints > dealerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("You win! You have Blackjack!");
                  setTimeout(function () {
        location.reload();
        }, 1000);
        }, 1008);
      } 
      if (
        playerPoints < 21 &&
        dealerPoints > 21 
        // &&
        // playerPoints > dealerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("You win! The Dealer bust by going over 21 points!");
                  setTimeout(function () {
        location.reload();
        }, 1000);
        }, 1008);
      } 
      if (
        playerPoints < 21 &&
        dealerPoints < 21 &&
        playerPoints > dealerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("You win! You have more points than the Dealer without going over 21 points!");
                  setTimeout(function () {
        location.reload();
        }, 1000);
        }, 1008);
      } 
      if (
        dealerPoints > 21 &&
        playerPoints < 21 
        // &&
        // playerPoints < dealerPoints
      ) {
        // console.log(`Player has ${playerPoints}, dealer has ${dealerPoints}`);
        setTimeout(function () {
          alert("You win! The Dealer bust by going over 21 points!");
                  setTimeout(function () {
        location.reload();
        }, 1000);
        }, 1008);
      }
      
    });
});
