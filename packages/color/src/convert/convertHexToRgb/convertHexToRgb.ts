import { RGBA } from "../../_interfaces/rgba.interface";
import { isHexColor } from "../../check/isHexColor/isHexColor";

/**
 * Convert a hex color to an object with RGB color values.
 */
export const convertHexToRgb = (hex: string): RGBA => {
    if (isHexColor(hex)) {
        const match = hex.slice(1);

        if (match.length === 3 || match.length === 4) {
            const rgb = [
                match.charAt(0),
                match.charAt(1),
                match.charAt(2),
                match.charAt(3) || "F",
            ];

            return {
                red: parseInt(rgb[0] + rgb[0], 16),
                green: parseInt(rgb[1] + rgb[1], 16),
                blue: parseInt(rgb[2] + rgb[2], 16),
                alpha: parseInt(rgb[3] + rgb[3], 16) / 255,
            };
        } else {
            const rgb = [
                match.charAt(0) + match.charAt(1),
                match.charAt(2) + match.charAt(3),
                match.charAt(4) + match.charAt(5),
                match.charAt(7) ? match.charAt(6) + match.charAt(7) : "FF",
            ];

            return {
                red: parseInt(rgb[0], 16),
                green: parseInt(rgb[1], 16),
                blue: parseInt(rgb[2], 16),
                alpha: parseInt(rgb[3], 16) / 255,
            };
        }
    }

    throw "Not a valid hex color";
};
