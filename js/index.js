let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.menu-container')


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
})

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active')
}
