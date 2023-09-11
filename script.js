const card = document.querySelector('.card')

card.addEventListener('click', () => {
    card.classList.toggle('rotated')
    setTimeout(() => {  document.getElementById('card-back').classList.toggle('hidden')},500)
})