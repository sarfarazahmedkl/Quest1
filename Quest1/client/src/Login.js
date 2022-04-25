import React, { useState, } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import { Navigate } from 'react-router-dom';

export default function Login() {

  const [value, setValue] = useState()
  const token = localStorage.getItem('token');

  function HandleSubmit(e){
    e.preventDefault()
    localStorage.setItem('token', value);
    window.location.reload();
  }

  if(token != null){
    return <Navigate to='/' />
  }
  console.log(value)
  return (
    <div>
      <div 
        style={{ 
          position: "absolute",
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          border: '1px solid #000000',
          padding: '20px',
          paddingBottom: '40px'
        }}>
        <PhoneInput
            placeholder="Enter phone number"
            defaultCountry="IN"
            value={value}
            onChange={setValue}/>
        <button
          onClick={HandleSubmit}
          style={{ position: "absolute", left: "50%", margin: '10px' }}
        >
          Login
        </button>
      </div>
    </div>
  )
}