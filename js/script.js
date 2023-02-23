"use strict";

let goods = [
    {
        name:"iPhone 14 Pro Max",
        description:"Эта модель оборудована тремя основными и одной фронтальной камерой. Основной объектив защищен от повреждений сапфировым стеклом. Модули позволяют записывать видео в качестве 4К, фотографировать с 15-кратным приближением и двукратным",
        screen:"1290 px",
        memory:"256 ГБ",
        price:125000
    },
    // 1

    {
        name:"iPhone 13 Pro Max",
        description:"Phone 13 Pro Max. Грандиозный апгрейд камер Pro. Режим «Киноэффект» делает из видео настоящее кино. Дисплей Super Retina XDR с технологией ProMotion для более быстрого и плавного взаимодействия. А15 Bionic — самый быстрый чип для iPhone. Прочный корпус и самое долгое время работы без подзарядки среди iPhone.",
        screen:"1284 px",
        memory:"1ТБ",
        price:137000
    },
    
    // 2
    {
        name:"iPhone 12",
        description:"Phone 12 поражает возможностями. Чип A14 Bionic. Передовая система двух камер. И великолепный дисплей Super Retina XDR, на котором видно каждую деталь.",
        screen:"1170px",
        memory:"128GB",
        price:58000
    },
    {
        name:"iPhone 11",
        description:"Эта модель оборудована тремя основными и одной фронтальной камерой. Основной объектив защищен от повреждений сапфировым стеклом. Модули позволяют записывать видео в качестве 4К, фотографировать с 15-кратным приближением и двукратным",
        screen:"828 px",
        memory:"64 ГБ",
        price:50000
    },
    // 3
    {
        name:"Наушники AirPods Pro 2nd",
        description:"Внутриканальные наушники Apple AirPods Pro второго поколения выполнены в белом цвете. Они оборудованы модулем Bluetooth версии 5.3,",
        noiseSuppression:"yes",
        guarantee:"1 year",
        price:20000
    },
    // 4
    {
        name:"Наушники AirPods",
        description:"Классные наушники, хотя реокмендую AirPods Pro 2nd",
        noiseSuppression:"no",
        guarantee:"1 year",
        price:10000
    },
    // 5
    {
        name:"Ноутбук HUAWEI MateBook D 15 2021 BoD-WDH9",
        description:"Ноутбук Huawei BoD-WDH9 53013ERR, серебристый разработан для работы в многооконном режиме, просмотра видеоконтента, интернет-серфинга.",
        operatingSystem:"Windows",
        memory:"8 ГБ",
        price:50000
    },
    // 6
    {
        name:"Ноутбук Apple MacBook Air 13 ",
        description:"Ноутбук Apple MacBook Air 13 M1 в алюминиевом корпусе цвета Space Gray оснащен восьмиядерным процессором Apple M1 и семиядерным графическим контроллером. Объем оперативной памяти — 8 Гб, твердотельного накопителя — 256 Гб.",
        operatingSystem:"Windows",
        memory:"8 ГБ",
        price:50000
    },
    // 7
    {
        name:"Ноутбук игровой Thunderobot 911 Air D",
        description:"Thunderobot 911 Air D — игровой ноутбук с экраном, созданным по технологии AHVA. Его диагональ — 15,6 дюйма, разрешение — 1920 х 1080 пикселей,",
        operatingSystem:"Windows",
        memory:"8 ГБ",
        price:60000
    },
    // 8
    {
        name:"Планшет Honor Pad 8",
        description:"шикарный планшет,бери не хочу. Такой планшет как жизнь - бывает раз!",
        screen:"1200x2000 Пикс",
        memory:"6 ГБ",
        price:20000
    },
    // 9
    {
        name:"Планшет HUAWEI MatePad SE ",
        description:"шикарный планшет,бери не хочу. Такой планшет как жизнь - бывает раз!",
        screen:"1200x2000 Пикс",
        memory:"6 ГБ",
        price:20000
    },
    // 10
    {
        name:"Планшет TCL TAB 10L 8491X Black",
        description:"шикарный планшет,бери не хочу. Такой планшет как жизнь - бывает раз!",
        screen:"1200x800 Пикс",
        memory:"2 ГБ",
        price:7000
    },
    // 11
    {
        name:"Планшет TCL TAB pro",
        description:"оптимальный вариант и дольно таки бюджетный если вы мажор!",
        screen:"1200x800 Пикс",
        memory:"10 ГБ",
        price:70000
    },
    // 12
    {
        name:"Планшет HUAWEI MatePad Pro 11",
        description:"Планшет Huawei MatePad Pro 11 представлен в металлическом корпусе черного цвета. Он обладает внутренним хранилищем объемом 256 Гб. Объем оперативной памяти равен 8 Гб. Модель оснащена сенсорным 11-дюймовым OLED экраном",
        screen:"16000x2560  Пикс",
        memory:"8 ГБ",
        price:40000
    },
]



let goodsDom = document.querySelector(".goods");
    // user = document.createElement('div');
    // user.classList.add("goods__card");
    // goodsDom.appendChild(user);
    goodsDom.innerHTML = `<div class="goods__card">
                            <h1 class="goods__title">Ноутбук игровой Thunderobot 911 Air D</h1>
                            <div class="goods__inner">
                                <p class="goods__text">
                                    Планшет Huawei MatePad Pro 11 представлен в металлическом корпусе черного цвета.
                                    Он обладает внутренним хранилищем объемом 256 Гб. Объем оперативной памяти равен 8 Гб.
                                    Модель оснащена сенсорным 11-дюймовым OLED экраном
                                </p>
                                
                                <div class="goods__wrap">
                                    <div class="goods__item">
                                        <p class="goods__item-title">Ширина экрана</h3>
                                        <p class="goods__passenger goods__item-text">17</p>
                                    </div>
                                    <div class="goods__item">
                                        <h3 class="goods__item-title">Память</h3>
                                        <p class="goods__passport goods__item-text">16 ГБ</p>
                                    </div>
                                </div>
                                <div class="goods__price">
                                    Цена: <span class="goods__price-text">16 000</span>
                                </div>
                            </div>
                            <div class="goods__index">1</div>
                        </div>`;

console.log(goodsDom)