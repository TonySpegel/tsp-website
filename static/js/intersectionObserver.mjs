/**
 * Add a CSS class dynamically w/ IntersectionObserver
 */
const scrollRoot = document.querySelector('[data-scroller]');
const header = document.querySelector('#site-header');
const sentinelElement = document.querySelector('#sentinel-element');

const observerOptions = {
    root: scrollRoot,
    rootMargin: `-${header.getBoundingClientRect().height}px`,
    treshold: 1,
};

const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
        header.classList.add('opaque');
    } else {
        header.classList.remove('opaque');
    }
}, observerOptions);

observer.observe(sentinelElement);
