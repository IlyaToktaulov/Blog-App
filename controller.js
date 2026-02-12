class Controller {
    constructor() {
        this.model = new Model({
            onPostChanged: this.handleModelPostChanged
        });
        this.view = new View({
            onNewPost: this.handleViewNewPost
        });
        this.api = new API();
    }
    init() {
        this.api.fetchPosts()
            .then(posts => {
                this.model.setPost(posts)
            })
    }

    handleModelPostChanged = (posts, isError) => {
        this.view.render(posts, isError);
    }

    handleViewNewPost = (title, description) => {
        this.model.addPost(title, description);
    }
}