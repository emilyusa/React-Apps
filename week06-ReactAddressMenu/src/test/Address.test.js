import React from 'react';
import ReactDOM from 'react-dom';
import Address from '../components/Address';
import addresses from '../address-list';
import {configure,shallow} from 'enzyme';
import {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter:new Adapter()});

const address = addresses[0];

describe('Address tests',  function() {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Address/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and displays the default first name', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('unknown');
    });

    it('renders state of firstName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').firstName).toEqual('Chunyan');
        });
    });

    it('renders and displays the default last name', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('unknown');
    });

    it('renders state of lastName after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').lastName).toEqual('Li');
        });
    });

    it('renders and displays the default street', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').street).toEqual('unknown');
    });

    it('renders state of street after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').street).toEqual('4190 129th PL SE');
        });
    });

    it('renders and displays the default city', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').city).toEqual('unknown');
    });

    it('renders state of city after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').city).toEqual('Bellevue');
        });
    });

    it('renders and displays the default State', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').somestate).toEqual('unknown');
    });

    it('renders state of State after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').somestate).toEqual('WA');
        });
    });

    it('renders and displays the default postal', () => {
        const wrapper = shallow(<Address/>);
        expect(wrapper.find('AddressShow').prop('address').postal).toEqual('unknown');
    });

    it('renders state of postal after button click', () => {
        const wrapper = shallow(<Address addressList={addresses}/>);
        wrapper.instance().setAddress();
        setImmediate(() => {
            wrapper.update();
            expect(wrapper.find('AddressShow').prop('address').postal).toEqual('98006');
        });
    });

});

