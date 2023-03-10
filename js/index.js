"use strict";

import {Card,list_goods,sum_total, num_buy} from "../modules/card.js";

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
let goodsDom = document.querySelector(".goods");

let card = new Card(goods);
card.cards.forEach(e =>{
    goodsDom.appendChild(e)
})
// card.distinguish_cheap_and_expensive_goods(card.get_max_and_min_price())


let data_users = [{name:"admin",password:666}];

let username,
    user_password;

console.log(list_goods)
document.querySelector(".navbar__basket-img").addEventListener("click", () =>{
    // при клике передаем массив купленных товаров и передаем username 
    localStorage.setItem("product", list_goods);
    localStorage.setItem("username",document.querySelector(".navbar__username").innerText);
});
document.querySelector(".navbar__btn-registration").addEventListener("click", registration);
document.querySelector(".navbar__btn-signIn").addEventListener("click", () =>{
    if (authorization()){
        goodsDom.innerHTML = "";
        let card = new Card(goods, true);
        card.cards.forEach(e =>{
            goodsDom.appendChild(e)
        })
    }
});







// ________________________войти в систему_____________________________
function overwriting_styles_login(name=username){
    // переазапись стилей при авторизации
    document.querySelector(".navbar__btn-signIn").style.display = 'none';
    document.querySelector(".navbar__btn-registration").style.display = 'none';
    document.querySelector(".navbar__user-authorized").style.display = 'flex';
    document.querySelector(".navbar__username").innerText = name;
}

function authorization(authorization_name=prompt("Введите ваше имя"),
                    authorization_password=prompt("Введите ваш пароль")){
    for (let data of data_users){
        if (authorization_name == data.name && authorization_password == data.password){
            overwriting_styles_login(authorization_name)
            if (authorization_name == "admin" && authorization_password == 666){
                // если пользователь админ то даем ему его полномочия
                    document.querySelector(".navbar__add-product").style.display = 'block';
                }
            alert("Вы успешно авторизировались")
            return true
        }
    } 
    if (username == authorization_name && user_password == authorization_password){
        data_users.push({name:username,password:user_password});
        overwriting_styles_login()
        alert("Вы успешно авторизировались")
        return true
    }else{
        alert("Error в введенных данных")
    }
}

function registration(){
    // регистрация
    while(true){
        let registration_name     = prompt("Введите ваше имя"),
            registration_password = +prompt("Введите ваш пароль");
        if (registration_name == "" || registration_password == ""){
            alert("Вы ввели не все данные");
        }else{
            username = registration_name;
            user_password = registration_password;
            break
        }
    }
}





// distinguish_cheap_and_expensive_goods(get_max_and_min_price())

// alert("Для покупки товаров надо авторизироваться!");



// function add_new_product(list_data){
//     // добавление нового товара
//     let productDiv = document.createElement('div');
//     productDiv.classList.add("goods__block");
//     productDiv.innerHTML = `<div class="goods__block">
//                         <div class="goods__card" onclick="change_styles(this),increase_number_purchases()">
//                         <div class="goods__card-img">
//                             <img src="${list_data[0]}" alt="#">
//                         </div>
//                         <h1 class="goods__title">${list_data[1]}</h1>
//                         <div class="goods__inner">
//                             <div class="goods__wrap">
//                                 <div class="goods__item">
//                                     <p class="goods__item-title">Страна</h3>
//                                     <p class="goods__item-text">${list_data[2]}</p>
//                                 </div>
//                                 <div class="goods__item">
//                                     <h3 class="goods__item-title">Гарантия</h3>
//                                     <p class="goods__item-text">${list_data[4]}</p>
//                                 </div>
//                             </div>
//                             <div class="goods__wrap">
//                                 <div class="goods__item">
//                                     <p class="goods__item-title">Ширина экрана</h3>
//                                     <p class="goods__item-text">${list_data[3]}</p>
//                                 </div>
//                                 <div class="goods__item">
//                                     <h3 class="goods__item-title">Память</h3>
//                                     <p class="goods__item-text">${list_data[5]}</p>
//                                 </div>
//                             </div>
//                             <div class="goods__price">
//                                 Цена: <span class="goods__price-text">${list_data[6]}</span>
//                             </div>
//                         </div>
//                         <div class="goods__hover-buy">
//                             <button class="goods__btn-hover">Купить</button>
//                         </div>
//                         <div class="goods__animation-price"></div>
//                     </div>
//                 </div>`;
//     goodsDom.appendChild(productDiv);
//     modal_window_visibility("hidden","0");
// }


// _____________________это сделанно__________________________
// function distinguish_cheap_and_expensive_goods(list_price){
//     // включаем анимацию самого дорого и самого дешевого товара
//     document.querySelectorAll(".goods__card").forEach(card =>{
//         if (card.querySelector(".goods__price-text").innerHTML == list_price[1]){
//             card.querySelector(".goods__animation-price").innerText = "Самый дорогой товар";
//         }else if(card.querySelector(".goods__price-text").innerHTML == list_price[0]){
//             card.querySelector(".goods__animation-price").innerText = "Самый дешевый товар";
//         }
//     })
// }

// function get_max_and_min_price(){
//     // создаем массив из цен => возращаем макс цену и мин
//     let list_price = Array.from(document.querySelectorAll(".goods__price-text")).map(elem => {
//         return Number(elem.innerText)
//     })
//     return [Math.min.apply(null,list_price),Math.max.apply(null,list_price)]
// }




// ____________________form_______________________
// document.querySelector(".form").addEventListener('submit', (e) => { 
//     // Отключаем событие по умолчанию 
//     e.preventDefault(); 
//     // Очищаем поля формы 
//     e.target.reset(); 
// });

// function modal_window_visibility(visibility='visible', opacity='1'){
//     // регулируем появление или удаление окна
//     document.querySelector(".popup").style.visibility = visibility;
//     document.querySelector(".popup").style.opacity    = opacity;
// }
// function get_form_data(){
//     // получаем данные с формы
//     let list_data = [];
//     document.querySelectorAll(".form__input").forEach((div_input) => {
//         list_data.push(div_input.value)
//     });
    
//     return list_data;
// }