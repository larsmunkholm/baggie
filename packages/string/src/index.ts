/* Convert */
export { capitalizeFirstLetter } from "./convert/capitalizeFirstLetter";
export { convertEmailsToLinks } from "./convert/convertEmailsToLinks";
export { convertNewLinesToBreaks } from "./convert/convertNewLinesToBreaks";
export { convertToDate } from "./convert/convertToDate";
export { getEmailsFromString } from "./convert/getEmailsFromString";
export { getVimeoId } from "./convert/getVimeoId";
export { getYouTubeId } from "./convert/getYouTubeId";

/* Manipulation */
export { stripTagsFromString } from "./convert/stripTagsFromString";
export { substringHtmlEntitySafe } from "./manipulation/substringHtmlEntitySafe/substringHtmlEntitySafe";
export { substringHtmlSafe } from "./manipulation/substringHtmlSafe/substringHtmlSafe";

/* Interfaces */
export type { PasswordOptions } from "./_interfaces/passwordOptions.interface";

/* Regex */
export { getCprRegex } from "./regex/getCprRegex";
export { getEmailRegex } from "./regex/getEmailRegex";
export { getNewLineRegex } from "./regex/getNewLineRegex";
export {
    getPasswordRegex,
    passwordSpecialCharactersDefault,
} from "./regex/getPasswordRegex";
export { getTagsRegex } from "./regex/getTagsRegex";
export { getVimeoIdRegex } from "./regex/getVimeoIdRegex";
export { getYouTubeIdRegex } from "./regex/getYouTubeIdRegex";

/* Validation */
export { isCprValid } from "./validation/isCprValid";
export { isDateValid } from "./validation/isDateValid";
export { isEmailValid } from "./validation/isEmailValid";
export { isPasswordValid } from "./validation/isPasswordValid";
