// Function to add a link to <head> which then gets prefetched
export const addPrefetchLink = (event) => {
    const link = document.createElement('link');
    link.href = event.target.href;
    link.rel = 'prefetch';

    document.head.appendChild(link);
};