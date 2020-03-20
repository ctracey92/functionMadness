/*
Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Note: If the number is a multiple of both 3 and 5, only count it once.

Courtesy of ProjectEuler.net
*/

const solution = number => {
  //Our final answer var
  let sum = 0;
  //Our counter starting at 3
  let i = 3;
  //While i is less than our arg num we continue
  while (i < number) {
    //If it is evely divisible by 3 or 5 we add it to our sum
    if (i % 3 === 0 || i % 5 == 0) {
      sum += i;
    }
    //We increment and continue
    i++;
  }
  return sum;
};

console.log(solution(10),"<- Should return 23"); //Should return 23
console.log(solution(20),"<- Should return 78"); //Should return 78
console.log(solution(9168),"<- Should return 9168"); //Should return 9168
