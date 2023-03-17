"use strict"

export default class Basket{
    constructor(){
        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("basket")

        this.wrapperTitle = document.createElement("div");
        this.wrapperTitle.classList.add("basket__title")
        this.wrapperTitle.innerText = "Ваши купленные товары";

        this.wrapperContent = document.createElement("div");
        this.wrapperContent.classList.add("basket__content")

        this.wrapper.appendChild(this.wrapperTitle)
        this.wrapper.appendChild(this.wrapperContent)
    }
}