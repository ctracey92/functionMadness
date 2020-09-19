/*
Project Euler: Problem 7: 10001st prime
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the nth prime number?
*/

const nthPrime = (n) => {
    let primes = [2, 3, 5];
    let counter = 7;

    const isPrime = num => {
        if (num % 2 === 0 || num % 3 === 0) {
            return false
        }
        let i = 5
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false
            }
            i += 6
        }
        return true
    }

    while (primes.length < n) {
        if (isPrime(counter)) {
            primes.push(counter)
        }
        counter += 2;
    }

    return primes[n - 1];
}

//Test Cases
console.log(nthPrime(6), 13)
console.log(nthPrime(10), 29)
console.log(nthPrime(100), 541)
console.log(nthPrime(1000), 7919)
console.log(nthPrime(10001), 104743)