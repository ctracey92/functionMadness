/*
Sudoku Background
Sudoku is a game played on a 9x9 grid. The goal of the game is to fill all cells of the grid with digits from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contain all of the digits from 1 to 9.
(More info at: http://en.wikipedia.org/wiki/Sudoku)

Sudoku Solution Validator
Write a function validSolution/ValidateSolution/valid_solution() that accepts a 2D array representing a Sudoku board, and returns true if it is a valid solution, or false otherwise. The cells of the sudoku board may also contain 0's, which will represent empty cells. Boards containing one or more zeroes are considered to be invalid solutions.

The board is always 9 cells by 9 cells, and every cell only contains integers from 0 to 9.
*/

const validSolution = board => {
  let valid = true; //Assume every board is valid until told otherwise
  //Our row checking function
  const rowCheck = arr => {
    let rowCount = 0;
    while (rowCount < 9) {
      let items = arr[rowCount];
      for (let i = 0; i < 9; i++) {
        if (!items.includes(i + 1)) {
          valid = false;
          break;
        }
      }
      rowCount++;
    }
    return valid;
  };
  board.map(i => { if (i.includes("0")) { valid = false;}}); //Check to see if any boards include a zero
  if (!valid) { return valid }; //Kick it out if it is invalid
  //Get my columns into a new array
  let colCount = 0, rowArr = [];
  while (colCount < 9) {
    let currRow = board.reduce((score, i) => {
      score.push(i[colCount]);
      return score;
    }, []);
    rowArr.push(currRow);
    colCount++;
  };
  if (!rowCheck(rowArr)) {return valid }; //Make sure each column has 1-9
  if (!rowCheck(board)) {return valid }; //Make sure every row has 1-9
  //Make sure every sub-grid has 1-9
  let subArrayed = [];
  //Step 1: Get all of the rows into 3 sub rows to start forming the squares
  for (let i = 0; i < board.length; i++) {
    let holder = [];
    let counter = 0;
    while (holder.length < 3) {
      let threeNums = [];
      while (threeNums.length < 3) {
        threeNums.push(board[i][counter]);
        counter++;
      }
      holder.push(threeNums);
    }

    subArrayed.push(holder);
  }
  //Step 2: Group them in multiples of 3 into boxes;
  let boxedArr = [];
  let row = 0;
  //i is now the column we will continually grab each chunk and make it into a new row for us to evaluate.
  for (let i = 0; i < 3; i++) {
    let counter = 0;
    while (counter < 3) {
      let holder = [];
      while (holder.length < 9) {
        let curr = subArrayed[row % 9][i];
        holder.push(...curr);
        row++;
      }
      boxedArr.push(holder);
      counter++;
    }
  }
  //Make sure every row has 1-9
  rowCheck(boxedArr);
  return valid;
};

//Test Cases
console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]),
  "<- Should return true"
); //Should return true

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]),
  "<- Should return false"
); //Should return false

console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 3, 1, 5, 6, 4, 8, 9, 7],
    [3, 1, 2, 6, 4, 5, 9, 7, 8],
    [4, 5, 6, 7, 8, 9, 1, 2, 3],
    [5, 6, 4, 8, 9, 7, 2, 3, 1],
    [6, 4, 5, 9, 7, 8, 3, 1, 2],
    [7, 8, 9, 1, 2, 3, 4, 5, 6],
    [8, 9, 7, 2, 3, 1, 5, 6, 4],
    [9, 7, 8, 3, 1, 2, 6, 4, 5]
  ]),
  "<- Should return false"
); //Should return false

console.log(
  validSolution([
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
  ]),
  "<- Should return false"
); //Should return false

console.log(
  validSolution([
    [8, 2, 6, 3, 4, 7, 5, 9, 1],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 6, 5, 8, 7, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [6, 5, 9, 1, 7, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [9, 4, 8, 7, 5, 1, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 8, 1, 5, 4]
  ]),
  "<- Should return true"
); //Should return true

console.log(
  validSolution([
    [1, 2, 6, 3, 4, 7, 5, 9, 8],
    [7, 3, 5, 8, 1, 9, 6, 4, 2],
    [1, 9, 4, 2, 7, 5, 8, 6, 3],
    [3, 1, 7, 5, 8, 4, 2, 6, 9],
    [7, 5, 9, 1, 6, 2, 4, 3, 8],
    [4, 8, 2, 9, 3, 6, 7, 1, 5],
    [1, 4, 8, 7, 5, 9, 3, 2, 6],
    [5, 6, 1, 4, 2, 3, 9, 8, 7],
    [2, 7, 3, 6, 9, 1, 8, 5, 4]
  ]),
  "<- Should return false"
); //Should return false
