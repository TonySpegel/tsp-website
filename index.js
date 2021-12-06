/**
 * Add a link to <head> which then gets prefetched
 */
const addToHead = (event) => {
    if (navigator.connection) {
        const connection = navigator.connection;
        /**
         * Check if a data saver is running
         */
        if (connection.saveData) {
            return new Error('Prefetch is not available when using Data Saver');
        }
        /**
         * Check for slow connections, don't prefetch on 2g or slower.
         * effectiveType can be: slow-2g, 2g, 3g, or 4g
         */
        if (connection.effectiveType.includes('2g')) {
            return new Error('Prefetch is not available on slow connection');
        }
    }
    if (event.target !== null) {
        const link = document.createElement('link');
        link.href = event.target.href;
        link.rel = 'prefetch';
        document.head.appendChild(link);
    }
};
/**
 * Handles the process of adding and removing EventListeners.
 * Once an event has been executed every other registered event will be removed.
 *
 * Example:
 * User defined list of events:
 * const event = ['mouseover', 'focus'];
 *
 * User focuses a link which adds it to the <head>-element.
 * Because of this any other event is not needed anymore and the one event left
 * gets removed.
 *
 * Usage can look like this:
 * document
 *  .querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"])')
 *  .forEach((link) => addPrefetchLink(link));
 */
const addPrefetchLink = (link, userEvents = [
    'mouseover',
    'focus',
]) => {
    const handler = (event) => {
        // Remove listeners
        userEvents.forEach((userEvent) => link.removeEventListener(userEvent, handler));
        addToHead(event);
    };
    // Register listeners
    userEvents.forEach((userEvent) => link.addEventListener(userEvent, handler));
};

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

/**
 * Prefetch Links
 * ==============
 */

/**
 * Get all page links and make an array out of it.
 * Some links such as e-mail addresses and mobile numbers
 * should not be fetched.
 *
 * Add an event listener for each link but do it only once to
 * avoid unnecessary network requests
 */
document
    .querySelectorAll('a:not([href^="mailto:"]):not([href^="tel:"]):not([class*="no-fetch"])')
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
document.querySelector('body');
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

copyright.addEventListener('dblclick', () => {
    const mode = readPreference();

    if (mode === 'light') {
        savePreference('dark');
    } else {
        savePreference('light');
    }
});

copyright.addEventListener('contextmenu', () => {
    deletePreference();
});
