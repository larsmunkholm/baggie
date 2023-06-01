import { getColorSchemeAnalogous } from "./getColorSchemeAnalogous";

describe("getColorSchemeAnalogous", () => {
    test("Get 3 colors total", () => {
        expect(getColorSchemeAnalogous("#ffff00", 3)).toEqual([
            "#ffff00",
            "#80ff00",
            "#00ff00",
        ]);
    });

    test("Get 2 colors total", () => {
        expect(getColorSchemeAnalogous("#ffff00", 2, 24)).toEqual([
            "#ffff00",
            "#bfff00",
        ]);
    });
});
