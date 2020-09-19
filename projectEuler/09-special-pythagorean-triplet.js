/*
Description:

A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000. Find the product abc such that a + b + c = n.

*/

const specialPythagoreanTriplet = n => {
    for (let a = 1; a < n; a++) {
        for (let b = a; b < n; b++) {
            let c = n - a - b;
            if (c ** 2 === a ** 2 + b ** 2) {
                return a * b * c
            }
        }
    }
}

//Test Cases
console.log(specialPythagoreanTriplet(24), "Should be 480")
console.log(specialPythagoreanTriplet(120), "Should return 49920, 55080 or 60000 ")
console.log(specialPythagoreanTriplet(1000), "Should be 31875000.")