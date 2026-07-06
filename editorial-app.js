const images = [
    { src: "images/editorial/sq flight to the right.jpeg", alt: "Square Flight to the Right" },
    { src: "images/editorial/fresno.jpeg", alt: "Fresno" },
    { src: "images/editorial/french_facade_half.jpg", alt: "French Facade" },
    { src: "images/editorial/mission_spring.jpg", alt: "Mission Spring" },
    { src: "images/editorial/newsom_mamdani_half.jpg", alt: "Newsom Mamdani Half" },
    { src: "images/editorial/la_redistrict.jpg", alt: "LA Redistrict" },
    { src: "images/editorial/gorbachev.jpeg", alt: "Gorbachev" },
    // { src: "images/editorial/bpr fall 25abc_28-29.jpg", alt: "BPR Fall 25abc, 28-29" },
    // { src: "images/editorial/flight_right_full.jpg", alt: "Flight Right Full" },
    // { src: "images/editorial/newsom_mamdani_full.jpg", alt: "Newsom Mamdani Full" },
    // { src: "images/editorial/bpr backlog_32-33.jpg", alt: "BPR Backlog, 32-33" },
    { src: "images/editorial/bpr backlog_28-29.jpg", alt: "BPR Backlog, 28-29" },
    { src: "images/editorial/stoning_full.jpg", alt: "Stoning Full" },
    // { src: "images/editorial/Screenshot 2026-06-17 at 2.12.25 PM.png", alt: "Screenshot 2.12.25 PM" },
    // { src: "images/editorial/BPR SP26 Cover.png", alt: "BPR SP26 Cover" },
    // { src: "images/editorial/BPR FA25 Cover.jpg", alt: "BPR FA25 Cover" },
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
