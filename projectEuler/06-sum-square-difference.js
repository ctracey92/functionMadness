/*
The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first n natural numbers and the square of the sum.
*/

const sumSquareDiffernece = n => {
    const NUMS = Array.from({ length: n }, (_, i) => i + 1)
    let sumOfSquares = Math.pow(NUMS.reduce((sum, i) => sum += i), 2)
    let sumofN = NUMS.reduce((sum, i) => sum += Math.pow(i, 2));

    return sumOfSquares - sumofN;
}

//Test Cases
console.log(sumSquareDiffernece(10), 'Should be 2640');
console.log(sumSquareDiffernece(20), 'Should be 41230');
console.log(sumSquareDiffernece(100), 'Should be 25164150');
console.log(sumSquareDiffernece(100) === 25164150);