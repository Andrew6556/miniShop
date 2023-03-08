"use strict";


export default class Card{
    constructor(data){
        this.wrapper = document.createElement('div')
        this.wrapper.classList.add("goods__card")
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
        this.wrapper.addEventListener("click", this.copyImg)
    }
    copyImg(){
        console.log(this);
    }
}