interface Sumable {
    x: number
    y: number
}

const xy = {x: 1, y: 2}

function sumAndPrint(s: Sumable) {
    console.log(s.x + s.y)
}

// implicit casting
sumAndPrint(xy)

// explicit casting
xy as Sumable

// Empty object
type Data = {
    id: string
    name: string
}

const emptyData: Data = {} as Data

// More casting
interface LI { length: number}

let a = 'hello'
let b: number[] = [1234] 

b as LI
a as LI
