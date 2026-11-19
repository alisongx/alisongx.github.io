const images = [
    { src: "images/grad/000393280024.jpg", alt: "000393280024.jpg" }, //all 4 ucsc redwoods
    { src: "images/grad/A079F777-E8BB-4B27-92D3-6C90F49D7030.jpg", alt: "A079F777-E8BB-4B27-92D3-6C90F49D7030.jpg" }, //chlobench left
    { src: "images/grad/5C8DAD8E-869A-46CA-AE2C-0C7984CC1A4E.jpg", alt: "5C8DAD8E-869A-46CA-AE2C-0C7984CC1A4E.jpg" }, //nava tuck
    { src: "images/grad/2CE6FF3D-10DF-4E37-8CD8-9A442467244F.jpg", alt: "2CE6FF3D-10DF-4E37-8CD8-9A442467244F.jpg" },
    { src: "images/grad/2D4F9E7A-C546-48D5-A5B2-0D0AD308BFF0.jpg", alt: "2D4F9E7A-C546-48D5-A5B2-0D0AD308BFF0.jpg" },
    { src: "images/grad/2DF1D457-93C1-416B-955D-BAE2B821A394.jpg", alt: "2DF1D457-93C1-416B-955D-BAE2B821A394.jpg" },
    { src: "images/grad/3FF61DBC-4D61-4FB7-9942-B210E28F7594.jpg", alt: "3FF61DBC-4D61-4FB7-9942-B210E28F7594.jpg" },
    { src: "images/grad/7DA5001E-9E27-46E8-A464-0B986A0A33E5.jpg", alt: "7DA5001E-9E27-46E8-A464-0B986A0A33E5.jpg" },
    { src: "images/grad/000393290029.jpg", alt: "000393290029.jpg" },
    { src: "images/grad/000393290030.jpg", alt: "000393290030.jpg" },
    { src: "images/grad/43AD652D-EC6F-4FBA-8AD0-BBC2A8778522.jpg", alt: "43AD652D-EC6F-4FBA-8AD0-BBC2A8778522.jpg" },
    { src: "images/grad/59BC12E2-9F4D-457B-A300-418D6499B689.jpg", alt: "59BC12E2-9F4D-457B-A300-418D6499B689.jpg" },
    { src: "images/grad/64DB4BAF-532A-4E6B-9BA9-B542567B7F8A.jpg", alt: "64DB4BAF-532A-4E6B-9BA9-B542567B7F8A.jpg" },
    { src: "images/grad/98CA32B9-8A1F-44A0-B048-2D2D43E119DF.jpg", alt: "98CA32B9-8A1F-44A0-B048-2D2D43E119DF.jpg" },
    { src: "images/grad/251D4DFF-FEC9-43EF-BA4B-8F4B313000E3.jpg", alt: "251D4DFF-FEC9-43EF-BA4B-8F4B313000E3.jpg" },
    { src: "images/grad/0259D820-68EA-4F6F-8095-D5980DF00DC4.jpg", alt: "0259D820-68EA-4F6F-8095-D5980DF00DC4.jpg" },
    { src: "images/grad/000393280028.jpg", alt: "000393280028.jpg" },
    { src: "images/grad/658DE811-B96E-470B-9871-2A7E32D25B87.jpg", alt: "658DE811-B96E-470B-9871-2A7E32D25B87.jpg" },
    { src: "images/grad/700DEDF0-E103-4875-B82F-48C0CE171D9D.jpg", alt: "700DEDF0-E103-4875-B82F-48C0CE171D9D.jpg" },
    { src: "images/grad/785F49DC-2C79-4FFD-9899-5F9C72990BBC.jpg", alt: "785F49DC-2C79-4FFD-9899-5F9C72990BBC.jpg" },

    //col 2
    { src: "images/grad/8411BBCA-73BE-4771-9A1F-512C3DC0D806.jpg", alt: "8411BBCA-73BE-4771-9A1F-512C3DC0D806.jpg" }, //chloe in lib books
    { src: "images/grad/83276B9D-C04F-4ADF-8584-25A63A0BE889.jpg", alt: "83276B9D-C04F-4ADF-8584-25A63A0BE889.jpg" },
    { src: "images/grad/A2C136AF-71A0-40E0-8F38-7DE047002320.jpg", alt: "A2C136AF-71A0-40E0-8F38-7DE047002320.jpg" },
    { src: "images/grad/A8861490-31E2-499F-AEC2-4658370F2B47.jpg", alt: "A8861490-31E2-499F-AEC2-4658370F2B47.jpg" },
    { src: "images/grad/BDCC9335-A73C-4146-8319-BA15661F5C2A.jpg", alt: "BDCC9335-A73C-4146-8319-BA15661F5C2A.jpg" },
    { src: "images/grad/BE799AA4-E680-4809-85EA-08F9A1F70D22.jpg", alt: "BE799AA4-E680-4809-85EA-08F9A1F70D22.jpg" },
    { src: "images/grad/7B0C0FD4-9213-460D-B2EE-DB9F23111821.jpg", alt: "7B0C0FD4-9213-460D-B2EE-DB9F23111821.jpg" },
    { src: "images/grad/C37F24CC-EA8A-4E81-8616-ED3BD4099931.jpg", alt: "C37F24CC-EA8A-4E81-8616-ED3BD4099931.jpg" },
    { src: "images/grad/C179AD70-4797-4681-AEEA-3CE9A3242E7D.jpg", alt: "C179AD70-4797-4681-AEEA-3CE9A3242E7D.jpg" },
    { src: "images/grad/CFFFCA7E-C3CA-43DF-AF0B-FC8100FFFEE8_1_102_o.jpg", alt: "CFFFCA7E-C3CA-43DF-AF0B-FC8100FFFEE8_1_102_o.jpg" },
    { src: "images/grad/000393280016.jpg", alt: "000393280016.jpg" },
    { src: "images/grad/DC400B32-2518-4B3C-A913-D1A3E9BE305B.jpg", alt: "DC400B32-2518-4B3C-A913-D1A3E9BE305B.jpg" },
    { src: "images/grad/F14E8F49-1944-4EE3-BFFD-8B930D292BF4.jpg", alt: "F14E8F49-1944-4EE3-BFFD-8B930D292BF4.jpg" },
    { src: "images/grad/FB78BA83-04B5-4C91-83AE-2CF4578D8235.jpg", alt: "FB78BA83-04B5-4C91-83AE-2CF4578D8235.jpg" },
    { src: "images/grad/000393280006.jpg", alt: "000393280006.jpg" },
    { src: "images/grad/000393280009.jpg", alt: "000393280009.jpg" },
    { src: "images/grad/000393280018.jpg", alt: "000393280018.jpg" },
];


// dimensions of all photos so space reserved b4 loading
const DIMS = {};

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
