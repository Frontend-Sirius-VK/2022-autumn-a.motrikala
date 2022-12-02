// import EventBus from "../../utils/eventBus.js";


export class Posts {
    constructor(parent) {
        this.parent = parent;
        // EventBus.on('posts:got-info', data);
    }

    render(container, author_data, subscribes_data, header_data, content_data, published_data) {
        const cards = document.createElement('div');
        cards.classList.add('container_post');

        const info_text = document.createElement('div');
        const author_post = document.createElement('div');
        author_post.classList.add('author');

        const subscribers_post = document.createElement('div');
        subscribers_post.classList.add('subscribers');
        info_text.classList.add('info-div');

        author_post.textContent = author_data;
        subscribers_post.textContent = subscribes_data;

        // author_post.textContent = 'Российская газета';
        // subscribers_post.textContent = 478400 + ' подписчиков';

        info_text.append(author_post, subscribers_post);

        const header = document.createElement('div');
        const header_text = document.createElement('div');
        header_text.classList.add('header-text');

        header_text.textContent = header_data;

        // header_text.textContent = 'Независимый';

        header.append(header_text);

        const main_text = document.createElement('div');
        const content = document.createElement('div');
        content.classList.add('content-text');

        content.textContent = content_data;

        // content.textContent = 'Онлайн-кинотеатр START объявил о завершении съёмок политической комедии Независимый. Восьмисерийный проект расскажет о борьбе маленького человека с системой и искушении властью. Главную роль сыграл Теймураз Тания. Действие разворачивается в Абхазии. Чтобы предотвратить произвол правительства, сотрудник местного МЧС решает стать кандидатом на пост президента республики.';

        main_text.append(content);

        const published = document.createElement('div');
        const published_text = document.createElement('div');
        published_text.classList.add('published');

        published_text.textContent = published_data;
        // published_text.textContent = '12 часов назад';

        published.append(published_text);

        cards.append(info_text, header, main_text, published);
        container.appendChild(cards);
    }
}