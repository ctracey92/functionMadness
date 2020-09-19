/*
Description
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

Find the sum of all the primes below n.
*/

const primeSummation = n => {
    let primes = [];
    const isPrime = num => {
        if (num <= 3) {
            return true
        } else if (num % 2 === 0 || num % 3 === 0) {
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
    let counter = 2;
    while (counter < n) {
        if (isPrime(counter)) {
            primes.push(counter)
        }
        counter++;
    }

    return primes.reduce((sum, i) => sum += i)
}

let res = primeSummation(2000000);
console.log(res === 142913828922)