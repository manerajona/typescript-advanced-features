interface Bird {
    type: 'bird'
    flyingSpeed: number
}

interface Horse {
    type: 'horse'
    runningSpeed: number
}

type Animal = Bird | Horse

function moveSpeed(animal: Animal):number {
    let speed: number
    // type guard for INTERFACE
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break
        case 'horse':
            speed = animal.runningSpeed
            break
    }
    return speed
}