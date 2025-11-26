document.querySelectorAll('.pill-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.pill-btn.active')?.classList.remove('active');
    btn.classList.add('active');

    const lang = btn.dataset.lang; // "fr" ou "ar"
    // Redirection vers la page correspondante
    if (lang === 'ar') {
      window.location.href = 'index-ar.html';
    } else {
      window.location.href = 'index.html';
    }
  });
});// reserved for future interactive features
