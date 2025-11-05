class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getDay();
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new Person("Manav", "Singh", "1-21-2003")
const person2 = new Person("Anish", "Yadav", "3-17-2002")
const person3 = new Person("Ameya Singh", "Chauhan", "1-15-2003")

console.log(person1.getFullName())
console.log(person2.getFullName())
console.log(person3.getFullName())
