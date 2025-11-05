function mathMethods(n){
    console.log("Original value is: ", n)

    let rounded = Math.round(n);
    console.log("After round(): ", rounded);

    let ceiling = Math.ceil(n);
    console.log("After ceil(): ", ceiling);

    let flooring = Math.floor(n);
    console.log("After floor(): ", flooring);

    let randomValue = Math.random();
    console.log("After random(): ", randomValue);
     
    let maxValue = Math.max(10, 15, 300);
    console.log("After max(): ", maxValue);

    let minValue = Math.min(3, 2.5, 1.25);
    console.log("After min(): ", minValue);

    let powerOf = Math.pow(n, 2);
    console.log("After squaring: ", powerOf);

    let squareRoot = Math.sqrt(n);
    console.log("After square root: ", squareRoot);

}

mathMethods(3.14);