import { getPercentageIncrease } from "./getPercentageIncrease";

describe("getPercentageIncrease", () => {
    test("Increase", () => {
        expect(getPercentageIncrease(10, 100)).toBe(9);
        expect(getPercentageIncrease(10, 100, false)).toBe(900);
        expect(getPercentageIncrease(0, 1)).toBe(Infinity);
    });

    test("Decrease", () => {
        expect(getPercentageIncrease(100, 10)).toBe(-0.9);
        expect(getPercentageIncrease(100, 10, false)).toBe(-90);
        expect(getPercentageIncrease(0, -1)).toBe(-Infinity);
    });

    test("No change", () => {
        expect(getPercentageIncrease(10, 10)).toBe(0);
    });
});
