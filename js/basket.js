"use strict";

let div_product = localStorage.getItem("product");

let div_basket = document.querySelector(".basket");

div_basket.innerHTML = div_product;
