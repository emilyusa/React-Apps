import React from 'react';
import ReactDOM from 'react-dom';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GetFile from '../components/GetFile';
import ElfDebugEnzyme from "../ElfDebugEnzyme";
import { MemoryRouter } from 'react-router';
import {mount} from 'enzyme';
import {BrowserRouter, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

configure({adapter:new Adapter()});

const elfDebugGetFile = new ElfDebugEnzyme(true, 'GetFile.test.js');


describe('Getfile test', function () {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <BrowserRouter>
                    <GetFile/>
                </BrowserRouter>
            </MuiThemeProvider>
            , div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads file before click', () => {
        const wrapper = shallow(<GetFile/>);
        const welcome = <p className="App-intro">file:unknown</p>;
        const Nine=wrapper.find('p').first().debug();
        console.log(Nine);
        expect(wrapper.contains(welcome)).toBe(true);
    });



    it('renders state of file paragraph after button click', () => {
        const wrapper = shallow(<GetFile/>);
        const nineSign = <p className="App-intro">file:url-file.js</p>;
        wrapper.find('#getFile').simulate('click');
        const paragraphData=wrapper.find('div').childAt(1).debug();
        console.log(paragraphData);
        expect(wrapper.contains(nineSign)).toBe(true);
    });

    it('renders with /get-file web', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/get-file']}>
                <GetFile />
            </MemoryRouter>
        );
        elfDebugGetFile.getAll(wrapper);
        const eightSign = <p className='App-intro'>file:unknown</p>;
        expect(wrapper.contains(eightSign)).toEqual(true);
    });

});
