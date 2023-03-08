"use strict";

// for (let product of goods){
//     let productDiv = document.createElement('div');
//     productDiv.classList.add("goods__block");
//     productDiv.innerHTML = `<div class="goods__card" onclick="change_styles(this),increase_number_purchases()">
//                             <h1 class="goods__title">${product.name}</h1>
//                             <div class="goods__inner">
//                                 <div class="goods__wrap">
//                                     <div class="goods__item">
//                                         <h3 class="goods__item-title">Страна</h3>
//                                         <p class="goods__item-text">${product.country}</p>
//                                     </div>
//                                     <div class="goods__item">
//                                         <h3 class="goods__item-title">Гарантия</h3>
//                                         <p class="goods__item-text">${product.guarantee}</p>
//                                     </div>
//                                 </div>
//                                 <div class="goods__wrap">
//                                     <div class="goods__item">
//                                         <h3 class="goods__item-title">Ширина экрана</h3>
//                                         <p class="goods__item-text">${product.screen}</p>
//                                     </div>
//                                     <div class="goods__item">
//                                         <h3 class="goods__item-title">Память</h3>
//                                         <p class="goods__item-text">${product.memory}</p>
//                                     </div>
//                                 </div>
//                                 <div class="goods__price">
//                                     Цена: <span class="goods__price-text">${product.price}</span>
//                                 </div>
//                             </div>
//                             <div class="goods__hover-buy">
//                                 <button class="goods__btn-hover">Купить</button>
//                             </div>
//                             <div class="goods__animation-price"></div>
//                         </div>`;
//     goodsDom.appendChild(productDiv);