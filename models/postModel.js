// import EventBus from "../utils/eventBus.js";
export class PostModel {
    constructor(author = null, subscribers = null, header_text = null, content = null, published = null){
        this.author = author;
        this.subscribers = subscribers;
        this.header_text = header_text;
        this.content = content;
        this.published = published;
    }

    fetchData() {
        fetch('/posts').then((response) => response.json()).then((data) => {
            console.log('Posts ::', data);
            this.author = data.author;
            this.subscribers = data.subscribers;
            this.header_text = data.header_text;
            this.content = data.content;
            this.published = data.published;

            // EventBus.emit('posts:got-info', data);
        })
    }
}