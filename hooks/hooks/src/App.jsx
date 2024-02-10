import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//mounting: means show up on screen
//usememo- cache a value
//useCallback: cache a function
const Trying = () => {
const [isChecked, setIsChecked] = useState(false)
const [isLoading, setIsLoading] = useState(false)
const [compared, setCompared] = useState('ndvkf')
const[lang, setLang] = useState({sub: 'english'})
const[lists, setLists] = useState(['eat', 'play'])
const [value, setValue] = useState('')
const track = useRef()

const checked = () => {
 console.log("sdhvohls")
 console.log(isChecked)
}

const handleTrack = () => {
  track.current++; 
  console.log(track)
}


const compare = () => {
 setLang((prev) => ({
  ...prev,
  [lang.sub]: 'sdhc'
}))
// console.log('put')
console.log(lang)
}


const handleList = (e) => {
  setValue(e.target.value)
}

const addList = () => {
return(
    setLists((prev) => [...prev,value]
    )
)
  console.log(lists)
}



   return (
    <form>
   <input type="checkbox" checked={true} onChange={() => setIsChecked(!isChecked)} >
       
       </input>
       {!isLoading && <h1>cbkszdxc</h1>}
    {compared}
       <div onClick={compare}>{JSON.stringify(lang)}</div>
    <label>Tasks</label>

    <input type="text" onChange={handleList}/>
    <button onClick={addList}>ADD</button>
    <button>REMOVE</button>
    <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div ref={track}>2</div>
      <button onClick={handleTrack}></button>
    </form>
   
  

    

   )
}


function App() {
const [count, setCount] = useState('yellow')




const handleClick = () => {
  console.log("ciked ")
  setCount('red')     //setState renders the comple page
}


useEffect( () => {
   //async operation perform later
   setCount(count + 1)
  return () => {
     clearTimeout()
     console.log("bdshcb")
  }
   
}, [])


  return (
    <>
   <button onClick={handleClick}>{count}</button>
   <Trying />
   
    </>
  )
}

export default App

