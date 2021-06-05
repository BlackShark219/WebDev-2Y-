console.log('form is running...')

import '../styles.css'
import {createPreview} from './utils.js'
import {hasMinMaxValue, isURL} from "./app"
import {BookR} from "./db"


const container = document.getElementById('appContainer')
container.innerHTML += makeForm()
const form = document.getElementById('form')
const photoLink = document.getElementById('photol')
const rating = document.getElementById('input_text1')
const title = document.getElementById('inputname')
const er1 = document.getElementById('errorbox-1')
const er2 = document.getElementById('errorbox-2')
const er3 = document.getElementById('errorbox-3')
const butt = document.getElementById('SbmButton')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  if (CheckInput()) {
    butt.disabled = true
    addPhotoDB().then(() => {
      createPreview(photoLink.value, rating.value, title.value),
        photoLink.value = '',
        rating.value = '3',
        title.value = ''
        butt.disabled = false
    })

  }
})

async function addPhotoDB(){
  let response = await fetch(process.env.API_URL + '.json')
    .then(response => response.json())
  let review = {
    id: response[Object.keys(response)[Object.keys(response).length-1]].id + 1,
    photoCard: photoLink.value,
    photoCard_title: title.value,
    rating: rating.value
  }
  return BookR.create(review)
}

/**
 * @return {boolean}
 */
function CheckInput() {
  let checktitle = false
  let checklink = false
  let checkrating = false
  if (!hasMinMaxValue(title.value.length, 4, 50)) {
    er1.innerHTML = '<p>Title name should contain at least 4 symbols, but not more than 50</p>'
    er1.classList.add("error-t")
    title.classList.add("error")
  } else {
    er1.innerHTML = ''
    er1.classList.remove("error-t")
    title.classList.remove("error")
    checktitle = true
  }
  if (!isURL(photoLink.value)) {
    er2.innerHTML = '<p>Symbols aren`t url</p>'
    er2.classList.add("error-t")
    photoLink.classList.add("error")
  } else {
    er2.innerHTML = ''
    er2.classList.remove("error-t")
    photoLink.classList.remove("error")
    checklink = true
  }
  if (!hasMinMaxValue(rating.value, 1, 10)) {
    er3.innerHTML = '<p>You can put only numbers from 1 to 10</p>'
    er3.classList.add("error-t")
    rating.classList.add("error")
  } else {
    er3.innerHTML = ''
    er3.classList.remove("error-t")
    rating.classList.remove("error")
    checkrating = true
  }
  return checklink && checkrating && checktitle;
}


function makeForm() {
  return '<form id="form">\n' +
    '<div class="form-group">\n' +
    '  <label for="inputname">Title</label>\n' +
    '    <input type="text" class="form-control" placeholder="Write book`s name" id="inputname">\n' +
    '<div id="errorbox-1"></div>\n' +
    '  </div>\n' +
    '<div class="form-group">\n' +
    '  <label for="inputname">Book image</label>\n' +
    '    <input type="text" class="form-control" placeholder="Input image url" id="photol">\n' +
    '<div id="errorbox-2"></div>\n' +
    '  </div>\n' +
    '<div class="form-row">\n' +
    '<div class="form-group col-md-11">\n' +
    '  <label for="rangeinput1">Rating(1-10)</label>\n' +
    '    <input type="range" class="form-control-range" min = "1" max = "10" value = "3"  id = "rangeinput1" oninput = "input_text1.value = rangeinput1.value">\n' +
    ' </div>\n' +
    '<div class="form-group col-md-1" style="padding-top:22px;">\n' +
    '    <input type="text"  class = "form-control" id = "input_text1" value = "3" onchange = "rangeinput1.value = input_text1.value">\n' +
    '<div id="errorbox-3"></div>\n' +
    ' </div>\n' +
    ' </div>\n' +
    '<button type="submit" id="SbmButton" class="btn btn-outline-primary">Submit</button>\n' +
    '</form>'
}

