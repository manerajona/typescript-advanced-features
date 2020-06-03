// Arrays
const names: Array <string> = ['John', 'Anna', 'Sally']
const ages: Array <number> = [33, 40, 21]

// Promise
const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000)
})

promise.then(s => {s.split('-')})

// Partial
interface Goal{
    name: string
    deadline: Date
}


function createGoal(name: string, date: Date): Goal {
    let goal : Partial<Goal> = {}
    goal.name = name
    goal.deadline = date
    return goal as Goal
}


//Read-only
const namelist: Readonly<string[]> = names
const agelist: Readonly<number[]> = ages
