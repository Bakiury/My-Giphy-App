import { shallow } from 'enzyme';
import React from 'react'
import { GifExpertApp } from '../../GifExpertApp';
describe('Pruebas en <GifExpertApp />', () => {
    test('Debe Funcionar correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    });
});