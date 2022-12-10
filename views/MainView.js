import {Header} from '../components/header/header.js';
import {PostCardRender} from '../components/postCardRender/postCardRender.js';
import EventBus from '../utils/eventBus.js';

export class MainView {
    constructor() {
        this.container = null;
        this.header = null;
        this.posts = null;

        EventBus.on('postCard:got-info', this.update.bind(this));
        EventBus.on('postCard:not-found', this.errorUpdate.bind(this));
        EventBus.on('postCard:bad-request', this.errorUpdate.bind(this));
        EventBus.on('postCard:server-error', this.errorUpdate.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.createElement('div');
        postContainer.classList.add('page-posts');
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

    renderError(data) {
        const root = document.querySelector('#root');
        this.container = document.createElement('div');

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container__div');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('error-container-error-status__p');
        errorStatus.textContent = data[0];

        const errorText = document.createElement('p');
        errorText.classList.add('error-container-error-text__p');
        errorText.textContent = data[1];

        errorContainer.append(errorStatus, errorText);

        this.container.append(errorContainer);
        root.append(this.container);
    }

    errorUpdate(data) {
        if (this.posts) {
            this.posts.innerHTML = '';
        }
        this.renderError(data);
    }
}
