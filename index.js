const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('showProject');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElements2 = document.querySelectorAll('.hiddenCard');
hiddenElements.forEach((el) => observer.observe(el));
hiddenElements2.forEach((el) => observer2.observe(el));

window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    var background = document.querySelector('.background');
    background.style.transform = 'translateY(' + -(scrolled * 0.5) + 'px)';
});