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
export const addPrefetchLink = (link, userEvents = ['mouseover', 'focus']) => {
    const handler = (event) => {
        // Remove listeners
        userEvents.forEach((userEvent) =>
            link.removeEventListener(userEvent, handler),
        );
        addToHead(event);
    };
    // Register listeners
    userEvents.forEach((userEvent) =>
        link.addEventListener(userEvent, handler),
    );
};
