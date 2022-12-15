/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Header\": () => (/* binding */ Header)\n/* harmony export */ });\n// import dzenLogo from '../assets/icon-create.png';\n// import iconCreate from '../assets/icon-create.png';\n// import iconVideo from '../assets/icon-play.png';\n// import iconSearch from '../assets/icon-search.png';\n\nconst CREATE_POST = 'https://dzen.ru/profile/editor/create#brief-editor';\nconst VIDEO = 'https://dzen.ru/video';\nconst SEARCH = 'https://dzen.ru/discover';\n\nclass Header {\n    constructor(parent) {\n        this.parent = parent;\n    }\n\n    render(container) {\n        // const headerContainer = document.querySelector(\"#header\");\n        // container.appendChild(headerContainer);\n        //\n        //\n        // const iconLogoAlt = 'Логотип Дзена';\n        // const iconCreateAlt = 'Иконка создания поста';\n        // const buttonCreateText = 'Создать';\n        // const iconVideoAlt = 'Иконка Дзен видео';\n        // const buttonVideoText = 'Видео';\n        // const iconSearchAlt = 'Иконка поиска';\n        // const buttonSearchText = 'Поиск в Дзене';\n        //\n        // const context = {iconLogoAlt,iconCreateAlt,buttonCreateText, iconVideoAlt, buttonVideoText, iconSearchAlt, buttonSearchText};\n        // const template = Handlebars.templates.header;\n        // const html = template(context);\n        // this.parent.innerHTML += html;\n\n\n\n\n\n        const headerContainer = document.createElement('div');\n        headerContainer.classList.add('header');\n\n        const iconLogo = document.createElement('img');\n        iconLogo.classList.add('header__img');\n        iconLogo.src = '../components/assets/dzen-logo.png';\n        // iconLogo.src = dzenLogo;\n        iconLogo.alt = 'Логотип Дзена';\n\n\n\n        const buttonsContainer = document.createElement('div');\n        buttonsContainer.classList.add('header-controls');\n\n        const buttonCreateContainer = document.createElement('div');\n        buttonCreateContainer.classList.add('header-controls-create-button');\n\n        const iconCreate = document.createElement('img');\n        iconCreate.src = '../components/assets/icon-create.png';\n        iconCreate.alt = 'Иконка создания поста';\n        iconCreate.classList.add('header-controls-create-button__img');\n\n\n\n        const buttonCreate = document.createElement('a');\n        buttonCreate.innerHTML += 'Создать';\n\n        buttonCreate.href = CREATE_POST;\n        buttonCreate.classList.add('header-controls-create-button__content');\n\n        buttonCreateContainer.append(iconCreate, buttonCreate);\n\n        const buttonVideoContainer = document.createElement('div');\n        buttonVideoContainer.classList.add('header-controls-video-button');\n\n        const iconVideo = document.createElement('img');\n        iconVideo.src = '../components/assets/icon-play.png';\n\n        iconVideo.alt = 'Иконка Дзен видео';\n\n        iconVideo.classList.add('header-controls-video-button__img');\n\n        const buttonVideo = document.createElement('a');\n        buttonVideo.innerHTML += 'Видео';\n        buttonVideo.href = VIDEO;\n\n\n        buttonVideo.classList.add('header-controls-video-button__content');\n\n        buttonVideoContainer.append(iconVideo, buttonVideo);\n\n        const buttonSearchContainer = document.createElement('div');\n        buttonSearchContainer.classList.add('header-controls-search-button');\n\n        const iconSearch = document.createElement('img');\n        iconSearch.src = '../components/assets/icon-search.png';\n        iconSearch.alt = 'Иконка поиска';\n        iconSearch.classList.add('header-controls-search-button__img');\n\n\n        const buttonSearch = document.createElement('a');\n\n        buttonSearch.innerHTML += 'Поиск в Дзене';\n        buttonSearch.href = SEARCH;\n        buttonSearch.classList.add('header-controls-search-button__content');\n\n        buttonSearchContainer.append(iconSearch, buttonSearch);\n\n        buttonsContainer.append(buttonCreateContainer, buttonVideoContainer, buttonSearchContainer);\n\n        headerContainer.append(iconLogo, buttonsContainer);\n        container.appendChild(headerContainer);\n    }\n}\n\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./components/header/header.js?");

/***/ }),

/***/ "./components/loader/loader.js":
/*!*************************************!*\
  !*** ./components/loader/loader.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Loader\": () => (/* binding */ Loader)\n/* harmony export */ });\nclass Loader {\n    constructor(parent) {\n        this.parent = parent;\n    }\n    // render() {\n    //     // const loaderWrap = document.createElement('div');\n    //     // loaderWrap.className = 'loaderWrapper';\n    //     // const loader = document.createElement('span');\n    //     // loader.className = 'loader';\n    //     // loaderWrap.append(loader);\n    //     //\n    //     // this.parent.append(loaderWrap);\n    //     const\n\n    render() {\n        const context = '';\n        const template = Handlebars.templates.loader;\n        const html = template(context);\n\n        this.parent.innerHTML += html;\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./components/loader/loader.js?");

/***/ }),

/***/ "./components/onePostCard/onePostCard.js":
/*!***********************************************!*\
  !*** ./components/onePostCard/onePostCard.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onePostCard\": () => (/* binding */ onePostCard)\n/* harmony export */ });\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/eventBus.js */ \"./utils/eventBus.js\");\n/* harmony import */ var _loader_loader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loader/loader.js */ \"./components/loader/loader.js\");\n\n\n\nclass onePostCard {\n    constructor(parent) {\n        this.parent = parent;\n\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].on('onePostCard:loading', this.update.bind(this));\n    }\n    render(data) {\n        if (!data) {\n            const container = document.querySelector(\"#card\");\n            container.innerHTML = '';\n            const loader = new _loader_loader_js__WEBPACK_IMPORTED_MODULE_1__.Loader(container);\n            loader.render();\n            this.parent.prepend(container);\n            return;\n        }\n\n        const {author, title, postUrl, contentData, imgUrl, published} = data;\n        const context = {author, title, postUrl, contentData, imgUrl, published};\n\n        const template = Handlebars.templates.onePostCard;\n        const html = template(context);\n\n        this.parent.innerHTML += html;\n    }\n\n    update(data) {\n        const container = document.querySelector(\"#card\");\n        if (container) {\n            container.innerHTML = '';\n        }\n        this.render(data);\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./components/onePostCard/onePostCard.js?");

/***/ }),

/***/ "./components/postCard/postCard.js":
/*!*****************************************!*\
  !*** ./components/postCard/postCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostCard\": () => (/* binding */ PostCard)\n/* harmony export */ });\nclass PostCard {\n    constructor(parent) {\n        this.parent = parent;\n    }\n    render(post) {\n        const {id, author, subscribers, title, postUrl, contentData, imgUrl, published} = post;\n        const context = {id, author, subscribers, title, postUrl, contentData, imgUrl, published};\n\n        const template = Handlebars.templates.postCard;\n        const html = template(context);\n\n        this.parent.innerHTML += html;\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./components/postCard/postCard.js?");

/***/ }),

/***/ "./components/postCardRender/postCardRender.js":
/*!*****************************************************!*\
  !*** ./components/postCardRender/postCardRender.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostCardRender\": () => (/* binding */ PostCardRender)\n/* harmony export */ });\n/* harmony import */ var _postCard_postCard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../postCard/postCard.js */ \"./components/postCard/postCard.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/eventBus.js */ \"./utils/eventBus.js\");\n/* harmony import */ var _loader_loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loader/loader.js */ \"./components/loader/loader.js\");\n\n\n\n\nclass PostCardRender {\n    constructor(parent) {\n        this.parent = parent;\n\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].on('postCard:loading', this.render.bind(this));\n    }\n\n    render(data) {\n        const container = document.querySelector(\"#posts\");\n        if (!data) {\n            container.innerHTML = '';\n            const loader = new _loader_loader_js__WEBPACK_IMPORTED_MODULE_2__.Loader(container);\n            loader.render();\n            this.parent.prepend(container);\n            return;\n        }\n\n        data.forEach((post) => {\n            const postCard = new _postCard_postCard_js__WEBPACK_IMPORTED_MODULE_0__.PostCard(container);\n            postCard.render(post);\n        });\n        this.parent.append(container);\n    }\n\n    update(data) {\n        const container = document.querySelector(\"#posts\");\n        if (container) {\n            container.innerHTML = '';\n        }\n        this.render(data);\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./components/postCardRender/postCardRender.js?");

/***/ }),

/***/ "./controllers/MainController.js":
/*!***************************************!*\
  !*** ./controllers/MainController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainController\": () => (/* binding */ MainController)\n/* harmony export */ });\n/* harmony import */ var _views_MainView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/MainView.js */ \"./views/MainView.js\");\n/* harmony import */ var _models_postModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/postModel.js */ \"./models/postModel.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\n\n\n\nclass MainController {\n    process() {\n        const view = new _views_MainView_js__WEBPACK_IMPORTED_MODULE_0__.MainView();\n        view.render();\n\n        const postCards = new _models_postModel_js__WEBPACK_IMPORTED_MODULE_1__.PostModel();\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit('postCard:loading');\n        postCards.fetchData();\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./controllers/MainController.js?");

/***/ }),

/***/ "./controllers/PostController.js":
/*!***************************************!*\
  !*** ./controllers/PostController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostController\": () => (/* binding */ PostController)\n/* harmony export */ });\n/* harmony import */ var _views_PostView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/PostView.js */ \"./views/PostView.js\");\n/* harmony import */ var _models_onePostModel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/onePostModel.js */ \"./models/onePostModel.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\n\n\n\nclass PostController {\n    process(id) {\n        const view = new _views_PostView_js__WEBPACK_IMPORTED_MODULE_0__.PostView();\n        view.render();\n\n        const postCard = new _models_onePostModel_js__WEBPACK_IMPORTED_MODULE_1__.onePostModel();\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].emit('onePostCard:loading');\n        postCard.fetchDataById(id);\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./controllers/PostController.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routing_Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routing/Router.js */ \"./routing/Router.js\");\n\n\n_routing_Router_js__WEBPACK_IMPORTED_MODULE_0__.router.start();\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./index.js?");

/***/ }),

/***/ "./models/onePostModel.js":
/*!********************************!*\
  !*** ./models/onePostModel.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"onePostModel\": () => (/* binding */ onePostModel)\n/* harmony export */ });\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\nclass onePostModel {\n    constructor(author = null, subscribers = null, title = null, postUrl = null, contentData = null, imgUrl = null, published = null) {\n        this.author = author;\n        this.subscribers = subscribers;\n        this.title = title;\n        this.postUrl = postUrl;\n        this.contentData = contentData;\n        this.imgUrl = imgUrl;\n        this.published = published;\n    }\n\n    fetchDataById(id) {\n        fetch(`/getPostById/${id}`)\n            .then((response) => {\n                const {status} = response;\n\n                if (status === 404) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('onePostCard:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);\n                    return;\n                }\n\n                if (status === 400) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('onePostCard:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);\n                    return;\n                }\n\n                if (status === 500) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('onePostCard:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);\n                    return;\n                }\n\n                return response.json();\n            })\n\n            .then((data) => {\n                _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('onePostCard:got-info', data);\n            });\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./models/onePostModel.js?");

/***/ }),

/***/ "./models/postModel.js":
/*!*****************************!*\
  !*** ./models/postModel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostModel\": () => (/* binding */ PostModel)\n/* harmony export */ });\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\nclass PostModel {\n    constructor(author = null, subscribers = null, title = null, postUrl = null, contentData = null, imgUrl = null, published = null){\n        this.author = author;\n        this.subscribers = subscribers;\n        this.title = title;\n        this.postUrl = postUrl;\n        this.contentData = contentData;\n        this.imgUrl = imgUrl;\n        this.published = published;\n    }\n\n    fetchData() {\n        fetch('/posts')\n            .then((response) => {\n                const {status} = response;\n\n                if (status === 404) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('postCard:not-found', ['Ошибка 404', 'Страница, которую вы запрашиваете, не существует. Возможно был введен неверный адрес.']);\n                    return;\n                }\n\n                if (status === 400) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('postCard:bad-request', ['Ошибка 400', 'Вы ввели некорректный запрос, проверьте данные.']);\n                    return;\n                }\n\n                if (status === 500) {\n                    _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('postCard:server-error', ['Ошибка 500', 'Ошибка обращения к сервису. Попробуйте обновить страницу.']);\n                    return;\n                }\n\n                return response.json();\n            })\n\n            .then((data) => {\n                _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].emit('postCard:got-info', data);\n            });\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./models/postModel.js?");

/***/ }),

/***/ "./routing/Router.js":
/*!***************************!*\
  !*** ./routing/Router.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controllers/MainController.js */ \"./controllers/MainController.js\");\n/* harmony import */ var _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/PostController.js */ \"./controllers/PostController.js\");\n\n\n\nconst routes = [\n    {\n        path: `^/$`,\n        controller: _controllers_MainController_js__WEBPACK_IMPORTED_MODULE_0__.MainController\n    },\n    {\n        path: `^/post/(\\\\d+)`,\n        controller: _controllers_PostController_js__WEBPACK_IMPORTED_MODULE_1__.PostController\n    },\n];\n\nclass Router {\n    constructor() {\n        this.onDocumentClick = this.onDocumentClick.bind(this);\n    }\n\n    onDocumentClick(event) {\n        const {target} = event;\n        const {tagName} = target;\n\n        if (tagName === 'A') {\n\n            if (target.href !== undefined) {\n                this.go(target.href);\n            }\n        }\n    }\n\n    go(pathname) {\n        window.history.pushState({}, '', pathname);\n        this.invokeController();\n    }\n\n    getId() {\n        const pathParser = window.location.pathname.split('/');\n        let id;\n        if (pathParser[1] === 'post') {\n            id = pathParser[2];\n        }\n        return id;\n    }\n\n    invokeController() {\n        const id = this.getId();\n        const pathname = window.location.pathname;\n        const result = routes.find((route) => {\n            const regex = new RegExp(route.path);\n            const matches = pathname.match(regex);\n            return matches;\n        });\n\n        if (!result) {\n            console.log('Не найдено');\n        }\n\n        const ControllerClass = result.controller;\n        const controller = new ControllerClass();\n        controller.process(id);\n    }\n\n    start() {\n        document.addEventListener('click', this.onDocumentClick);\n        this.invokeController();\n    }\n\n    stop() {\n        document.removeEventListener('click', this.onDocumentClick);\n    }\n}\n\nconst router = new Router();\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./routing/Router.js?");

/***/ }),

/***/ "./utils/eventBus.js":
/*!***************************!*\
  !*** ./utils/eventBus.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass EventBus {\n    listeners = {};\n\n    on(eventName, callback){\n        if (!this.listeners[eventName]){\n            this.listeners[eventName] = new Set();\n        }\n        this.listeners[eventName].add(callback);\n    }\n\n    off(eventName, callback){\n        if (!this.listeners[eventName]){\n            return;\n        }\n        this.listeners[eventName].delete(callback);\n    }\n\n    emit(eventName, data=null){\n        if (!this.listeners[eventName]){\n            return;\n        }\n        this.listeners[eventName].forEach(callback =>{\n            callback(data);\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new EventBus());\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./utils/eventBus.js?");

/***/ }),

/***/ "./views/MainView.js":
/*!***************************!*\
  !*** ./views/MainView.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MainView\": () => (/* binding */ MainView)\n/* harmony export */ });\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.js */ \"./components/header/header.js\");\n/* harmony import */ var _components_postCardRender_postCardRender_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/postCardRender/postCardRender.js */ \"./components/postCardRender/postCardRender.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\n\n\n\nclass MainView {\n    constructor() {\n        this.container = null;\n        this.header = null;\n        this.posts = null;\n\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('postCard:got-info', this.update.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('postCard:not-found', this.errorUpdate.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('postCard:bad-request', this.errorUpdate.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('postCard:server-error', this.errorUpdate.bind(this));\n    }\n\n    render() {\n        const root = document.querySelector('#root');\n        this.container = document.querySelector('#page-container');\n\n        const headerContainer = document.querySelector('#page-header');\n        this.header = new _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__.Header(headerContainer);\n\n        const postContainer = document.querySelector('#page-posts');\n        this.posts = new _components_postCardRender_postCardRender_js__WEBPACK_IMPORTED_MODULE_1__.PostCardRender(postContainer);\n\n        this.container.append(headerContainer, postContainer);\n        root.append(this.container);\n\n        this.header.render(headerContainer);\n    }\n\n    update(data = {}) {\n        if (!data || !Array.isArray(data) || data.length === 0) {\n            return;\n        }\n        this.posts.update(data);\n    }\n\n    renderError(data) {\n        const root = document.querySelector('#root');\n        this.container = document.querySelector(\"#error\");\n\n        const errorStatus = data[0];\n        const errorText = data[1];\n\n        const context = {errorStatus, errorText};\n\n        const template = Handlebars.templates.error;\n        const html = template(context);\n\n        root.append(this.container);\n\n        this.container.innerHTML += html;\n    }\n\n    errorUpdate(data) {\n        if (this.posts) {\n            this.posts.innerHTML = '';\n        }\n        this.renderError(data);\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./views/MainView.js?");

/***/ }),

/***/ "./views/PostView.js":
/*!***************************!*\
  !*** ./views/PostView.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PostView\": () => (/* binding */ PostView)\n/* harmony export */ });\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/header/header.js */ \"./components/header/header.js\");\n/* harmony import */ var _components_onePostCard_onePostCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/onePostCard/onePostCard.js */ \"./components/onePostCard/onePostCard.js\");\n/* harmony import */ var _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/eventBus.js */ \"./utils/eventBus.js\");\n\n\n\n\nclass PostView {\n    constructor() {\n        this.container = null;\n        this.header = null;\n        this.post = null;\n\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('onePostCard:got-info', this.update.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('onePostCard:not-found', this.errorUpdate.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('onePostCard:bad-request', this.errorUpdate.bind(this));\n        _utils_eventBus_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].on('onePostCard:server-error', this.errorUpdate.bind(this));\n    }\n\n    render() {\n        const root = document.querySelector('#root');\n        root.innerHTML = '';\n        this.container = document.querySelector('#page-container');\n\n        const headerContainer = document.querySelector('#page-header');\n        this.header = new _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__.Header(headerContainer);\n\n        const postContainer = document.querySelector('#page-posts');\n        this.post = new _components_onePostCard_onePostCard_js__WEBPACK_IMPORTED_MODULE_1__.onePostCard(postContainer);\n\n        this.container.append(headerContainer, postContainer);\n        root.append(this.container);\n\n        this.header.render(headerContainer);\n    }\n\n    update(data = {}) {\n        if (!data || !Object.keys(data)) {\n            return;\n        }\n        this.post.innerHTML = '';\n        this.post.update(data);\n    }\n\n    renderError(data) {\n        const root = document.querySelector('#root');\n        this.container = document.querySelector(\"#error\");\n\n        const errorStatus = data[0];\n        const errorText = data[1];\n\n        const context = {errorStatus, errorText};\n\n        const template = Handlebars.templates.error;\n        const html = template(context);\n\n        root.append(this.container);\n        this.container.innerHTML += html;\n    }\n\n    errorUpdate(data) {\n        if (this.post) {\n            this.post.innerHTML = '';\n        }\n        this.renderError(data);\n    }\n}\n\n\n//# sourceURL=webpack://2022-autumn-a.motrikala/./views/PostView.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;