import '../styles.css'
//import {form,photoLink,rating,title} from './form'
console.log('App is running...')
export const hasMinLength = (value, minValue) => value.length >= minValue
export function hasMinMaxValue(value, minValue, maxValue) {
    if(value>=minValue && value<=maxValue){
        return true
    }
}

export const isURL = (value) =>
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/g.test(value);




document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('mouseover', () => {

        item.style.color = 'rgb(255,255,255)'
    })
})

document.querySelectorAll('.nav-link').forEach(item => {
    item.addEventListener('mouseout', () => {

        item.style.color = '#5d5c8d'
    })
})



