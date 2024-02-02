import React from 'react'
import { useState } from "react"

const Card = ({song}) => {
  const [title, setTitle]  = useState("N0")
    const handleClick = () => {
          setTitle("SONG")    
    }
  console.log(title)
  return (
    <div>
    <div style={{width: "250px", height:"150px", backgroundColor:"grey", opacity:"1", display: "flex", gap: "10px", boxSizing: "border-box"}}>
        <img style={{width:"80px", height:"150px", objectFit:"cover"}}src={"https://images.unsplash.com/photo-1706554596177-35b0a05a082e?q=80&w=1882&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <div style={{display: "flex", flexDirection: "column", gap: "40px"}}>
      <span style={{fontSize:"34px", fontWeight:"100", boxSizing:"content-box"}}>{song}</span>
      <button style={{width: "40px", backgroundColor: "lightslategray"}} onClick={handleClick}>Play</button>
     
    </div>
    </div>
    {
        title === 'SONG' ? `${title} is playing` : "No song is playing"
    }
    </div>
   
  )
}

export default Card