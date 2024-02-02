import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './App.css'

function OtpInput({length= 4, onOtpSubmit = () => {}}){
const [otp, setOtp] = useState(new Array(length).fill(""))
const inputRefs = useRef([]) //empty -> undefined , normally its object {current : 0 }
console.log(inputRefs)
console.log(otp)
  
useEffect(() => {
    if(inputRefs.current[0]){        //current 1st index
        inputRefs.current[0].focus()
    }
}, [])

const handleChange = (index, e) => {
  const value = e.target.value;
  if(isNaN(value)) return; //dont do anything just return

  const newOtp = [...otp]; //else, just take otp

  //allow only one input
  newOtp[index] = value.substring(value.length - 1)
 console.log(newOtp[index])
  setOtp(newOtp)

  //submit trigger
  const combinedOtp = newOtp.join("");
  if(combinedOtp.length === length)
  onOtpSubmit(combinedOtp)

  //move to next if input field is filled
  if(value && index<length-1 && inputRefs.current[index + 1]){
    inputRefs.current[index + 1].focus()
  }
}

const handleClick = ()  => {

}

const handleKeyDown = (index, e) => {
  if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index - 1]){
    inputRefs.current[index - 1].focus()
  }
}

  return (
    <div>
  {
    otp.map((value, index) => {
        return <input key={index} type="text"
        ref={(input) => (inputRefs.current[index] = input) } 
        value={value} onChange={(e) => handleChange(index, e)}
        onClick= {() => handleClick(index)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        className="otpInput"
        ></input>
    })
  }
    </div>
  )
}

export default OtpInput