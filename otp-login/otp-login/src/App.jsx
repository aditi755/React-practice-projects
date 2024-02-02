import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PhoneOtpForm from './PhoneOtpForm'


function App() {
  

  return (
    <>
     {/* <div style={{color: "black", marginLeft: "680px", marginTop: "80px", fontSize: "30px"}}>Login via OTP</div>
     <div style={{display: "flex", flexDirection: "column", gap: "20px"}}>
     <input placeholder="      Enter your mobile number" style={{width: "250px", height: "40px", borderRadius: "30px", marginLeft: "640px", marginTop: "40px"}}></input>

     <button style={{width: "90px", height:"30px", marginLeft: "730px"}}   >Send OTP</button>
     </div> */}
     <PhoneOtpForm />
    </>
  )
}

export default App
