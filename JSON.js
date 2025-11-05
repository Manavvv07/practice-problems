const user = {
    myName: "Manav",
    age: 22,
    gender: "Male"
}

const finalString = JSON.stringify(user);
console.log(finalString);

const backToObj = JSON.parse(finalString);
console.log(backToObj);