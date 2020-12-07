import { shallow } from 'enzyme';
import React from 'react';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // Simular hook

describe('Probando <GifGrid />', () => {

    const category = 'Goku';
    // const wrapper = shallow(<GifGrid category={category} />);

    test('Debe mostrarse correctamente', () => {
        useFetchGifs.mockReturnValue({
            data: []
        });

        const wrapper = shallow(<GifGrid category={category} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/abc/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs
        });

        const wrapper = shallow(<GifGrid category={category} />);

        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
    });
});