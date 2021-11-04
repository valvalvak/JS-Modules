function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', getAllPosts);
    document.getElementById('btnViewPost').addEventListener('click', displayPost);

}

function displayPost() {

}

async function getAllPosts() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';

    const postsRes = await fetch(postsURL)
    const postsData = await postsRes.json();
    const selectElement = document.getElementById('posts');
    selectElement.replaceChildren();

    Object.values(postsData).forEach(p => {
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
