const x = 11

if(x === 10){
    console.log("X is 10")
} else if (x > 10) {
    console.log("X is greater than 10")
} else {
    console.log("X is less than 10")
}

const y = 17
const color = x > 10 ? "red" : "blue"
console.log(color)

switch(color) {
    case "red":
        console.log("Colour is red")
        break;
    case "blue":
        console.log("Colour is blue")
        break;
    default:
        console.log("color is not red or blue")
        break;
}