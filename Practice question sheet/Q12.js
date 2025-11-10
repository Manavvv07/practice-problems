numbers = [1, 2, 4, 6, 3, 8, 5, 99]

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i]>numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;

        }
    }
}

console.log("Array sorted in ascending: ", numbers);

for(let i = 0; i < numbers.length; i++){
    for(let j = i + 1; j < numbers.length; j++){
        if(numbers[i]<numbers[j]){
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;

        }
    }
}

console.log("Array sorted in descending: ", numbers);