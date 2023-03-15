"use strict"


export default class Header{
    constructor(){
        this.wrapper = document.createElement("header")
        this.wrapper.classList.add("header")
        this.wrapper.innerHTML = `
                <div class="header__top">
                    <div class="navbar container">
                        <div class="navbar__login">
                            <button class="navbar__btn-signIn btn">Авторизироваться</button>
                            <button class="navbar__btn-registration btn">Зарегистрироваться</button>
                            <div class="navbar__user-authorized">
                                <p class="navbar__username"></p>
                                <div class="navbar__img-user">
                                    <img src="./img/user.png" alt="#">
                                </div>
                            </div>
                            <button class="navbar__add-product btn">Добавить товар</button>
                        </div>
                        <div class="navbar__basket">
                            <div class="navbar__sumTotal">
                                <p class="navbar__sumTotal-title">
                                    Общая стоимость:
                                    <span class="navbar__sumTotal-price">0</span>
                                </p>
                            </div>
                            <div class="navbar__basket-img">
                                <div class="navbar__basket-inner">
                                    <img src="./img/cart.png" alt="buy">
                                    <div class="navbar__num-buy">0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="header__content container"></div>`;
    }
}