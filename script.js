const titleInputNode = document.querySelector('.js-title-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
let post = '';

newPostBtnNode.addEventListener('click', function () {
    // получить данные из поля ввода
    const postFromUser = getPostFromUser();

    // сохранить пост
    setPost(postFromUser);

    // отобразить пост
    renderPost();
});


function getPostFromUser() {
    const post = titleInputNode.value;
    return post;
}

function setPost(newPost) {
    post = newPost;
}

function renderPost(params) {
    postsNode.innerText = post;
}