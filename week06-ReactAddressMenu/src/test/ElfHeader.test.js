import { MemoryRouter } from 'react-router';
import {mount} from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import Address from '../components/Address';
import GetFile from '../components/GetFile';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfDebugEnzyme from '../ElfDebugEnzyme';


configure({adapter:new Adapter()});

const elfDebug = new ElfDebugEnzyme(true, 'Address.test.js');

fit('renders with App firstName', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>firstName:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});

fit('renders with App lastName', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>lastName:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});

fit('renders with App Street', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>Street:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});

fit('renders with App City', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>City:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});

fit('renders with App State', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>State:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});

fit('renders with App Postal', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/']}>
            <App />
        </MemoryRouter>
    );
    elfDebug.getAll(wrapper);
    const eightSign = <p className='App-intro'>Postal:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});



const elfDebugGetFile = new ElfDebugEnzyme(true, 'GetFile.test.js');

fit('renders with App firstName', () => {
    const wrapper = mount(
        <MemoryRouter initialEntries={['/get-file']}>
            <GetFile />
        </MemoryRouter>
    );
    elfDebugGetFile.getAll(wrapper);
    const eightSign = <p className='App-intro'>file:unknown</p>;
    expect(wrapper.contains(eightSign)).toEqual(true);
});
