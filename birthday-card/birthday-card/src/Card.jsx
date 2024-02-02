import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
function Card({value}) {
  return (
    <>
    <div className="card">
    <div className="name">{value}</div>
    </div>

    <div className="card2">
        
    </div>
    </>
  )
}

export default Card