import {Header} from '../components/header/header.js';
import {PostCardRender} from '../components/postCardRender/postCardRender.js';
import EventBus from '../utils/eventBus.js';
import template from '../components/error/error.handlebars';

export class MainView {
    constructor() {
        this.container = null;
        this.header = null;
        this.posts = null;
        this.root = document.querySelector('#root');

        EventBus.on('postCard:got-info', this.update.bind(this));
        EventBus.on('postCard:not-found', this.errorUpdate.bind(this));
        EventBus.on('postCard:bad-request', this.errorUpdate.bind(this));
        EventBus.on('postCard:server-error', this.errorUpdate.bind(this));
    }

    render() {
        this.container = document.querySelector('#page-container');

        const headerContainer = document.querySelector('#page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.querySelector('#page-posts');
        this.posts = new PostCardRender(postContainer);

        this.container.append(headerContainer, postContainer);
        this.root.append(this.container);

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data || !Array.isArray(data) || data.length === 0) {
            return;
        }
        this.posts.update(data);
    }

    renderError(data) {
        this.container = document.querySelector("#error");

        const errorStatus = data[0];
        const errorText = data[1];

        const context = {errorStatus, errorText};
        const html = template(context);

        this.root.append(this.container);

        this.container.innerHTML += html;
    }

    errorUpdate(data) {
        if (this.posts) {
            this.posts.innerHTML = '';
        }
        this.renderError(data);
    }
}
