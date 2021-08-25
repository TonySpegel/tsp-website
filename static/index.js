import { addPrefetchLink } from './js/addPrefetchLink.mjs';
import {} from './js/copyDirectLink.mjs';
import {} from './js/copyCode.mjs';
import {} from './js/intersectionObserver.mjs'

/**
 * Prefetch Links
 */

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
