import assert from "node:assert"
import { suite, test } from "node:test";


import {
    sum,
    reverseString,
    toMinutesAndHours,
    customSort,
} from "./threekit.mjs";

suite("Sum function", () => {
    test("Addition is performed correctly", () => {
        assert.equal(sum(1, 2), 3);
    });

    test("Parameters are validated to be numbers prior to addition", () => {
        assert.equal(sum(1, "duck"), "ERROR");
    });
});

suite("String reversal", () => {
    test("A string is reversed", () => {
        assert.equal(reverseString("millimeter"), "retemillim");
    });

    test("Another string is reversed", () => {
        assert.equal(reverseString("backwards"), "sdrawkcab");
    });

    test("An empty string is reversed", () => {
        assert.equal(reverseString(""), "");
    });
});

suite("Time conversion", () => {
    test("Converts a seconds worth of seconds", () => {
        assert.equal(toMinutesAndHours(1), "0 hour(s) and 0 minute(s)");
    });

    test("Converts a 20 seconds worth of seconds", () => {
        assert.equal(toMinutesAndHours(20), "0 hour(s) and 0 minute(s)");
    });

    test("Converts a minute worth of seconds", () => {
        assert.equal(toMinutesAndHours(60), "0 hour(s) and 1 minute(s)");
    });

    test("Converts an hours worth of seconds", () => {
        assert.equal(toMinutesAndHours(3600), "1 hour(s) and 0 minute(s)");
    });

    test("Converts some ammount of seconds", () => {
        assert.equal(toMinutesAndHours(27000), "7 hour(s) and 30 minute(s)");
    });
});

suite("Custom sort function", () => {
    test("An array of numbers is sorted", () => {
        const shuffledArray = [68, 67, 23, 1, 27, 79, 33, 11, 24, 5];

        const expectedSortedArray = [1, 5, 11, 23, 24, 27, 33, 67, 68, 79];
        const actualSortedArray = customSort(shuffledArray);
        assert.deepEqual(actualSortedArray, expectedSortedArray);
    });

    test("Another array of numbers is sorted", () => {
        const shuffledArray = [94, 63, 10, 55, 58, 43, 28, 73, 53];

        const expectedSortedArray = [10, 28, 43, 53, 55, 58, 63, 73, 94];

        const actualSortedArray = customSort(shuffledArray);
        assert.deepEqual(actualSortedArray, expectedSortedArray);
    });

    test("An empty array is sorted", () => {
        const shuffledArray = [];

        const expectedSortedArray = [];
        const actualSortedArray = customSort(shuffledArray);
        assert.deepEqual(actualSortedArray, expectedSortedArray);
    });

    test("The array is sorted in place", () => {
        const shuffledArray = [3, 2, 1];

        const expectedSortedArray = [1, 2, 3];
        const actualSortedArray = customSort(shuffledArray);
        assert.deepEqual(actualSortedArray, expectedSortedArray);
        assert.deepEqual(shuffledArray, expectedSortedArray);

        assert.strictEqual(actualSortedArray, shuffledArray);
    });
});
