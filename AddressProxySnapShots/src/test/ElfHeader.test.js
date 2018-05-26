import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfHeader from '../components/ElfHeader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('ElfHeader test', function() {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider>
                <BrowserRouter>
                    <ElfHeader />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads Title text', () => {
        const wrapper = shallow(<ElfHeader />);
        const headerText = wrapper
            .find('AppBar')
            .first()
            .prop('title');
        console.log('HeaderTest', headerText);
        expect(headerText).toBe('Address Maven');
    });

    it('renders and reads first MenuItem text', () => {
        const wrapper = shallow(<ElfHeader />);
        const firstmenuText = wrapper
            .find('MenuItem')
            .first()
            .prop('primaryText');
        console.log('MenuTest', firstmenuText);
        expect(firstmenuText).toBe('Address');
    });

    it('renders and reads second MenuItem text', () => {
        const wrapper = shallow(<ElfHeader />);
        const secondmenuText = wrapper
            .find('MenuItem')
            .last()
            .prop('primaryText');
        console.log('MenuTest', secondmenuText);
        expect(secondmenuText).toBe('Get File');
    });
});
