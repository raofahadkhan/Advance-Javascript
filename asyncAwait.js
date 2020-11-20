const getPosts = async () => {

    try {
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const userResponse = await fetch('https://jsonplaceholder.typicode.com/users');
        const posts = await postResponse.json();
        const postsTitle = posts.map((post) => {
            return {
                title: post.title
            }
        });
        const users = await userResponse.json();
        // console.log('response ==========>', posts);
        // console.log('response user =====>', users);
        console.log(postsTitle);
    } catch (error) {
        console.log(error);
    }

}

getPosts();

console.log('outside getposts function');

