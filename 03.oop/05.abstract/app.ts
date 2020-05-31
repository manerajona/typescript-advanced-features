abstract class Person {

    constructor(readonly firstName: string, readonly lastName: string, private age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }

    setAge(age: number) {
        this.age = age
    }

    getAge():number {
        return this.age
    }

    abstract toString(): string

    abstract rest(): void

}

class Employee extends Person {

    constructor(firstName: string, lastName: string, age: number, private role: string) {
        super(firstName, lastName, age)
        this.role = role
    }

    public toString(): string {
        return `Employee : [name: ${this.firstName} ${this.lastName}, role: ${this.role}]`
    }

    public getRole(): string {
        return this.role
    }

    public setRole(r: string) {
        this.role = r
    }

    public rest(): void {
        console.log(`${this.firstName} is resting...`)
    }
}


let jonathan = new Employee('Jonathan', 'Manera', 31, 'Software Engineer')
console.log(jonathan.toString())
jonathan.rest()