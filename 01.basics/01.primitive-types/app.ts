// Primitive number
function add(n1: number, n2: number, s: string, b: boolean) {

    if(b) {
        console.log(s)
    }

    return n1 + n2
}

const number1 = 11
const number2 = 4.9

// Primitive string
const str1 = 'single quotes '
const str2 = " double quotes "
const str3 = ` back quotes`

// boolean
const printstring = true

let result = add(number1, number2, str1, printstring) 
console.log(typeof result)
console.log("Result is " + result)

let variable : number
variable = add(33, 66.09, "", false)
console.log(typeof variable)
console.log("Variable is " + variable)
