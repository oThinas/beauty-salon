const nav = document.querySelector('#header nav')
const toggles = document.querySelectorAll('nav .toggle')

for (const toggle of toggles) {
    toggle.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', () => {
        nav.classList.toggle('show')
    })
}

// Colocar sombra no header quando der o scroll
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', () => {
    if (window.scrollY >= navHeight) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})