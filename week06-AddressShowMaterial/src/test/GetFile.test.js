import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetFile from '../components/GetFile';

configure({ adapter: new Adapter() });

describe('Getfile test', function() {
    it('renders and reads file before click', () => {
        const wrapper = shallow(<GetFile />);
        const welcome = <p className="App-intro">file:unknown</p>;

        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders state of file paragraph after button click', () => {
        const wrapper = shallow(<GetFile />);
        const nineSign = <p className="App-intro">file:url-file.js</p>;
        wrapper.find('#getFile').simulate('click');

        expect(wrapper.contains(nineSign)).toBe(true);
    });
});
