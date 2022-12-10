export class PostCard {
    constructor(parent) {
        this.parent = parent;
    }
    render(post) {
        const {id, author, subscribers, title, postUrl, contentData, imgUrl, published} = post;
        const cardsContainer = document.createElement('div');
        cardsContainer.classList.add('cards');

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('cards-info');

        const authorPost = document.createElement('div');
        authorPost.classList.add('cards-info__author');
        authorPost.textContent = author;

        const subscribersPost = document.createElement('div');
        subscribersPost.classList.add('cards-info__subscribers');
        subscribersPost.textContent = subscribers + ' подписчиков';

        infoContainer.append(authorPost, subscribersPost);

        const headerContainer = document.createElement('div');
        headerContainer.classList.add('cards-title');
        const headerText = document.createElement('a');
        headerText.classList.add('cards-title__content');

        headerText.textContent = title;
        headerText.href = `/post/${id}`;

        headerContainer.append(headerText);

        const mainTextContainer = document.createElement('div');
        mainTextContainer.classList.add('cards-text');

        const content = document.createElement('a');
        content.classList.add('cards-text__content');

        content.textContent = contentData;
        content.href = postUrl;

        mainTextContainer.append(content);

        const imgPostContainer = document.createElement('div');
        imgPostContainer.classList.add('cards-picture');

        const imgPost = document.createElement('img');
        imgPost.classList.add('cards-picture__content');
        imgPost.src = imgUrl;

        imgPostContainer.append(imgPost);

        const publishedContainer = document.createElement('div');
        publishedContainer.classList.add('cards-published');

        const publishedText = document.createElement('div');
        publishedText.classList.add('cards-published__content');
        publishedText.textContent = published;

        publishedContainer.append(publishedText);

        cardsContainer.append(infoContainer, imgPostContainer, headerContainer, mainTextContainer, publishedContainer);
        this.parent.append(cardsContainer);
    }
}
