const userData = {
    id: 'u1',
    name: 'John',
    //job: {title: 'QA', description:'Quality Assurance'}
}

function printUserData(u: userData) {
    
    console.log(u.name)
    // Optional
    console.log(u?.job.title)
}