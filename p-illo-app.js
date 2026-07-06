const images = [
    { src: "images/compressed/getting-older-thumb.jpg", alt: "We're Getting Older, 2023" },
    { src: "images/compressed/hdsleep-thumb.jpg",       alt: "Sleep on HD, 2024" },
    { src: "images/compressed/pavlova-thumb.jpg",       alt: "Pavlova Ballerinas, 2024" },
    { src: "images/compressed/arranma-thumb.jpg",       alt: "ArranMa, 2025" },
    { src: "images/compressed/emma-thumb.JPG",       alt: "Emma Color Study, 2022" },
    { src: "images/compressed/peach-thumb.jpg",       alt: "Color Study B, 2023" },
    { src: "images/compressed/kirtapink-1-thumb.jpeg",       alt: "Kirtana Expression 1, 2025" },
    { src: "images/compressed/kirtapink-2-thumb.jpeg",       alt: "Kirtana Expression 2, 2025" },
    { src: "images/olga.jpg",       alt: "Olga Color Study, 2022" },
    { src: "images/compressed/blue-chickens.jpeg",       alt: "Blue tri-chickens sketch" },
    
    // { src: "images/crowbird figure.png",       alt: "Crowbird figure" },
    { src: "images/compressed/paperdoll-kyla-thumb.jpg",alt: "Kyla in Out of Our Minds, 2024" },
    { src: "images/compressed/hometown-thumb.JPG",       alt: "Hometown Twice Removed, 20" },
    { src: "images/compressed/innout-darker40-thumb.png",       alt: "In-N-Out, 2025" },
    // { src: "images/compressed/sylvie-trad.jpg",       alt: "Acrylic Sylvie" },
    { src: "images/compressed/arranvie-trad.png",       alt: "Acrylic Arran and Sylvie" },
    // { src: "images/compressed/arran-trad.jpg",       alt: "Acrylic Arran" },
    { src: "images/compressed/gardeners-thumb.JPG",       alt: "Gardener's Hands, 2022" },
    { src: "images/edited-IMG_8811 2.jpg",       alt: "Color Study A, 2023" },
    { src: "images/compressed/leslie-willard-thumb.jpeg",       alt: "Leslie Sunning, 2025" },

];

const gallery = document.querySelector('.portfolio-gallery');

images.forEach((image, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.delay = (i % 3) * 80;
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
    gallery.appendChild(item);
});

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
