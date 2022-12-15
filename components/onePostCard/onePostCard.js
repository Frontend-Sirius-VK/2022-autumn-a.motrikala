import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';

export class onePostCard {
    constructor(parent) {
        this.parent = parent;

        EventBus.on('onePostCard:loading', this.update.bind(this));
    }
    render(data) {
        if (!data) {
            const container = document.querySelector("#card");
            container.innerHTML = '';
            const loader = new Loader(container);
            loader.render();
            this.parent.prepend(container);
            return;
        }

        const {author, title, postUrl, contentData, imgUrl, published} = data;
        const context = {author, title, postUrl, contentData, imgUrl, published};

        const template = Handlebars.templates.onePostCard;
        const html = template(context);

        this.parent.innerHTML += html;
    }

    update(data) {
        const container = document.querySelector("#card");
        if (container) {
            container.innerHTML = '';
        }
        this.render(data);
    }
}
