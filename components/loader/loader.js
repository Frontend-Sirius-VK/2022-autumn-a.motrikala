export class Loader {
    constructor(parent) {
        this.parent = parent;
    }
    // render() {
    //     // const loaderWrap = document.createElement('div');
    //     // loaderWrap.className = 'loaderWrapper';
    //     // const loader = document.createElement('span');
    //     // loader.className = 'loader';
    //     // loaderWrap.append(loader);
    //     //
    //     // this.parent.append(loaderWrap);
    //     const

    render() {
        const context = '';
        const template = Handlebars.templates.loader;
        const html = template(context);

        this.parent.innerHTML += html;
    }
}
