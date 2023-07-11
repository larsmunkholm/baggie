import { isElementHidden } from "./isElementHidden";

/**
 * Check if an element is visible in the DOM (doesn't have `display: none;`)
 */
export const isElementVisible = (element: HTMLElement): boolean =>
    !isElementHidden(element);
