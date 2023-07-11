import { degreesToRadians, radiansToDegrees } from "../../math";
import { CIELAB } from "../_interfaces/cielab.interface";
import { RGBA } from "../_interfaces/rgba.interface";
import { convertRgbToLab } from "../convert/convertRgbToLab/convertRgbToLab";
import { convertStringToRgb } from "../convert/convertStringToRgb/convertStringToRgb";

interface ColorHaystack extends CIELAB {
    source: string;
}

/**
 * Find the nearest or farthest matching colors.
 */
export class ColorComparison {
    private haystack: ColorHaystack[] = [];

    /**
     * Create a set of colors to search for the closest match in.
     */
    constructor(colors: string[]) {
        if (colors) {
            this.add(colors);
        }
    }

    private static parseColorToLab(color: RGBA | CIELAB): CIELAB {
        if ("l" in color && "a" in color && "b" in color) {
            return {
                ...color,
                alpha: color.alpha || 1,
            };
        }

        return convertRgbToLab(color);
    }

    reset(): this {
        this.haystack = [];
        return this;
    }

    add(colors: string | string[]): this {
        (Array.isArray(colors) ? colors : [colors]).forEach((color) => {
            const parsedColor = ColorComparison.parseColorToLab(
                convertStringToRgb(color),
            );
            this.haystack.push({
                ...parsedColor,
                source: color,
            });
        });

        return this;
    }

    compare(color: string) {
        if (this.haystack.length) {
            const needle = ColorComparison.parseColorToLab(
                convertStringToRgb(color),
            );
            const iterations = this.haystack.length;
            const results: {
                distance: number;
                straw: ColorHaystack;
            }[] = new Array(iterations);

            const lightnessWeight = 0.01;

            const pow257 = Math.pow(25, 7);
            const needleBPow2 = Math.pow(needle.b, 2);
            const needleChroma = Math.sqrt(Math.pow(needle.a, 2) + needleBPow2);

            this.haystack.forEach((straw) => {
                const deltaLightnessPrime = needle.l - straw.l;
                const lightnessBar = (straw.l + needle.l) / 2;
                const strawBPow2 = Math.pow(straw.b, 2);

                const strawChroma = Math.sqrt(
                    Math.pow(straw.a, 2) + strawBPow2,
                );
                const chromaBar = (strawChroma + needleChroma) / 2;

                const primeA =
                    1 -
                    Math.sqrt(
                        Math.pow(chromaBar, 7) /
                            (Math.pow(chromaBar, 7) + pow257),
                    );
                const strawPrimeA = straw.a + (straw.a / 2) * primeA;
                const needlePrimeA = needle.a + (needle.a / 2) * primeA;
                const strawChromaPrime = Math.sqrt(
                    Math.pow(strawPrimeA, 2) + strawBPow2,
                );
                const needleChromaPrime = Math.sqrt(
                    Math.pow(needlePrimeA, 2) + needleBPow2,
                );
                const chromaBarPrime =
                    (strawChromaPrime + needleChromaPrime) / 2;
                const deltaChromaPrime = needleChromaPrime - strawChromaPrime;
                const SsubL =
                    1 +
                    (0.015 * Math.pow(lightnessBar - 50, 2)) /
                        Math.sqrt(20 + Math.pow(lightnessBar - 50, 2));
                const SsubC = 1 + 0.045 * chromaBarPrime;

                let strawPrimeHue =
                    straw.b === 0 || strawPrimeA === 0
                        ? 0
                        : radiansToDegrees(Math.atan2(straw.b, strawPrimeA));
                strawPrimeHue += strawPrimeHue >= 0 ? 0 : 360;
                let needlePrimeHue =
                    straw.b === 0 || strawPrimeA === 0
                        ? 0
                        : radiansToDegrees(Math.atan2(needle.b, needlePrimeA));
                needlePrimeHue += needlePrimeHue >= 0 ? 0 : 360;

                const deltahPrime =
                    strawChroma === 0 || needleChroma === 0
                        ? 0
                        : Math.abs(strawPrimeHue - needlePrimeHue) <= 180
                        ? needlePrimeHue - strawPrimeHue
                        : needlePrimeHue <= strawPrimeHue
                        ? needlePrimeHue - strawPrimeHue + 360
                        : needlePrimeHue - strawPrimeHue - 360;
                const deltaHPrime =
                    2 *
                    Math.sqrt(strawChromaPrime * needleChromaPrime) *
                    Math.sin(degreesToRadians(deltahPrime) / 2);
                const HBarPrime =
                    Math.abs(strawPrimeHue - needlePrimeHue) > 180
                        ? (strawPrimeHue + needlePrimeHue + 360) / 2
                        : (strawPrimeHue + needlePrimeHue) / 2;
                const T =
                    1 -
                    0.17 * Math.cos(degreesToRadians(HBarPrime - 30)) +
                    0.24 * Math.cos(degreesToRadians(2 * HBarPrime)) +
                    0.32 * Math.cos(degreesToRadians(3 * HBarPrime + 6)) -
                    0.2 * Math.cos(degreesToRadians(4 * HBarPrime - 63));
                const SsubH = 1 + 0.015 * chromaBarPrime * T;
                const RsubT =
                    -2 *
                    Math.sqrt(
                        Math.pow(chromaBarPrime, 7) /
                            (Math.pow(chromaBarPrime, 7) + Math.pow(25, 7)),
                    ) *
                    Math.sin(
                        degreesToRadians(
                            60 * Math.exp(-Math.pow((HBarPrime - 275) / 25, 2)),
                        ),
                    );

                const lightness =
                    deltaLightnessPrime / (lightnessWeight * SsubL);
                const chroma = deltaChromaPrime / SsubC;
                const hue = deltaHPrime / SsubH;

                const distance = Math.sqrt(
                    Math.pow(lightness, 2) +
                        Math.pow(chroma, 2) +
                        Math.pow(hue, 2) +
                        RsubT * chroma * hue,
                );

                for (let i = 0; i < iterations; i += 1) {
                    if (!results[i]) {
                        results[i] = {
                            distance,
                            straw,
                        };
                        break;
                    } else if (distance < results[i].distance) {
                        results.splice(i, 0, {
                            distance,
                            straw,
                        });
                        results.pop();
                        break;
                    }
                }
            });

            return results.map((result) => result.straw.source);
        }

        return [];
    }
}
