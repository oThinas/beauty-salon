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

// Swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination : {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
})

// Scroll Reveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .text,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links`,
    { interval: 100 }
)