const names: Array <string> = ['John', 'Anna', 'Sally']
const ages: Array <number> = [33, 40, 21]

const promise: Promise<string> = new Promise((resolve) => {
    setTimeout(() => {
        resolve('This is done!')
    }, 2000)
})

promise.then(s => {s.split('-')})