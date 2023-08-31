const person ={
    Name : 'Hero Alom',
    age: 24,
    phone: '01761073247',
    address: 'Bogura',
    p: [1, 2, 3, 4, 5,]
}

const {Name, age, ...extra} = person;


console.log(Name, age,);
console.log(extra)