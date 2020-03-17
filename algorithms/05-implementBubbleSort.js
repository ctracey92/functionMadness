/*
This is the first of several challenges on sorting algorithms. Given an array of unsorted items, we want to be able to return a sorted array. We will see several different methods to do this and learn some tradeoffs between these different approaches. While most modern languages have built-in sorting methods for operations like this, it is still important to understand some of the common basic approaches and learn how they can be implemented.

Here we will see bubble sort. The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

Instructions: Write a function bubbleSort which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

const bubbleSort = (array) => {
    //Initialize our condition
    let swapped = true;
    
    //Do while loop to sort, since we dont know how long it will run for, but it MUST run at LEAST once
    do{
        //So that we can break out of the loop we set it to false, if it make it all the way through we crash out of it.
        swapped = false;

        //Map over the array and check all items
        for(let i = 0; i< array.length; i++){
            //If the item is bigger than the one that follows it, it needs to be moved
            if(array[i] > array[i+1]){

                //Here we save it in a temp variable so we can switch them
                let temp = array[i];
                array[i] = array[i+1];
                array[i + 1] = temp;

                //We set our condition to true so that the loop will keep running
                swapped = true;
            }
        }
    }while(swapped)

    //Return the sorted array
    return array
}

/*
Additional Notes:
bubbleSort should return a sorted array (least to greatest).
bubbleSort should return an array that is unchanged except for order.
bubbleSort should not use the built-in .sort() method.
*/

console.log(bubbleSort([10,9,8,7,6,5,4,3,2,1])); //Should return 