const students =[
    {name:'Alam', email:'alom@gmail.com', avg:50, fiftyPercent: true},
    {name:'Kamal', email:'kamal@gmail.com', avg:57, fiftyPercent: false},
    {name:'Jalam', email:'Jalom@gmail.com', avg:47, fiftyPercent: false},
    {name:'Sojib', email:'sojib@gmail.com', avg:53, fiftyPercent: true},
    {name:'Salam', email:'Salom@gmail.com', avg: 37, fiftyPercent: true},
    {name:'Talam', email:'Talom@gmail.com', avg:57, fiftyPercent: true},
];

const scic = students.filter(s => s.avg >= 50 && s.fiftyPercent ===true);

const names = scic.map(st => st.name);
console.log(names)