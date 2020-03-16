/*
Algorithms: No Repeats Please
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

const permAlone = (str) => {
    //Get all of each of the letters into an array for later use
    let lettersArr = str.split("");


    //Holding array of unique letters
    let uniqueChar = []

    //Maps over the lettersArr to find the unique letters and push them into our holding array (uniqueChar)
    lettersArr.map(i => { if (!uniqueChar.includes(i)) { uniqueChar.push(i) } })

    //If there is only one letter return 1
    if(lettersArr.length === 1){return 1}

    //Checks to make sure not all the letters are the same. If it is, and there are more than 2 letters, it will kick it out as zero.
    else if (uniqueChar.length === 1 && lettersArr.length > 1) { return 0 }

    //Otherwise if there are enough letters, it will run the rest of the function.
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

        //Our holding array for our permutations without repeating letters
        let finalPermutations = [];

        //Map over the permutations to find the permutation that do not have repeating letters.
        permutations.map(i => {

            //The regex pattern below is utilizing a positive lookead to see if a letter is repeated. This is done using repeatable catpure groups. 
            let regex = /(?=([a-z])\1)/gi;

            //Testing to see if it passes the test
            let nonrepeated = !regex.test(i)

            //If it has passed the test, push it into our final permutations array
            if(nonrepeated){finalPermutations.push(i)}

        })

        //Return the final number of permutations without repeating eltters
        return finalPermutations.length;
    }

}


//The code is now mostly running as intended, I am still getting the deviation of 1 on some of them, when it should be 0.


//Test cases and their expected outputs
console.log(permAlone("aab"), "<- should be 2") //should return 2.
console.log(permAlone("aaa"), "<- should be 0") //should return 0.
console.log(permAlone("aabb"), "<- should be 8") //should return 8.
console.log(permAlone("abcdefa"), "<- should be 3600") //should return 3600.
console.log(permAlone("abfdefa"), "<- should be 2640") //should return 2640.
console.log(permAlone("zzzzzzzz"), "<- should be 0") //should return 0.
console.log(permAlone("a"), "<- should be 1") //should return 1.
console.log(permAlone("aaab"), "<- should be 0") //should return 0.
console.log(permAlone("aaabb"), "<- should be 12") //should return 12.



