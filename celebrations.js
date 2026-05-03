import './celebrations.css'

// ── FOUC Prevention: show body once CSS is loaded ──
document.body.classList.add('loaded');

// ── Popup Data (placeholder content for now) ──
const popupData = {
    'chess-tournament': {
        title: '♟️ Chess Tournament Winner',
        content: `
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Claimed victory in a highly competitive inter-college chess tournament, demonstrating sharp strategic thinking, patience, and the ability to stay composed under pressure. Each round brought tougher opponents, but careful planning and tactical brilliance led to a well-deserved win. This achievement reflects not just skill on the board, but a mindset of discipline and perseverance that extends to every challenge in life.
            </p>
            <div style="background:#f5f5f5; border-radius:12px; padding:2rem; text-align:center; color:#999; border:2px dashed #ddd; margin-top:1rem;">
                <i class='bx bx-image-add' style="font-size:2.5rem; display:block; margin-bottom:0.5rem;"></i>
                <p style="color:#aaa;">Photos will be added here soon</p>
            </div>
        `
    },
    'academic-topper': {
        title: '🎓 Academic Topper Award — 2023-2027 Batch, KLU',
        content: `
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Recognized as the Academic Topper of the 2023-2027 batch at KL University — a prestigious honor earned through consistent dedication, outstanding performance across semesters, and a relentless pursuit of excellence. Balancing rigorous coursework with extracurricular activities, this award stands as a testament to hard work, intellectual curiosity, and the drive to be the best among hundreds of peers.
            </p>
            <div class="celebration-photos">
                <div class="photo-grid">
                    <img src="celebrationPhotos/academictopperaward1.jpeg" alt="Academic Topper Award 1" class="celebration-photo" loading="lazy">
                    <img src="celebrationPhotos/academictopperaward2.jpeg" alt="Academic Topper Award 2" class="celebration-photo" loading="lazy">
                    <img src="celebrationPhotos/academictopperaward3.jpeg" alt="Academic Topper Award 3" class="celebration-photo" loading="lazy">
                    <img src="celebrationPhotos/academictopperaward4.jpeg" alt="Academic Topper Award 4" class="celebration-photo" loading="lazy">
                </div>
            </div>
        `
    },
    'quiz-winner': {
        title: '💡 Winner in Quiz Competition',
        content: `
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Emerged as the winner in an electrifying quiz competition that tested knowledge across technology, science, current affairs, and logical reasoning. Competing against brilliant minds, quick recall and sharp analytical thinking proved to be the winning edge. This victory highlights a deep passion for learning and the ability to think on one's feet — skills that are essential in the fast-paced world of technology and beyond.
            </p>
            <div class="celebration-photos">
                <div class="photo-grid">
                    <img src="celebrationPhotos/winnerinquizcompetition1.jpeg" alt="Quiz Competition Winner" class="celebration-photo" loading="lazy">
                </div>
            </div>
        `
    },
    'zero-one-coding': {
        title: '🏆 4th Place — Zero One Coding Ladder Contest',
        content: `
            <p style="font-size:1.05rem; line-height:1.8; margin-bottom:1.5rem;">
                Secured an impressive 4th place finish in the Zero One Coding Ladder Contest — an intense competitive programming event that pushed problem-solving abilities to the limit. Tackling complex algorithmic challenges under tight time constraints, this result showcases strong coding skills, efficient debugging, and the determination to compete at the highest level. A stepping stone toward even greater competitive programming achievements.
            </p>
            <div class="celebration-photos">
                <div class="photo-grid">
                    <img src="celebrationPhotos/zeroonecodingcontest1.png" alt="Zero One Coding Contest" class="celebration-photo" loading="lazy">
                </div>
            </div>
        `
    }
};

// ── Popup Elements ──
const popupOverlay = document.getElementById('popupOverlay');
const popupContent = document.getElementById('popupContent');
const popupBody = document.getElementById('popupBody');
const popupClose = document.getElementById('popupClose');

// Open popup
function openPopup(key) {
    const data = popupData[key];
    if (!data) return;

    popupBody.innerHTML = `<h2>${data.title}</h2>${data.content}`;
    popupOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent background scroll
}

// Close popup
function closePopup() {
    popupOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// Attach click to each celebration heading card
document.querySelectorAll('.celebration-heading-card').forEach(card => {
    card.addEventListener('click', () => {
        const key = card.getAttribute('data-popup');
        openPopup(key);
    });
});

// Close on X button
if (popupClose) {
    popupClose.addEventListener('click', closePopup);
}

// Close when clicking overlay (outside popup content)
if (popupOverlay) {
    popupOverlay.addEventListener('click', (e) => {
        if (e.target === popupOverlay) {
            closePopup();
        }
    });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closePopup();
    }
});

// ── 1. Mobile Navigation Toggle ──
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-btn i');
let menuOpen = false;

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuOpen = !menuOpen;
        navLinks.classList.toggle('active');
        if (menuOpen) {
            menuIcon.classList.replace('bx-menu', 'bx-x');
        } else {
            menuIcon.classList.replace('bx-x', 'bx-menu');
        }
    });
}

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

// ── 2. Sticky Navbar & Scroll Progress ──
const navbar = document.getElementById('navbar');
const progressBar = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    // Sticky navbar
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Progress bar calculation
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (progressBar) {
        progressBar.style.width = scrolled + "%";
    }
});

// ── 3. Scroll Reveal Intersection Observer ──
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

// ── 4. Pre-activate hero section elements ──
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.hero.section')?.classList.add('active');
    }, 100);
});
