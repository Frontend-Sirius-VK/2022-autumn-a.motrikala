import {Header} from '../components/header/header.js';
import {PostCardRender} from '../components/postCardRender/postCardRender.js';
import EventBus from '../utils/eventBus.js';

export class MainView {
    constructor() {
        this.container = null;
        this.header = null;
        this.headerList = [{
            alt: 'Логотип Дзена'
        }, {
            alt: 'Иконка создания поста',
            text: 'Создать'
        }, {
            alt: 'Иконка Дзен видео',
            text: 'Видео'
        }, {
            alt: 'Иконка поиска',
            text: 'Поиск в Дзене'
        }];
        this.posts = null;

        EventBus.on('postCard:got-info', this.update.bind(this));
        EventBus.on('postCard:not-found', this.errorUpdate.bind(this));
        EventBus.on('postCard:bad-request', this.errorUpdate.bind(this));
        EventBus.on('postCard:server-error', this.errorUpdate.bind(this));
    }

    render() {
        const root = document.querySelector('#root');
        this.container = document.querySelector('#page-container');

        const headerContainer = document.querySelector('#page-header');
        // this.header = new Header(headerContainer);

        this.headerList.forEach((element) => {
            const header = new Header(headerContainer, element.alt, element.text);
            header.render();
        });

        const postContainer = document.querySelector('#page-posts');
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
        this.container = document.querySelector("#error");

        const errorStatus = data[0];
        const errorText = data[1];

        const context = {errorStatus, errorText};

        const template = Handlebars.templates.error;
        const html = template(context);

        root.append(this.container);

        this.container.innerHTML += html;
    }

    errorUpdate(data) {
        if (this.posts) {
            this.posts.innerHTML = '';
        }
        this.renderError(data);
    }
}
