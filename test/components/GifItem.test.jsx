import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas en GifItem', () => {
    const title = 'Saitama'; 
    const url = 'https://saitama'
    test('Hacer match con el sanpshot', () => {
      const {container} = render(<GifItem url={url} title={title}/>);
      expect(container).toMatchSnapshot()
    })
    
    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
      render(<GifItem url={url} title={title}/>);
      // screen.debug();
      // expect(screen.getByRole('img').src).toContain(url);
      // expect(screen.getByRole('img').alt).toContain(title);
      const {alt, src} = screen.getByRole('img');

      expect(src).toContain(url);
      expect(alt).toContain(title);
    });

    test('Debe de mostrr el titulo en el componente', () => {

      render(<GifItem url={url} title={title}/>);
      
      expect(screen.getByText(title)).toBeTruthy();
    })
    
})

