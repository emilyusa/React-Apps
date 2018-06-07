import React from 'react';
import ReactDOM from 'react-dom';
import ElfHeader from '../components/ElfHeader';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {BrowserRouter, Link} from 'react-router-dom';
import {createMuiTheme} from "@material-ui/core/styles/index";
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';

configure({ adapter: new Adapter() });

describe('ElfHeader test', function() {
    const themeDark = createMuiTheme({
        palette: {
            type: 'dark'
        }
    });

    const gitItems = (
        <div>
            <ListItem>
                <ListItemIcon>
                    <InboxIcon/>
                </ListItemIcon>
                <ListItemText primary="Address"/>
            </ListItem>
        </div>
    );

    const demoItems = (
        <div>
            <ListItem
                button
                component={Link}
                to="/get-file">
                <ListItemIcon>
                    <DraftsIcon/>
                </ListItemIcon>
                <ListItemText primary="GetFile"/>
            </ListItem>

        </div>
    );

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(
            <MuiThemeProvider theme={themeDark}>
                <BrowserRouter>
                    <ElfHeader />
                </BrowserRouter>
            </MuiThemeProvider>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders title and tests with containsMatchingElement', () => {
        const wrapper = shallow(<ElfHeader />);
        const target = <Typography>Address Maven</Typography>;
        expect(wrapper.dive().containsMatchingElement(target)).toBe(true);
    });


    it('renders and reads first MenuItem text', () => {
        const wrapper = shallow(<ElfHeader />);
        const addresslinktext =<List>{gitItems}</List>;
        expect(wrapper.dive().containsMatchingElement(addresslinktext)).toBe(true);
    });

    it('renders and reads second MenuItem text', () => {
        const wrapper = shallow(<ElfHeader />);
        const getfilelinktext =<List>{demoItems}</List>;
        expect(wrapper.dive().containsMatchingElement(getfilelinktext)).toBe(true);
    });

});
