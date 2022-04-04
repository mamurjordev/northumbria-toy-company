const openIcon = document.getElementById('open')
const closeIcon = document.getElementById('close')
const menubar = document.querySelector('ul')

function load_events() {
    openIcon.addEventListener('click', openToggle)
    closeIcon.addEventListener('click', closeToggle)
}
load_events()

function openToggle() {
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'

    menubar.style.visibility = 'visible'
}

function closeToggle() {
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'

    menubar.style.visibility = 'hidden'
}