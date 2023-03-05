import { render, screen } from '@testing-library/react'
import React from 'react';
import { FirstApp } from '../src/FirstApp';

describe('Test <FirstApp /> component', ()=>{

  const title='Hola, soy Alberto'
  const subTitle='Soy web developer React'

  test('Debe de hacer Match con el Snapshot', () => {
    
    const {container}=render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  }) 

  test('El titulo debe existir', () => { 
    
    render(<FirstApp title={title}/>);
    expect( screen.getByText(title) ).toBeTruthy()
  })

  test('debe de mostrar el titulo en un H1', () => { 
    
    render(<FirstApp title={title}/>);
    expect( screen.getByRole('heading', {level: 1} ).innerHTML ).toContain(title)
  })

  test('debe de mostrar el subTitulo enviado por Props', () => { 

    render(<FirstApp title={title} subTitle={subTitle} />);
    expect(screen.getByText(subTitle) ).toBeTruthy()
  })

})