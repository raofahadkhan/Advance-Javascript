// FUNCTION HOISTING

// Hoisting is a javascript default behaviour of moving all the declarations
// to the top current scope

// someFunc(); // i called somefunc() before i have declared it to prive how hoisting works

// function someFunc(){
//     console.log('this is new function');
// }

// LIMITATIONS OF FUNCTION HOISTING:

// function hoisting doesnt apply at functional expressions for example:

someOtherFunc();

var someOtherFunc = function(){
    console.log('limitations of function hoisting');
}