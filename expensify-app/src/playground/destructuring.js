console.log('desctructuring')

const person = {
  name: 'Danillo',
  age: 22,
  location: {
    city: 'Cajamar',
    temp: 40
  }
};

const { name, age } = person;

console.log(`${name} is ${age}`)


//
// Array desctruring;
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19247']

const [street, city, state = 'New York', zip] = address

console.log(`You are in ${city} ${state}.`)