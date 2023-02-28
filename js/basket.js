"use strict";

let div_product = localStorage.getItem("product"),
    div_basket = document.querySelector(".goods");

div_basket.innerHTML = div_product;

document.querySelector(".navbar__user-authorized").style.display = 'flex';
document.querySelector(".navbar__username").innerText = localStorage.getItem("username");

// бургер
// const burger = document.querySelector('.nav__burger'),
//     nav      = document.querySelector('.nav__menu');
//     body     = document.querySelector('body');

// function slider() {
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('active');
//         burger.classList.toggle('active');
//         body.classList.toggle('lock');
//     })
// }
