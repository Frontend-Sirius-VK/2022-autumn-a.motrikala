import {Header} from '../components/header/header.js';
import {Posts} from '../components/posts/posts.js';

export class MainView {
    constructor() {
        this.container = null;
        this.header = null;
        this.posts = null;
    }

    render(data) {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        container.classList.add('page-container');

        const header = document.createElement('div');
        header.classList.add('header');
        this.header = new Header();

        const posts = document.createElement('div');
        posts.classList.add('posts');
        this.posts = new Posts();

        container.append(header);
        container.append(posts);
        root.append(container);

        this.header.render(header);
        this.posts.render(posts);
    }
}
