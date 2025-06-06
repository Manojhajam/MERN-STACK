const customers = new Array(1, 2, 3, 4, 5, 6);
// customers.pop();

// customers.unshift(6);

// customers.shift();

// const filtered = customers.filter((value) => {
//     return value != 4 && value !=5;
// })
// console.log(filtered);


// const map = customers.map((value) => {
//     return value*2;
// })
// console.log(map);



// const total = customers.reduce((acc, currentvalue) => {
//     return acc * currentvalue;
// }, 1)
// console.log(total);

// console.log(customers);

// const students = ["Ram", 'Hari', 'Hari'];

// const isRam = students.every((value) => value === "Ram" || value === "Hari");
// console.log(students)
// console.log(isRam)
// console.log(students.includes('Gopal'));

// const isRam = students.some(value => value === "Ram");
// console.log(students);
// console.log(isRam);


//Spread OPerator
// const isRam = students.some(value => value === "Ram");
// const newStudents = ["Sita", "Jack"];

// const all = ["joe", ...students, ...newStudents]
// console.log(all)



// (Destructuring) store array in variables
const students = ["Ram", "Hari", "Hari", "Manoj"];
const [Student1, Student2, ...rest] = students;
console.log(Student1);
console.log(...rest)