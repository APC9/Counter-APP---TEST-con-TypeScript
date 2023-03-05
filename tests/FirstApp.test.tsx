import { render } from '@testing-library/react'
import React from 'react';
import { FirstApp } from '../src/FirstApp';

describe('Test <FirstApp /> component', ()=>{

  /* test('Primer test Resct Ts', () => {
    const title='Hola, soy Alberto'
    const {container}=render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
    
  }) */

  test('debe de mostrar el titulo en un H1', () => { 

    const title='Hola, soy Alberto'
    const {getByText, getByTestId }=render(<FirstApp title={title}/>);

    expect( getByText(title) ).toBeTruthy();
    expect( getByTestId('test-title').innerHTML ).toContain(title);
    
  })

  test('debe de mostrar el subTitulo enviado por Props', () => { 

    const title='Hola, soy Alberto'
    const subTitle='Soy web developer React'
    const {getAllByText }=render(<FirstApp title={title} subTitle={subTitle} />);

    expect( getAllByText(subTitle).length ).toBe(1);
    
  })

})