// THE JAVASCRIPT THIS KEYWORD REFERS TO THE OBJECT IT BELONGS TO
// IT HAS DIFFERENT VALUES DEPENDING ON WHERE IT IS USED

// 1.ALONE, THIS REFERS TO THE GLOBAL OBJECT

// console.log(this);
// console.log(this === window);


// 2.IN A REGULAR FUNCTION, THIS REFERS TO THE GLOBAL OBJECT


// function printName(){
    //     console.log(this);
    // }
    // printName();
    
    
    // 3.IN A METHOD, THIS REFERS TO THE OWNER OBJECT
    
    
    // let abc = {
    //     name: 'fahad',
    //     myname: function(){
    //         // console.log(this);
    //         console.log(this.name);
    //     }
    // }
    // console.log(abc);
    // abc.myname()
    
    
    // 4.IN A FUNCTION IN STRICT MODE THIS IS UNDEFINED
    
    // "use strict"; // it tells javascript to strictly follow the code
    
    // function printName(){
    //     console.log(this);
    // }
    // printName();





// let abc = {
//     name: 'fahad',
//     myname: function(){
//         setTimeout(function(){
//             console.log(this);
//         },1000);
//     }
// }
// abc.myname();

// let abc = {
//     name: 'fahad',
//     myname: function(){
//         setTimeout(() => {
//             console.log(this);
//         },1000);
//     },
//     anotherName: () => {
//         console.log(this);
//     }
// }
// abc.myname();
// abc.anotherName();