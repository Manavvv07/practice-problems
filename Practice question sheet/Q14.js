//Spread operator

let numbers = [1, 2, 3, 4, 5, 6]
let fruits = ['mango', 'apple', 'guava', 'grapes']

/*if we want to get all these numbers seperately
we will use the spread operator */
console.log(...numbers)

/*we can use spread operator to make sopies of arrays,
pass array elements as arguments to functions and
merging two or more arrays*/

let copyNumbers = [...numbers];
console.log(copyNumbers);

console.log(Math.max(...numbers));

let combinedArray = [...numbers, ...fruits];
console.log(combinedArray);

//Rest parameters
let food1 = "pizza";
let food2 = "burger";
let food3 = "noodles";
let food4 = "momos";
let food5 = "sandwich";
let food6 = "rolls";

/*rest parameters help up to bundle up 
seperate elements into one single array */

function getFoods (...foods){
    console.log(foods);
}

getFoods(food1, food2, food3, food4, food5, food6);

/*Here are two functions to get the sum of numbers 
and the average of the numbers respectively */
function getSum(...numbers2){
    let result = 0;
    for(let number of numbers2){
        result += number;
    }
    return result;
}
console.log(getSum(1, 2, 3, 4, 5, 6));

function getAvg(...numbers2){
    let result = 0;
    for(let number of numbers2){
        result += number/numbers2.length;
    }
    return result;
}
console.log(getAvg(1, 2, 3, 4, 5, 6));