const add: (a: number, b: number) => number = (a, b) => a + b

const printOutput: (n: string | number) => void = num => console.log('Result='+num)

printOutput(add(30, 26))
