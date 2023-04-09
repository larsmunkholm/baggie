import { isHexColor } from "../../check/isHexColor/isHexColor";

/**
 * Make sure a hex color is in lowercase with 6 to 8 hexadecimals.
 */
export const normalizeHexColor = (hex: string) =>
    isHexColor(hex)
        ? (hex.length < 7
              ? `#${hex
                    .split("")
                    .slice(1)
                    .map((char) => char + char)
                    .join("")}`
              : hex
          ).toLowerCase()
        : hex;
