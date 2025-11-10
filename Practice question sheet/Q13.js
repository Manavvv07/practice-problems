const users = [
    {name: "Manav", age: 22},
    {name: "Ameya", age: 22},
    {name: "Anish", age: 23},
    {name: "Karan", age: 18},
    {name: "Raghav", age: 19},
    {name: "Nikunj", age: 17},
    {name: "Alex", age: 8},
    {name: "Darsh", age: 5},
]

//13.a
for(let i = 0; i < users.length; i++){
    console.log(users[i].name);
}

//13.b, 13.c, 13.d
users.forEach(user => {user.gender = 'Male'})
console.log(users);

let filtered = users.filter(user => user.age < 18);
console.log("Users with age less than 18: ", filtered);

let filtered18p = users.filter(user => user.age > 18);
console.log("Users with age more than 18: ", filtered18p);

let filtered18 = users.filter(user => user.age == 18);
console.log("Users with age 18: ", filtered18);

//13.e
let totalAge = users.reduce((sum, user) => sum + user.age, 0);
console.log("Sum of ages of all users is: ", totalAge);

//13.f
let filteredName = users.filter(user => user.name == "Alex");
console.log("User with name Alex: ", filteredName);

//13.g
let index = users.findIndex(user => user.name == "Alex");
console.log("Index of user with name alex is: ", index)

//13.h
users.sort((a, b) => a.age - b.age);
console.log("Users in ascending order of age: ", users);

users.sort((a, b) => b.age - a.age);
console.log("Users in descending order of age: ", users);