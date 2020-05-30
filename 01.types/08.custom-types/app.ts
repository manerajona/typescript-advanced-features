enum resultConversion {
  AsNumber = 'number', AsString = 'string'
}

type combinable = number | string

type combined = {
  ret: combinable,
  as: resultConversion
}

function combine(
  input1: combinable,
  input2: combinable,
  resultConv: resultConversion.AsNumber | resultConversion.AsString
) {
  let result: combinable = ""
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConv === resultConversion.AsNumber) {
    result = (+input1) + (+input2)
  } else if (resultConv === resultConversion.AsString) {
    result = input1.toString() + input2
  }

  let c: combined = {
    ret: result,
    as: resultConv
  }
  return c
}

console.log(combine(30, 26, resultConversion.AsNumber))
console.log(combine('Mary', 'Jane', resultConversion.AsString))

