function add(a: number, b: number): number {
  return a + b
}

let someValue: void | undefined

function printResult(result: number): void | undefined {
  console.log('Result is ' +  result)
  return
}

someValue = printResult(3)

printResult(add(30, 26))
