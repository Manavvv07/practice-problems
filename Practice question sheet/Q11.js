const numbers = [1, 3, 5, 3, 7, 4, 9]

function sumOfElements(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]; 
    }
    return sum
}

console.log(sumOfElements(numbers));