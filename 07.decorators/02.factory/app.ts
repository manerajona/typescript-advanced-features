function WithTemplate(template: string, hookId: string) {
    return function (constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector('h1') !.textContent = p.name
        }
    }
}

@WithTemplate('<h1></h1>', 'app')
class Thing {
    name = 'Hello!!'

    constructor() {
        console.log('Creating person object...')
    }
}

const pers = new Thing()

console.log(pers)