import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from '../components/Header';

configure({ adapter: new Adapter() });

describe('Header test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<Header />);
        const welcome = <h2 className="App-title">Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toBe(true);
    });
});
