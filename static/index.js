import { addPrefetchLink } from './js/addPrefetchLink.mjs';
import './js/intersectionObserver.mjs';

/**
 * Prefetch Links
 * ==============
 */


/**
 * Get all page links and make an array out of it.
 * Some links such as e-mail addresses and mobile numbers 
 * should not be fetched - these are marked with `.no-fetch`.
 */
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
 * Misc.
 * ==============
 */


/**
 * For iOS Safari there needs to be a touchstart listener in order to
 * apply :active styles. This can be achieved by using <body ontouchstart>.
 * But this itself would cause Chrome to throw an error that this listener
 * isn't passive. To fix this the below code is needed.
 */
document
    .querySelector('body')
    .addEventListener('touchstart', () => {}, { passive: true });
