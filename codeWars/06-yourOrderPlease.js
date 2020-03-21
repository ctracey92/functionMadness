/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/

const order = (words) => {
    //Turn the string into an array
    let words = words.split(" ")
    //This will be our final sentence
    let wordsArr = [];

    //Loop over the array to check each word
    for (let i = 0; i < words.length; i++) {
        //The current word we are on
        let numOrder = (i + 1);

        //Map over the word arr to find the next word needed and push it into the array
        words.map(word => { if (word.includes(numOrder)) { wordsArr.push(word) } })
    }

    //Return the word joined back into a string
    return wordsArr.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"), "<-Should return Thi1s is2 3a T4est") //Should return Thi1s is2 3a T4est
console.log(order("4of Fo1r pe6ople g3ood th5e the2"), "<-Should return Fo1r the2 g3ood 4of th5e pe6ople") //Should return Fo1r the2 g3ood 4of th5e pe6ople
console.log(order("d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6"), "<-Should return wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor") //Should return wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor
console.log(order(""), "", "<-Should return empty input should return empty string") //Should return empty input should return empty string
console.log(order("3 6 4 2 8 7 5 1 9"), "<-Should return 1 2 3 4 5 6 7 8 9") //Should return 1 2 3 4 5 6 7 8 9
