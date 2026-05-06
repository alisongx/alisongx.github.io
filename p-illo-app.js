const images = [
    { src: "images/compressed/getting-older-thumb.jpg", alt: "We're Getting Older" },
    { src: "images/compressed/arranma-thumb.jpg",       alt: "ArranMa" },
    { src: "images/compressed/hdsleep-thumb.jpg",       alt: "Sleep on HD" },
    { src: "images/compressed/paperdoll-kyla-thumb.jpg",alt: "Kyla in Out of Our Minds" },
    { src: "images/compressed/pavlova-thumb.jpg",       alt: "Pavlova Ballerinas" },
    { src: "images/compressed/gardeners-thumb.JPG",       alt: "Gardener's Hands" },
    { src: "images/compressed/hometown-thumb.JPG",       alt: "Hometown Twice Removed" },
    { src: "images/compressed/emma-thumb.JPG",       alt: "Emma Color Study" },
    { src: "images/compressed/peach-thumb.jpg",       alt: "Color Study B" },
    { src: "images/crowbird figure.png",       alt: "crowbird figure" },

];

const gallery = document.querySelector('.portfolio-gallery');

images.forEach((image, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.delay = (i % 3) * 80;
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
    gallery.appendChild(item);
});



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