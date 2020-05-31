interface Operation {
    (a: number, b: number): number
}

let add: Operation
let substract: Operation

add = (n1: number, n2: number) => n1 + n2
substract = (n1: number, n2: number) => n1 - n2

console.log("2 + 2 = " + add(2, 2))
console.log("10 - 5 = " + substract(10, 5))
