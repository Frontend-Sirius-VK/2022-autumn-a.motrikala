import {Header} from '../components/header/header.js';
import {onePostCard} from '../components/onePostCard/onePostCard.js';
import EventBus from '../utils/eventBus.js';

export class PostView {
    constructor() {
        this.container = null;
        this.header = null;
        this.post = null;

        EventBus.on('onePostCard:got-info', this.update.bind(this));
        EventBus.on('onePostCard:not-found', this.errorUpdate.bind(this));
        EventBus.on('onePostCard:bad-request', this.errorUpdate.bind(this));
        EventBus.on('onePostCard:server-error', this.errorUpdate.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        root.innerHTML = '';
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        this.post = new onePostCard(postContainer);

        this.container.append(headerContainer, postContainer);
        this.container.append(postContainer);
        root.append(this.container);

        this.header.render(headerContainer);
    }

    update(data = {}) {
        if (!data || !Object.keys(data)) {
            return;
        }
        this.post.innerHTML = '';
        this.post.update(data);
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
        if (this.post) {
            this.post.innerHTML = '';
        }
        this.renderError(data);
    }
}
