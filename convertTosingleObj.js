const Person =[
    {id:'ID01', name: 'Abul', age: 23},
    {id:'ID02', name: 'Babul', age: 43},
    {id:'ID03', name: 'Habul', age:  54},
    {id:'ID04', name: 'Jabul', age: 29},
];
// modify a single object 
// {
//      ID01: "Abul";
//     ID02: "Babul";
// }
const info ={};
Person.map( p=>{
    info[p.id] = p.name;
    
})
console.log(info)

