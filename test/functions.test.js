// IMPORT MODULES under test here:
import { 
    addExclamationPoints, divideThenMultiply, getLastItem, getRandomNumber, getSecondItem, makeLuckyGreeting, multiplyBy12ThenHalve, multiplyBySeven, returnAsAnArray, returnAsAString,
} from '../functions.js';

const { test, skip } = QUnit;

test('addExclamationPoints should return a string with 3 exclamation points added to the end', (expect) => {
    const expected1 = 'puppy!!!';
    const actual1 = addExclamationPoints('puppy');
    const expected2 = 'muppy!!!'
    const actual2 = addExclamationPoints('muppy');

    expect.equal(actual1, expected1, 'should return "puppy!!!"');
    expect.equal(actual2, expected2, 'should return "muppy!!!"');
});


test('this test should multiply a number by 7', (expect) => {
    const expected1 = 28;
    const actual1 = multiplyBySeven(4);
    const expected2 = 14;
    const actual2 = multiplyBySeven(2);

    expect.equal(actual1, expected1, 'should return 28');
    expect.equal(actual2, expected2, 'should return 14');

});

test('This function should take in a number and multiply it by 12 then cut the result in half', (expect) => {
    const expected1 = 24;
    const actual1 = multiplyBy12ThenHalve(4);
    const expected2 = 12;
    const actual2 = multiplyBy12ThenHalve(2);

    expect.equal(actual1, expected1, 'should return 24');
    expect.equal(actual2, expected2, 'should return 12');
});

test('This function should take in three numbers, divide the first by the second, then multiply the result by the third', (expect) => {
    const expected1 = 10;
    const actual1 = divideThenMultiply(8, 4, 5);
    const expected2 = 6;
    const actual2 = divideThenMultiply(10, 5, 3);

    expect.equal(actual1, expected1, 'should return 10');
    expect.equal(actual2, expected2, 'should return 6');
});

test('This function should take in three numbers and return those numbers in an array', (expect) => {
    const expected1 = [8, 4, 5];
    const actual1 = returnAsAnArray(8, 4, 5);
    const expected2 = [1, 2, 3];
    const actual2 = returnAsAnArray(1, 2, 3);

    expect.deepEqual(actual1, expected1, 'should return [8, 4, 5]');
    expect.deepEqual(actual2, expected2, 'should return [1, 2, 3]');
});

test('This function should take in three numbers and return those numbers mushed together as a string', (expect) => {
    const expected1 = '845';
    const actual1 = returnAsAString(8, 4, 5);
    const expected2 = '123';
    const actual2 = returnAsAString(1, 2, 3);

    expect.equal(actual1, expected1, 'should return "845"');
    expect.equal(actual2, expected2, 'should return "123"');
});

test("This function should take in two numbers and return a greeting announcing that the sum of those numbers is today's lucky number", (expect) => {
    const expected1 = 'Hello! Your lucky number for the day is 12.';
    const actual1 = makeLuckyGreeting(8, 4);
    const expected2 = 'Hello! Your lucky number for the day is 13.';
    const actual2 = makeLuckyGreeting(7, 6) ;

    expect.equal(actual1, expected1, 'Hello! Your lucky number for the day is 12');
    expect.equal(actual2, expected2, 'Hello! Your lucky number for the day is 123');
});
test("This function should take an array and return the LAST item in the array, no matter the array's length", (expect) => {
    const expected1 = 'plum';
    const actual1 = getLastItem(['kiwi', 'apple', 'orange', 'plum']);
    const expected2 = 'bob';
    const actual2 = getLastItem(['jeff', 'steve', 'bob']);

    expect.equal(actual1, expected1, 'plum');
    expect.equal(actual2, expected2, 'bob');
});

test('This function should take an array and return the second item in the array', (expect) => {
    const expected1 = 'apple';
    const actual1 = getSecondItem(['kiwi', 'apple', 'orange', 'plum']);
    const expected2 = 'steve';
    const actual2 = getSecondItem(['jeff', 'steve', 'bob']);

    expect.equal(actual1, expected1, 'apple');
    expect.equal(actual2, expected2, 'steve');
});

test('This function should make a random number between 0 and 5', (expect) => {


    const expected1 = true;
    const expected2 = 'number';
    const actual2 = getRandomNumber();

    expect.equal(actual2 >= 0, actual2 <= 5, expected1);
    expect.equal(typeof actual2, expected2);
});