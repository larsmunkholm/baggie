import { getFocusedElement } from "@baggie/core";

/**
 * If an element is focused, this will blur it.
 *
 * @category Actions
 */
export const blurFocusedElement = (): void => getFocusedElement()?.blur();
