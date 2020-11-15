//  OLD WAY

// const name = 'rao';
// const age = 23;
// const result = 'My name is ' + name + 'my age is ' + age;
// console.log(result);



// NEW WAY
// const name = 'rao';
// const age = 23;
// const result = `My name is ${name} and my age is ${age}`;
// console.log('result', result);



function printName(){
    return 'Rao Fahad Khan';
}
const result = `my name is ${printName()}`;
console.log(result);