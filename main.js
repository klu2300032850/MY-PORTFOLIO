import './style.css'

// 1. Mobile Navigation Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-btn i');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    navLinks.classList.toggle('active');
    if (menuOpen) {
        menuIcon.classList.replace('bx-menu', 'bx-x');
    } else {
        menuIcon.classList.replace('bx-x', 'bx-menu');
    }
});

// Close nav when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuOpen) {
            navLinks.classList.remove('active');
            menuIcon.classList.replace('bx-x', 'bx-menu');
            menuOpen = false;
        }
    });
});

// 2. Sticky Navbar & Scroll Progress
const navbar = document.getElementById('navbar');
const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    // Sticky navbar
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Progress bar calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// 3. Typewriter Effect
const phrases = [
    "2★ at CodeChef",
    "100 days streak in codechef",
    "Awarded as Academic Topper of 2023-2027 batch in KLU",
    "District chess tournament winner"
];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

const typewriterElement = document.querySelector('.typewriter');

function type() {
    const currentPhrase = phrases[currentPhraseIndex];

    if (isDeleting) {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
        currentCharIndex--;
        typingSpeed = 50; // deleting speed
    } else {
        typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
        currentCharIndex++;
        typingSpeed = 100; // typing speed
    }

    // Word complete
    if (!isDeleting && currentCharIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end of word
    }
    // Word fully deleted
    else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before new word
    }

    setTimeout(type, typingSpeed);
}
// Start typewriter
document.addEventListener('DOMContentLoaded', () => {
    if (typewriterElement) setTimeout(type, 1000);
});

// 4. Scroll Reveal Intersection Observer
const revealElements = document.querySelectorAll('.scroll-reveal');

const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => {
    revealOnScroll.observe(el);
});

// Pre-activate hero section elements
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.hero-content')?.classList.add('active');
        document.querySelector('.hero-image')?.classList.add('active');
    }, 100);
});
