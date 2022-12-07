import {MainView} from '../views/MainView.js';
import {PostModel} from '../models/postModel.js';

export class MainController {
    process() {
        const view = new MainView();
        view.render();

        const postCards = new PostModel();
        postCards.fetchData();
    }
}