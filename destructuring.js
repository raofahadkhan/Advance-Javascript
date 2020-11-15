// ARRAY DESTRUCTURING

// const myArray = ['rao','fahad','khan', 21];
// const [ firstName, middleName, lastName, age] = myArray;
// console.log(firstName, middleName, lastName, age);



// HOW TO DESTRUCTURE SPECIFIC VALUES FROM ARRAY

// const myArray = ['rao','fahad','khan', 21];
// const [ ,, lastName, age] = myArray;
// console.log(lastName, age);

// HOW TO DESTRUCTURE WITH REST VALUES 

// const myArray = ['rao','fahad','khan', 21];
// const [firstName,...restValuesss] = myArray;
// console.log(firstName, restValuesss);


// const myArray = ['rao','fahad','khan', 21];
// const [ ,middleName,...restValues] = myArray;
// console.log(middleName,restValues);


// HOW TO DESTRUCTURE IN ALREADY DECLARED VARIABLES

// let firstName, middleName, lastName, age;
// const myArray = ['rao','fahad','khan', 21];
// ([ firstName, middleName, lastName, age] = myArray);
// console.log(firstName, middleName, lastName, age);

// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx //

// DESTRUCTURING OF OBJECTS

// const obj = {
//     firstName: 'rao',
//     lastName: 'fahad',
//     age: 21,
//     profession: {
//         one: 'react',
//         two: 'nodejs',
//         newObj: {
//             someName: 'umair',
//             otherName: 'shahbaz'
//         }
//     }
// };


// const { firstName, lastName, age, profession} = obj;
// console.log(firstName, lastName, age, profession);


// HOW TO DESTRUCTURE NESTED OBJECTS

// const { profession: {one, two, newObj:{someName, otherName}}} = obj;
// console.log(one, two, someName, otherName)

//  HOW DESTRUCTURE WITH DEFAULT VALUES

// const { firstName, lastName, fatherName = 'mahfooz'} = obj;
// console.log(firstName, lastName, fatherName);

// HOW TO DESTRUCTURE WITH DIFFERENT NAMES

// const { firstName: fname, lastName: lname} = obj;
// console.log(fname, lname);

// HOW TO DESTRUCTURE IN ALREADY DECLARED VARIABLES

// let fname, lname;
// ({firstName:fname, lastName:lname} = obj);
// console.log(fname, lname);

// HOW TO DESTRUCTURE WITH REST VALUES

// const { firstName, lastName, ...restVal} = obj;
// console.log(firstName,lastName,restVal);

// const { lastName, age, ...restValuesss} = obj;
// console.log(lastName, age, restValuesss);

