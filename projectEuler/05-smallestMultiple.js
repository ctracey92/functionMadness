function smallestMult(n) {
    // Good luck!
    let answer = 0;
    let counter = n + 1;
    while (answer < 1) {
        let divisible = true;
        for (let i = 1; i <= n; i++) {
            if (counter % i !== 0) {
                divisible = false;
            }

        }
        console.log(counter)


        if (divisible) { answer = counter }
        else { counter++ }
    }

    return answer;
}

console.log(smallestMult(10));
