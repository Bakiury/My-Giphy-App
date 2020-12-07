import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    const setCategories = jest.fn(); //Mock para simular función
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks(); //Que todo se limpie mocks
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    });

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe cambiar la caja de texto', () => {
        const value = 'Hola Mundo';
        const before = wrapper.find('input');

        before.simulate('change', { target: { value } });
        const after = wrapper.find('input');

        expect(after.prop('value')).toBe(value);
    });

    test('No debe de postear la información con submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe llamar el setCategories y limpiar la caja de texto', () => {
        const value = 'Hola Mundo';

        // 1. Simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault() { } });

        // 3. setCategories se debe de haber llamado
        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1);
        expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


        // 4. El valor del input debe de estar ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
});
