"use strict";


export class Slider{
    constructor(slides){
        // полуаем все карточки
        this.slides       = slides
        // макс кол-во карточек
        this.maxSlides    = slides.length
        // счетчик
        this.currentIndex = 0
        // создаем сам класс слайдера
        this.wrapper = document.createElement("div")
        this.wrapper.classList.add("slider")
        // контейнер слайдера
        this.slideWrapper = document.createElement("div")
        this.slideWrapper.classList.add("slider-wrapper")
        this.slides.forEach(slide => {
            // добавдяем карточки в контейнер
            this.slideWrapper.appendChild(slide)
        });
        this.wrapper.appendChild(this.slideWrapper)
    }
}
