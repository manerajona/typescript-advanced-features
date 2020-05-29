let tuple: [number, string]

tuple = [1, 'one']

//tuple[1] = 2

console.log(tuple)

console.log(tuple[0])
console.log(tuple[1])

// Push is an exception in tuples
tuple.push(2)
tuple.push('two')

for (let value of tuple) {
    console.log(value)
}