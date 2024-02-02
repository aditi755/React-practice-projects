import React from 'react'
import { useState, useeffect } from 'react'
import OtpInput from './OtpInput.jsx' 


function PhoneOtpForm() {
const [phoneNumber, setPhoneNumber] = useState("")
const [showOtpInput, setShowOtpInput] = useState(false)

const handlePhoneNumber = (event) => {
  setPhoneNumber(event.target.value)
}

const handlePhoneSubmit = (event) => {
  event.preventDefault();

  //phone validation
  const regex = /[^0-9]/g;
  if(phoneNumber.length < 10 || regex.test(phoneNumber) ){
    alert("invalid")
    return;
  }
//Call BE Api
//Show OTP Field

setShowOtpInput(true)
}

const onOtpSubmit = (otp) => {
  console.log( "Login succesful",otp)
}

  return (
    <div>
    {!showOtpInput? <form onSubmit={handlePhoneSubmit}> 

<input type="text" value-={phoneNumber}
onChange={handlePhoneNumber}
placeholder="Enter phone Numbe"></input>

<button type="submit"> Submit</button>
    </form> : <div>
        <p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onOtpSubmit={onOtpSubmit}></OtpInput>
        </div>}
    </div>
  )
}

export default PhoneOtpForm