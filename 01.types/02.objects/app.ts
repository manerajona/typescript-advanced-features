let person: {
    name: string
    age: number
    job: {
        role: string
        location: string
    }
}

person = {
    name: 'Jonathan',
    age: 31,
    job: {
        role: 'Software Engineer',
        location: 'Argentina'
    }
}

console.log(JSON.stringify(person))