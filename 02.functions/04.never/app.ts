function generateError(message: string, code: number): never {
  throw {
    message: message, errorCode: code
  }
}

let servererror = generateError('Internal server error', 500) // never returns anything
console.log(servererror) 