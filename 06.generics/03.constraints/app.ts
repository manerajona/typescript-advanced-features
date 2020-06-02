// Type constraint
function mergeObjects<T extends object, U extends object>(o1: T, o2: U): T & U {

    return Object.assign(o1, o2)    
}

const merged1 = mergeObjects({name: 'John', age: '33'}, {position: 'Sortware Engineer', salary: '100K'})
console.log(merged1)

// Interface constraint
function countAndPrint<T extends {readonly length: number}>(item: T) {
    if (item.length > 0) {
        console.log(`Lenght is ${item.length}`)
    } else {
        console.log('Item has no lenght')
    }
}
countAndPrint('Hola mundo!')
countAndPrint('')


// Key of constaint
function extractAndConvert<T extends object, K extends keyof T>(o: T, key: K) {
    return 'Value='+o[key]
}

console.log(extractAndConvert({name: 'Simon'}, 'name'))