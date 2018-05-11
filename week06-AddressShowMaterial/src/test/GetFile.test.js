import React from 'react';
import ReactDOM from 'react-dom';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetFile from '../components/GetFile';
import ElfDebugEnzyme from "../ElfDebugEnzyme";
import { MemoryRouter } from 'react-router';
import {mount} from 'enzyme';
import RaisedButton from 'material-ui/RaisedButton';
import styles from "../components/elf-styles";


configure({adapter:new Adapter()});

const elfDebugGetFile = new ElfDebugEnzyme(true, 'GetFile.test.js');


describe('Getfile test', function () {
    it('renders and reads file before click', () => {
        const wrapper = shallow(<GetFile/>);
        const welcome = <p className="App-intro">file:unknown</p>;
        const Nine=wrapper.find('p').first().debug();
        expect(wrapper.contains(welcome)).toBe(true);
    });



    it('renders state of file paragraph after button click', () => {
        const wrapper = shallow(<GetFile/>);
        const nineSign = <p className="App-intro">file:url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        const paragraphData=wrapper.find('div').childAt(1).debug();
        expect(wrapper.contains(nineSign)).toBe(true);
    });



});
