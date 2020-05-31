class Department {
    
    private director: Manager = {} as Manager

    constructor(readonly name: string, readonly location: string){
        this.name = name
        this.location = location
    }

    public toString(): string {
        return `Department : [name: ${this.name}, name: ${this.location}]`
    }

    public setDirector(dir: Manager): void {
        this.director = dir
    }

    public getDirector(): Manager {
         return this.director
    }

}

class Employee {

    constructor(readonly name: string, protected role: string, protected department: Department) {
        this.name = name
        this.role = role
        this.department = department
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

class Manager extends Employee {

    private corporateCreditCard: number = 0

    constructor(name: string, department: Department) {
        super(name, 'Manager', department)
    }

    public setCorporateCreditCard(num: number) {
        this.corporateCreditCard = num
    }

    public getCorporateCreditCard(): number {
        return this.corporateCreditCard
    }

    // Override method
    public toString(): string {
        return `Manager : [name: ${this.name}, role: ${this.role}]`
    }

}


let it = new Department('IT', 'AR')

let jonathan = new Employee('Jonathan', 'Software Engineer', it)
let steven = new Manager('Steven', it)

it.setDirector(steven)

console.log(jonathan.toString())
console.log(steven.toString())
console.log(`Deparment of ${jonathan.name} is ${jonathan.getDeparment().name}`)
console.log(`Deparment director is ${jonathan.getDeparment().getDirector().name}`)
