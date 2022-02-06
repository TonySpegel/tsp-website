/**
 * @license
 * Copyright 2022 Tony Spegel
 */

import { addPrefetchLink } from 'add-prefetch-link';
import { ThemeSwitch } from 'theme-switch-component';
import './js/intersectionObserver.mjs';

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
    .querySelectorAll(
        'a:not([href^="mailto:"]):not([href^="tel:"]):not([class*="no-fetch"])',
    )
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
 * DialogEvent is used to reference the targetElement
 * which has opened the ThemeSwitch component.
 * This needs to be done to re-select it after closing
 * the dialog.
 */
class DialogEvent extends Event {
    static eventName = 'dialog-event';
    targetElement = '';

    constructor(targetElement) {
        super(DialogEvent.eventName, { bubbles: true });
        this.targetElement = targetElement;
    }
}

/**
 * Button to toggle the visibility of <theme-selection>
 * by dispatching the DialogEvent
 */
document
    .querySelector('#btn-theme-selection')
    .addEventListener('click', (event) => {
        const { target } = event;
        window.dispatchEvent(new DialogEvent(target));
    });

/**
 * Listen for the theme-event to happen to change
 * the 'theme-preference' attribute
 */
window.addEventListener('theme-event', (themeEvent) => {
    const { themeName } = themeEvent;

    document.documentElement.setAttribute('theme-preference', themeName);
});
