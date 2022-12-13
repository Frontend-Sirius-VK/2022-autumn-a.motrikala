const CREATE_POST = 'https://dzen.ru/profile/editor/create#brief-editor';
const VIDEO = 'https://dzen.ru/video';
const SEARCH = 'https://dzen.ru/discover';

export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {
        const headerContainer = document.createElement('div');
        headerContainer.classList.add('header');

        const iconLogo = document.createElement('img');
        iconLogo.classList.add('header__img');
        iconLogo.src = '../components/assets/dzen-logo.png';
        iconLogo.alt = 'Логотип Дзена';

        const buttonsContainer = document.createElement('div');
        buttonsContainer.classList.add('header-controls');

        const buttonCreateContainer = document.createElement('div');
        buttonCreateContainer.classList.add('header-controls-create-button');

        const iconCreate = document.createElement('img');
        iconCreate.src = '../components/assets/icon-create.png';
        iconCreate.alt = 'Иконка создания поста';
        iconCreate.classList.add('header-controls-create-button__img');

        const buttonCreate = document.createElement('a');
        buttonCreate.innerHTML += 'Создать';
        buttonCreate.href = CREATE_POST;
        buttonCreate.classList.add('header-controls-create-button__content');

        buttonCreateContainer.append(iconCreate, buttonCreate);

        const buttonVideoContainer = document.createElement('div');
        buttonVideoContainer.classList.add('header-controls-video-button');

        const iconVideo = document.createElement('img');
        iconVideo.src = '../components/assets/icon-play.png';
        iconVideo.alt = 'Иконка Дзен видео';
        iconVideo.classList.add('header-controls-video-button__img');

        const buttonVideo = document.createElement('a');
        buttonVideo.innerHTML += 'Видео';
        buttonVideo.href = VIDEO;
        buttonVideo.classList.add('header-controls-video-button__content');

        buttonVideoContainer.append(iconVideo, buttonVideo);

        const buttonSearchContainer = document.createElement('div');
        buttonSearchContainer.classList.add('header-controls-search-button');

        const iconSearch = document.createElement('img');
        iconSearch.src = '../components/assets/icon-search.png';
        iconSearch.alt = 'Иконка поиска';
        iconSearch.classList.add('header-controls-search-button__img');

        const buttonSearch = document.createElement('a');
        buttonSearch.innerHTML += 'Поиск в Дзене';
        buttonSearch.href = SEARCH;
        buttonSearch.classList.add('header-controls-search-button__content');

        buttonSearchContainer.append(iconSearch, buttonSearch);

        buttonsContainer.append(buttonCreateContainer, buttonVideoContainer, buttonSearchContainer);

        headerContainer.append(iconLogo, buttonsContainer);
        container.appendChild(headerContainer);
    }
}

