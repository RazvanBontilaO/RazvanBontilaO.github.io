const sections = document.querySelectorAll('.reveal-on-scroll');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');

        } else {
            entry.target.classList.remove('is-visible');
        }
    });
}, {
    threshold: 0.20
});
sections.forEach(section => {
    observer.observe(section);
});