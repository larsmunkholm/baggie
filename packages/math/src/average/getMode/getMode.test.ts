import { getMode } from "./getMode";

describe("getMode", () => {
    test("Get a single mode value of an array", () => {
        expect(getMode([4, 8, 8, 15, 16, 23, 42, 42, 42])).toMatchObject({
            numbers: [42],
            frequency: 3,
        });
    });

    test("Get multiple mode values of an array", () => {
        expect(getMode([4, 8, 8, 8, 15, 16, 23, 42, 42, 42])).toMatchObject({
            numbers: [8, 42],
            frequency: 3,
        });
    });

    test("Get the mode value of an array of 1 number", () => {
        expect(getMode([4])).toMatchObject({
            numbers: [4],
            frequency: 1,
        });
    });

    test("Get the mode value of an empty array", () => {
        expect(getMode([])).toMatchObject({
            numbers: [],
            frequency: 0,
        });
    });
});
