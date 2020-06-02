const userData = {
    id: 'u1',
    name: 'John',
    //job: {title: 'QA', description:'Quality Assurance'}
}

// Nullish coalescing
const storedData = userData ?? {id:'', name:''} // Default value