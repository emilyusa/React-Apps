import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import addresses from './address-list';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter:new Adapter()});

describe('Address test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address addressList={addresses}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads firstName before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">firstName:unknown</p>;
        const firstParagraph=wrapper.find('p').first().debug();
        console.log(firstParagraph);
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads lastName before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">lastName:unknown</p>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads Street before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">Street:unknown</p>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads City before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">City:unknown</p>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads State before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">State:unknown</p>;
        expect(wrapper.contains(welcome)).toBe(true);
    });

    it('renders and reads Postal before click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const welcome = <p className="App-intro">Postal:unknown</p>;
        expect(wrapper.contains(welcome)).toBe(true);
    });


    it('renders state of firstName paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">firstName:Chunyan</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of lastName paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">lastName:Li</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of street paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">Street:4190 129th PL SE</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of city paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">City:Bellevue</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of state paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">State:WA</p>;
        wrapper.find('#setAddress').simulate('click');
        expect(wrapper.contains(address)).toBe(true);
    });

    it('renders state of postal paragraph after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        const address = <p className="App-intro">Postal:98006</p>;
        wrapper.find('#setAddress').simulate('click');
        const lastParagraph=wrapper.find('p').last().debug();
        console.log(lastParagraph);
        expect(wrapper.contains(address)).toBe(true);
    });


});
