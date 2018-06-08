let ScrollReveal;

if (typeof document !== 'undefined') {
  ScrollReveal = require('scrollreveal');
  // use document.thing or window.thing

  // Customizing a reveal set
  setTimeout(() => {
    const sr = ScrollReveal({
      reset: true
    });
    sr.reveal('.skill', {
      duration: 2000
    });
    sr.reveal('.myphoto', {
      duration: 1000
    });
    sr.reveal('h1, h2, h3, h4, h5, .box-project li, .section-description', {
      duration: 1000
    });
    sr.reveal('.icons a', {
      duration: 1000
    }, 20);
    sr.reveal('.articles__list__item', {
      duration: 1000
    }, 50);
  }, 1);
}
