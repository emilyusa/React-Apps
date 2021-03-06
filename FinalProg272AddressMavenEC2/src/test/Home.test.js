import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../components/Home';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { createMuiTheme } from '@material-ui/core/styles/index';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

configure({ adapter: new Adapter() });

describe('Home test', function() {
    it('should take an Home snapshot', () => {
        const elfTree = shallow(<Home />);
        expect(elfTree).toMatchSnapshot();
    });

    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <Home />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders and reads Home welcome text1', () => {
        const wrapper = shallow(<Home />);
        const welcome = <h1>Welcome to the React World</h1>;
        expect(wrapper.dive().containsMatchingElement(welcome)).toBe(true);
    });
});
