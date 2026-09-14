/* ================= Core Navigation & SPA Logic ================= */
let isHomeVisible = true;

// Intersection Observer for scroll animations
const observerOptions = {threshold: 0.1};
const observer = new IntersectionObserver (entries => {
  entries.forEach (entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add ('show');
    }
  });
}, observerOptions);

function resetAndObserve () {
  const hiddenElements = document.querySelectorAll (
    '.content.active .hidden-up, .content.active .hidden-left, .content.active .hidden-right, .footer_wrapper .hidden-up, .footer_wrapper .hidden-left, .footer_wrapper .hidden-right'
  );

  hiddenElements.forEach (el => {
    el.classList.remove ('show');
    observer.observe (el);

    const rect = el.getBoundingClientRect ();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
      setTimeout (() => {
        el.classList.add ('show');
      }, 100);
    }
  });
}

function switchPage (target) {
  isHomeVisible = target === 'home';
  let sections = document.querySelectorAll ('.content');

  sections.forEach (section => {
    section.classList.remove ('active', 'show-tab');
  });

  let targetSection = document.querySelector (`#${target}`);
  if (targetSection) {
    targetSection.classList.add ('active');

    requestAnimationFrame (() => {
      requestAnimationFrame (() => {
        targetSection.classList.add ('show-tab');
        resetAndObserve ();
      });
    });
  }
  updateNavbarActive (target);
}

function redirectToPage (url) {
  let currentContent = document.querySelector ('.fade.show-tab');
  if (currentContent) currentContent.classList.remove ('show-tab');

  setTimeout (function () {
    window.location.href = url;
  }, 400);
}

function updateNavbarActive (target) {
  let navButtons = document.querySelectorAll ('.nav-btn');
  navButtons.forEach (button => button.classList.remove ('active'));

  let activeButton = document.querySelector (
    `.nav-btn[data-target="${target}"]`
  );
  if (activeButton) activeButton.classList.add ('active');
}

function updateURL (target) {
  history.pushState ({target: target}, '', '#' + target);
  switchPage (target);
}

// Browser back/forward button logic
window.addEventListener ('popstate', event => {
  const target = event.state ? event.state.target : 'home';
  switchPage (target);
});

// Initialize on page load
document.addEventListener ('DOMContentLoaded', () => {
  const hash = window.location.hash.substring (1) || 'home';
  switchPage (hash);
  resetAndObserve ();
});
