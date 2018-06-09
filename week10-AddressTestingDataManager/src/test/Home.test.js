import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Home test', function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <Home />,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    const homeProp = wrapper => wrapper
        .find('WithStyles(Home)')
        .prop('div');

    it('renders and reads Home text', () => {
        const wrapper = shallow(<Home/>);
        const welcome = <h1>Home</h1>;
        expect(wrapper.dive().contains(welcome)).toBe(true);
    });

});