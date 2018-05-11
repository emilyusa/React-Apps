import { MemoryRouter } from 'react-router';
import { mount } from 'enzyme';
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ElfHeader from '../components/ElfHeader';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('ElfHeader test', function() {
    test('ElfHeader shows on home page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/']}>
                <ElfHeader />
            </MemoryRouter>
        );

        expect(wrapper.find(ElfHeader)).toHaveLength(1);
    });

    test('ElfHeader shows one /get-file page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/get-file']}>
                <ElfHeader />
            </MemoryRouter>
        );

        expect(wrapper.find(ElfHeader)).toHaveLength(1);
    });

    test('ElfHeader has Address link', () => {
        const wrapper = shallow(<ElfHeader />);

        const mylink = <Link to="/">Address</Link>;
        expect(wrapper.contains(mylink)).toBe(true);
    });

    test('ElfHeader has GetFile link', () => {
        const wrapper = shallow(<ElfHeader />);

        const mylink = <Link to="/get-file">Get File</Link>;
        expect(wrapper.contains(mylink)).toBe(true);
    });
});
