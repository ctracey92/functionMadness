'use strict'
function fiboEvenSum(n) {
    // You can do it!
    let holder = [];
    for (let i = 1; i <= n; i++) {
      if (holder.length === 0) { holder.push(i) }
      else if (holder.length === 1) { holder.push(holder[holder.length - 1] + holder[holder.length - 1]) }
      else { holder.push(holder[holder.length - 1] + holder[holder.length - 2]) }
    }
    let noOdds = holder.filter(i => i % 2 === 0) 
  
    return noOdds.reduce((total,item) => total+=item)
  }
  
  console.log(fiboEvenSum(10));