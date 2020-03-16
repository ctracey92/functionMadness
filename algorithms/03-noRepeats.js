/*
Algorithms: No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function permAlone(str) {
    //Get all of each of the letters into an array for later use
    let lettersArr = str.split("");



    let allSame = []
    lettersArr.map(i => { if (!allSame.includes(i)) { allSame.push(i) } })
    if(lettersArr.length === 1){return 1}
    else if (allSame.length === 1 && lettersArr.length > 1) { return 0 }
    else {
        //Holding arr for our final answer
        let permutations = [];
        //Function to find the number of possible permutations with the given letters
        function numOfPermutations(lettersArr) { let num = 1; for (let i = 1; i <= lettersArr.length; i++) { num *= i } return num }

        //Run it and save the number for later use
        let totalNum = numOfPermutations(lettersArr);
        

        //Initialize our variable to hold all of the combinations
        let combinations = [];
        //Get all of the possible combinations of letters with numbers as placeholders so that we dont have to worry about duplicate letters.
        while (combinations.length < totalNum) {
            let combo = [];

            //While the array doesnt have enough numbers in it, keep adding the numbers
            while (combo.length < lettersArr.length) {
                let num = Math.floor(Math.random() * lettersArr.length)
                if (combo.includes(num) === false) { combo.push(num) }
            };

            //Join the array so we can test to see if the combinations array already has it in it, if not push it into the array.
            let numStr = combo.join("");
            if (!combinations.includes(numStr)) { combinations.push(numStr) }


        }

        //Map over the combinations and convert the numbers into the coresponding numbers from the lettersArr.
        combinations.map(i => {
            let holding = [];
            let indexes = i.split("");
            indexes.map(item => {
                holding.push(lettersArr[item])
            })

            //Join it and push it into the permutations arr.
            permutations.push(holding.join(""))
        })

        //Filter out duplicate strings
        let filteredPermutations = permutations.filter((sum, item) => { if (!sum.includes(item)) { return item } }, [])
        let finalPermutations = [];

        filteredPermutations.map(i => {
            let noRepeats = true;
            let currItem = i.split("")
            currItem.map(item => {
                let currIndex = currItem.indexOf(item)
                if (item === currItem[currIndex + 1] || item === currItem[currIndex - 1])  {
                //    console.log(`Item: ${item}, item+1${currItem[currIndex + 1]}, item-1 ${currItem[currIndex - 1]}`)
                    noRepeats = false;
                    console.log(noRepeats)
                }
            })

            console.log(noRepeats)
            if (noRepeats) { finalPermutations.push(i) }
        })

        return finalPermutations;
    }

}

console.log(permAlone('aaab'));
