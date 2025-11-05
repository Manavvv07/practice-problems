function Person (firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date (dob)
    this.getFullName = function(){
        return `${firstName} ${lastName}`
    }
}

const person1 = new Person  ("Manav", "Singh", "1-21-2003")

console.log(person1.getFullName())