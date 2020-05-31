class Department {

    // Static Attributes
    public static LOC_AR: string = 'AR'
    public static LOC_CL: string = 'CL'

    constructor(readonly name: string, readonly location: string) {
        this.name = name
        this.location = location
    }

    public toString(): string {
        return `Department : [name: ${this.name}, name: ${this.location}]`
    }

}

class Employee {

    constructor(readonly name: string, private role: string, private department: Department) {
        this.name = name
        this.role = role
        this.department = department
    }

    // Static method
    static createEmptyInstance() {
        return new Employee('', '', {} as Department)
    }

    public toString(): string {
        return `Employee : [name: ${this.name}, role: ${this.role}]`
    }

    public getDeparment(): Department {
        return this.department
    }

    public setDeparment(d: Department) {
        this.department = d
    }

    public getRole(): string {
        return this.role
    }

    public setRole(r: string) {
        this.role = r
    }
}


let it = new Department('IT', Department.LOC_AR)

let jonathan = new Employee('Jonathan', 'Software Engineer', it)

let empty = Employee.createEmptyInstance()

console.log(jonathan.toString())
console.log(empty.toString())

console.log(`Deparment of ${jonathan.name} is located in ${jonathan.getDeparment().location}`)