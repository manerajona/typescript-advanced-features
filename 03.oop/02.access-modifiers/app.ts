class Department {
    
    // Attributes
    readonly name: string
    readonly location: string
    private director: Employee = {} as Employee

    // Object constructor
    constructor(name: string, loc: string){
        this.name = name
        this.location = loc
    }

    // Methods
    public toString(): string {
        return `Department : [name: ${this.name}, name: ${this.location}]`
    }

    public setDirector(dir: Employee): void {
        this.director = dir
    }

    public getDirector(): Employee {
         return this.director
    }

}

class Employee {

    // Attributes
    // readonly name: string
    // private role: string
    // private department: Department

    // Shorthand initialization
    constructor(readonly name: string, private role: string, private department: Department) {
        this.name = name
        this.role = role
        this.department = department
    }

    // Methods
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


let it = new Department('IT', 'AR')
let jonathan = new Employee('Jonathan', 'Software Engineer', it)

it.setDirector(jonathan)

console.log(`${jonathan.name} is a ${jonathan.getRole()}`)
console.log(`Deparment of ${jonathan.name} is ${jonathan.getDeparment().name}`)
console.log(`Deparment director is ${jonathan.getDeparment().getDirector().name}`)