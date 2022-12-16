import dzenLogoSrc from '../assets/dzen-logo.png';
import iconCreateSrc from '../assets/icon-create.png';
import iconVideoSrc from '../assets/icon-play.png';
import iconSearchSrc from '../assets/icon-search.png';
import template from './header.handlebars';

const CREATE_POST = 'https://dzen.ru/profile/editor/create#brief-editor';
const VIDEO = 'https://dzen.ru/video';
const SEARCH = 'https://dzen.ru/discover';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const iconLogoAlt = 'Логотип Дзена';
        const iconCreateAlt = 'Иконка создания поста';
        const buttonCreateText = 'Создать';
        const iconVideoAlt = 'Иконка Дзен видео';
        const buttonVideoText = 'Видео';
        const iconSearchAlt = 'Иконка поиска';
        const buttonSearchText = 'Поиск в Дзене';

        const context = {dzenLogoSrc, iconCreateSrc, iconVideoSrc, iconSearchSrc, iconLogoAlt, iconCreateAlt,buttonCreateText, iconVideoAlt, buttonVideoText, iconSearchAlt, buttonSearchText, CREATE_POST, VIDEO, SEARCH};
        const html = template(context);
        this.parent.innerHTML += html;

    }
}

