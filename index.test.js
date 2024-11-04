const sum = require('./index');

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });

    test('adds negative numbers correctly', () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    test('adds zero correctly', () => {
        expect(sum(0, 5)).toBe(5);
    });

    test('adds decimal numbers correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
    });
}); 