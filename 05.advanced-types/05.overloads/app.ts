type combinable = string | number

// Overload
function sum(a: string, b:string) :number
function sum(a: string, b:string) :string
function sum(a: number, b:number) :number
function sum(a: combinable, b: combinable) {
    
    // type guard for PRIMITIVE
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

