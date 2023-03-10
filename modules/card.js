"use strict";

export let list_goods = [];

let sum_total  = 0,
    num_buy    = 0;
export class Card{
    constructor(data,click_switch=false){
        this.click_switch = click_switch;
        this.wrapper      = document.createElement('div');
        this.wrapper.classList.add("goods__card");
        this.wrapper.innerHTML = `<h1 class="goods__title">${data.name}</h1>
                                        <div class="goods__inner">
                                            <div class="goods__wrap">
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Страна</h3>
                                                    <p class="goods__item-text">${data.country}</p>
                                                </div>
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Гарантия</h3>
                                                    <p class="goods__item-text">${data.guarantee}</p>
                                                </div>
                                            </div>
                                            <div class="goods__wrap">
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Ширина экрана</h3>
                                                    <p class="goods__item-text">${data.screen}</p>
                                                </div>
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Память</h3>
                                                    <p class="goods__item-text">${data.memory}</p>
                                                </div>
                                            </div>
                                            <div class="goods__price">
                                                Цена: <span class="goods__price-text">${data.price}</span>
                                            </div>
                                        </div>
                                        <div class="goods__hover-buy">
                                            <button class="goods__btn-hover">Купить</button>
                                        </div>
                                        <div class="goods__animation-price"></div>`;
        if (this.click_switch){
            this.wrapper.addEventListener("click", this.change_styles,{once:true})
            this.wrapper.addEventListener("click", () =>{
                document.querySelector(".navbar__num-buy").innerText = ++num_buy;
            },{once:true})
        }
    }
    change_styles(){
        // При клике меняем стили
        this.querySelector(".goods__btn-hover").innerText = "Продано";
        list_goods.push(this.outerHTML);
        sum_total += Number(this.querySelector(".goods__price-text").innerText);
        document.querySelector(".navbar__sumTotal-price").innerText = sum_total;
    }
















    
    // _________анимация товаров с ценами_____________
    distinguish_cheap_and_expensive_goods(list_price){
        // включаем анимацию самого дорого и самого дешевого товара
        document.querySelectorAll(".goods__card").forEach(card =>{
            if (card.querySelector(".goods__price-text").innerHTML == list_price[1]){
                card.querySelector(".goods__animation-price").innerText = "Самый дорогой товар";
            }else if(card.querySelector(".goods__price-text").innerHTML == list_price[0]){
                card.querySelector(".goods__animation-price").innerText = "Самый дешевый товар";
            }
        })
    }
    get_max_and_min_price(){
        // создаем массив из цен => возращаем макс цену и мин
        let list_price = Array.from(document.querySelectorAll(".goods__price-text")).map(elem => {
            return Number(elem.innerText)
        })
        return [Math.min.apply(null,list_price),Math.max.apply(null,list_price)]
    }
}