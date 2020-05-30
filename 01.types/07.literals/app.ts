enum Result {
  AsNumber,
  AsString
}

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: Result.AsNumber | Result.AsString
) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === Result.AsNumber) {
    result = (+input1) + (+input2)
  } else if (resultConversion === Result.AsString) {
    result = input1.toString() + input2
  }
  return result
}

const combinedAges = combine(30, 26, Result.AsNumber)
console.log(combinedAges)

const combinedStringAges = combine('30', '26', Result.AsNumber)
console.log(combinedStringAges)

const combinedNames = combine('Mary', 'Jane', Result.AsString)
console.log(combinedNames)