const menu = document.querySelector('.menu')
const hamburgermenu = document.querySelector('.hamburger-menu') 
const iconbars = document.querySelector('.icon-bars')
const iconclos = document.querySelector('.icon-close') 

hamburgermenu.addEventListener('click', displaymenu)
menu.addEventListener('click', displaymenu)

function displaymenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil')
        iconbars.style.display = 'inline' 
        iconclos.style.display = 'none'
    } else {
        menu.classList.add('tampil')
        iconbars.style.display = 'none' 
        iconclos.style.display = 'inline' 
    }
}
