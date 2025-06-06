let noofstds = 3;
const sendSMS = (name) => {
    console.log(`Dear ${name}, Event!`);
}
// for (i = 1; i <= noofstds; i++)
// {
//     sendSMS(i);
// }
// let i = 30;
// while (i > 0) {
//     sendSMS(i);
//     i--;
// }
// let i = 1;
// do {
    
//      sendSMS(i);
//          i++;
// } while (i <= noofstds);
   
const students = new Array("Manoj", "Karan", "Rohan");
// let rollNo = 1;
// while (rollNo <= noofstds) {
//     // console.log(students[rollNo - 1]);
//     // rollNo++;
//     let name = students[rollNo - 1];
//     sendSMS(name);
//     rollNo++;
// }

// students.forEach((element) => {
//     sendSMS(element)
// });

// for (let i = 0; i < students.length; i++)
// {
//     sendSMS(students[i]);
// }

let i = 0;
do {
    sendSMS(students[i]);
    i++;
} while (i<students.length);
