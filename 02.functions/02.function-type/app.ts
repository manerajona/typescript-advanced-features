function add(a: number, b: number): number {
  return a + b
}

function printResult(result: number): void{
  console.log('Result is ' +  result)
  return
}

let somePrintFunc : Function
somePrintFunc = printResult

let someAddFunc: (a: number, b: number) => number
someAddFunc = add

somePrintFunc(someAddFunc(40, 50))
printResult(add(30, 26))
