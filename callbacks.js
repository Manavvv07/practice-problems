function sum(a, b, fnToCall){
    let result = a + b;
    fnToCall(result);
}

function displayResult(data){
    console.log("The result of the sum is " + data);
}

function displayResultPassive(data){
    console.log("Sum's result is " + data)
}

sum(6, 8, displayResult);