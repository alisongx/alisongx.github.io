const images = [
    { src: "images/compressed/getting-older-thumb.jpg", alt: "We're Getting Older" },
    { src: "images/compressed/arranma-thumb.jpg",       alt: "ArranMa" },
    { src: "images/compressed/hdsleep-thumb.jpg",       alt: "Sleep on HD" },
    { src: "images/compressed/paperdoll-kyla-thumb.jpg",alt: "Kyla in Out of Our Minds" },
    { src: "images/compressed/pavlova-thumb.jpg",       alt: "Pavlova Ballerinas" },
    { src: "images/compressed/emma-thumb.jpg",       alt: "Emma Color Study" },
    { src: "images/compressed/gardeners-thumb.jpg",       alt: "Gardener's Hands" },
    { src: "images/compressed/hometown-thumb.jpg",       alt: "Hometown Tice Removed" },
    { src: "images/compressed/peach-thumb.jpg",       alt: "Color Study B" },
    // just add more lines here
];

const gallery = document.querySelector('.portfolio-gallery');

images.forEach((image, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.delay = (i % 5) * 80;
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
    gallery.appendChild(item);
});

// Wait for everything to finish loading before observing
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
        rootMargin: '0px'  // no negative margin — items touching viewport edge count
    });

    document.querySelectorAll('.gallery-item').forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            // Already visible on load — skip animation
            item.classList.add('visible');
        } else {
            // Off screen — observe for scroll-in animation
            observer.observe(item);
        }
    });
});