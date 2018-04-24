import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('jest test', function () {

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

    it('renders and reads Nine before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">Nine:unknown</p>;
        const Nine=wrapper.find('p').first().debug();
        console.log(Nine);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads firstName before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">firstName:unknown</p>;
        const firstName=wrapper.find('div').childAt(2).debug();
        console.log(firstName);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads lastName before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">lastName:unknown</p>;
        const lastName=wrapper.find('div').childAt(3).debug();
        console.log(lastName);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads Street before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">Street:unknown</p>;
        const street=wrapper.find('div').childAt(4).debug();
        console.log(street);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads City before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">City:unknown</p>;
        const city=wrapper.find('div').childAt(5).debug();
        console.log(city);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads State before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">State:unknown</p>;
        const state=wrapper.find('div').childAt(6).debug();
        console.log(state);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads Postal before click', () => {
        const wrapper = shallow(<App/>);
        const welcome = <p className="App-intro">Postal:unknown</p>;
        const state=wrapper.find('div').childAt(7).debug();
        console.log(state);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders state of Nine paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const nineSign = <p className="App-intro">Nine:9</p>;
        wrapper.find('#getFile').simulate('click');
        const paragraphData=wrapper.find('div').childAt(1).debug();
        console.log(paragraphData);
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders state of firstName paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">firstName:Chunyan</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(2).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of lastName paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">lastName:Li</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(3).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of street paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">Street:4185 129th</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(4).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of city paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">City:Bellevue</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(5).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of state paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">State:WA</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(6).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of postal paragraph after button click', () => {
        const wrapper = shallow(<App/>);
        const address = <p className="App-intro">Postal:98006</p>;
        wrapper.find('#setAddress').simulate('click');
        const paragraphData=wrapper.find('div').childAt(7).debug();
        console.log(paragraphData);
        expect(wrapper.contains(address)).toBe(true);
    });
});
