class Model {
    constructor({onPostChanged}) {
        this.posts = [];
        this.onPostChanged = onPostChanged;
        this.isError = false;
    }

    addPost(title, body) {
        if (this._isPostValid(title)) {

            this.isError = false;

            this.posts.push({
                title: title,
                body: body,
                timestamp: Date.now()
            })
        } else {
            this.isError = true;
        }


        this.onPostChanged(this.posts, this.isError);
    }

    getPost() {
        return this.posts;
    }

    setPost(posts) {
        this.posts = posts;
        this.onPostChanged(this.posts, this.isError);
    }

    _isPostValid(title) {
        return title.length < 100;
    }
}