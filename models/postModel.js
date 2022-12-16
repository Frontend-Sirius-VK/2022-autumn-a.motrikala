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
                    EventBus.emit('postCard:backend-error', {title: 'Ошибка 404', description: 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.'});
                    return;
                }

                if (status === 400) {
                    EventBus.emit('postCard:backend-error', {title: 'Ошибка 400', description: 'Вы ввели некорректный запрос, проверьте данные.'});
                    return;
                }

                if (status === 500) {
                    EventBus.emit('postCard:backend-error', {title: 'Ошибка 500', description: 'Ошибка обращения к сервису. Попробуйте обновить страницу.'});
                    return;
                }

                return response.json();
            })

            .then((data) => {
                EventBus.emit('postCard:got-info', data);
        })
    }
}
