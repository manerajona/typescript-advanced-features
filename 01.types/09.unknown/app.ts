// Using 'unknown' is better practice than 'any'
let userInput: unknown

let userNumber: number
let userString: string

userInput = 5

// Is mandatory to check the type before assign it
if(typeof userInput === 'number') {
  userNumber = userInput
}

userString = 'Five'

userInput = userString

