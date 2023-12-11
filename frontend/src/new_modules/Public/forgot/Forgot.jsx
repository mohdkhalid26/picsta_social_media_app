import React, { useState } from 'react'
import "./Forgot.scss"
function Forgot() {
  const [email, setEmail] = useState("");
  const submitEmail = ((e)=>{
    e.preventDefault();
    alert(email)
  })
  function handleEmail(e) {
    setEmail(e.target.value)
  }
  return (
    <div className='forgot-page'>
      <form onSubmit={(e)=>submitEmail(e)} className="forgot-form">
        <h1>Forgot Password</h1>
        <div className="input">
          <span>O</span>
          <input onChange={(e)=>handleEmail(e)} value={email} type="email" required placeholder='Write email for update password' />
        </div>
        <div className="btn">
          <button type="submit">Send</button>
        </div>
        <div className="next-page">

        <span className='back-login'>Back To <i>Login</i> Page.</span>
        <span className='back-login'>OR</span>
        
        <span className='back-login'>Don't have any account? <i>Sign up</i></span>
        </div>
      </form>
    </div>
  )
}

export default Forgot