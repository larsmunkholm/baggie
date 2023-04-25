/**
 * Returns regular expression for extracting the ID of a Vimeo video from a URL.
 */
export const getVimeoIdRegex = (): RegExp =>
    /(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:[a-zA-Z0-9_-]+)?/i;
