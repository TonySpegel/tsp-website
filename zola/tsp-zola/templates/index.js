// Function to add a link to <head> which then gets prefetched
const addPrefetchLink = (event) => {
    const link = document.createElement('link');
    link.href = event.target.href;
    link.rel = 'prefetch';

    document.head.appendChild(link);
};
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
