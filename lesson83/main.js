const me = {
  name: 'Nureles',
  age: 15,
  sex: 'male',
  sayHello(name) {
    console.log(`Hello, ${name}!`)
  }
}

me.sayHello('Daniil')

const users = [
  {
    name: 'igor',
    age: 20,
    isAdmin: true
  },
  {
    name: 'dmitriy',
    age: 20,
    isAdmin: false
  },
  {
    name: 'alexey',
    age: 20,
    isAdmin: false
  },
  {
    name: 'marina',
    age: 20,
    isAdmin: true
  },
]

let nonAdminCounter = 0

for (let i = 0; i < users.length; i++) {
  if (users[i].isAdmin === false) {
    nonAdminCounter++
  }
}

console.log(nonAdminCounter)