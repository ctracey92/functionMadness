/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  //Split our long string into individual words
  let words = x.split(" ");
  //Our alphabet string to be referenced for points later
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  //Map over the words array and get the value of each word by splitting it and calculating its score
  let scores = words.map(item => {
    let score = 0;
    let letters = item.split("");
    letters.map(letter => (score += alphabet.indexOf(letter) + 1));
    return score;
  });

  //Return the word with the highest score (using index of to get the first one)
  return words[scores.indexOf(Math.max(...scores))];
}

//Test Cases
console.log(high('man i need a taxi up to ubud'), '<- Should be taxi'); // Should be taxi
console.log(high('what time are we climbing up the volcano'), '<- Should be volcano'); // Should be volcano
console.log(high('take me to semynak'), ' <- Should be semynak'); // Should be semynak
console.log(high('massage yes massage yes massage'), '<- Should be massage'); // Should be massage
console.log(high('take two bintang and a dance please'), '<- Should be bintang'); // Should be bintang
