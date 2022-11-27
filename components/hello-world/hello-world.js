export class HelloWorld {
    constructor(parent) {
        this.parent = parent;
    }

    render() {
        const container = document.createElement('div');
        const contextElement = document.createElement('h1');
        contextElement.textContent = 'Hello world!';
        container.append(contextElement);
        this.parent.append(container);
    }
}