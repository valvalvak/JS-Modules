function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

}
attachEvents();

async function displayPost() {
    const titleElement = document.getElementById('post-title')
    const bodyElement = document.getElementById('post-body')
    const ulElement = document.getElementById('post-comments');
    const selectedID = document.getElementById('posts').value;
    
    
    titleElement.textContent = 'Loading...';
    bodyElement.textContent = ''
    ulElement.replaceChildren();
    
    const [post, comments] = await Promise.all([
        getPostByID(selectedID),
        getCommentsByPostID(selectedID)
    ]);

    titleElement.textContent = post.title;
    bodyElement.textContent = post.body;
    
    comments.forEach(c => {
        const liElement = document.createElement('li');
        liElement.textContent = c.text;
        ulElement.appendChild(liElement);
    })
    }

async function getAllPosts() {
    const url = 'http://localhost:3030/jsonstore/blog/posts';

    const res = await fetch(url)
    const data = await res.json();

    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();
    // console.log(data)

    Object.values(data).forEach(p => {
        const optionElement = document.createElement('option');
        optionElement.textContent = p.title;
        optionElement.value = p.id;
        selectElement.appendChild(optionElement);
    });
}

async function getPostByID(postID) {
    const postURL = 'http://localhost:3030/jsonstore/blog/posts/' + postID;

    const postRes = await fetch(postURL)
    const postData = await postRes.json();

    return postData;
}

async function getCommentsByPostID(postID) {
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';

    const commentsRes = await fetch(commentsURL);
    const commentsData = await commentsRes.json();

    const comments = Object.values(commentsData).filter(comment => comment.postId == postID);

    return comments;
}
