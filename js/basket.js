"use strict";

let div_product = localStorage.getItem("product");

let div_basket = document.querySelector(".basket");
div_basket.innerHTML = localStorage.getItem("product");

// div_basket.appendChild(div_product);