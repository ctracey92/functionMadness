/*Description:


In this excercise you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"
NOTE: For coding purposes you have to use ASCII characters . and -, not Unicode characters.
*/

decodeMorse = function (morseCode) {
  //Our holding array that will be our final answer
  let res = [];
  //Break up the original string into an array so we can use array methods on it
  let code = morseCode.trim().split("   ");
  //Map over our array of words, splitting each word into a sub array of letters, translating them and pushing the word into the res array.
  code.map((i) => {
    let holder = [];
    let letters = i.split(/\s+/);
    //We use a switch statement here to do the actual translating.
    letters.map((a) => {
      switch (a) {
        case ".-":
          holder.push("A");
          break;
        case "-...":
          holder.push("B");
          break;
        case "-.-.":
          holder.push("C");
          break;
        case "-..":
          holder.push("D");
          break;
        case ".":
          holder.push("E");
          break;
        case "..-.":
          holder.push("F");
          break;
        case "--.":
          holder.push("G");
          break;
        case "....":
          holder.push("H");
          break;
        case "..":
          holder.push("I");
          break;
        case ".---":
          holder.push("J");
          break;
        case "-.-":
          holder.push("K");
          break;
        case ".-..":
          holder.push("L");
          break;
        case "--":
          holder.push("M");
          break;
        case "-.":
          holder.push("N");
          break;
        case "---":
          holder.push("O");
          break;
        case ".--.":
          holder.push("P");
          break;
        case "--.-":
          holder.push("Q");
          break;
        case ".-.":
          holder.push("R");
          break;
        case "...":
          holder.push("S");
          break;
        case "-":
          holder.push("T");
          break;
        case "..-":
          holder.push("U");
          break;
        case "...-":
          holder.push("V");
          break;
        case ".--":
          holder.push("W");
          break;
        case "-..-":
          holder.push("X");
          break;
        case "-.--":
          holder.push("Y");
          break;
        case "--..":
          holder.push("Z");
          break;
        case "...---...":
          holder.push("SOS");
          break;
        case ".-.-.-":
          holder.push(".");
          break;
        case ".-.-.-":
          holder.push(".");
          break;
        case "-.-.--":
          holder.push("!");
          break;
      }
    });
    let word = holder.join("");
    res.push(word);
  });

  return res.join(' ')
};

//Test Cases:
console.log(decodeMorse(".-"), "<- Should be: A");
console.log(decodeMorse("."), "<- Should be: E");
console.log(decodeMorse(".."), "<- Should be: I");
console.log(decodeMorse(". ."), "<- Should be: EE");
console.log(decodeMorse(".   ."), "<- Should be: E E");
console.log(decodeMorse("...---..."), "<- Should be: SOS");
console.log(decodeMorse("... --- ..."), "<- Should be: SOS");
console.log(decodeMorse("...   ---   ..."), "<- Should be: S O S");
console.log(
  decodeMorse(
    "      ...---... -.-.--   - .... .   --.- ..- .. -.-. -.-   -... .-. --- .-- -.   ..-. --- -..-   .--- ..- -- .--. ...   --- ...- . .-.   - .... .   .-.. .- --.. -.--   -.. --- --. .-.-.-  "
  ),
  "<- Should be: SOS! THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
);
