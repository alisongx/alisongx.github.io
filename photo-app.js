const images = [
    { src: "images/photography-compressed/IMG_3078.JPG", alt: "IMG_3078.JPG" },
    { src: "images/photography-compressed/IMG_0642.JPG", alt: "IMG_0642.JPG" },
    { src: "images/photography-compressed/IMG_0650.JPG", alt: "IMG_0650.JPG" },
    { src: "images/photography-compressed/IMG_0692.JPG", alt: "IMG_0692.JPG" },
    { src: "images/photography-compressed/IMG_0847.JPG", alt: "IMG_0847.JPG" },
    { src: "images/photography-compressed/IMG_0854.JPG", alt: "IMG_0854.JPG" },
    { src: "images/photography-compressed/IMG_0871.JPG", alt: "IMG_0871.JPG" },
    { src: "images/photography-compressed/IMG_0875.JPG", alt: "IMG_0875.JPG" },
    { src: "images/photography-compressed/IMG_0876.JPG", alt: "IMG_0876.JPG" },
    { src: "images/photography-compressed/IMG_0877.JPG", alt: "IMG_0877.JPG" },
    // { src: "images/photography-compressed/IMG_0881.JPG", alt: "IMG_0881.JPG" },
    { src: "images/photography-compressed/IMG_0888.JPG", alt: "IMG_0888.JPG" },
    { src: "images/photography-compressed/IMG_0906.JPG", alt: "IMG_0906.JPG" },
    { src: "images/photography-compressed/IMG_2619.JPG", alt: "IMG_2619.JPG" },
    { src: "images/photography-compressed/IMG_2622.JPG", alt: "IMG_2622.JPG" },
    { src: "images/photography-compressed/IMG_2623.JPG", alt: "IMG_2623.JPG" },
    { src: "images/photography-compressed/IMG_2629.JPG", alt: "IMG_2629.JPG" },
    { src: "images/photography-compressed/IMG_2635.JPG", alt: "IMG_2635.JPG" },
    { src: "images/photography-compressed/IMG_2640.JPG", alt: "IMG_2640.JPG" },
    { src: "images/photography-compressed/IMG_2645.JPG", alt: "IMG_2645.JPG" },
    { src: "images/photography-compressed/IMG_2647.JPG", alt: "IMG_2647.JPG" },
    { src: "images/photography-compressed/IMG_2655.JPG", alt: "IMG_2655.JPG" },
    { src: "images/photography-compressed/IMG_2974.JPG", alt: "IMG_2974.JPG" },
    { src: "images/photography-compressed/IMG_2985.JPG", alt: "IMG_2985.JPG" },
    { src: "images/photography-compressed/IMG_3021.JPG", alt: "IMG_3021.JPG" },
    { src: "images/photography-compressed/IMG_3027.JPG", alt: "IMG_3027.JPG" },
    { src: "images/photography-compressed/IMG_3038.JPG", alt: "IMG_3038.JPG" },
    { src: "images/photography-compressed/IMG_3071.JPG", alt: "IMG_3071.JPG" },
    { src: "images/photography-compressed/IMG_3086.JPG", alt: "IMG_3086.JPG" },
    { src: "images/photography-compressed/IMG_3100.JPG", alt: "IMG_3100.JPG" },
    { src: "images/photography-compressed/IMG_3117.JPG", alt: "IMG_3117.JPG" },
    // { src: "images/photography-compressed/IMG_3119.JPG", alt: "IMG_3119.JPG" },
    { src: "images/photography-compressed/IMG_3121.JPG", alt: "IMG_3121.JPG" },
    { src: "images/photography-compressed/IMG_3135.JPG", alt: "IMG_3135.JPG" },
    { src: "images/photography-compressed/IMG_3150.JPG", alt: "IMG_3150.JPG" },
    { src: "images/photography-compressed/IMG_3157.JPG", alt: "IMG_3157.JPG" },
    { src: "images/photography-compressed/IMG_3175.JPG", alt: "IMG_3175.JPG" },
    { src: "images/photography-compressed/IMG_3177.JPG", alt: "IMG_3177.JPG" },
    { src: "images/photography-compressed/IMG_3527.JPG", alt: "IMG_3527.JPG" },
    { src: "images/photography-compressed/IMG_3528.JPG", alt: "IMG_3528.JPG" },
    { src: "images/photography-compressed/IMG_4201.JPG", alt: "IMG_4201.JPG" },
    { src: "images/photography-compressed/IMG_4214.JPG", alt: "IMG_4214.JPG" },
    { src: "images/photography-compressed/IMG_4219.JPG", alt: "IMG_4219.JPG" },
    { src: "images/photography-compressed/IMG_4221.JPG", alt: "IMG_4221.JPG" },
    { src: "images/photography-compressed/IMG_4226.JPG", alt: "IMG_4226.JPG" },
    { src: "images/photography-compressed/IMG_4227.JPG", alt: "IMG_4227.JPG" },
    { src: "images/photography-compressed/IMG_4229.JPG", alt: "IMG_4229.JPG" },
    { src: "images/photography-compressed/IMG_4298.JPG", alt: "IMG_4298.JPG" },
    { src: "images/photography-compressed/IMG_4299.JPG", alt: "IMG_4299.JPG" },
    { src: "images/photography-compressed/IMG_5122.JPG", alt: "IMG_5122.JPG" },
    { src: "images/photography-compressed/IMG_5160.JPG", alt: "IMG_5160.JPG" },
    { src: "images/photography-compressed/IMG_5172.JPG", alt: "IMG_5172.JPG" },
    { src: "images/photography-compressed/IMG_6022.JPG", alt: "IMG_6022.JPG" },
    { src: "images/photography-compressed/IMG_6033.JPG", alt: "IMG_6033.JPG" },
    { src: "images/photography-compressed/IMG_6054.JPG", alt: "IMG_6054.JPG" },
    { src: "images/photography-compressed/IMG_9859.JPG", alt: "IMG_9859.JPG" },
    { src: "images/photography-compressed/IMG_9862.JPG", alt: "IMG_9862.JPG" },
    { src: "images/photography-compressed/IMG_9867.JPG", alt: "IMG_9867.JPG" },
    { src: "images/photography-compressed/IMG_9887.JPG", alt: "IMG_9887.JPG" },
    { src: "images/photography-compressed/IMG_9894.JPG", alt: "IMG_9894.JPG" },
    { src: "images/photography-compressed/IMG_9897.JPG", alt: "IMG_9897.JPG" },
    { src: "images/photography-compressed/IMG_9898.JPG", alt: "IMG_9898.JPG" },
    { src: "images/photography-compressed/IMG_9901.JPG", alt: "IMG_9901.JPG" },
    { src: "images/photography-compressed/IMG_9904.JPG", alt: "IMG_9904.JPG" },
    { src: "images/photography-compressed/IMG_9906.JPG", alt: "IMG_9906.JPG" },
    { src: "images/photography-compressed/IMG_0637.JPG", alt: "IMG_0637.JPG" },
    { src: "images/photography-compressed/IMG_0572.JPG", alt: "IMG_0572.JPG" },
    { src: "images/photography-compressed/R1-08627-0005.JPG", alt: "R1-08627-0005.JPG" },
    { src: "images/photography-compressed/R1-08627-0022.JPG", alt: "R1-08627-0022.JPG" },
    { src: "images/photography-compressed/R1-08627-0028.JPG", alt: "R1-08627-0028.JPG" },
    { src: "images/photography-compressed/R1-08627-0032.JPG", alt: "R1-08627-0032.JPG" },
    { src: "images/photography-compressed/R1-08627-0033.JPG", alt: "R1-08627-0033.JPG" },
    { src: "images/photography-compressed/R1-08627-0034.JPG", alt: "R1-08627-0034.JPG" },
    { src: "images/photography-compressed/R1-08627-0035.JPG", alt: "R1-08627-0035.JPG" },
    { src: "images/photography-compressed/R1-08627-0036.JPG", alt: "R1-08627-0036.JPG" },
    { src: "images/photography-compressed/R1-08628-0002.JPG", alt: "R1-08628-0002.JPG" },
    { src: "images/photography-compressed/R1-08628-0003.JPG", alt: "R1-08628-0003.JPG" },
    { src: "images/photography-compressed/R1-08628-0004.JPG", alt: "R1-08628-0004.JPG" },
    { src: "images/photography-compressed/R1-08628-0005.JPG", alt: "R1-08628-0005.JPG" },
    { src: "images/photography-compressed/R1-08628-0028.JPG", alt: "R1-08628-0028.JPG" },
    { src: "images/photography-compressed/R1-08629-008A.JPG", alt: "R1-08629-008A.JPG" },
    { src: "images/photography-compressed/R1-08629-013A.JPG", alt: "R1-08629-013A.JPG" },
    { src: "images/photography-compressed/R1-08629-016A.JPG", alt: "R1-08629-016A.JPG" },
    { src: "images/photography-compressed/R1-08629-019A.JPG", alt: "R1-08629-019A.JPG" },

];

// ── map each filename to its color folder(s) ──
const COLOR_MAP = {
  'IMG_0642.JPG': 'red',   'IMG_0875.JPG': 'red',   'IMG_0906.JPG': 'red',
  'IMG_2974.JPG': 'red',   'IMG_2985.JPG': 'red',   'IMG_3078.JPG': 'red',
  'IMG_3150.JPG': 'red',   'IMG_9897.JPG': 'red',   'IMG_9904.JPG': 'red',

  'IMG_0572.JPG': 'black', 'IMG_0650.JPG': 'black', 'IMG_2640.JPG': 'black',
  'IMG_2645.JPG': 'black', 'IMG_3021.JPG': 'black', 'IMG_3071.JPG': 'black',
  'IMG_3100.JPG': 'black', 'IMG_4214.JPG': 'black', 'IMG_5160.JPG': 'black',
  'IMG_5172.JPG': 'black', 'IMG_6022.JPG': 'black', 'IMG_9894.JPG': 'black',

  'IMG_0692.JPG': 'white', 'IMG_0854.JPG': 'white', 'IMG_2622.JPG': 'white',
  'IMG_2647.JPG': 'white', 'IMG_3038.JPG': 'white', 'IMG_3157.JPG': 'white',
  'IMG_5122.JPG': 'white', 'IMG_6054.JPG': 'white', 'IMG_9862.JPG': 'white',
  'R1-08627-0028.JPG': 'white', 'R1-08627-0032.JPG': 'white',
  'R1-08627-0033.JPG': 'white', 'R1-08627-0034.JPG': 'white',
  'R1-08627-0035.JPG': 'white', 'R1-08627-0036.JPG': 'white',

  'R1-08628-0005.JPG': 'blue',  'IMG_3027.JPG': 'blue',  'IMG_3086.JPG': 'blue',
  'IMG_4201.JPG': 'blue',  'IMG_4229.JPG': 'blue',  'IMG_4298.JPG': 'blue',
  'IMG_4299.JPG': 'blue',  'IMG_9859.JPG': 'blue',  'IMG_9887.JPG': 'blue',
  'IMG_9901.JPG': 'blue',  'R1-08628-0002.JPG': 'blue', 'R1-08628-0003.JPG': 'blue', 'IMG_0637.JPG': 'blue',
  'R1-08628-0004.JPG': 'blue', 'R1-08629-008A.JPG': 'blue',

  'IMG_0871.JPG': 'green', 'IMG_0876.JPG': 'green', 'IMG_0877.JPG': 'green',
  'IMG_0888.JPG': 'green', 'IMG_2623.JPG': 'green', 'IMG_2635.JPG': 'green',
  'IMG_2655.JPG': 'green', 'IMG_3117.JPG': 'green', 'IMG_3175.JPG': 'green',
  'IMG_3177.JPG': 'green', 'IMG_3527.JPG': 'green', 'IMG_3528.JPG': 'green',
  'IMG_4219.JPG': 'green', 'IMG_4221.JPG': 'green', 'IMG_4226.JPG': 'green',
  'IMG_4227.JPG': 'green', 'IMG_9867.JPG': 'green', 'IMG_9898.JPG': 'green',
  'R1-08627-0005.JPG': 'green', 'R1-08628-0028.JPG': 'green',
  'R1-08629-016A.JPG': 'green', 'R1-08629-019A.JPG': 'green',

  'IMG_0847.JPG': 'yellow', 'IMG_2619.JPG': 'yellow', 'IMG_2629.JPG': 'yellow',
  'IMG_3121.JPG': 'yellow', 'IMG_6033.JPG': 'yellow', 'IMG_9906.JPG': 'yellow',
  'R1-08627-0022.JPG': 'yellow', 'R1-08629-013A.JPG': 'yellow',
};

// ── build gallery items from a list of image objects ──
function renderItems(list) {
  const gallery = document.querySelector('.portfolio-gallery');
  gallery.innerHTML = '';

  list.forEach((image, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.delay = (i % 3) * 80;
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
    gallery.appendChild(item);
  });

  // re-attach lightbox clicks
  attachLightbox();

  // re-run scroll observer
  requestAnimationFrame(observeItems);
}

// ── initial full render ──
renderItems(images);

// ── lightbox ──
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
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox-backdrop').addEventListener('click', closeLightbox);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

function attachLightbox() {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });
}

// ── scroll animation observer ──
function observeItems() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseFloat(el.dataset.delay || 0);
        setTimeout(() => el.classList.add('visible'), delay);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.01 });

  document.querySelectorAll('.gallery-item:not(.visible)').forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      item.classList.add('visible');
    } else {
      observer.observe(item);
    }
  });
}

window.addEventListener('load', observeItems);

// ── color filter ──
let activeFilter = 'all';

function filterGallery(color) {
  activeFilter = color;
  const filtered = color === 'all'
    ? images
    : images.filter(img => {
        const filename = img.src.split('/').pop();
        return COLOR_MAP[filename] === color;
      });
  renderItems(filtered);
}

document.querySelectorAll('.zone').forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.dataset.folder;
    // clicking active filter again resets to all
    if (color === activeFilter && color !== 'all') {
      document.querySelectorAll('.zone').forEach(z => z.classList.remove('active'));
      document.querySelector('.zone[data-folder="all"]').classList.add('active');
      filterGallery('all');
      return;
    }
    document.querySelectorAll('.zone').forEach(z => z.classList.remove('active'));
    btn.classList.add('active');
    filterGallery(color);
  });
});

// const FOLDERS = {
//   red:    ['IMG_0642.JPG', 'IMG_0875.JPG', 'IMG_0906.JPG', 'IMG_2974.JPG', 'IMG_2985.JPG', 'IMG_3078.JPG', 'IMG_3150.JPG', 'IMG_9897.JPG', 'IMG_9904.JPG'],
//   black:  ['IMG_0572.JPG', 'IMG_0650.JPG', 'IMG_2640.JPG', 'IMG_2645.JPG', 'IMG_3021.JPG', 'IMG_3071.JPG', 'IMG_3100.JPG', 'IMG_4214.JPG', 'IMG_5160.JPG', 'IMG_5172.JPG', 'IMG_6022.JPG', 'IMG_9894.JPG'],
//   white:  ['IMG_0692.JPG', 'IMG_0854.JPG', 'IMG_2622.JPG', 'IMG_2647.JPG', 'IMG_3038.JPG', 'IMG_3157.JPG', 'IMG_5122.JPG', 'IMG_6054.JPG', 'IMG_9862.JPG', 'R1-08627-0028.JPG', 'R1-08627-0032.JPG', 'R1-08627-0033.JPG', 'R1-08627-0034.JPG', 'R1-08627-0035.JPG', 'R1-08627-0036.JPG'],
//   blue:   ['IMG_0637.JPG', 'IMG_3027.JPG', 'IMG_3086.JPG', 'IMG_4201.JPG', 'IMG_4229.JPG', 'IMG_4298.JPG', 'IMG_4299.JPG', 'IMG_9859.JPG', 'IMG_9887.JPG', 'IMG_9901.JPG', 'R1-08628-0002.JPG', 'R1-08628-0003.JPG', 'R1-08628-0004.JPG', 'R1-08628-0005.JPG', 'R1-08629-008A.JPG'],
//   green:  ['IMG_0871.JPG', 'IMG_0876.JPG', 'IMG_0877.JPG', 'IMG_0881.JPG', 'IMG_0888.JPG', 'IMG_2623.JPG', 'IMG_2635.JPG', 'IMG_2655.JPG', 'IMG_3117.JPG', 'IMG_3175.JPG', 'IMG_3177.JPG', 'IMG_3527.JPG', 'IMG_3528.JPG', 'IMG_4219.JPG', 'IMG_4221.JPG', 'IMG_4226.JPG', 'IMG_4227.JPG', 'IMG_9867.JPG', 'IMG_9898.JPG', 'R1-08627-0005.JPG', 'R1-08628-0028.JPG', 'R1-08629-016A.JPG', 'R1-08629-019A.JPG'],
//   yellow: ['IMG_0847.JPG', 'IMG_2619.JPG', 'IMG_2629.JPG', 'IMG_3121.JPG', 'IMG_6033.JPG', 'IMG_9906.JPG', 'R1-08627-0022.JPG', 'R1-08629-013A.JPG'],
// };