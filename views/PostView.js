import {Header} from '../components/header/header.js';
import {onePostCard} from '../components/onePostCard/onePostCard.js';
import EventBus from '../utils/eventBus.js';
import template from '../components/error/error.handlebars';

export class PostView {
    constructor() {
        this.container = null;
        this.header = null;
        this.post = null;
        this.root = document.querySelector('#root');

        EventBus.on('onePostCard:got-info', this.update.bind(this));
        EventBus.on('onePostCard:not-found', this.errorUpdate.bind(this));
        EventBus.on('onePostCard:bad-request', this.errorUpdate.bind(this));
        EventBus.on('onePostCard:server-error', this.errorUpdate.bind(this));
    }

    render() {
        this.container = document.querySelector('#page-container');

        const headerContainer = document.querySelector('#page-header');
        this.header = new Header(headerContainer);

        const postContainer = document.querySelector('#page-posts');
        this.post = new onePostCard(postContainer);

        this.container.append(headerContainer, postContainer);
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
        this.container = document.querySelector("#error");

        const errorStatus = data[0];
        const errorText = data[1];

        const context = {errorStatus, errorText};

        const html = template(context);

        this.root.append(this.container);
        this.container.innerHTML += html;
    }

    errorUpdate(data) {
        if (this.post) {
            this.post.innerHTML = '';
        }
        this.renderError(data);
    }
}
