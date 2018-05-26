import React from 'react';
import App from '../App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ElfHeader from '../ElfHeader';
import Address from "../Address";
import { Route } from 'react-router-native';
import GetFile from "../GetFile";


configure({adapter:new Adapter()});

describe('jest test', function() {

    const debug = true;

    it('renders without crashing', () => {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();

    });

    it('should find ElfHeader', () => {
        const wrapper = shallow(<App />);
        if (debug) {
            console.log(wrapper.debug());
        }
        const nineSign = <ElfHeader />;
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('should find Address Link', () => {
        const wrapper = shallow(<App />);
        if (debug) {
            console.log(wrapper.debug());
        }
        const nineSign = <Route exact path="/" component={Address} />;
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('should find GetFile Link', () => {
        const wrapper = shallow(<App />);
        if (debug) {
            console.log(wrapper.debug());
        }
        const nineSign = <Route path="/get-file" component={GetFile} />;
        expect(wrapper.contains(nineSign)).toBe(true);
    });
});