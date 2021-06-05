console.log('rlist is running...')

import '../styles.css'
import {photoCard} from './info'
import {photoCard_title} from './info'
import {rating} from "./info";
import {createModal} from './utils'
//import

const container = document.getElementById('appContainer')
for (let i = 0; i < photoCard.length; i+=2) {
    container.innerHTML += fillTheMainPage(i)
}
document.querySelectorAll('.photobar-item').forEach(item => {
    item.addEventListener('click', function (e) {
        let i = this.id
        createModal(photoCard[i],rating[i],photoCard_title[i])
    })
})

function createMain(photoCard1,photoCard2, i) {
        return '  <div class="mui-row">\n'+
                createCard(photoCard1,i)+
                createCard(photoCard2,i+1)+
                '</div>\n'
}

function createCard(photoCard,i){
    return'<div class="mui-col-lg-6 mui-col-md-12 mui-col-xs-12">\n' +
    '<div class="mui-col-lg-11 mui-col-md-12 mui-col-xs-12 mui-col-lg-offset-1 photobar">\n' +
    '<img class="photobar-item" id="'+ i + '" src="' + photoCard + '"/>\n' +
    '</div>\n' +
    '</div>\n'
}

function fillTheMainPage(i) {
    return createMain(photoCard[i],photoCard[i+1], i)
}



