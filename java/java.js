 function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panel-' + tab).classList.add('active');
    event.target.classList.add('active');
  }

  /* ── Lightbox: abrir imágenes en grande al tocarlas/clic ── */
  document.addEventListener('DOMContentLoaded', function () {
    const zoomableImages = document.querySelectorAll('.arq-diagram-img, .stat-img');
    if (!zoomableImages.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = '<span class="lightbox-close" aria-label="Cerrar">&times;</span><img class="lightbox-img" src="" alt="">';
    document.body.appendChild(overlay);

    const lightboxImg = overlay.querySelector('.lightbox-img');
    const closeBtn = overlay.querySelector('.lightbox-close');

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }

    zoomableImages.forEach(function (img) {
      img.classList.add('zoomable');
      img.addEventListener('click', function () {
        openLightbox(img.src, img.alt);
      });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === closeBtn) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  });