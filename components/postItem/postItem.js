import EventBus from '../../utils/eventBus.js';
import {Loader} from '../loader/loader.js';

export class postItem {
    constructor(parent) {
        this.parent = parent;
        this.container = document.createElement('div');
        this.container.classList.add('card');

        EventBus.on('postItem:loading', this.update.bind(this));
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

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('card-title');
        const headerText = document.createElement('a');
        headerText.classList.add('card-title__content');

        headerText.textContent = title;

        headerContainer.append(headerText);

        const publishedContainer = document.createElement('div');
        publishedContainer.classList.add('card-published');

        const publishedText = document.createElement('div');
        publishedText.classList.add('card-published__content');
        publishedText.textContent = published;

        publishedContainer.append(publishedText);

        const imgPostContainer = document.createElement('div');
        imgPostContainer.classList.add('card-picture');

        const imgPost = document.createElement('img');
        imgPost.classList.add('card-picture__content');
        imgPost.src = imgUrl;

        imgPostContainer.append(imgPost);

        const mainTextContainer = document.createElement('div');
        mainTextContainer.classList.add('card-text');

        const content = document.createElement('a');
        content.classList.add('card-text__content');

        content.textContent = contentData;
        content.href = postUrl;
        content.target = '_blank';

        mainTextContainer.append(content);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('card-info');

        const authorPost = document.createElement('div');
        authorPost.classList.add('card-info__author');
        authorPost.textContent = author;

        infoContainer.append(authorPost);

        this.container.append(headerContainer, publishedContainer, imgPostContainer, mainTextContainer, infoContainer);
        this.parent.append(this.container);
    }

    update(data) {
        if (this.container) {
            this.container.innerHTML = '';
        }
        this.render(data);
    }
}
