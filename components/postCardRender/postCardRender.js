import {PostCard} from '../postCard/postCard.js';
import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';

export class PostCardRender {
    constructor(parent) {
        this.parent = parent;

        EventBus.on('postCard:loading', this.render.bind(this));
    }

    render(data) {
        const container = document.querySelector("#posts");
        if (!data) {
            container.innerHTML = '';
            const loader = new Loader(container);
            loader.render();
            this.parent.prepend(container);
            return;
        }

        data.forEach((post) => {
            const postCard = new PostCard(container);
            postCard.render(post);
        });
        this.parent.append(container);
    }

    update(data) {
        const container = document.querySelector("#posts");
        if (container) {
            container.innerHTML = '';
        }
        this.render(data);
    }
}
