import React, { useEffect, useState } from 'react'
import "./Signup.scss"
import axios from "axios"
import { useNavigate } from 'react-router';
function Signup() {
const navigate = useNavigate()
  const [userData, setUserData] = useState([]);
  const [userDataId, setUserDataId] = useState(0);
  const [userDataUserEmail, setUserDataUserEmail] = useState([]);
  const [userDataUsername, setUserDataUsername] = useState([]);
const [passCondition, setPassCondition] = useState(false);
const [username, setUsername] = useState("");
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");



const fetchUserDetails = (()=>{
  axios.get("https://6560c27c83aba11d99d1778b.mockapi.io/user_details")
  .then((res)=>
  // console.log(res.data)
  setUserData(res.data)
  )
  .catch((rej)=>console.log(rej))
})

useEffect(() => {
  fetchUserDetails();
  localStorage.removeItem("id");
  sessionStorage.removeItem("login");
}, [])


useEffect(() => {
  let userNames = userData?.map((d,i)=>{
    return d?.username
  })
  setUserDataUsername(userNames)
}, [userData])

useEffect(() => {
  let userEmails = userData?.map((d,i)=>{
    return d?.email
  })
  setUserDataUserEmail(userEmails)
}, [userData])

useEffect(() => {
  let userId = userData?.map((d,i)=>{
    return d?.id
  })
  setUserDataId(userId.length+1)
}, [userData])



function getUsername(e) {
  setUsername(e.target.value)
}
function getName(e) {
  setName(e.target.value)
}
function getEmail(e) {
  setEmail(e.target.value)
}

function getPassword(e) {
  setPassword(e.target.value)
}

function getConfirmPassword(e) {
  setConfirmPassword(e.target.value)
}

function submitDetails(e) {
  e.preventDefault()  
  if (password !== confirmPassword) {
    alert("password & confirm password is not matched")
  }
  else if (
    userDataUsername.includes(username)
  ){
alert("this username already taken")
  }
  else if (
    userDataUserEmail.includes(email)
  ){
alert("this email already taken")
  }
  else if (
    !email.endsWith("@gmail.com")
  ){
alert("type valid email")
  }
  else {   
    axios.post("https://6560c27c83aba11d99d1778b.mockapi.io/user_details",{
      username:username,
      name:name,
      email:email,
      password:password,
    }).then((res)=>
    ""
  ).catch((rej)=>console.log(rej))
  localStorage.setItem("id",userDataId)
  sessionStorage.setItem("login",1)
  // alert(userDataId)
  setUsername("")
  setName("")
  setEmail("")
  setPassword("")
  setConfirmPassword("")
  setPassCondition(false)
  navigate("/home")
  // ,{state:{prop1:userDataId}}
}
}

  return (
    <div className='signup'>
<form onSubmit={(e)=>submitDetails(e)} className="signup-form">
        <div className="head">
          <h1>Create Account</h1>
          <span>Please fill the input below here.</span>
        </div>
        <div className="input">
        <div>
            <span>O</span>

            <input required value={username} onChange={(e)=>getUsername(e)} placeholder="Username" type="text" className="name" />
          </div>
          <div>
            <span>O</span>

            <input required value={name} onChange={(e)=>getName(e)} placeholder="Full Name" type="text" className="name" />
          </div>
          <div>
            <span>O</span>
            <input required value={email} onChange={(e)=>getEmail(e)} placeholder="Email" type="email" className="email" />
          </div>
          <div>
            <span>O</span>
            <input required value={password} onChange={(e)=>getPassword(e)} placeholder="Password" type={passCondition?"text":"password"} className="password" />
            <span style={{color:passCondition ? "red" : "black" }} onClick={()=>setPassCondition(!passCondition)} className='eye'>O</span>
          </div>
          <div>
            <span>O</span>
            <input required value={confirmPassword} onChange={(e)=>getConfirmPassword(e)} placeholder="Confirm Password" type={passCondition?"text":"password"} className="confirm-password" />
            <span style={{color:passCondition ? "red" : "black" }} onClick={()=>setPassCondition(!passCondition)} className='eye'>O</span>
          </div>
        </div>
        <div className="buttons">
            <button type='submit' className="signup-btn">SIGN UP</button>
        </div>
        <div className="goto-login">
        Already have a account?
            <span onClick={()=>navigate("/")}>Log in</span>
        </div>
      </form>
    </div>
  )
}

export default Signup