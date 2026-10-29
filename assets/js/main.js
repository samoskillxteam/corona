/**
 * Corona International Concepts Limited (CICL)
 * Modern Vanilla JS Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      navMenu.classList.toggle('open');
      const isOpen = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('open');
      }
    });

    // Mobile dropdown accordion
    const navDropdowns = document.querySelectorAll('.nav-item.has-dropdown');
    navDropdowns.forEach(item => {
      const link = item.querySelector('.nav-link');
      const menu = item.querySelector('.dropdown-menu');
      if (link && menu) {
        link.addEventListener('click', (e) => {
          if (window.innerWidth <= 900) {
            e.preventDefault();
            menu.classList.toggle('mobile-open');
          }
        });
      }
    });
  }

  // 2. Active Nav Link Highlighting
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link, .dropdown-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && (href === './' || href === 'index.html'))) {
      link.classList.add('active');
      const parentDropdown = link.closest('.nav-item.has-dropdown');
      if (parentDropdown) {
        parentDropdown.querySelector('.nav-link')?.classList.add('active');
      }
    }
  });

  // 3. Hero Carousel Slider
  const slides = document.querySelectorAll('.hero-slide');
  const dotsContainer = document.querySelector('.slider-dots');
  const prevBtn = document.querySelector('.slider-arrow.prev');
  const nextBtn = document.querySelector('.slider-arrow.next');

  if (slides.length > 0) {
    let currentSlide = 0;
    let slideInterval = null;

    // Create dots
    if (dotsContainer) {
      dotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.classList.add('slider-dot');
        dot.setAttribute('aria-label', `Slide ${idx + 1}`);
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoplay();
        });
        dotsContainer.appendChild(dot);
      });
    }

    const dots = document.querySelectorAll('.slider-dot');

    function goToSlide(index) {
      slides[currentSlide].classList.remove('active');
      if (dots[currentSlide]) dots[currentSlide].classList.remove('active');

      currentSlide = (index + slides.length) % slides.length;

      slides[currentSlide].classList.add('active');
      if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
    }

    function prevSlide() {
      goToSlide(currentSlide - 1);
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
      });
    }

    function startAutoplay() {
      slideInterval = setInterval(nextSlide, 6000);
    }

    function resetAutoplay() {
      if (slideInterval) clearInterval(slideInterval);
      startAutoplay();
    }

    startAutoplay();

    // Pause on hover
    const sliderContainer = document.querySelector('.hero-slider');
    if (sliderContainer) {
      sliderContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
      sliderContainer.addEventListener('mouseleave', startAutoplay);
    }
  }

  // 4. Statistics Counter Animation
  const counters = document.querySelectorAll('.stat-num');
  if (counters.length > 0) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const countTo = parseInt(target.getAttribute('data-target') || target.innerText, 10);
          if (isNaN(countTo)) return;

          let count = 0;
          const speed = Math.max(20, Math.floor(countTo / 50));
          const updateCount = () => {
            count += speed;
            if (count < countTo) {
              target.innerText = count + '+';
              requestAnimationFrame(updateCount);
            } else {
              target.innerText = countTo + '+';
            }
          };
          updateCount();
          obs.unobserve(target);
        }
      });
    }, { threshold: 0.2 });

    counters.forEach(counter => observer.observe(counter));
  }

  // 5. Contact Form Submissions Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      const name = contactForm.querySelector('[name="name"]')?.value.trim();
      const email = contactForm.querySelector('[name="email"]')?.value.trim();
      const subject = contactForm.querySelector('[name="subject"]')?.value.trim() || 'Website Inquiry';
      const message = contactForm.querySelector('[name="message"]')?.value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        e.preventDefault();
        return;
      }

      // Check if user set their own action or wants direct mailto/WhatsApp fallback
      const action = contactForm.getAttribute('action');
      if (!action || action === '#' || action.includes('example.com')) {
        e.preventDefault();
        const mailtoUri = `mailto:info@coronainternationalconcepts.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message)}`;
        window.location.href = mailtoUri;
      }
    });
  }
});
