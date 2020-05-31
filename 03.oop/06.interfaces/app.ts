interface Ageable {
    getAge(): number
    setAge(age: number): void
    happyBirthday(): void
}

interface Greetable {
    greet(person: Person): void
}

interface Barkable {
    bark(): void
}

class Person implements Ageable, Greetable {

    constructor(readonly firstName: string, readonly lastName: string, private age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    public getAge(): number {
        return this.age
    }

    public setAge(age: number) {
        this.age = age
    }

    public happyBirthday() {
        console.log(`Happy birthday ${this.firstName}!`)
        this.setAge(this.getAge() + 1)
    }

    public greet(p: Person) {
        console.log(`${this.firstName} ${this.lastName} says hello to ${p.firstName} ${p.lastName}`)
    }
}

class Dog implements Ageable, Barkable {
    
    constructor(readonly firstName: string, private age: number) {
        this.firstName = firstName
        this.age = age
    }

    public getAge(): number {
        return this.age
    }

    public setAge(age: number) {
        this.age = age
    }

    public happyBirthday() {
        console.log(`Happy birthday ${this.firstName}!`)
        this.setAge(this.getAge() + 1)
    }

    public bark() {
        console.log('WOOF!')
    }
}


let juan = new Person('Juan', 'Martin', 31)
let sally = new Person('Sally', 'Smith', 25)

juan.greet(sally)

let simon = new Dog('Simon', 8)
simon.bark()

console.log(sally.firstName + " has " + sally.getAge())
sally.happyBirthday()
console.log(sally.firstName + " has " + sally.getAge())

// Use objects than implements the same interface indiferently
function gettingOld(someone: Ageable): number {
    someone.happyBirthday()
    return someone.getAge()
}

console.log(juan.firstName + " has " + gettingOld(juan))
console.log(simon.firstName + " has " + gettingOld(simon))

