import React from 'react'
import ReactDOM from 'react-dom/client'
import { CounterApp } from './CounterApp'
import { FirstApp } from './FirstApp'

import './styles.css'


{/* <FirstApp title={'Hola, Soy Goku'}/> */}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  //<React.StrictMode>
    <CounterApp value={100}/>
  //</React.StrictMode>,
)
