const postTitleInputNode = document.querySelector('.js-post-title-input');
const postTextInputNode = document.querySelector('.js-post-text-input');
const newPostBtnNode = document.querySelector('.js-new-post-btn');
const postsNode = document.querySelector('.js-posts');
const validationMessage = document.querySelector('.js-validationMessage');

const posts = [];
const TEXT_VALIDATION_LIMIT = 20;
const TITLE_VALIDATION_LIMIT = 10;


newPostBtnNode.addEventListener('click', function () {
    // получить данные из поля ввода
    const postFromUser = getPostFromUser();

    // сохранить пост
    addPost(postFromUser);

    // отобразить пост
    renderPosts();
});

postTitleInputNode.addEventListener('input', function() {
    validation();
});

postTextInputNode.addEventListener('input', function() {
    validation();
});

function validation() {
    const titleLen = postTitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen > TITLE_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длинна заголовка не должна превышать ${TITLE_VALIDATION_LIMIT} символов`;   
        validationMessage.classList.remove("validationMessage__hidden");
        document.querySelector('.js-new-post-btn').disabled = true;
        return;
    }

    if (textLen > TEXT_VALIDATION_LIMIT) {
        validationMessage.innerText = `Длинна описания не должна превышать ${TEXT_VALIDATION_LIMIT} символов`;
        validationMessage.classList.remove("validationMessage__hidden");
        document.querySelector('.js-new-post-btn').disabled = true;
        return;
    }

    validationMessage.classList.add("validationMessage__hidden");
    document.querySelector('.js-new-post-btn').disabled = false;      // это выполнится если ни одно из условий выше не были выполнены
}

function getPostFromUser() {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;

    return {
        title: title,
        text: text,
    }
}

function addPost({title, text, date}) {
    const currentDate = new Date();
    const formattedDate = `
        ${currentDate.getHours()}:${String(currentDate.getMinutes()).padStart(2, '0')} 
        ${String(currentDate.getDay()).padStart(2, '0')}.${String(currentDate.getMonth()+1).padStart(2, '0')}.${currentDate.getFullYear()}
    `

    posts.push({
        title: title,
        text: text,
        date: formattedDate,
    });
}

function getPost() {
    return posts;
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