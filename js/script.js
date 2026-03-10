// ═══════════════════════════════════════════
// NEC PREFABS - MAIN JAVASCRIPT
// ═══════════════════════════════════════════

/* ─── HERO SLIDER ─── */
(function initHeroSlider() {
  const slides = document.querySelectorAll('.hero__slide');
  const dots = document.querySelectorAll('.hero__dot');
  let current = 0;
  let timer;

  function go(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    dots[current].setAttribute('aria-selected', 'false');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    dots[current].setAttribute('aria-selected', 'true');
  }

  function next() {
    go(current + 1);
  }

  function startAuto() {
    timer = setInterval(next, 5500);
  }

  function resetAuto() {
    clearInterval(timer);
    startAuto();
  }

  document.getElementById('heroNext').addEventListener('click', () => {
    go(current + 1);
    resetAuto();
  });

  document.getElementById('heroPrev').addEventListener('click', () => {
    go(current - 1);
    resetAuto();
  });

  dots.forEach(d => d.addEventListener('click', () => {
    go(+d.dataset.slide);
    resetAuto();
  }));

  startAuto();
})();

/* ─── NAVBAR BURGER ─── */
(function initMobileMenu() {
  const btn = document.getElementById('burger');
  const menu = document.getElementById('mobile-menu');

  btn.addEventListener('click', () => {
    const open = btn.classList.toggle('open');
    menu.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('.nav__mobile-link, a').forEach(link => {
    link.addEventListener('click', () => {
      btn.classList.remove('open');
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
})();

/* ─── ABOUT TABS ─── */
(function initAboutTabs() {
  document.querySelectorAll('.about__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.about__tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.about__tab-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    });
  });
})();

/* ─── PRICING TABS ─── */
(function initPricingTabs() {
  document.querySelectorAll('.pricing__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.pricing__tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      document.getElementById('pricing-commercial').style.display = tab.dataset.ptab === 'commercial' ? 'grid' : 'none';
      document.getElementById('pricing-residential').style.display = tab.dataset.ptab === 'residential' ? 'grid' : 'none';
    });
  });
})();

/* ─── TESTIMONIALS SLIDER ─── */
(function initTestimonialsSlider() {
  const track = document.getElementById('testiTrack');
  const cards = track.querySelectorAll('.testimonial-card');
  let idx = 0;

  function getVisible() {
    const w = window.innerWidth;
    return w >= 900 ? 3 : w >= 580 ? 2 : 1;
  }

  function update() {
    const vis = getVisible();
    const cardW = track.parentElement.offsetWidth;
    const gap = 24;
    const w = (cardW - gap * (vis - 1)) / vis;
    cards.forEach(c => { c.style.minWidth = w + 'px'; });
    const max = Math.max(0, cards.length - vis);
    idx = Math.min(idx, max);
    track.style.transform = `translateX(-${idx * (w + gap)}px)`;
  }

  document.getElementById('testiNext').addEventListener('click', () => {
    const vis = getVisible();
    if (idx < cards.length - vis) idx++;
    update();
  });

  document.getElementById('testiPrev').addEventListener('click', () => {
    if (idx > 0) idx--;
    update();
  });

  window.addEventListener('resize', update);
  update();
})();

/* ─── SCROLL REVEAL ─── */
(function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => obs.observe(el));
})();

/* ─── COUNTERS ─── */
(function initCounters() {
  const counters = document.querySelectorAll('.counter');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = +el.dataset.target;
      const dur = 1800;
      const start = performance.now();
      const tick = now => {
        const p = Math.min((now - start) / dur, 1);
        el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: .5 });
  counters.forEach(c => obs.observe(c));
})();

/* ─── SMOOTH SCROLL ─── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (!t) return;
      e.preventDefault();
      window.scrollTo({
        top: t.getBoundingClientRect().top + scrollY - 80,
        behavior: 'smooth'
      });
    });
  });
})();
