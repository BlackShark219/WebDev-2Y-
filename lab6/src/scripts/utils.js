import {BookR} from "./db"
export function createPreview(photoLink,rating,title){
  const modal = document.createElement('div')
  modal.classList.add('modal')
  modal.innerHTML = '<img src=' + photoLink + ' class="modal-photo"/><p class="modal-content">' + '"' + title + '"' + '<br>' + 'Rating is:' + rating + '</p>';
  mui.overlay('on', modal)
}
export function createModal(photoLink, rating, title,key) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = '<img src=' + photoLink + ' class="modal-photo"/><p class="modal-content">' + '"' + title + '"' + '<br>' + 'Rating is:' + rating + '</p>'+
    '<div class="modal-content">'+
    '<button type="button" style="width:40%;margin-right:5%;background-color: #575dd8W" id="modify" onclick="document.location=\'modify.html\'" class="btn btn-secondary">Modify</button>'+
    '<button type="button" style="width:40%;background-color: rebeccapurple" id="delete" class="btn btn-warning">Delete</button></div>'
    mui.overlay('on', modal)
    localStorage.setItem('number',key)
    localStorage.setItem('picture',photoLink)
    console.log(localStorage.number)
    console.log(localStorage.picture)
    document.getElementById('delete').addEventListener('click',()=>{
      fetch(process.env.API_URL+key+'.json',{
        method:'DELETE',
        headers:{'Content-Type': 'application/json'}
      })
        .then(()=>{document.location.href='index.html'})
    })
}
