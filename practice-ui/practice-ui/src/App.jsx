import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Profile from './pages/Profile'
import Header from './components/Header'
function App() {

  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Routes>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
