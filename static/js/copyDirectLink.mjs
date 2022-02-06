/**
 * @license
 * Copyright 2022 Tony Spegel
 */

const directLinks = [...document.querySelectorAll('.direct-link')];

if (directLinks.length > 0) {
    directLinks.map((directLink) => {
        directLink.addEventListener('click', async (event) => {
            // Prevent the browser from scrolling upwards when a link to a heading is clicked
            event.preventDefault();
            const url = new URL(event.target.href);
            // Get the hash (the part with '#') of a URL
            const urlHash = url.hash;
            // Get the hash of URL but w/o its '#' symbol
            const idOnly = urlHash.substring(urlHash.indexOf('#') + 1);
            // Select copy notice element related to this link
            const copyNoticeElement = document.querySelector(
                `#direct-link-message-${idOnly}`,
            );

            // Write url to clipboard
            await navigator.clipboard.writeText(url.href);

            copyNoticeElement.innerText = 'kopiert';
            copyNoticeElement.classList.add('visible');

            setTimeout(() => {
                copyNoticeElement.innerText = '';
                copyNoticeElement.classList.remove('visible');
            }, 3000);
        });
    });
}
