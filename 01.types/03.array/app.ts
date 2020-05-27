let person: {
    name: string
    age: number
    hobbies: string[]
    job: {
        role: string
        location: string
    }
}

person = {
    name: 'Jonathan',
    age: 31,
    hobbies: ['writing', 'programming', 'yoga', 'running'],
    job: {
        role: 'Software Engineer',
        location: 'Argentina'
    }
}

console.log(JSON.stringify(person))

let anything: any[]
anything = [1,2,"three", true, false]

for(const thing of anything) {
    console.log(thing)
}

for(const hobbie of person.hobbies) {
    console.log(hobbie)
}
