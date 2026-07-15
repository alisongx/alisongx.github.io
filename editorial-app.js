function renderGallery(containerSelector, images) {
    const gallery = document.querySelector(containerSelector);
    if (!gallery) return;

    images.forEach((image, i) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.dataset.delay = (i % 3) * 80;
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(image.src, image.alt));
        gallery.appendChild(item);
    });
}

const galleryImagesBPR = [
    { src: "images/editorial/sq flight to the right.jpeg", alt: "Flight to the right: How democracts lost San Francisco Asian Americans. BPR Spring 2026 Issue." },
    { src: "images/editorial/fresno.jpeg", alt: "Misfit Island: A Familial Lens on Fresno’s Battle Against the Homeless. BPR 2025 Backlog Issue." },
    { src: "images/editorial/french_facade_half.jpg", alt: "Behind the Facade of French Colorblindness. BPR Fall 2025 Issue." },
    { src: "images/editorial/mission_spring.jpg", alt: "Masthead, BPR Spring 2026." },
    { src: "images/editorial/newsom_mamdani_half.jpg", alt: "What Newsom Doesn’t Get, Mamdani Does. BPR Fall 2025 Issue." },
    { src: "images/editorial/la_redistrict.jpg", alt: "Is Los Angeles the Future of Redistricting? BPR Fall 2025 Issue." },
    { src: "images/editorial/gorbachev.jpeg", alt: "Mr. Gorbachev, Did the Wall Actually Fall? BPR 2025 Backlog Issue." },
    { src: "images/editorial/heirs_backlog.jpg", alt: "A World Without Heirs. BPR 2025 Backlog Issue." },
    { src: "images/editorial/stoning_full.png", alt: "A Modest Proposal for the Return of Stoning as Moral Instruction. BPR 2025 Backlog Issue." },
];

const galleryImagesBARE = [
    // i35
    { src: "images/editorial/bare compressed/i35 masthead.jpg", alt: "i35: Rush Hour. Masthead" },
    { src: "images/editorial/bare compressed/i35 exec.jpg", alt: "i35: Rush Hour. Exec" },
    { src: "images/editorial/bare compressed/i35 yellow.jpg", alt: "i35" },
    { src: "images/editorial/bare compressed/i35 handwritten.jpg", alt: "i35 To ___ From ___" },

    //i36
    { src: "images/editorial/bare compressed/i36 toc.jpg", alt: "i36: Telephone. TOC" },
    { src: "images/editorial/bare compressed/i36 exec.jpg", alt: "i36: Telephone. Exec" },

    { src: "images/editorial/bare compressed/i36 apple 1.jpg", alt: "i36. Apple prints by Bayley Harris." },
    { src: "images/editorial/bare compressed/i36 apple 2.jpg", alt: "i36. Apple prints by Bayley Harris." },
    { src: "images/editorial/bare compressed/i36 apple collage.jpg", alt: "i36. Apple graphics by Bayley Harris." },
    { src: "images/editorial/bare compressed/i36 ideal woman 1.jpg", alt: "i36 Ideal Woman I" },
    { src: "images/editorial/bare compressed/i36 ideal woman 2.jpg", alt: "i36 Ideal Woman II" },
    { src: "images/editorial/bare compressed/i36 orange fig.jpg", alt: "i36" },

    //misc
    { src: "images/editorial/bare compressed/i34 missed reflection 1.jpg", alt: "i34" },
    // { src: "images/editorial/bare compressed/i34 missed reflection 2.jpg", alt: "i34 Missed Reflection 2" },
    { src: "images/editorial/bare compressed/i34 nature.jpg", alt: "i34" },
    { src: "images/editorial/bare compressed/perpghood.jpg", alt: "i33" },
    { src: "images/editorial/bare compressed/eotwawki.jpg", alt: "i33" },
];

renderGallery('#gallery-bpr', galleryImagesBPR);
renderGallery('#gallery-bare', galleryImagesBARE);

// ── scroll anim ──────────────────────────────────────────────────
window.addEventListener('load', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const delay = parseFloat(el.dataset.delay || 0);
                setTimeout(() => el.classList.add('visible'), delay);
                observer.unobserve(el);
            }
        });
    }, {
        threshold: 0.01,
        rootMargin: '0px'
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            // alr visible skip anim
            item.classList.add('visible');
        } else {
            // off screen, observe scroll and anim
            observer.observe(item);
        }
    });
});

// ── Lightbox ──────────────────────────────────────────────────
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
lightbox.innerHTML = `
    <div id="lightbox-backdrop"></div>
    <div id="lightbox-content">
        <button id="lightbox-close" aria-label="Close">&times;</button>
        <img id="lightbox-img" src="" alt="">
        <p id="lightbox-caption"></p>
    </div>
`;
document.body.appendChild(lightbox);
 
function openLightbox(src, alt) {
    document.getElementById('lightbox-img').src = src;
    document.getElementById('lightbox-img').alt = alt;
    document.getElementById('lightbox-caption').textContent = alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden'; // prevent scroll while open
}
 
function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}
 
document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

const isTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;

document.querySelectorAll('.cover-stack').forEach(stack => {
    stack.addEventListener('click', () => {
        const base = stack.querySelector('.base-img');

        if (isTouch) {
            if (!stack.classList.contains('is-active')) {
                // first tap: reveal the gif, don't open lightbox yet
                stack.classList.add('is-active');
                return;
            }
            // second tap: already showing gif, now open lightbox
        }

        if (base) openLightbox(base.src, base.alt);
    });
});