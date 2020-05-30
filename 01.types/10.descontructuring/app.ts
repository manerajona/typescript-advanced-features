const hobbies = ['Yoga', 'Cooking', 'Hiking']

const [hobby1, hobby2, ...remainingHobbies] = hobbies // descontruct

console.log(hobby1, hobby2)
console.log(remainingHobbies)

const usr = {
  name: 'Gr8Sly3r',
  age: 31
}

const copiedUser = { ...usr } // clone

const { name: userName, age } = copiedUser // descontruct

console.log(userName, age)
