type admin = {
    name: string
    privileges: string[]
}

type employee = {
    name: string
    startDate: Date
}

// Intersection
type elevatedEmployee = admin & employee

const e1: elevatedEmployee = {
    name: 'John',
    privileges: ['execute', 'create', 'update', 'delete'],
    startDate: new Date()
}

// vs. Combinable
type combinedEmployee = admin | employee

const e2: combinedEmployee = {
    name: 'Rob',
    //privileges: ['execute'],
    startDate: new Date()
}