/* ================= PGCE Essay Table of Contents Logic ================= */
document.addEventListener ('DOMContentLoaded', () => {
  document.querySelectorAll ('.essay-toc a').forEach (anchor => {
    anchor.addEventListener ('click', function (e) {
      e.preventDefault ();
      // Smoothly scroll to the target section within the essay
      document
        .querySelector (this.getAttribute ('href'))
        .scrollIntoView ({behavior: 'smooth'});
    });
  });
});
