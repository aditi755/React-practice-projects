import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Words from './components/Words.jsx'

function App() {
  const [words, setWords] = useState("")
  const [api, setApi] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${words}`)
  }

 const fetchApi = async () => {
  const res = await fetch('https://api.github.com/users/aditi755')
  const data = await res.json()
  console.log(data.avatar_url)
  // setApi(data.avatar_url)
  setApi(JSON.stringify(data))

 }

  useEffect(() => {
    fetchApi()
  },[api])

  return (
    <>
      <div style= {{color: "black", display : "flex", justifyContent: "center", marginTop: "50px", fontSize: "40px"}}>Paragraph Generator</div>
      <form onSubmit={handleSubmit}>
     <div style={{display: "flex",gap: "20px", justifyContent: "center", marginTop: "40px" }}>
      <label htmlFor="input">Enter length of words:  </label>
      <input className="input" 
       type="text" 
       value={words}
      onChange={(e) => setWords(e.target.value)}
      style={{height: "26px"}} > 

      </input>
      {/* <div>{words}</div> */}
      <button type="submit"  words={words}  style={{color: "white", backgroundColor:"black", borderRadius:"20px", height:"40px", width: "90px", marginTop:"-10px"}}>Generate</button>
      </div>
      </form>

      <Words words={words} />
      <div>`url ${api}` </div>
       {/* <img src={api}></img>     */}
      {/* get data in console to check then set state in react then u will be able to render the data  */}
   
      </>
  )
}

export default App
