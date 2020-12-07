import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { useFetchGifs } from '../../../hooks/useFetchGifs';
describe('Pruebas en custom hook <useFetchGifs />', () => {
    test('Debe retornar el estado inicial', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        const { data } = result.current;

        await waitForNextUpdate(); // Para que no se ejecute automaticamente
        // console.log(resp);

        // console.log(data);

        expect(data).toEqual([]);
    });

    test('Debe retornar un arreglo de imágenes', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One Punch'));
        await waitForNextUpdate();

        const { data } = result.current;

        expect(data.length).toEqual(10);
    });
});