class Department {
    
    // Attributes
    name: string
    location: string
    director?: string // Adding ? make it optional

    // Object constructor
    constructor(name: string, loc: string){
        this.name = name
        this.location = loc
    }

    // Methods
    toString(): string {
        return `Department : [name: ${this.name}, name: ${this.location}]`
    }

}

console.log(new Department('IT', 'CL').toString())