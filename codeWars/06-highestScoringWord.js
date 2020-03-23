/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.
*/

function high(x) {
  let words = x.split(" ");
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let scores = words.map(item => {
    let score = 0;
    let letters = item.split("");
    letters.map(letter => (score += alphabet.indexOf(letter) + 1));
    return score;
  });

  let highest = Math.max(...scores);

  return words[scores.indexOf(highest)];
}

//Test Cases

console.log(high('man i need a taxi up to ubud'), '<- Should be taxi'); // Should be taxi
console.log(high('what time are we climbing up the volcano'), '<- Should be volcano'); // Should be volcano
console.log(high('take me to semynak'), ' <- Should be semynak'); // Should be semynak
console.log(high('massage yes massage yes massage'), '<- Should be massage'); // Should be massage
console.log(high('take two bintang and a dance please'), '<- Should be bintang'); // Should be bintang
