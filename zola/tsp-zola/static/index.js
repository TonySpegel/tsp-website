// Function to add a link to <head> which then gets prefetched
const addPrefetchLink = (event) => {
    const link = document.createElement('link');
    link.href = event.target.href;
    link.rel = 'prefetch';

    document.head.appendChild(link);
};

const scrollRoot = document.querySelector('[data-scroller]');
const header = document.querySelector('[data-header]');
const sections = [...document.querySelectorAll('[data-section]')];

const observerOptions = {
    root: scrollRoot,
    rootMargin: '0px',
    treshold: 1.0,
};

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        const clientRect = entry.boundingClientRect;
        const rootBounds = entry.rootBounds;

        if (entries[0].isIntersecting) {
            if (
                clientRect.top < rootBounds.top &&
                clientRect.bottom < rootBounds.bottom
            ) {
                header.classList.remove('sticky');
            }
    
            if (
                clientRect.bottom > rootBounds.top &&
                entry.intersectionRatio === 1
            ) {
                header.classList.add('sticky');
            }
        }

    }
}, observerOptions);

observer.observe(sections[0]);

// Get all page links and make an array out of it
const pageLinks = [...document.querySelectorAll('a')];

/**
 * Add an event listener for each link on mouseover
 * but do it only once to avoid unnecessary network requests
 */
pageLinks.map((pageLink) => {
    pageLink.addEventListener('mouseover', addPrefetchLink, {
        once: true,
    });
});
