class View {
    constructor({onNewPost}) {
        this.postsNode = document.querySelector('#posts');
        this.titleInputNode = document.querySelector('#title-input');
        this.descriptionInputNode = document.querySelector('#description');
        this.btnNode = document.querySelector('#post-btn');
        this.errorNode = document.querySelector('#error');

        this.onNewPost = onNewPost;

        this.btnNode.addEventListener('click', this._handleBtnClick);
    }

    render(posts, isError) {
        this.postsNode.innerHTML = '';
        this.errorNode.innerText = '';

        if (isError) {
            this.errorNode.innerText = 'Ошибка ввода'
        } else {

            posts.forEach(post => {
                this.postsNode.innerHTML += `
                    <div class='post'>
                        <p class='post__date'>${this._buildDateString(post.timestamp)}</p>
                        <h3 class='post__title'>${post.title}</h3>
                        <p class='post__text'>${post.body}</p>
                    </div>
                `;
            });
        }

    }

    _handleBtnClick = () => {
        const title = this.titleInputNode.value;
        const description = this.descriptionInputNode.value;

        this.onNewPost(title, description);

    }

    _buildDateString(timestamp) {
        const date = new Date(timestamp);

        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
    }
}