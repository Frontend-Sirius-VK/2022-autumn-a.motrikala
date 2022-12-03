import EventBus from "../utils/eventBus.js";
export class PostModel {
    constructor(author = null, subscribers = null, header = null, post_url = null, content = null, img_url = null, published = null){
        this.author = author;
        this.subscribers = subscribers;
        this.header = header;
        this.post_url = post_url;
        this.content = content;
        this.img_url = img_url;
        this.published = published;
    }

    fetchData() {
        fetch('/posts').then((response) => response.json()).then((data) => {
            console.log('Posts ::', data);
            this.author = data.author;
            this.subscribers = data.subscribers;
            this.header = data.header;
            this.post_url = data.post_url;
            this.content = data.content;
            this.img_url = data.img_url;
            this.published = data.published;

            EventBus.emit('postCard:got-info', data);
        })
    }
}

