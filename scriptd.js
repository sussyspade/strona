
// ========================================
// MENU MOBILNE
// ========================================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("mobile-open");
});


// Zamykamy menu po kliknięciu w link

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("mobile-open");
    });
});

// ========================================
// PARALLAX HERO
// ========================================

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("scroll", () => {

    if (!heroVisual) return;

    const scrollPosition = window.scrollY;

    if (scrollPosition < window.innerHeight) {

        heroVisual.style.transform =
            `translateY(${scrollPosition * 0.08}px)`;

    }

});


// ========================================
// ZMIANA NAVBAR PO SCROLLU
// ========================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ========================================
// ROK W STOPCE
// ========================================

const year = document.querySelector(".current-year");

if (year) {
    year.textContent = new Date().getFullYear();
}

document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const id = this.getAttribute('href');
        const target = document.querySelector(id);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            history.replaceState(null, '', window.location.pathname);
        }
    });
});