/*
Algorithms: Implement Selection Sort
Here we will implement selection sort. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

*/

const selectionSort = array => {
  //Our main for loop that will allow us to put the next smallest number in place
  for (let i = 0; i < array.length; i++) {
    //Our minimum variable currently set to the index of i
    let minimum = i;
    //The secondary for loop that will allow us to look through the remaining items for the next smallest number
    for (let a = i + 1; a < array.length; a++) {
      //If the current item in the secondary loop is smaller than the current min, we are going to update our min var to its index
      if (array[minimum] > array[a]) {
        minimum = a;
      }
      //If minimum isnt equal to i we need to update it using our temp variable to swap the two numbers
      if (minimum !== i) {
        let temp = array[i];
        array[i] = array[minimum];
        array[minimum] = temp;
      }
    }
  }
  return array;
};

/*
selectionSort should return a sorted array (least to greatest).
selectionSort should return an array that is unchanged except for order.
selectionSort should not use the built-in .sort() method.
*/

console.log(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])); //Should return [1,1,2,2,4,8,32,43,43,55,63,92,123,123,234,345,5643]
