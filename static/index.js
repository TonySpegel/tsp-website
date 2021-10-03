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
 *
 * Add an event listener for each link but do it only once to
 * avoid unnecessary network requests
 */
document
    .querySelectorAll('a:not(.no-fetch)')
    .forEach((link) => addPrefetchLink(link));

/**
 * Misc.
 * ==============
 */

/**
 * For iOS Safari there needs to be a touchstart listener in order to
 * apply :active styles. This can be achieved by using <body ontouchstart>.
 * But this itself would cause Chrome to throw an error that this listener
 * isn't passive. The code below fixes this issue
 */
document
    .querySelector('body')
    .addEventListener('touchstart', () => {}, { passive: true });

/**
 * Switch
 */
const body = document.querySelector('body');
const copyright = document.querySelector('#copyright');

const readPreference = () => {
    return localStorage.getItem('color-mode');
};

const savePreference = (theme) => {
    document.documentElement.setAttribute('color-mode', theme);
    localStorage.setItem('color-mode', theme);
};

const deletePreference = () => {
    document.documentElement.removeAttribute('color-mode');
    localStorage.removeItem('color-mode');
};

body.addEventListener('dblclick', () => {
    const mode = readPreference();

    if (mode === 'light') {
        savePreference('dark');
    } else {
        savePreference('light');
    }
});

copyright.addEventListener('click', () => {
    deletePreference();
});
