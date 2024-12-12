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
