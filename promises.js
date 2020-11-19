// // STATES OF PROMISE: PENDING, RESOLVE, REJECT

const { doDuring } = require("async")

// const posts = [
//     {title: 'post one', body: 'this is post one'},
//     {title: 'post two', body: 'this is post two'}
// ];
// function getPosts(){
//     let output = '';
//     setTimeout(() => {
//         posts.forEach((post) => { 
//             output += `<li>${post.title}</li>`
//             document.body.innerHTML = output;
//         })
//     }, 1000);
// }
// function createPost(post){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             posts.push(post);
//             const error = false;

//             if(!error){
//                 resolve();
//             } else {
//                 reject('error: something went wrong')
//             }

//         }, 2000);        
//     });
// } 
// createPost({title: 'post three', body: 'this is post three'})
//     .then(getPosts)
//     .then(() => console.log('hello world'))
//     .catch(err => console.log(err));


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => data.map(post => post.title))
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// promise.all() and asyncAwait ye dono khud parhnay hain

// const pobjOne = new Promise((resolve, reject) => {
    
//     setTimeout(() => {
//         let roll_no = [1,2,3,4,5]
//         // resolve(roll_no);
//         reject('error while communicating');
//     }, 2000);

// });

// pobjOne.then((roll_no) => {
//     console.log(roll_no);
// }).catch((err) => {
//     console.log(err);
// })

