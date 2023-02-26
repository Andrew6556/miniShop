"use strict";

let div_product = localStorage.getItem("product");

let div_basket = document.querySelector(".basket");

// div_basket.innerHTML = div_product;
let divs_buy = []
divs_buy.push(div_product)

console.log(divs_buy)
let wrapper = document.createElement('div');
wrapper.classList.add("basket__buy")
wrapper.innerHTML = div_product;
div_basket.appendChild(wrapper);
// console.log(div_product);





// if (document.querySelectorAll(".goods__card").length > 0){
//     console.log("1")
//     div_basket.appendChild(div_product)
// }else{
//     div_basket.innerHTML = div_product;
//     console.log(document.querySelectorAll(".goods__card"));
// }