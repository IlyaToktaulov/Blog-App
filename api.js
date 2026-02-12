class API {
    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }

    fetchPosts() {
        return fetch(`${this.baseURL}/posts`)
            .then(data => data.json())
    }
}