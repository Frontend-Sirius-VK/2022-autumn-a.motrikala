import EventBus from '../utils/eventBus.js';
export class onePostModel {
    constructor(author = null, subscribers = null, title = null, postUrl = null, contentData = null, imgUrl = null, published = null) {
        this.author = author;
        this.subscribers = subscribers;
        this.title = title;
        this.postUrl = postUrl;
        this.contentData = contentData;
        this.imgUrl = imgUrl;
        this.published = published;
    }

    fetchDataById(id) {
        fetch(`/getPostById/${id}`)
            .then((response) => {
                const {status} = response;

                if (status === 404) {
                    EventBus.emit('onePostCard:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);
                    return;
                }

                if (status === 400) {
                    EventBus.emit('onePostCard:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);
                    return;
                }

                if (status === 500) {
                    EventBus.emit('onePostCard:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('onePostCard:got-info', data);
            })
    }
}
