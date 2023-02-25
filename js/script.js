"use strict";

let goods = [
    {
        name:"iPhone 14 Pro Max",
        country:"Китай",
        guarantee:"нет",
        screen:"1290 px",
        memory:"256 ГБ",
        price:125000
    },
    // 1
    {
        name:"iPhone 13 Pro Max",
        country:"Китай",
        guarantee:"нет",
        screen:"1284 px",
        memory:"1ТБ",
        price:137000
    },
    
    // 2
    {
        name:"iPhone 12",
        country:"китай",
        guarantee:"нет",
        screen:"1170px",
        memory:"128GB",
        price:58000
    },
    // 3
    {
        name:"iPhone 11",
        country:"китай",
        guarantee:"нет",
        screen:"828 px",
        memory:"64 ГБ",
        price:50000
    },
    
    // 4
    {
        name:"Смартфон realme 10 Pro+",
        country:"США",
        guarantee:"1 год",
        screen:"2412x1080",
        memory:"256 ГБ",
        price:36000
    },
    // 5
    {
        name:"Смартфон Xiaomi Redmi Note 11S",
        country:"США",
        guarantee:"нет",
        screen:"2400x1080",
        memory:"56 ГБ",
        price:40000
    },
    // 6
    {
        name:"Смартфон Xiaomi Redmi Note 11S",
        country:"США",
        guarantee:"нет",
        screen:"2400x1080",
        memory:"256 ГБ",
        price:44000
    },
    // 7
    {
        name:"Смартфон Samsung Galaxy A03 3",
        country:"США",
        guarantee:"нет",
        screen:"1600x720",
        memory:"32 ГБ",
        price:6000
    },
    // 8
    {
        name:" Смартфон Samsung Galaxy A73 5G 8",
        country:"Канада",
        guarantee:"нет",
        screen:"2400x1080",
        memory:"256 ГБ",
        price:60000
    },
    // 9
    {
        name:"Смартфон Samsung Galaxy S23 Ultra",
        country:"Канада",
        guarantee:"нет",
        screen:"2400x1080",
        memory:"512 ГБ",
        price:110000
    },
    // 10
    {
        name:"Смартфон Xiaomi Redmi 10C",
        country:"Канада",
        guarantee:"2год",
        screen:"1650x720",
        memory:"34 ГБ",
        price:9000
    },
    // 11
    {
        name:"Смартфон Honor X9a 6",
        country:"Канада",
        guarantee:"1год",
        screen:"2400x1080",
        memory:"34 ГБ",
        price:25000
    },
]

let num_buy    = 0,
    list_goods = document.querySelectorAll(".goods__card");


for (let i = 0; i < list_goods.length; ++i){
    // console.log(list_goods[i])
    if (list_goods[i].querySelector(".goods__title").innerHTML == document.getElementById("buy1").innerHTML){
        console.log("1");
        // let c= list_goods[i].outerHTML
        // let div_basket     = localStorage.setItem("product","99999");
        localStorage.setItem("product",list_goods[i].outerHTML)

        // let clone_product  = list_goods[i];

        // div_basket.appendChild(clone_product.cloneNode(true));
    }
}

document.querySelector(".goods__btn-hover").addEventListener("click",a);

function a() {
    ++num_buy;
    console.log(document.getElementById("buy1").innerHTML)
    document.querySelector(".navbar__num-buy").innerText = num_buy;
    console.log("1")
}








// let goodsDom = document.querySelector(".goods");
    

// for (let product of goods){
//     let productDiv = document.createElement('div');
//     productDiv.classList.add("goods__card");

//     productDiv.innerHTML = `<h1 class="goods__title">${product.name}</h1>
//                         <div class="goods__inner">
//                             <p class="goods__text">
//                                 ${product.description}
//                             </p>
                            
//                             <div class="goods__wrap">
//                                 <div class="goods__item">
//                                     <p class="goods__item-title">Ширина экрана</h3>
//                                     <p class="goods__passenger goods__item-text">${product.screen}</p>
//                                 </div>
//                                 <div class="goods__item">
//                                     <h3 class="goods__item-title">Память</h3>
//                                     <p class="goods__passport goods__item-text">${product.memory}</p>
//                                 </div>
//                             </div>
//                             <div class="goods__price">
//                                 Цена: <span class="goods__price-text">${product.price}</span>
//                             </div>
//                         </div>
//                     <div class="goods__index">1</div>`;
//     goodsDom.appendChild(productDiv);
//     // break
// }



    
// console.log(goodsDom)
