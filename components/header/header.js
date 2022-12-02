export class Header {
    constructor(parent) {
        this.parent = parent;
    }

    render(container) {
        const header = document.createElement('div');
        header.classList.add('header__main');

        const main_icon = document.createElement('img');
        main_icon.src = './components/header/Dzen_logo.png';
        main_icon.alt = 'Dzen_icon';

        const buttons = document.createElement('div');
        buttons.classList.add('button-div');

        const button_1 = document.createElement('div');
        const icon_create = document.createElement('img');
        icon_create.src = './components/header/icon-create.png';
        icon_create.alt = 'create_icon';
        icon_create.classList.add('icon-buttons');

        const button_create = document.createElement('div')
        button_create.innerHTML += 'Создать';
        button_create.classList.add('text-buttons');

        button_1.classList.add('buttons');
        button_1.append(icon_create);
        button_1.append(button_create)
        buttons.append(button_1);

        const button_2 = document.createElement('div');
        const icon_video = document.createElement('img');
        icon_video.src = './components/header/icon-play.png';
        icon_video.alt = 'video_icon';
        icon_video.classList.add('icon-buttons');

        const button_video = document.createElement('a');
        button_video.innerHTML += 'Видео';
        button_video.classList.add('text-buttons');

        button_2.classList.add('buttons');
        button_2.append(icon_video);
        button_2.append(button_video)
        buttons.append(button_2);

        const button_3 = document.createElement('div');
        const icon_search = document.createElement('img');
        icon_search.src = './components/header/icon-search.png';
        icon_search.alt = 'search_icon';
        icon_search.classList.add('icon-buttons');

        const button_search = document.createElement('a');
        button_search.innerHTML += 'Поиск в Дзене';
        button_search.classList.add('text-buttons');

        button_3.classList.add('buttons');
        button_3.append(icon_search);
        button_3.append(button_search)
        buttons.append(button_3);

        header.append(main_icon, buttons);
        container.appendChild(header);
    }
}

