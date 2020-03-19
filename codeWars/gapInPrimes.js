"use strict"
const gap = (g, m, n) => {
    //This will be our final answer
    let answer = [];
    //Function to see if the number is a prime
    let primeCheck = (num) => {
        let prime = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false;
                return
            }
        }
        return prime
    }

    let check = (m,n) => {
        for (var i = m; i <= n - g; i++) {
            
            if (primeCheck(i)) {
                if (primeCheck(i + g)) {
                    let noPrimes = true;
                    for (let a = i + 1; a < i + g; a++) {
                        if (primeCheck(a)) { noPrimes = false; }
                    }
                    if (noPrimes) { answer.push(i, i + g); return }
                }
            }
        }
    }

    check(m,n);

    if (answer.length > 0) { return answer }
    else { return null }

}