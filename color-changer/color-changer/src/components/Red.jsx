import React from 'react'
import './Red.css'
import { useState, useEffect } from 'react'


function Red( {changeColor, color}) {
    
  return (
    <div>
        <button className="red" onClick={() => {
           changeColor("red") 
        }}>Red : {color}</button>
    </div>
  )
}

export default Red

