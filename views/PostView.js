import {Header} from '../components/header/header.js';
import {postItem} from '../components/postItem/postItem.js';
import EventBus from '../utils/eventBus.js';

export class PostView {
    constructor() {
        this.container = null;
        this.header = null;
        this.post = null;
        this.root = document.querySelector('#root');

        EventBus.on('postItem:got-info', this.update.bind(this));
        EventBus.on('postItem:backend-error', this.renderError.bind(this));
    }

    render() {
        this.root.innerHTML = '';
        this.container = document.createElement('div');
        this.container.classList.add('page-container');

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.createElement('div');
        postContainer.classList.add('post');
        this.post = new postItem(postContainer);

        this.container.append(headerContainer, postContainer);
        this.container.append(postContainer);
        this.root.append(this.container);

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
        const card = document.querySelector('.card');
        card.innerHTML = '';
        this.post.innerHTML = '';
        this.container = document.createElement('div');

        const errorContainer = document.createElement('div');
        errorContainer.classList.add('error-container__div');

        const errorStatus = document.createElement('p');
        errorStatus.classList.add('error-container-error-status__p');
        errorStatus.textContent = data.title;

        const errorText = document.createElement('p');
        errorText.classList.add('error-container-error-text__p');
        errorText.textContent = data.description;

        errorContainer.append(errorStatus, errorText);

        this.container.append(errorContainer);
        this.root.append(this.container);
    }
}
