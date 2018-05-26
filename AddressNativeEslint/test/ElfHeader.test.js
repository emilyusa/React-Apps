import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import ElfHeader from '../ElfHeader';



configure({adapter:new Adapter()});

describe('jest test ElfHeader', function() {

    it('renders without crashing', () => {
        const tree = renderer.create(<ElfHeader />).toJSON();
        expect(tree).toMatchSnapshot();

    });


});