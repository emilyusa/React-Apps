import React from 'react';
import ReactDOM from 'react-dom';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';

configure({adapter:new Adapter()});


describe('App test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});




