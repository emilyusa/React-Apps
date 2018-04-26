import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('App test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads H2 text', () => {
        const wrapper = shallow(<App/>);
        const welcome = <h2 className="App-title">Welcome to React</h2>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads file before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">file:unknown</p>;
        const Nine=wrapper.find('p').first().debug();
        console.log(Nine);
        expect(wrapper.contains(welcome)).toBe(true);
    });



    it('renders state of file paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const nineSign = <p className="App-intro">file:url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        const paragraphData=wrapper.find('div').childAt(1).debug();
        console.log(paragraphData);
        expect(wrapper.contains(nineSign)).toBe(true);
    });


});
