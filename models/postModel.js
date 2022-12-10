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
        fetch('/posts')
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('postCard:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('postCard:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('postCard:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('postCard:got-info', data);
        })
    }
}
