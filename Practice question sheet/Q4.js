const person = {
    name: "Manav", 
    age: 22
}

let newObj = Object.assign({}, person, {gender: "Male"});
console.log(newObj)