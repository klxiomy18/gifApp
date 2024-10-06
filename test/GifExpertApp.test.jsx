import { render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"


describe('Pruebas en GifExpertApp', () => {
  
    test('Debe hacer match con el snapshot', () => {
      const {container} = render(<GifExpertApp/>);
    //   screen.debug()
        expect(container).toMatchSnapshot()
    });

    test('Debe aparecer el titulo, value y cargando', () => {
      const title = 'GifExpertApp';
      const value = 'One punch';

      render(<GifExpertApp/>);
      const InputValue = screen.getByRole('textbox');
      
      expect(screen.getByText(title));
      expect(InputValue.value).toBe(value);
      expect(screen.getByText('Cargando...'))
    })
    
    
})
