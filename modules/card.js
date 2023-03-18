"use strict";

let sum_total = 0,
    num_buy   = 0;

    
export class Card{
    constructor(data,click_switch=false){
        this.click_switch = click_switch;
        this.wrapper      = document.createElement('div');
        this.wrapper.classList.add("card");
        this.wrapper.innerHTML = `<div class="card__img">
                                    <img class="card__img-item" src="#" alt="#">
                                </div>
                                <h1 class="card__title">${data.name}</h1>
                                    <div class="card__inner">
                                        <div class="card__wrap">
                                            <div class="card__item">
                                                <h3 class="card__item-title">Страна</h3>
                                                <p class="card__item-text">${data.country}</p>
                                            </div>
                                            <div class="card__item">
                                                <h3 class="card__item-title">Гарантия</h3>
                                                <p class="card__item-text">${data.guarantee}</p>
                                            </div>
                                        </div>
                                        <div class="card__wrap">
                                            <div class="card__item">
                                                <h3 class="card__item-title">Ширина экрана</h3>
                                                <p class="card__item-text">${data.screen}</p>
                                            </div>
                                            <div class="card__item">
                                                <h3 class="card__item-title">Память</h3>
                                                <p class="card__item-text">${data.memory}</p>
                                            </div>
                                        </div>
                                        <div class="card__price">
                                            Цена: <span class="card__price-text">${data.price}</span>
                                        </div>
                                    </div>
                                    <div class="card__hover-buy">
                                        <button class="card__btn-hover">Купить</button>
                                    </div>
                                    <div class="card__animation-price"></div>`;
        if (this.click_switch){
            this.wrapper.addEventListener("click", this.change_styles,{once:true})
            this.wrapper.addEventListener("click", () =>{
                document.querySelector(".navbar__num-buy").innerText = ++num_buy;
            },{once:true})
        }
    }
    change_styles = () =>{
        // При клике меняем стили
        this.wrapper.querySelector(".card__btn-hover").innerText = "Продано";
        sum_total += Number(this.wrapper.querySelector(".card__price-text").innerText);
        document.querySelector(".navbar__sumTotal-price").innerText = sum_total;
    }
}