import {MainController} from '../controllers/MainController.js'
import {PostController} from '../controllers/PostController.js';

const routes = [
    {
        path: `^/$`,
        controller: MainController
    },
    {
        path: `^/post/(\\d+)`,
        controller: PostController
    },
]

export class Router {
    constructor() {
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        const {target} = event;
        const {tagName} = target;

        if (tagName === 'A') {

            if (target.href !== undefined) {
                this.go(target.href);
            }
        }
    }

    go(pathname) {
        window.history.pushState({}, '', pathname);
        this.invokeController();
    }

    getId() {
        const pathParser = window.location.pathname.split('/');
        let id;
        if (pathParser[1] === 'post') {
            id = pathParser[2];
        }
        return id;
    }

    invokeController() {
        const id = this.getId();
        const pathname = window.location.pathname;
        const result = routes.find((route) => {
            const regex = new RegExp(route.path);
            const matches = pathname.match(regex);
            return matches;
        });

        if (!result) {
            console.log('Не найдено');
        }

        const ControllerClass = result.controller;
        const controller = new ControllerClass();
        controller.process(id);
    }

    start() {
        document.addEventListener('click', this.onDocumentClick);
        this.invokeController();
    }

    stop() {
        document.removeEventListener('click', this.onDocumentClick);
    }
}

export const router = new Router();
