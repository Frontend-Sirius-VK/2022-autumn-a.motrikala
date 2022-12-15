export class PostCard {
    constructor(parent) {
        this.parent = parent;
    }
    render(post) {
        const {id, author, subscribers, title, postUrl, contentData, imgUrl, published} = post;
        const context = {id, author, subscribers, title, postUrl, contentData, imgUrl, published};

        const template = Handlebars.templates.postCard;
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
