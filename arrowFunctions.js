
// INTRODUCED IN ES6

// const newFunc = () => { console.log('es6 function') }
// newFunc();


// const someFunc = (myName) => { console.log(`my name is ${myName}`)}
// someFunc('rao');

// IF WE HAVE ONE PARAMETER SO WE CAN ALSO WRITE LIKE THIS

// const someFunc = myName => console.log(`my name is ${myName}`);
// someFunc('rao')



//if we want to return an objects from arrown function we need to wrap them in parentheses

// const details = name => ({ firstName: name});
// console.log(details('rao'));

// if you forget the paranthesis aroundthe object, details('rao') 
// is going to return undefined like this
// const details = name => {firstName: name};


// const details = name => return {firstname: name};
// console.log(details('rao'));
// we cant write like this it will through an error


// const powerof2 = [1,2,3,4].map(el => el **2)
// console.log(powerof2);

// smarter way to learn javascript k page 58 sa parhna hai mje