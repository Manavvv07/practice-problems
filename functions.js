const addNums = (num1, num2) =>
{
    return num1 + num2
}

console.log(addNums(4, 5))

function sum(a, b){
    const sumValue = a + b;
    return sumValue;
}

const value = sum(4, 5);
console.log(value);

function greet(){
    console.log("Hello world");
}   

setTimeout(greet, 3*1000);
setInterval(greet, 2*1000);