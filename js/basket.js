"use strict";

let div_product = localStorage.getItem("product");

let div_basket = document.querySelector(".basket");


console.log(div_product);
div_basket.innerHTML = div_product;
