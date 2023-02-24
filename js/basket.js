"use strict";


let buy = localStorage.getItem("cart");

let div_buy = document.querySelector(".basket");
// div_buy.innerText = buy;
// console.log(buy);
div_buy.innerText = buy;

// window.onload = function(){
//     // if (div_buy == null){
//     //     div_buy.innerText = buy;
//     // }else{
//     //     div_buy.innerText = 1;
//     // }
// }