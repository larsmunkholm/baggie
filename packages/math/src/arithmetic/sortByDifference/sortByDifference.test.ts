import { sortByDifference } from "./sortByDifference";

describe("sortByDifference", () => {
    test("Sort numbers by closest numbers", () => {
        expect(sortByDifference(8, [5, 10, 15, 20])).toStrictEqual([
            10, 5, 15, 20,
        ]);

        expect(sortByDifference(-8, [5, 10, -15, 20])).toStrictEqual([
            -15, 5, 10, 20,
        ]);

        expect(sortByDifference(-8, [0])).toStrictEqual([0]);
    });

    test("Sort objects by closest numbers", () => {
        expect(
            sortByDifference(
                8,
                [{ amount: 5 }, { amount: 10 }, { amount: 15 }, { amount: 20 }],
                ({ amount }) => amount,
            ),
        ).toStrictEqual([
            { amount: 10 },
            { amount: 5 },
            { amount: 15 },
            { amount: 20 },
        ]);

        expect(
            sortByDifference(
                -8,
                [
                    { amount: 5 },
                    { amount: 10 },
                    { amount: -15 },
                    { amount: 20 },
                ],
                ({ amount }) => amount,
            ),
        ).toStrictEqual([
            { amount: -15 },
            { amount: 5 },
            { amount: 10 },
            { amount: 20 },
        ]);
    });

    test("Sort arrays by closest numbers", () => {
        expect(
            sortByDifference(
                8,
                [
                    [1, 5, 100],
                    [1, 10, 100],
                    [1, 15, 100],
                    [1, 20, 100],
                ],
                (arr) => arr[1],
            ),
        ).toStrictEqual([
            [1, 10, 100],
            [1, 5, 100],
            [1, 15, 100],
            [1, 20, 100],
        ]);
    });
});
