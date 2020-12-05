// const getPosts = async () => {

//     try {
//         const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
//         const posts = await postResponse.json();
//         const postsTitle = posts.map((post) => {
//             return {
//                 title: post.title
//             }
//         });
//         const users = await userResponse.json();
//         // console.log('response ==========>', posts);
//         // console.log('response user =====>', users);
//         console.log(postsTitle);
//     } catch (error) {
//         console.log(error);
//     }

// }

// getPosts();

// console.log('outside getposts function');

async function postData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        body: JSON.stringify({
            title: "My Info",
            body: "Data",
            userId: 4
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });
    console.log("response = ", response);

    const data = await response.json();
    console.log("Data = ", data);
}

postData();