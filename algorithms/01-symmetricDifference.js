
function sym(...args) {
    //Initialize our global variable;
    let final = [];
    args.map(arr => {
        //Intialize our holding array
        let holding = [];

        //Map over the current array and comapre it against the current final, if a value is in this array but not final, it will be pushed to holding
        arr.map(item => { if (!final.includes(item) && !holding.includes(item)) { holding.push(item) } });

        //Map over the current array and comapre it against the current array, if a value is in this array but not the current one, it will be pushed to holding
        final.map(item => { if (!arr.includes(item)) { holding.push(item) } });

        //Make the final equal to the current holding which is the difference between the arrays.
        final = holding;
    })


    //Quick sort so it is in numeric order
    final.sort((a, b) => a - b)

    return final;
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [10])
