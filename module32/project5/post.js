function  loadPosts(){
    console.log('loading posts');
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json())
    .then(data => displayPosts(data))
}
function displayPosts(data){
    // const posts = document.getElementById('posts');
    const postContainer = document.getElementById('posts-list');
    const header = document.createElement('h2');
    header.innerText = 'All Posts';
    postContainer.appendChild(header);


    let n = 1;

    for(const post of data){

        
        console.log(n);

        const userPosts = document.createElement('div');
        userPosts.classList.add('post');
        console.log(post);
        userPosts.innerHTML = `
        <h4>Post ${n}</h4>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        // console.log(div);
        postContainer.appendChild(userPosts);
        n = n + 1;
    }
}