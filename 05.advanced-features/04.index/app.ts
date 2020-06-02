interface ErrorContainer {
    id: string
    // Index
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    id: '005',
    email: 'Not a valid email'
}
