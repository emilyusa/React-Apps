import React from 'react';
import ReactDOM from 'react-dom';
import Address from './components/Address';
import AddressShow from './components/AddressShow';
import addresses from './address-list';
import {configure,shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import './App.css';
configure({adapter:new Adapter()});

const address = addresses[0];

describe('Address mount Suite', function () {

    var quiet = true;

    const getIndex = function(wrapper, index,talkToMe) {
        if (!quiet || talkToMe) {
            const container= wrapper.find('div');
            const ninep = container.childAt(index).debug();
            console.log('NINEP:', ninep);
        }
    };

    const defaultFieldTest = (name, index,talkToMe) => {
        const wrapper = mount((<AddressShow address={address}/>));
        const welcome = <p className="App-intro">{name}</p>;
        getIndex(wrapper, index,talkToMe);
        expect(wrapper.contains(welcome)).toEqual(true);
    };

    const afterClickFieldTest = (name, index, talkToMe) => {
        const wrapper = mount(<Address address={address}/>);
        const patty = <p className="App-intro">{name}</p>;
        wrapper.find('#setAddress').simulate('click');
        getIndex(wrapper, index, talkToMe);
        expect(wrapper.contains(patty)).toEqual(true);
    };

    it('renders and displays the default first name', () => {
        defaultFieldTest('firstName:unknown', 0);
    });

    it('renders and displays the default last name', () => {
        defaultFieldTest('lastName:unknown', 1);
    });

    it('renders and displays the default street', () => {
        defaultFieldTest('Street:unknown', 2);
    });

    it('renders and displays the default city', () => {
        defaultFieldTest('City:unknown', 3);
    });

    it('renders and displays the default state', () => {
        defaultFieldTest('State:unknown', 4);
    });

    it('renders and displays the default postal', () => {
        defaultFieldTest('Postal:unknown', 5);
    });

    it('renders and displays the after click first name', () => {
        afterClickFieldTest('firstName:Chunyan', 0);
    });

    it('renders and displays the after click last name', () => {
        afterClickFieldTest('lastName:Li', 1);
    });

    it('renders and displays the after click street', () => {
        afterClickFieldTest('Street:4190 129th PL SE', 2);
    });

    it('renders and displays the after click city', () => {
        afterClickFieldTest('City:Bellevue', 3);
    });

    it('renders and displays the after click state', () => {
        afterClickFieldTest('State:WA', 4);
    });

    it('renders and displays the after click postal', () => {
        afterClickFieldTest('Postal:98006', 5);
    });

});

