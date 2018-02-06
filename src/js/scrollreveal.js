import ScrollReveal from 'scrollreveal';

window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
setTimeout(function() {
	sr.reveal('.skill', { duration: 2000 });
	sr.reveal('.myphoto', { duration: 1000 });
	sr.reveal('h1, h2, h3, h4, h5, .box-project li, .section-description', { duration: 1000 });
	sr.reveal('.icons a', { duration: 1000 }, 20);
	sr.reveal('input, textarea, form .btn', { duration: 1000 }, 50);

}, 1);
