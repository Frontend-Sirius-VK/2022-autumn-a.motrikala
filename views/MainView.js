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

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.createElement('div');
        postContainer.classList.add('posts');
        this.posts = new PostCardRender(postContainer);

        this.container.append(headerContainer, postContainer);
        root.append(this.container);

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.posts.update(data);
    }
}
