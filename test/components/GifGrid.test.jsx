import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en GifGrid', () => {

    const category = 'One punch'
    
    test('Debe de mostrar el loading incialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })
      
        render(<GifGrid category={category}/>);
        // screen.debug()
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category))
    });

    test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id:'ABC',
                title: 'Saitama',
                url: 'https://saitama.jpg'
            },
            {
                id:'123',
                title: 'Goku',
                url: 'https://Goku.jpg'
            },
            {
                id:'345',
                title: 'Rick',
                url: 'https://Rick.jpg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: true
        })
      
        render(<GifGrid category={category}/>);
        // screen.debug()
        expect(screen.getAllByRole('img').length).toBe(3)

    })
    
    
})
