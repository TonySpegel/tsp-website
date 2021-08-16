// Function to add a link to <head> which then gets prefetched
const addPrefetchLink = (event) => {
    const link = document.createElement('link');
    link.href = event.target.href;
    link.rel = 'prefetch';

    document.head.appendChild(link);
};

const scrollRoot = document.querySelector('[data-scroller]');
const header = document.querySelector('[data-header]');
const sentinelElement = document.querySelector('#sentinel-element');

const observerOptions = {
    root: scrollRoot,
    rootMargin: `-${header.getBoundingClientRect().height}px`,
    treshold: 1,
};

const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
        header.classList.add('opaque');
        console.log('add');
    } else {
        header.classList.remove('opaque');
    }
}, observerOptions);

observer.observe(sentinelElement);

// Get all page links and make an array out of it
const pageLinks = [...document.querySelectorAll('a:not(.no-fetch)')];

/**
 * Add an event listener for each link on mouseover
 * but do it only once to avoid unnecessary network requests
 */
pageLinks.map((pageLink) => {
    pageLink.addEventListener('mouseover', addPrefetchLink, {
        once: true,
    });
});
