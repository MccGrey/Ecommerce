// cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};
//cloe cart
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// cart working js

if (document.readState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

//making function

function ready() {
  //remover items from cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i];
    button.addEventListener("click", removeCartItem);
  }
}

//remover items from cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}

//
