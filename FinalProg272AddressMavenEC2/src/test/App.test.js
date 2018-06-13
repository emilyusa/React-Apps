import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../components/App';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles/index';
import { shallow } from 'enzyme/build/index';
import Home from '../components/Home';
import ElfHeader from '../components/ElfHeader';
import { Route } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('App test', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    it('should take an App snapshot', () => {
        const elfTree = shallow(<App />);
        expect(elfTree).toMatchSnapshot();
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <App />
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement ElfHeader ', () => {
        const wrapper = shallow(<App />);
        const target = <ElfHeader />;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

    it('renders title and tests with containsMatchingElement Home ', () => {
        const wrapper = shallow(<App />);
        const target = <Route id="home" exact path="/" component={Home} />;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

    it('renders title and tests with containsMatchingElement address ', () => {
        const wrapper = shallow(<App />);
        const target = <Route id="address" path="/address" />;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });

    it('renders title and tests with containsMatchingElement Init-db ', () => {
        const wrapper = shallow(<App />);
        const target = <Route id="initDb" path="/init-db" />;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });
});
