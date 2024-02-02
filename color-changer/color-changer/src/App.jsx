import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Red from './components/Red.jsx'
import Yellow from './components/Yellow.jsx'

function App() {
 const [color, setColor] = useState("white")

 const changeColor = (color) => {
  setColor(color) //changing the state(not render in UI )  in component state
  document.body.style.backgroundColor = color; //The parent component (ColorChanger) is responsible for managing the background color state. The child components don't need to know the implementation details; they just trigger the function when needed.
 }

  return (
    <div className="color">
     <Red changeColor = {changeColor} color={color}/>
     <Yellow changeColor = {changeColor} color={color} />
    </div>
  )
}

export default App



