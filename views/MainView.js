import {Header} from '../components/header/header.js';
import {PostCardRender} from '../components/postCardRender/postCardRender.js';
import EventBus from '../utils/eventBus.js';

export class MainView {
    constructor() {
        this.container = null;
        this.header = null;
        this.posts = null;

        EventBus.on('postCard:got-info', this.update.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        const header_container = document.createElement('div');
        header_container.classList.add('header');
        this.header = new Header(header_container);

        const post_container = document.createElement('div');
        post_container.classList.add('posts');
        this.posts = new PostCardRender(post_container);

        this.container.append(header_container, post_container);
        root.append(this.container);

        this.header.render(header_container);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.posts.update(data);
    }
}
