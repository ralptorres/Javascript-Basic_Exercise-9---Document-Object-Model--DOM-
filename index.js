const button = document.querySelector("button");
console.log(button);

let secondButton = document.querySelector(".second-button");
document.querySelector(".second-button").innerHTML = "9b done!";

function determineTheMove(move) {
  document.querySelector(".moves").innerHTML = `You chose: ${move}`;
}

function getName() {
  let text = document.querySelector(".js-input-name").value;
  document.querySelector(".js-name").innerHTML = `Your name is: ${text}`;
}

function handleNameKeydown(event) {
  if (event.key === "Enter") {
    getName();
  }
}

//Amazon Shipping Calculator

function calculateShipping() {
  let cost = Number(document.querySelector(".js-input-cost").value);
  if (cost < 40) {
    cost = (cost * 100 + 10 * 100) / 100;
  }
  document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
}

function handleCostKeydown(event) {
  if (event.key === "Enter") {
    calculateShipping();
  }
}

function handleTextKeyup() {
  text = document.querySelector(".js-input-text").value;
  document.querySelector(".js-text").innerHTML = `${text}`;
}

// CART QUANTITY

let cartQuantity = 0;

document.querySelector(
  ".js-cart-quantity"
).innerHTML = `Cart Quantity: ${cartQuantity}`;

function updateCartQuantity(number, greaterThan) {
  if (cartQuantity >= 10) {
    // alert("The cart is full!");
    document.querySelector(".js-cart-quantity").innerHTML = "The cart is full!";
    return;
  } else if (cartQuantity > greaterThan) {
    // alert("You can only add maximum of 10 items");
    document.querySelector(".js-cart-quantity").innerHTML =
      "You can only add maximum of 10 items";
  } else {
    cartQuantity += number;
    document.querySelector(
      ".js-cart-quantity"
    ).innerHTML = `Cart Quantity: ${cartQuantity}`;
    // console.log(cartQuantity);
  }
}

function removeCartQuantity(number, lessThan) {
  if (cartQuantity <= 0) {
    // alert("Not enough items in the cart");
    document.querySelector(".js-cart-quantity").innerHTML =
      "Not enough items in the cart";
    return;
  } else if (cartQuantity < lessThan) {
    document.querySelector(
      ".js-cart-quantity"
    ).innerHTML = `Only ${cartQuantity} item remaining.`;
    // alert(`Only ${cartQuantity} item remaining.`);
  } else {
    cartQuantity -= number;
    document.querySelector(
      ".js-cart-quantity"
    ).innerHTML = `Cart Quantity: ${cartQuantity}`;
  }
}

function showCartQuantity() {
  document.querySelector(
    ".js-cart-quantity"
  ).innerHTML = `Cart Quantity: ${cartQuantity}`;
}

function resetCartQuantity() {
  cartQuantity = 0;
  // alert('The cart was reset.');
  // document.querySelector(".js-reset-status").innerHTML = "The cart was reset.";
  document.querySelector(
    ".js-cart-quantity"
  ).innerHTML = `The cart was reset. Cart Quantity: ${cartQuantity}`;
}

// CALCULATOR

let calculation = localStorage.getItem("calculate") || 0;
// console.log(calculation);

displayCalculation();

function number(number) {
  calculation += number;
  // console.log(calculation);
  document.querySelector(
    ".js-calculation-display"
  ).innerHTML = `${calculation}`;
  localStorage.setItem("calculate", calculation);
}

function result(result) {
  return (calculation = eval(calculation));
}

function displayResult() {
  console.log(result(result));
  document.querySelector(".js-calculation-display").innerHTML = `${result(
    result
  )}`;
  localStorage.setItem("calculate", calculation);
}

function clearResult() {
  calculation = "";
  document.querySelector(".js-calculation-display").innerHTML = 0;
  localStorage.setItem("calculate", calculation);
}

function displayCalculation() {
  document.querySelector(".js-calculation-display").innerHTML = calculation;
}

// Rock Paper Scissors

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  tie: 0,
};

document.querySelector(
  ".js-score"
).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissors";
  }

  return computerMove;
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You win!";
    } else if (computerMove === "paper") {
      result = "You lose!";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissors") {
      result = "You lose!";
    } else if (computerMove === "rock") {
      result = "You win!";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "scissors") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose!";
    } else if (computerMove === "paper") {
      result = "You win!";
    }
  }

  if (result === "You win!") {
    score.wins += 1;
  } else if (result === "You lose!") {
    score.losses += 1;
  } else if (result === "Tie.") {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.querySelector(".js-play-result").innerHTML = `${result}`;

  document.querySelector(
    ".js-play-move"
  ).innerHTML = `You ${playerMove} - ${computerMove} Computer`;

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.tie = 0;

  localStorage.removeItem("score");

  document.querySelector(".js-play-result").innerHTML = "";

  document.querySelector(".js-play-move").innerHTML = "";

  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Tie: ${score.tie}`;
}
