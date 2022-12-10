import {PostView} from '../views/PostView.js';
import {onePostModel} from '../models/onePostModel.js';
import EventBus from '../utils/eventBus.js';

export class PostController {
    process(id) {
        const view = new PostView();
        view.render();

        const postCard = new onePostModel();
        EventBus.emit('onePostCard:loading');
        postCard.fetchDataById(id);
    }
}
