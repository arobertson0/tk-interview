import { describe, test, expect } from "vitest";

import {
    sum,
    reverseString,
    toMinutesAndHours,
    customSort,
} from "./threekit.mjs";

describe("Sum function", () => {
    test("Addition is performed correctly", () => {
        expect(sum(1, 2)).toEqual(3);
    });

    test("Parameters are validated to be numbers prior to addition", () => {
        expect(sum(1, "duck")).toEqual("ERROR");
    });
});

describe("String reversal", () => {
    test("A string is reversed", () => {
        expect(reverseString("millimeter")).toEqual("retemillim");
    });

    test("Another string is reversed", () => {
        const expectedReverse = "sdrawkcab";
        const actualReverse = reverseString("backwards");
        expect(actualReverse).toEqual("sdrawkcab");
    });

    test("An empty string is reversed", () => {
        expect(reverseString("")).toEqual("");
    });
});

describe("Time conversion", () => {
    test("Converts a seconds worth of seconds", () => {
        expect(toMinutesAndHours(0)).toEqual("0 hour(s) and 0 minute(s)");
    });

    test("Converts a 20 seconds worth of seconds", () => {
        expect(toMinutesAndHours(20)).toEqual("0 hour(s) and 0 minute(s)");
    });

    test("Converts a minute worth of seconds", () => {
        expect(toMinutesAndHours(60)).toEqual("0 hour(s) and 1 minute(s)");
    });

    test("Converts an hours worth of seconds", () => {
        expect(toMinutesAndHours(3600)).toEqual("1 hour(s) and 0 minute(s)");
    });

    test("Converts some ammount of seconds", () => {
        expect(toMinutesAndHours(27000)).toEqual("7 hour(s) and 30 minute(s)");
    });
});

describe("Custom sort function", () => {
    test("An array of numbers is sorted", () => {
        const shuffledArray = [68, 67, 23, 1, 27, 79, 33, 11, 24, 5];

        const expectedSortedArray = [1, 5, 11, 23, 24, 27, 33, 67, 68, 79];
        const actualSortedArray = customSort(shuffledArray);
        expect(actualSortedArray).toStrictEqual(expectedSortedArray);
    });

    test("Another array of numbers is sorted", () => {
        const shuffledArray = [94, 63, 10, 55, 58, 43, 28, 73, 53];

        const expectedSortedArray = [10, 28, 43, 53, 55, 58, 63, 73, 94];

        const actualSortedArray = customSort(shuffledArray);
        expect(actualSortedArray).toStrictEqual(expectedSortedArray);
    });

    test("An empty array is sorted", () => {
        const shuffledArray = [];

        const expectedSortedArray = [];
        const actualSortedArray = customSort(shuffledArray);
        expect(actualSortedArray).toStrictEqual(expectedSortedArray);
    });

    test("The array is sorted in place", () => {
        const shuffledArray = [3, 2, 1];

        const expectedSortedArray = [1, 2, 3];
        const actualSortedArray = customSort(shuffledArray);
        expect(actualSortedArray).toStrictEqual(expectedSortedArray);
        expect(actualSortedArray).toBe(shuffledArray);
    });
});
