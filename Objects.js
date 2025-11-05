const person = {
    firstName: "Manav",
    lastName: "Singh",
    age: 22, 
    hobbies: ['football', 'cooking', 'bikes', 'singing'],
    address: {
        area: 'Ganeshpeth',
        city: 'Nagpur', 
        state: 'Maharashtra'
    }
}

console.log(person)
console.log(person.hobbies[1])
console.log(person.address.city)

const {firstName, lastName, address: {city}} = person
console.log(firstName)
console.log(city)

person.email = 'manavsingh29sk@gmail.com'
console.log(person)

function objectMethods (obj){
    console.log("Original object: ", obj);

    let keys = Object.keys(obj);
    console.log("after Object.keys(): ", keys)

    let values = Object.values(obj);
    console.log("After Object.values: ", values);

    let entries = Object.entries(obj);
    console.log("After Object.entries: ", entries);

    let hasProp = obj.hasOwnProperty("age");
    console.log("After Object.hasOwnProperty: ", hasProp);

    let newObj = Object.assign({}, obj, {Gender: "Male"});
    console.log("After Object.assign: ", newObj);
}

objectMethods(person);