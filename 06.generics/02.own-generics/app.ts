function merge<T, U>(o1: T, o2: U): T & U {
    return Object.assign(o1, o2)    
}

const merged = merge({name: 'John', age: '33'}, {position: 'Sortware Engineer', salary: '100K'})
console.log(merged)
