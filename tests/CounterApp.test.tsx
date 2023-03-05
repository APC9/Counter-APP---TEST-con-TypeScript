import React from 'react'; 
import { fireEvent, render, screen } from '@testing-library/react'
import {CounterApp} from '../src/CounterApp';

describe(' test <CounterApp />', ()=>{

  const value= 10;

  test('debe hacer Match con el Snapshot', () => {  
    const {container}=render(<CounterApp value={value}/>);
    expect(container).toMatchSnapshot();
  })

  test('Debe de mostrar el Valor inicial de 10', () => {
    render(<CounterApp value={value}/>);
    expect(screen.getByText(value) ).toBeTruthy();
    expect(screen.getByRole('heading', {level:2} ).innerHTML ).toContain(value.toString())
  })

  test('debe incrementar con el boton +1', () => { 
    render(<CounterApp value={value}/>);
    fireEvent.click(screen.getByText('+1'))

    expect(screen.getByText('11') ).toBeTruthy();
    expect(screen.getByRole('heading', {level:2} ).innerHTML ).toContain('11')
  })
  
  test('debe decrementar con el boton -1', () => { 
    render(<CounterApp value={value}/>);
    fireEvent.click(screen.getByText('-1'))
    
    expect(screen.getByText('9') ).toBeTruthy();
    expect(screen.getByRole('heading', {level:2} ).innerHTML ).toContain('9')
  })
  
  test('debe restaurar el valor inicial con el boton Reset', () => { 
    render(<CounterApp value={value}/>);
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('-1'))
    fireEvent.click(screen.getByText('-1'))
    
    screen.debug()
    const btnReset = screen.getByRole('button', {name:'btn-reset'}) // <button aria-label="btn-reset">
    fireEvent.click(btnReset)
    
    expect(screen.getByText('10') ).toBeTruthy();
    expect(screen.getByRole('heading', {level:2} ).innerHTML ).toContain('10')
  })

})