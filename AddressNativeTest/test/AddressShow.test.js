import React from 'react';
import AddressShow from '../AddressShow';
import addresses from '../address-list';
import {configure,shallow,mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {View,Text,Button} from 'react-native';
import renderer from 'react-test-renderer';
import Address from "../Address";


configure({adapter:new Adapter()});



describe('AddressShow Shallow Suite', function () {

    it('should take an AddressShow snapshot', () => {
        const elfTree = shallow(<AddressShow address={addresses[0]}/>);
        expect(elfTree).toMatchSnapshot();
    });


});

