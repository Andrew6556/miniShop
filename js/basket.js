"use strict";

let div_product = localStorage.getItem("product"),
    div_basket = document.querySelector(".goods");

div_basket.innerHTML = div_product;

document.querySelector(".navbar__user-authorized").style.display = 'flex';
document.querySelector(".navbar__username").innerText = localStorage.getItem("username");
console.log(1);
