"use strict";


export default class Card{
    constructor(data){
        this.cards = []
        data.forEach(card_data => {
            let wrapper = document.createElement('div');
            wrapper.classList.add("goods__card");
            wrapper.innerHTML = `<h1 class="goods__title">${card_data.name}</h1>
                                        <div class="goods__inner">
                                            <div class="goods__wrap">
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Страна</h3>
                                                    <p class="goods__item-text">${card_data.country}</p>
                                                </div>
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Гарантия</h3>
                                                    <p class="goods__item-text">${card_data.guarantee}</p>
                                                </div>
                                            </div>
                                            <div class="goods__wrap">
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Ширина экрана</h3>
                                                    <p class="goods__item-text">${card_data.screen}</p>
                                                </div>
                                                <div class="goods__item">
                                                    <h3 class="goods__item-title">Память</h3>
                                                    <p class="goods__item-text">${card_data.memory}</p>
                                                </div>
                                            </div>
                                            <div class="goods__price">
                                                Цена: <span class="goods__price-text">${card_data.price}</span>
                                            </div>
                                        </div>
                                        <div class="goods__hover-buy">
                                            <button class="goods__btn-hover">Купить</button>
                                        </div>
                                        <div class="goods__animation-price"></div>`;
            wrapper.addEventListener("click", this.change_styles);
            this.cards.push(wrapper)    
        });
        console.log(this.cards)
        // console.log(this.get_max_and_min_price())
        // this.wrapper.addEventListener("click", this.change_styles);
    }
    change_styles(){
        // При клике меняем стили
        this.querySelector(".goods__btn-hover").innerText = "Продано";
        this.querySelector(".goods__btn-hover").disabled  = true;
        // вынести вне класса 
        // list_goods.push(div_product.outerHTML);
        // sum_total += Number(this.querySelector(".goods__price-text").innerText);
        document.querySelector(".navbar__sumTotal-price").innerText = 1;
        console.log(1)
        // console.log(this.wrapper.querySelector(".goods__card"))
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