export function createModal(photoLink, rating, title) {
    const modal = document.createElement('div')
    modal.classList.add('modal')
    modal.innerHTML = '<img src=' + photoLink + ' class="modal-photo"/><p class="modal-content">' + '"' + title + '"' + '<br>' + 'Rating is:' + rating + '</p>'
    mui.overlay('on', modal)
}