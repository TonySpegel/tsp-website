import { addPrefetchLink } from './js/addPrefetchLink.mjs';
import './js/copyDirectLink.mjs';
import './js/copyCode.mjs';
import './js/intersectionObserver.mjs';

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

/**
 * For iOS Safari there needs to be a touchstart listener in order to
 * apply :active styles. This can be acheived by using <body ontouchstart>.
 * But this itself would cause Chrome to throw an error that this listener
 * isn't passive. To fix this the below code is needed.
 */
document
    .querySelector('body')
    .addEventListener('touchstart', () => {}, { passive: true });
