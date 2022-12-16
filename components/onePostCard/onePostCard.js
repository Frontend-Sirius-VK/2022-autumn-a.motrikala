import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';
import template from './onePost.handlebars';

export class onePostCard {
    constructor(parent) {
        this.parent = parent;
        this.container = document.querySelector("#card");

        EventBus.on('onePostCard:loading', this.update.bind(this));
    }
    render(data) {
        if (!data) {
            this.container.innerHTML = '';
            const loader = new Loader(this.container);
            loader.render();
            this.parent.prepend(this.container);
            return;
        }

        const {author, title, postUrl, contentData, imgUrl, published} = data;
        const context = {author, title, postUrl, contentData, imgUrl, published};

        const html = template(context);
        this.parent.innerHTML += html;
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
