const openIcon = document.getElementById('open')
const closeIcon = document.getElementById('close')
const menubar = document.getElementById('menu')

function load_events() {
    openIcon.addEventListener('click', openToggle)
    closeIcon.addEventListener('click', closeToggle)
}
load_events()

function openToggle() {
    openIcon.style.display = 'none'
    closeIcon.style.display = 'block'

    menubar.style.opacity = '1'
}

function closeToggle() {
    closeIcon.style.display = 'none'
    openIcon.style.display = 'block'

    menubar.style.opacity = '0'
}

// Hero Slider
$('.hero-slider').slick({
    arrows: false,
    dots: false,
    enterMode: true,
    autoplay: true,
    infinite: true,
    speed: 300,
});