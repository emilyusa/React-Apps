import React from 'react';
import AddressShow from '../components/AddressShow';
import App from '../components/App';
import Address from '../components/Address';
import ElfHeader from '../components/ElfHeader';
import Header from '../components/Header';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import addresses from '../address-list';
import GetFile from '../components/GetFile';

configure({ adapter: new Adapter() });

describe('SnapShot Tests', function() {
    it('should take an App snapshot', () => {
        const elfTree = shallow(<App />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an Header snapshot', () => {
        const elfTree = shallow(<Header />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an ElfHeader snapshot', () => {
        const elfTree = shallow(<ElfHeader />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an GetFile snapshot', () => {
        const elfTree = shallow(<GetFile />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an Address snapshot', () => {
        const elfTree = shallow(<Address />);
        expect(elfTree).toMatchSnapshot();
    });

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]} />);
        expect(elfTree).toMatchSnapshot();
    });
});
