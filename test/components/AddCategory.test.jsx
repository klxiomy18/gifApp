import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"


describe('pruebas en AddCategory', () => {
  
    test('debe de cambiar el valor de la caja de texto', () => {
        
        render(<AddCategory onNewCategory={()=> {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target:{value:'Saitama'}});
        // screen.debug()
        expect(input.value).toBe('Saitama')
    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn();
      
        const inputValue = 'Saitama';
        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target:{value:inputValue}})
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('No debe de llamar el onNewCategory si el input esta vacio', () => {
        const onNewCategory = jest.fn();

        const inputValue = '';

        render(<AddCategory onNewCategory={onNewCategory} />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value: inputValue}});
        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(0);

    })
    
    
    
})
