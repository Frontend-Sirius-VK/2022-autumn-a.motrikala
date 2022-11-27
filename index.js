import {HelloWorld} from './components/hello-world/hello-world.js';

const root = document.querySelector('#root');
const helloWorld = new HelloWorld(root);
helloWorld.render();