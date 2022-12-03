export class PostCard {
    constructor(parent) {
        this.parent = parent;
    }

    render(author_data, subscribes_data, header_data, content_data, published_data) {
        const cards = document.createElement('div');
        cards.classList.add('container_post');

        const info_text = document.createElement('div');
        const author_post = document.createElement('div');
        author_post.classList.add('author');

        const subscribers_post = document.createElement('div');
        subscribers_post.classList.add('subscribers');
        info_text.classList.add('info-div');

        author_post.textContent = author_data;
        subscribers_post.textContent = subscribes_data + ' подписчиков';

        info_text.append(author_post, subscribers_post);

        const header = document.createElement('div');
        const header_text = document.createElement('div');
        header_text.classList.add('header-text');

        header_text.textContent = header_data;

        header.append(header_text);

        const main_text = document.createElement('div');
        const content = document.createElement('div');
        content.classList.add('content-text');

        content.textContent = content_data;

        main_text.append(content);

        const published = document.createElement('div');
        const published_text = document.createElement('div');
        published_text.classList.add('published');

        published_text.textContent = published_data;

        published.append(published_text);

        cards.append(info_text, header, main_text, published);
        this.parent.append(cards);
    }
}