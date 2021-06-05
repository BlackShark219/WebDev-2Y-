import {createModal} from "./utils";

export class BookR {
  static create(review) {
    return fetch(process.env.API_URL + '.json', {
      method: 'POST',
      body: JSON.stringify(review),
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }

  static get() {
    return fetch(process.env.API_URL + '.json')
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
  }

  static getImages() {
    fetch(process.env.API_URL + '.json')
      .then((res) => res.json())
      .then((data) => {
        let container = '';
        let info= Object.keys(data)
        info.forEach(function (photocard) {
          if (data[photocard].id % 2 === 0) {
          container += '<div class="mui-col-lg-5 mui-col-md-5 photobar" style="text-align: center" id="' + data[photocard].id + '"><img src="' + data[photocard].photoCard+ '" class="photobar-item"/></div>'
        } else {
          container += '<div class="mui-col-lg-5 mui-col-md-5 photobar" style="text-align: center" id="' + data[photocard].id + '"><img src="' + data[photocard].photoCard + '" class="photobar-item"/></div>'
        }
        })
        document.getElementById('appContainer').innerHTML = container
      })}

      static getModal() {
        fetch(process.env.API_URL + '.json')
          .then((res) => res.json())
          .then((data) => {
            document.querySelectorAll('.photobar').forEach(item => {
              item.addEventListener('click', function () {
                let i = parseInt(this.id)
                let element
                let elementKey
                for (let x in Object.keys(data)) {
                  if (data[Object.keys(data)[x]].id === i) {
                    element = data[Object.keys(data)[x]]
                    elementKey = Object.keys(data)[x]
                  }
                }
                createModal(element.photoCard, element.rating,element.photoCard_title,elementKey)
              })
            })
          })
      }
      static changeInfo(review,key){
        return fetch(process.env.API_URL+key+'.json',{
          method:'PUT',
          body: JSON.stringify(review),
          headers:{'Content-Type': 'application/json'}
        })
          .then(response => response.json())
          .then(response => {
            console.log(response)
          })
      }
}
