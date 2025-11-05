const fruits = ['apple', 'banana', 'mango']
console.log(fruits)
fruits.push('grapes')
console.log(fruits)
fruits.unshift('guava')
console.log(fruits)
fruits.pop()
console.log(fruits)
console.log(fruits.indexOf('mango'))

const initialArray = [1, 2, 3];
const secondArray = [4, 5, 6];

console.log(initialArray.concat(secondArray));

function addNum(i){
    console.log(i + 5);
}
initialArray.forEach(addNum);

