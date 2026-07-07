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
    { src: "images/editorial/sq flight to the right.jpeg", alt: "Square Flight to the Right" },
    { src: "images/editorial/fresno.jpeg", alt: "Fresno" },
    { src: "images/editorial/french_facade_half.jpg", alt: "French Facade" },
    { src: "images/editorial/mission_spring.jpg", alt: "Mission Spring" },
    { src: "images/editorial/newsom_mamdani_half.jpg", alt: "Newsom Mamdani Half" },
    { src: "images/editorial/la_redistrict.jpg", alt: "LA Redistrict" },
    { src: "images/editorial/gorbachev.jpeg", alt: "Gorbachev" },
    { src: "images/editorial/bpr backlog_28-29.jpg", alt: "BPR Backlog, 28-29" },
    { src: "images/editorial/stoning_full.jpg", alt: "Stoning Full" },
];

const galleryImagesBARE = [
    // i35
    { src: "images/editorial/bare compressed/i35 masthead.jpg", alt: "i35 Masthead" },
    { src: "images/editorial/bare compressed/i35 exec.jpg", alt: "i35 Exec" },
    { src: "images/editorial/bare compressed/i35 yellow.jpg", alt: "i35 Yellow" },
    { src: "images/editorial/bare compressed/i35 handwritten.jpg", alt: "i35 Handwritten" },

    //i36
    { src: "images/editorial/bare compressed/i36 toc.jpg", alt: "i36 TOC" },
    { src: "images/editorial/bare compressed/i36 exec.jpg", alt: "i36 Exec" },

    { src: "images/editorial/bare compressed/i36 apple 1.jpg", alt: "i36 Apple 1" },
    { src: "images/editorial/bare compressed/i36 apple 2.jpg", alt: "i36 Apple 2" },
    { src: "images/editorial/bare compressed/i36 apple collage.jpg", alt: "i36 Apple Collage" },
    { src: "images/editorial/bare compressed/i36 ideal woman 1.jpg", alt: "i36 Ideal Woman 1" },
    { src: "images/editorial/bare compressed/i36 ideal woman 2.jpg", alt: "i36 Ideal Woman 2" },
    { src: "images/editorial/bare compressed/i36 orange fig.jpg", alt: "i36 Orange Fig" },

    //misc
    { src: "images/editorial/bare compressed/i34 missed reflection 1.jpg", alt: "i34 Missed Reflection 1" },
    // { src: "images/editorial/bare compressed/i34 missed reflection 2.jpg", alt: "i34 Missed Reflection 2" },
    { src: "images/editorial/bare compressed/i34 nature.jpg", alt: "i34 Nature" },
    { src: "images/editorial/bare compressed/perpghood.jpg", alt: "Perpghood" },
    { src: "images/editorial/bare compressed/eotwawki.jpg", alt: "Eotwawki" },
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
    // document.getElementById('lightbox-caption').textContent = alt;
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
