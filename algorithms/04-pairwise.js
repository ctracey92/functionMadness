/*
Given an array arr, find element pairs whose sum equal the second argument arg and return the sum of their indices.

You may use multiple pairs that have the same numeric elements but different indices. Each pair should use the lowest possible available indices. Once an element has been used it cannot be reused to pair with another element. For instance, pairwise([1, 1, 2], 3) creates a pair [2, 1] using the 1 at index 0 rather than the 1 at index 1, because 0+2 < 1+2.

For example pairwise([7, 9, 11, 13, 15], 20) returns 6. The pairs that sum to 20 are [7, 13] and [9, 11]. We can then write out the array with their indices and values.

Index	0	1	2	3	4
Value	7	9	11	13	15
Below we'll take their corresponding indices and add them.

7 + 13 = 20 → Indices 0 + 3 = 3
9 + 11 = 20 → Indices 1 + 2 = 3
3 + 3 = 6 → Return 6
*/


const pairwise = (arr,arg) => {

    //Initialize our holding array for the indexes of the matches
    let indexes = [];

    //Map over our arr of nums passing the additional parameter of the index so that we can access it
    arr.map((i,indexOfI) => {

        //Get an array of all of the values that come after i
        let allThatsLeft = arr.slice(indexOfI+1)

        //Map over those values so that we can see if they add together to make our arg
        allThatsLeft.map((item, indexOfItem) => {

            //If they do add together AND have not been already used, push their respective indexes into our array
            if(i + item === arg && !indexes.includes(indexOfI) && !indexes.includes(indexOfI + indexOfItem + 1)){
                indexes.push(indexOfI, indexOfI+indexOfItem+1)
            }

        })

    })


    //If the indexes array has stuff in it, reduce it and spit it back out, otherwise return 0
    return indexes.length ? indexes.reduce((sum,curr) => sum+=curr) : 0

};

console.log(pairwise([1, 4, 2, 3, 0, 5], 7) , "<- should return 11" ) //should return 11.
console.log(pairwise([1, 3, 2, 4], 4) , "<- should return 1" ) //should return 1.
console.log(pairwise([1, 1, 1], 2) , "<- should return 1" ) //should return 1.
console.log(pairwise([0, 0, 0, 0, 1, 1], 1) , "<- should return 10" ) //should return 10.
console.log(pairwise([], 100) , "<- should return 0" ) //should return 0.