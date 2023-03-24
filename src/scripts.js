const titleContainer = document.getElementById('title-container');
const scrollTxtContainer = document.getElementById('scroll-txt-container');

window.addEventListener('scroll', function () {
    let distanceToTop = window.pageYOffset;
    let progress = distanceToTop / window.innerHeight;

    titleContainer.style.opacity = Math.max(0, 1 - 2 * progress);
    scrollTxtContainer.style.opacity = Math.max(0, 1 - 4 * progress);
});