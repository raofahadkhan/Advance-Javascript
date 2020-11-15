let myObj = {
    fname: 'rao',
    lname: 'fahad',
    address: {
        addressOne: 'karachi',
        addressTwo: 'lahore'
    }
}

// let mysecObj = myObj;
// console.log(mysecObj);
// console.log(mysecObj);
// mysecObj.lname = 'ismail';

// it will change both the objects because it doesnt makes true copy

// console.log('my first obj =====>', myObj);
// console.log('my second obj =====>', mysecObj);


// let mysecObj = {
//     ...myObj
// };
// mysecObj.lname = 'ismail';
// console.log('my first obj ====>', myObj);
// console.log('my second obj ====>', mysecObj);


// let dosraObj = {
//     ...myObj,
//     lname: 'ismail', // it is over ridint the lname's old value here and if we add a key which is not present in the first obj so will add it 
//     middle: 'fawad',

// }

// console.log('my first obj', myObj);
// console.log('my second obj', dosraObj);

// let dosraObj = {
//     ...myObj,
//     lname : 'ismail',  //it is over riding the lname's old value here if we add a key which is not present in the first obj so will add it in the second obj
//     ...myObj['address']['addressOne']= 'Islamabad',
// };

// console.log('my first obj',myObj);
// console.log('my second obj',dosraObj); 