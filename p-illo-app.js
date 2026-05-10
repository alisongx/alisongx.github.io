const images = [
    { src: "images/compressed/getting-older-thumb.jpg", alt: "We're Getting Older, 2023" },
    { src: "images/compressed/hdsleep-thumb.jpg",       alt: "Sleep on HD, 2024" },
    { src: "images/compressed/pavlova-thumb.jpg",       alt: "Pavlova Ballerinas, 2024" },
    { src: "images/compressed/arranma-thumb.jpg",       alt: "ArranMa, 2025" },
    { src: "images/compressed/emma-thumb.JPG",       alt: "Emma Color Study, 2022" },
    { src: "images/compressed/peach-thumb.jpg",       alt: "Color Study B, 2023" },
    { src: "images/compressed/kirtapink-1-thumb.jpeg",       alt: "Kirtana Expression 1, 2025" },
    { src: "images/compressed/kirtapink-2-thumb.jpeg",       alt: "Kirtana Expression 2, 2025" },
    { src: "images/compressed/paperdoll-kyla-thumb.jpg",alt: "Kyla in Out of Our Minds, 2024" },
    { src: "images/olga.jpg",       alt: "Olga Color Study, 2022" },
    { src: "images/compressed/innout-darker40-thumb.png",       alt: "In-N-Out, 2025" },
    // { src: "images/crowbird figure.png",       alt: "crowbird figure" },
    { src: "images/compressed/hometown-thumb.JPG",       alt: "Hometown Twice Removed, 20" },
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


// ── Hue filter ──
// Each image needs data-hue set after extraction.
// Call initHueFilter() once your images are in the DOM.

function rgbToHue(r, g, b) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
  if (d === 0) return 0;
  let h;
  if (max === r)      h = ((g - b) / d + 6) % 6;
  else if (max === g) h = (b - r) / d + 2;
  else                h = (r - g) / d + 4;
  return h * 60;
}

function hueDist(a, b) { const d = Math.abs(a - b); return d > 180 ? 360 - d : d; }

const offscreen = document.createElement('canvas');
offscreen.width = offscreen.height = 12;
const ctx = offscreen.getContext('2d');

function extractHue(img) {
  try {
    ctx.clearRect(0, 0, 12, 12);
    ctx.drawImage(img, 0, 0, 12, 12);
    const d = ctx.getImageData(0, 0, 12, 12).data;
    let R = 0, G = 0, B = 0, n = 0;
    for (let i = 0; i < d.length; i += 4) { R += d[i]; G += d[i+1]; B += d[i+2]; n++; }
    return rgbToHue(R / n, G / n, B / n);
  } catch (e) { return null; }
}

function initHueFilter() {
  const imgs = document.querySelectorAll('.portfolio-gallery img');

  imgs.forEach(img => {
    const run = () => {
      const h = extractHue(img);
      if (h !== null) img.dataset.hue = Math.round(h);
    };
    img.complete ? run() : img.addEventListener('load', run, { once: true });
    img.crossOrigin = 'anonymous'; // set before src if images aren't loaded yet
  });

  const slider  = document.getElementById('hue-slider');
  const readout = document.getElementById('hue-readout');
  const reset   = document.getElementById('hue-reset');
  const WINDOW  = 30; // degrees either side — tweak to taste
  let active    = false;

  slider.addEventListener('input', () => {
    active = true;
    const hc = +slider.value;
    const hsl = `hsl(${hc}, 70%, 50%)`;
    readout.textContent = `hue: ${hc}°`;
    readout.style.color = hsl;

    document.querySelectorAll('.portfolio-gallery img').forEach(img => {
      const h = parseFloat(img.dataset.hue);
      const match = isNaN(h) || hueDist(h, hc) <= WINDOW;
      // fade the parent element so captions/wrappers fade too
      const el = img.closest('figure, .photo-card, li, div') || img;
      el.style.opacity  = match ? '1' : '0.1';
      el.style.filter   = match ? '' : 'grayscale(80%)';
      el.style.transition = 'opacity 0.3s, filter 0.3s';
    });
  });

  reset.addEventListener('click', () => {
    active = false;
    slider.value = 180;
    readout.textContent = 'all colors';
    readout.style.color = '';
    document.querySelectorAll('.portfolio-gallery img').forEach(img => {
      const el = img.closest('figure, .photo-card, li, div') || img;
      el.style.opacity = '1';
      el.style.filter  = '';
    });
  });
}

// Call after your gallery images are inserted into the DOM:
initHueFilter();
// If you load images dynamically (fetch, lazy-load, etc.),
// call initHueFilter() again after they're added.