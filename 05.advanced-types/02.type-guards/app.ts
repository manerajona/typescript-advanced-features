type combinable = string | number

function sum(a: combinable, b: combinable) {
    
    // type guard for PRIMITIVE
    if(typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString()
    }
    return a + b
}

class Car {
    drive() {
        console.log('Driving a car...')
    }
}

class Truck {
    drive() {
        console.log('Driving a truck...')
    }
}

type vehicle = Car | Truck

function tollPayment(v: vehicle) {
    v.drive()
    // type guard for CLASS
    if (v instanceof Car) {
        console.log('Charge 1USD')
    } else if (v instanceof Truck) {
        console.log('Charge 2USD')
    }
    v.drive()
}