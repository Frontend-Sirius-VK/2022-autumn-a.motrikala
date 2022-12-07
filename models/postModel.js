import EventBus from '../utils/eventBus.js';
export class PostModel {
    constructor(author = null, subscribers = null, title = null, postUrl = null, contentData = null, imgUrl = null, published = null){
        this.author = author;
        this.subscribers = subscribers;
        this.title = title;
        this.postUrl = postUrl;
        this.contentData = contentData;
        this.imgUrl = imgUrl;
        this.published = published;
    }

    fetchData() {
        fetch('/posts').then((response) => response.json()).then((data) => {
            EventBus.emit('postCard:got-info', data);
        })
    }
}

