// const name = 'fahad';
// setTimeout(() => console.log('this is set time out'),2000);

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(data => console.log(data))
//       .catch(err => console.log('error',err));
//       console.log(name) 

// to chech catch statement minipulate the endpoint

const posts = [
    {title: 'post one', body: 'this is post one'},
    {title: 'post two', body: 'this is post two'}
];
// map returns array but forEach doesnt
function getPosts(){
    let output = '';
    setTimeout(() => {
        posts.forEach((post) => { //we can do this task with map also
            output += `<li>${post.title}</li>`
            document.body.innerHTML = output;
        })
    }, 1000);
}
function createPost(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000);
}
createPost({title: 'post three', body: 'this is post three'}, getPosts);
//when we passes function as an arguement we dont put paranthesis with it
