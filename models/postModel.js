import EventBus from "../utils/eventBus.js";
export class PostModel {
    constructor(author = null, subscribers = null, header = null, content = null, published = null){
        this.author = author;
        this.subscribers = subscribers;
        this.header = header;
        this.content = content;
        this.published = published;
    }

    fetchData() {
        fetch('/posts').then((response) => response.json()).then((data) => {
            console.log('Posts ::', data);
            this.author = data.author;
            this.subscribers = data.subscribers;
            this.header = data.header;
            this.content = data.content;
            this.published = data.published;

            EventBus.emit('postCard:got-info', data);
        })
    }
}

