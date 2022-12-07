import {PostCard} from '../postCard/postCard.js';

export class PostCardRender {
    constructor(parent) {
        this.parent = parent;
        this.container = null;
    }

    render(data) {
        this.container = document.createElement('div');
        data.forEach((post) => {
           const postCard = new PostCard(this.container);
           postCard.render(post);
        });
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
