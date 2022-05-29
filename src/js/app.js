'uwse strict'

import * as flsFunctions from './modules/functions.js'
flsFunctions.isWebp();


const bloksAbout = document.querySelectorAll('.about-as__block')
const about = document.querySelector('.about-as');
const newBlock = ' <div class="about-as__block_invisible"></div>'
if (bloksAbout.length % 2 === 0) {
    bloksAbout.forEach(element => {
        element.insertAdjacentHTML('afterend', newBlock)

    });

} else {
    bloksAbout.forEach((element, i) => {
        element.insertAdjacentHTML('beforebegin', newBlock)
        if (i == bloksAbout.length - 1) {
            element.insertAdjacentHTML('afterend', newBlock)
        }
    });
}
//===================================================

const ratingFrom = document.querySelector('#rating-from');
const ratingTo = document.querySelector('#rating-to');
const list = [];

for (let i = 0; i < 100; i++) {
    list.push(`<option value="${i+1}">${i+1}</option>`)

}
ratingFrom.innerHTML = list;
ratingTo.innerHTML = list;



const rateItems = document.querySelectorAll('.rate-item__select');
rateItems.forEach( e => {
const list = [];
    for (let i = 0; i < 100; i++) {
        list.push(`<option value="${i+1}">${i+1}</option>`)
    }
    e.innerHTML = list;
});

//===================================================


// document.addEventListener('click', documentActions);

// function documentActions(e) {
//     const targetElement = e.target;

//     if (targetElement.closest(".work-platform__user-button")) {
//         const userMenu = document.querySelector('.work-platform__user-menu');
//         e.preventDefault();
//         userMenu.classList.toggle('_active')

//     }

// }


//====================================смена высоты от ширины
window.addEventListener("DOMContentLoaded", function () {
    var divs = document.querySelectorAll(".peoples__item"),timer, pause = 1;

    function resizeDivs() {
        const width = divs[0].offsetWidth * 1;
        [].forEach.call(divs, function (el) {
            el.style.height = width + "px";
        });
    }

    //======
    function calcFooterNumbers() {
        const peopleFooterWrapper = document.querySelector('.peoples-footer__wrapper');
        let width = peopleFooterWrapper.offsetWidth;
        let summItems = parseInt((width / 30))
        peopleFooterWrapper.innerHTML = '';

        for (let i = 0; i < summItems; i++) {
            if (i != summItems - 1) {
                let item = `<div class="peoples-footer__item">${i + 1}</div>`
                peopleFooterWrapper.insertAdjacentHTML('beforeend', item)
            } else {
                let item = `<div class="peoples-footer__item">...</div>`
                peopleFooterWrapper.insertAdjacentHTML('beforeend', item)
            }

        }
    }
    window.addEventListener("resize", function () {
    calcFooterNumbers()
    });
    //====

    window.addEventListener("resize", function () {
        window.clearTimeout(timer);
        timer = window.setTimeout(resizeDivs, pause);
    });

    resizeDivs();
    calcFooterNumbers()
});
//===================================================