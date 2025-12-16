const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const posts = [];

newPostBtnNode.addEventListener('click', function () {
    // получить данные из поля ввода
    const postFromUser = getPostFromUser();

    // сохранить пост
    addPost(postFromUser);

    // отобразить пост
    renderPosts();
});


function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    const postDate = postsDate();

    return {
        title: title,
        text: text,
        date: postDate,
    }
}

function addPost({title, text, date}) {
    posts.push({
        title: title,
        text: text,
        date: date,
    });
}

function getPost() {
    return posts;
}

function postsDate() {
    let postDate = new Date();
    let dd = postDate.getDate();
    let mm = postDate.getMonth();
    let yy = postDate.getFullYear();
    let hh = postDate.getHours();
    let min = postDate.getMinutes();

    postDate = `${dd}.${mm}.${yy} ${hh}:${min}`;
    return postDate;
}

function renderPosts(params) {
    const posts = getPost();
    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class='post'>
            <p class='post__date'>${post.date}</p>
            <h3 class='post__title'>${post.title}</h3>
            <p class='post__text'>${post.text}</p>
        </div>
    `;
    });

    postsNode.innerHTML = postsHTML;
}