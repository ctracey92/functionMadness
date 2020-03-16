/*Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
 Update the current existing inventory item quantities (in arr1). 
 If an item cannot be found, add the new item and quantity into the inventory array.
 The returned inventory array should be in alphabetical order by item.
 */



const updateInventory = (arr1, arr2) => {
    //We only need to search over the second array as the first is just getting updated.
    arr2.map(item => {
        //Initialize the inclusion variable, this will determine if we are pushing it to arr1.
        let included = false;

        //Map over the second array to see if we are updating the quantity or not.
        arr1.map(arr => {
            if (arr[1] === item[1]) {
                arr[0] += item[0]
                included = true;
            }
        })

        //If it is not included we are going to push it to the end of the array.
        if (!included) { arr1.push(item) }
    })


    //Sorting it alphabetically. Because we are checking the second item in the array to sort it we pass it the following function to sort it correctly.  
    arr1.sort((a,b) =>{
        if(a[1]>b[1]){return 1}
        if(a[1]<b[1]){return -1}
        if(a[1] === b[1]){return 0}
    });

    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
