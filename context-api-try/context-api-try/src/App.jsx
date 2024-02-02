import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './components/Cart.jsx'
import Item from './components/Item.jsx'

function App() {

  return (
    <>
     <div className="App">
        <Item name="Macbook" price={10000}/>
        <Item name="Mobile" price={4000}/>
        <Cart />
     </div>
    </>
  )
}

export default App
