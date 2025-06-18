// Smooth fade transition for all internal navigation
document.addEventListener('DOMContentLoaded', () => {
  // Overlay transition init
  const overlay = document.getElementById('transition-overlay');
  if (overlay) {
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';
  }

  // Apply fade navigation to all internal anchor links except those with #
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    if (
      href &&
      !href.startsWith('http') &&
      !href.startsWith('#') &&
      !link.classList.contains('no-transition')
    ) {
      link.addEventListener('click', function (e) {
        // Avoid external links
        if (
          link.target !== '_blank' &&
          !link.hasAttribute('download') &&
          overlay
        ) {
          e.preventDefault();
          overlay.style.pointerEvents = 'auto';
          overlay.style.opacity = 1;
          setTimeout(() => {
            window.location.href = href;
          }, 500);
        }
      });
    }
  });

  // Navbar Mobile Menu Animation
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('animate-fadeIn');
      menuBtn.setAttribute(
        'aria-expanded',
        menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      );
    });
    // Auto close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove('animate-fadeIn');
      });
    });
  }


  // Button ripple effect (for .ripple class)
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - btn.getBoundingClientRect().left - radius}px`;
      circle.style.top = `${e.clientY - btn.getBoundingClientRect().top - radius}px`;
      circle.classList.add('ripple-effect');
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });
  });
});
