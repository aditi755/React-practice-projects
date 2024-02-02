import React from 'react'
import './Yellow.css'
import { useState, useEffect } from 'react'


function Yellow( {changeColor, color} ) {

  return (
    <div>
        <button
        className="yg"
        onClick={() => changeColor("yellow")}
        style={{ color: color === "white" ? "black" : color }}
      >
        Yellow :<br />
        current color is <span>{color}</span>
      </button>
    </div>
  )
}

export default Yellow
