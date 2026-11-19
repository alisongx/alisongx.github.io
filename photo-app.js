const images = [
    { src: "images/photography-compressed/2CE6FF3D-10DF-4E37-8CD8-9A442467244F.jpg", alt: "2CE6FF3D-10DF-4E37-8CD8-9A442467244F.jpg" },
    { src: "images/photography-compressed/2D4F9E7A-C546-48D5-A5B2-0D0AD308BFF0.jpg", alt: "2D4F9E7A-C546-48D5-A5B2-0D0AD308BFF0.jpg" },
    { src: "images/photography-compressed/2DF1D457-93C1-416B-955D-BAE2B821A394.jpg", alt: "2DF1D457-93C1-416B-955D-BAE2B821A394.jpg" },
    { src: "images/photography-compressed/3FF61DBC-4D61-4FB7-9942-B210E28F7594.jpg", alt: "3FF61DBC-4D61-4FB7-9942-B210E28F7594.jpg" },
    { src: "images/photography-compressed/5C8DAD8E-869A-46CA-AE2C-0C7984CC1A4E.jpg", alt: "5C8DAD8E-869A-46CA-AE2C-0C7984CC1A4E.jpg" },
    { src: "images/photography-compressed/7B0C0FD4-9213-460D-B2EE-DB9F23111821.jpg", alt: "7B0C0FD4-9213-460D-B2EE-DB9F23111821.jpg" },
    { src: "images/photography-compressed/7DA5001E-9E27-46E8-A464-0B986A0A33E5.jpg", alt: "7DA5001E-9E27-46E8-A464-0B986A0A33E5.jpg" },
    { src: "images/photography-compressed/43AD652D-EC6F-4FBA-8AD0-BBC2A8778522.jpg", alt: "43AD652D-EC6F-4FBA-8AD0-BBC2A8778522.jpg" },
    { src: "images/photography-compressed/59BC12E2-9F4D-457B-A300-418D6499B689.jpg", alt: "59BC12E2-9F4D-457B-A300-418D6499B689.jpg" },
    { src: "images/photography-compressed/64DB4BAF-532A-4E6B-9BA9-B542567B7F8A.jpg", alt: "64DB4BAF-532A-4E6B-9BA9-B542567B7F8A.jpg" },
    { src: "images/photography-compressed/98CA32B9-8A1F-44A0-B048-2D2D43E119DF.jpg", alt: "98CA32B9-8A1F-44A0-B048-2D2D43E119DF.jpg" },
    { src: "images/photography-compressed/251D4DFF-FEC9-43EF-BA4B-8F4B313000E3.jpg", alt: "251D4DFF-FEC9-43EF-BA4B-8F4B313000E3.jpg" },
    { src: "images/photography-compressed/0259D820-68EA-4F6F-8095-D5980DF00DC4.jpg", alt: "0259D820-68EA-4F6F-8095-D5980DF00DC4.jpg" },
    { src: "images/photography-compressed/658DE811-B96E-470B-9871-2A7E32D25B87.jpg", alt: "658DE811-B96E-470B-9871-2A7E32D25B87.jpg" },
    { src: "images/photography-compressed/700DEDF0-E103-4875-B82F-48C0CE171D9D.jpg", alt: "700DEDF0-E103-4875-B82F-48C0CE171D9D.jpg" },
    { src: "images/photography-compressed/785F49DC-2C79-4FFD-9899-5F9C72990BBC.jpg", alt: "785F49DC-2C79-4FFD-9899-5F9C72990BBC.jpg" },
    { src: "images/photography-compressed/8411BBCA-73BE-4771-9A1F-512C3DC0D806.jpg", alt: "8411BBCA-73BE-4771-9A1F-512C3DC0D806.jpg" },
    { src: "images/photography-compressed/83276B9D-C04F-4ADF-8584-25A63A0BE889.jpg", alt: "83276B9D-C04F-4ADF-8584-25A63A0BE889.jpg" },
    { src: "images/photography-compressed/A2C136AF-71A0-40E0-8F38-7DE047002320.jpg", alt: "A2C136AF-71A0-40E0-8F38-7DE047002320.jpg" },
    { src: "images/photography-compressed/A079F777-E8BB-4B27-92D3-6C90F49D7030.jpg", alt: "A079F777-E8BB-4B27-92D3-6C90F49D7030.jpg" },
    { src: "images/photography-compressed/A8861490-31E2-499F-AEC2-4658370F2B47.jpg", alt: "A8861490-31E2-499F-AEC2-4658370F2B47.jpg" },
    { src: "images/photography-compressed/BDCC9335-A73C-4146-8319-BA15661F5C2A.jpg", alt: "BDCC9335-A73C-4146-8319-BA15661F5C2A.jpg" },
    { src: "images/photography-compressed/BE799AA4-E680-4809-85EA-08F9A1F70D22.jpg", alt: "BE799AA4-E680-4809-85EA-08F9A1F70D22.jpg" },
    { src: "images/photography-compressed/C37F24CC-EA8A-4E81-8616-ED3BD4099931.jpg", alt: "C37F24CC-EA8A-4E81-8616-ED3BD4099931.jpg" },
    { src: "images/photography-compressed/C179AD70-4797-4681-AEEA-3CE9A3242E7D.jpg", alt: "C179AD70-4797-4681-AEEA-3CE9A3242E7D.jpg" },
    { src: "images/photography-compressed/CFFFCA7E-C3CA-43DF-AF0B-FC8100FFFEE8_1_102_o.jpg", alt: "CFFFCA7E-C3CA-43DF-AF0B-FC8100FFFEE8_1_102_o.jpg" },
    { src: "images/photography-compressed/DC400B32-2518-4B3C-A913-D1A3E9BE305B.jpg", alt: "DC400B32-2518-4B3C-A913-D1A3E9BE305B.jpg" },
    { src: "images/photography-compressed/F14E8F49-1944-4EE3-BFFD-8B930D292BF4.jpg", alt: "F14E8F49-1944-4EE3-BFFD-8B930D292BF4.jpg" },
    { src: "images/photography-compressed/FB78BA83-04B5-4C91-83AE-2CF4578D8235.jpg", alt: "FB78BA83-04B5-4C91-83AE-2CF4578D8235.jpg" },

];

// ── map each filename to its color folders ──
const COLOR_MAP = {
  'IMG_0642.JPG': 'red',   'IMG_0875.JPG': 'red',   'IMG_0906.JPG': 'red',
  'IMG_2974.JPG': 'red',   'IMG_2985.JPG': 'red',   'IMG_3078.JPG': 'red',
  'IMG_3150.JPG': 'red',   'IMG_9897.JPG': 'red',   'IMG_9904.JPG': 'black',

  'IMG_0572.JPG': 'black', 'IMG_0650.JPG': 'black', 'IMG_2640.JPG': 'white',
  'IMG_2645.JPG': 'black', 'IMG_3021.JPG': 'black', 'IMG_3071.JPG': 'black',
  'IMG_3100.JPG': 'red', 'IMG_4214.JPG': 'black', 'IMG_5160.JPG': 'black',
  'IMG_5172.JPG': 'black', 'IMG_6022.JPG': 'black', 'IMG_9894.JPG': 'black',
  'IMG_2637.JPG': 'black',
  'IMG_2643.JPG': 'blue',
  'IMG_3490.JPG': 'black',
  'IMG_5135.JPG': 'black',
  'IMG_9893.JPG': 'black',
  'R1-08628-0026.JPG': 'black',

  'IMG_0692.JPG': 'white', 'IMG_0854.JPG': 'black', 'IMG_2622.JPG': 'white',
  'IMG_2647.JPG': 'white', 'IMG_3038.JPG': 'white', 'IMG_3157.JPG': 'white',
  'IMG_5122.JPG': 'white', 'IMG_6054.JPG': 'white', 'IMG_9862.JPG': 'white',
  'R1-08627-0028.JPG': 'white', 'R1-08627-0032.JPG': 'white',
  'R1-08627-0033.JPG': 'white', 'R1-08627-0034.JPG': 'white',
  'R1-08627-0035.JPG': 'yellow', 'R1-08627-0036.JPG': 'white',
  'IMG_2684.JPG': 'white',
  'IMG_2977.JPG': 'white',
  'R1-08629-020A.JPG': 'white',

  'IMG_0637.JPG': 'blue',  'IMG_3027.JPG': 'blue',  'IMG_3086.JPG': 'blue',
  'IMG_4201.JPG': 'blue',  'IMG_4229.JPG': 'blue',  'IMG_4298.JPG': 'blue',
  'IMG_4299.JPG': 'blue',  'IMG_9859.JPG': 'blue',  'IMG_9887.JPG': 'blue',
  'IMG_9901.JPG': 'blue',  'R1-08628-0002.JPG': 'blue', 'R1-08628-0003.JPG': 'blue',
  'R1-08628-0004.JPG': 'blue', 'R1-08628-0005.JPG': 'blue', 'R1-08629-008A.JPG': 'blue',
  'IMG_2651.JPG': 'green', 'IMG_3087.JPG': 'blue',

  'IMG_0871.JPG': 'green', 'IMG_0876.JPG': 'green', 'IMG_0877.JPG': 'green',
  'IMG_0888.JPG': 'green', 'IMG_2623.JPG': 'yellow', 'IMG_2635.JPG': 'green',
  'IMG_2655.JPG': 'green', 'IMG_3117.JPG': 'green', 'IMG_3175.JPG': 'green',
  'IMG_3177.JPG': 'green', 'IMG_3527.JPG': 'green', 'IMG_3528.JPG': 'green',
  'IMG_4219.JPG': 'green', 'IMG_4221.JPG': 'green', 'IMG_4226.JPG': 'green',
  'IMG_4227.JPG': 'green', 'IMG_9867.JPG': 'green', 'IMG_9898.JPG': 'green',
  'R1-08627-0005.JPG': 'green', 'R1-08628-0028.JPG': 'green',
  'R1-08629-016A.JPG': 'green', 'R1-08629-019A.JPG': 'green',
  'IMG_3024.JPG': 'green', 'IMG_9802.JPG': 'green',

  'IMG_0847.JPG': 'yellow', 'IMG_2619.JPG': 'yellow', 'IMG_2629.JPG': 'yellow',
  'IMG_3121.JPG': 'red', 'IMG_6033.JPG': 'yellow', 'IMG_9906.JPG': 'yellow',
  'R1-08627-0022.JPG': 'yellow', 'R1-08629-013A.JPG': 'yellow',
  'IMG_2653.JPG': 'white', 'IMG_4203.JPG': 'yellow',
};

// dimensions of all photos so space reserved b4 loading
const DIMS = {
  'IMG_0572.JPG': [1512,1002], 'IMG_0637.JPG': [1002,1512], 'IMG_0642.JPG': [1002,1512],
  'IMG_0650.JPG': [1002,1512], 'IMG_0692.JPG': [1512,1002], 'IMG_0847.JPG': [1512,1002],
  'IMG_0854.JPG': [1458,1002], 'IMG_0871.JPG': [1512,1002], 'IMG_0875.JPG': [1512,1002],
  'IMG_0876.JPG': [1512,1002], 'IMG_0877.JPG': [1512,1002], 'IMG_0881.JPG': [1512,1002],
  'IMG_0888.JPG': [1512,1002], 'IMG_0906.JPG': [1002,1512], 'IMG_2619.JPG': [1512,1002],
  'IMG_2622.JPG': [1512,1002], 'IMG_2623.JPG': [1512,1002], 'IMG_2629.JPG': [1002,1512],
  'IMG_2635.JPG': [1512,1002], 'IMG_2637.JPG': [1512,1002], 'IMG_2640.JPG': [1512,1002],
  'IMG_2643.JPG': [1512,1002], 'IMG_2645.JPG': [1512,1002], 'IMG_2647.JPG': [1512,1002],
  'IMG_2651.JPG': [1351,895],  'IMG_2653.JPG': [1512,1002], 'IMG_2655.JPG': [1477,979],
  'IMG_2684.JPG': [1512,1002], 'IMG_2974.JPG': [1002,1512], 'IMG_2977.JPG': [1424,945],
  'IMG_2985.JPG': [1512,1002], 'IMG_3021.JPG': [1512,1002], 'IMG_3024.JPG': [1002,1512],
  'IMG_3027.JPG': [1002,1512], 'IMG_3038.JPG': [1512,1002], 'IMG_3071.JPG': [1512,1002],
  'IMG_3078.JPG': [1512,1002], 'IMG_3086.JPG': [3067,2033], 'IMG_3087.JPG': [3130,2075],
  'IMG_3100.JPG': [3130,2075], 'IMG_3117.JPG': [3130,2075], 'IMG_3119.JPG': [3130,2075],
  'IMG_3121.JPG': [3130,2075], 'IMG_3135.JPG': [3130,2075], 'IMG_3150.JPG': [3130,2075],
  'IMG_3157.JPG': [3130,2075], 'IMG_3175.JPG': [3130,2075], 'IMG_3177.JPG': [3130,2075],
  'IMG_3490.JPG': [1512,1002], 'IMG_3527.JPG': [1512,1002], 'IMG_3528.JPG': [1512,1002],
  'IMG_4201.JPG': [1002,1512], 'IMG_4203.JPG': [1512,1002], 'IMG_4214.JPG': [1512,1002],
  'IMG_4219.JPG': [1512,1002], 'IMG_4221.JPG': [1002,1512], 'IMG_4226.JPG': [1512,1002],
  'IMG_4227.JPG': [1512,1002], 'IMG_4229.JPG': [1512,1002], 'IMG_4298.JPG': [1512,1002],
  'IMG_4299.JPG': [1323,876],  'IMG_5122.JPG': [1002,1512], 'IMG_5135.JPG': [1512,1002],
  'IMG_5160.JPG': [1512,1002], 'IMG_5172.JPG': [1002,1512], 'IMG_6022.JPG': [1512,1002],
  'IMG_6033.JPG': [1512,1002], 'IMG_6054.JPG': [1512,1002], 'IMG_9802.JPG': [1512,1002],
  'IMG_9859.JPG': [1512,1002], 'IMG_9862.JPG': [1512,1002], 'IMG_9867.JPG': [1512,1002],
  'IMG_9887.JPG': [964,1455],  'IMG_9893.JPG': [1002,1512], 'IMG_9894.JPG': [1002,1512],
  'IMG_9897.JPG': [1469,972],  'IMG_9898.JPG': [1512,1002], 'IMG_9901.JPG': [1002,1512],
  'IMG_9904.JPG': [1512,1002], 'IMG_9906.JPG': [1002,1512],
  'R1-08627-0005.JPG': [2432,3637], 'R1-08627-0022.JPG': [3637,2432],
  'R1-08627-0028.JPG': [3637,2432], 'R1-08627-0032.JPG': [2432,3637],
  'R1-08627-0033.JPG': [3637,2432], 'R1-08627-0034.JPG': [2432,3637],
  'R1-08627-0035.JPG': [3637,2432], 'R1-08627-0036.JPG': [2432,3637],
  'R1-08628-0002.JPG': [2020,1350], 'R1-08628-0003.JPG': [3637,2432],
  'R1-08628-0004.JPG': [2432,3637], 'R1-08628-0005.JPG': [2432,3637],
  'R1-08628-0026.JPG': [3637,2432], 'R1-08628-0028.JPG': [3637,2432],
  'R1-08629-008A.JPG': [2432,3637], 'R1-08629-013A.JPG': [2432,3637],
  'R1-08629-016A.JPG': [2432,3637], 'R1-08629-019A.JPG': [3637,2432],
  'R1-08629-020A.JPG': [2432,3637],
};

// ── build gallery items from a list of image objects ──
function renderItems(list) {
  const gallery = document.querySelector('.portfolio-gallery');
  gallery.innerHTML = '';

  list.forEach((image, i) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.dataset.delay = (i % 3) * 80;
    const filename = image.src.split('/').pop();
    const dims = DIMS[filename];
    const sizeAttrs = dims ? ` width="${dims[0]}" height="${dims[1]}"` : '';
    item.innerHTML = `<img src="${image.src}" alt="${image.alt}"${sizeAttrs} loading="lazy">`;
    item.addEventListener('click', () => openLightbox(image.src, image.alt));
    gallery.appendChild(item);
  });
  requestAnimationFrame(observeItems);
}

renderItems(images);

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
