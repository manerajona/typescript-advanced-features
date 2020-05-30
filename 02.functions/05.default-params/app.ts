function generateError(message: string = 'Error', code: number = 1): never {
  throw {
    message: message, errorCode: code
  }
}

let error = generateError() // default error
