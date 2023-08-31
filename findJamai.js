const boys =[
    {Name: 'Abul', job: 'govt', salary:17000},
    {Name: 'Babul', job: 'non-govt', salary:27000},
    {Name: 'Kamal', job: 'govt', salary:21000},
    {Name: 'Habul', job: 'non-govt', salary:47000},
    {Name: 'Jabul', job: 'govt', salary:23000},
    {Name: 'Tabul', job: 'non-govt', salary:57000},
];
// if govtjob 20000 || non-gov 40000;

const jamies = boys.filter(pola => (pola.job ==='govt' && pola.salary >=20000) ||(pola.job ==='non-govt' && pola.salary >= 40000));


console.log(jamies);