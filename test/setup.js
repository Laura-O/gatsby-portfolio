const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;

global.window.HTMLCanvasElement.prototype.getContext = jest.fn();


global.___loader = {
    enqueue: jest.fn(),
}