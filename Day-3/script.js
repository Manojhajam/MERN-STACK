// const fruits = ["apple", "banana", "cherry", "date"];
// const sliced = fruits.slice(1, 3);

// console.log(sliced); // ["banana", "cherry"]
// console.log(fruits); // ["apple", "banana", "cherry", "date"]

//Map
// const newArray = array.map((element, index, array) => {
//   // return a transformed element
// });
// const users = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 }
//   ];
// console.log(users.indexOf("25"));
//   const names = users.map(user => user.name);

//   console.log(names); // ["Alice", "Bob"]

console.log("Array Methods");
const customers = new Array(1, 2, 3, 4, 5, 6);
// const tokenMachineTurnsOFCustomer = customers.map((value) => {
//     return value;
// });
const tokenMachineTurnsOFCustomer = [...customers];

console.log('token Machine', tokenMachineTurnsOFCustomer);
// const customersInTurn = customers.shift();
// console.log(customersInTurn);
// console.log(customers);
// const indexOfCustomersInTurn = customers.indexOf(customersInTurn)
// console.log(customersInTurn);

// let length = customers.length;
// for (let i = 0; i<length; i++){

//     console.log(customers.shift())
//     console.log(customers)
// }

// customers.forEach((_,index) => {
//   const customerInTurn = tokenMachineTurnsOFCustomer.shift();
//   console.log(`Customer in turn is: ${customerInTurn}`);
//     console.log(`Customer in Queue: ${tokenMachineTurnsOFCustomer.join(",")}`);
    
//     if (customers.length - 1 === index) {
//         customers.push(7,8,9)
//     }
//     else {
//         console.log(`Customers in queue: ${tokenMachineTurnsOFCustomer.join(",")}`);
//     }
// });

while (tokenMachineTurnsOFCustomer.length !== 0) {
    const customerInTurn = tokenMachineTurnsOFCustomer.shift();
    
    const indexOfCustomerInTurn = customers.indexOf(customerInTurn);

    if (indexOfCustomerInTurn === customers.length - 1)
    {
        console.log(`Last Customer: ${customerInTurn}`);
        // const newCustomers = [7, 8, 9];
        // customers.push(7,8,9);
        tokenMachineTurnsOFCustomer.push(7,8,9);
    }
        
    console.log(`Customer In turn: ${customerInTurn}`);
}
