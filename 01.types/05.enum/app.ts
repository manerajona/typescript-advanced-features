enum Role {
    PM, DEV, QA, BA
}

enum Country {
    AR = "Argentina", CL = "Chile", EEUU = "United States", IN = "India"
}

let user: {
    name: string
    job: string
    role: Role
    location: Country
} = {
    name: 'Jonathan',
    job: 'Software Engineer',
    role: Role.DEV,
    location: Country.AR
}

if(user.role == Role.DEV) {
    console.log(user.name + ' is a developer from ' + user.location)
}