import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// Setup the global graphql tagged template literals
global.graphql = args => args;

global.window.HTMLCanvasElement.prototype.getContext = jest.fn();
