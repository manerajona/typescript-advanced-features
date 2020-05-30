function add(a: number, b: number): number {
  return a + b
}

function printResult(result: number): void {
  console.log('Result is ' + result)
  return
}

function addAndPrint(
  print: (n: number) => void,
  operation: (a: number, b: number) => number,
  n1: number,
  n2: number
) {
  print(operation(n1, n2))
}

addAndPrint(printResult, add, 1, 2)

addAndPrint((result: number) => console.log('result=' + result), add, 2, 3)

addAndPrint(
  (result: number) => console.log('result=' + result),
  (a: number, b: number) => a * b,
  4, 5)