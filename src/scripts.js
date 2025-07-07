const titleContainer = document.getElementById('title-container');
const scrollTxtContainer = document.getElementById('scroll-txt-container');
window.addEventListener('scroll', function () {
    let distanceToTop = window.pageYOffset;
    let progress = distanceToTop / window.innerHeight;
    titleContainer.style.opacity = Math.max(0, 1 - 2 * progress);
    scrollTxtContainer.style.opacity = Math.max(0, 1 - 4 * progress);
});

// Theme toggle functionality
let isDarkMode = false;

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (isDarkMode) {
        body.setAttribute('data-theme', 'dark');
        themeIcon.textContent = '☀️';
    } else {
        body.removeAttribute('data-theme');
        themeIcon.textContent = '🌙';
    }
}

// Set initial theme based on user preference (system preference)
function initializeTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        toggleTheme();
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
        if (e.matches && !isDarkMode) {
            toggleTheme();
        } else if (!e.matches && isDarkMode) {
            toggleTheme();
        }
    });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', initializeTheme);

// (function() {
// const container = document.getElementById("title-container");
// // const elements = container.querySelectorAll('i');
// let currentIndex = 0;
// setInterval(() => {
// // Hide the current visible element
// elements[currentIndex].style.opacity = "0";
// // Move to the next element
// currentIndex = (currentIndex + 1) % elements.length;
// // Delay the showing of the next element to sync with the fade out effect
// setTimeout(() => {
// elements[currentIndex].style.opacity = "1";
// }, 1000); // Matches the 1s transition duration in the CSS
// }, 5000); // 5000 milliseconds or 5 seconds
// })();