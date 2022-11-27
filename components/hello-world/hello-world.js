export class HelloWorld {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const root = document.querySelector('#root');
        const container = document.createElement('div');
        const contextElement = document.createElement('h1');
        contextElement.textContent = 'Hello world!';
        container.append(contextElement);
        root.append(container);
        this.parent.appendChild(container);
    }
}