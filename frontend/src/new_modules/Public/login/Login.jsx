import React, { useEffect, useState } from "react";
import "./Login.scss";
import axios from "axios"
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate()
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [userObj, setUserObj] = useState({});

  const handleEmail = ((e)=>{
    setEmail(e.target.value)
  })
  const handlePassword = ((e)=>{
    setPassword(e.target.value) 
  })


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
sessionStorage.removeItem("login");
localStorage.removeItem("id");
}, [])

useEffect(() => {
  let users = userData?.map((d,i)=>{
    return {
      password: d?.password,
      email : d?.email,
      id:d?.id
    }
  })
  setUserObj(users)
  // console.log(userObj);
}, [userData])

function submitLogin(e) {
  e.preventDefault()
  let obj = {
    email:email,
    password : password
  }
let func = userObj.filter((d,i)=>{
  
  let fill =  d.password === obj.password && d.email === obj.email
return fill
})
if (func.length === 0) {
  alert("wrong email or password");
} else {
  sessionStorage.setItem("login",1);
  localStorage.setItem("id",func[0].id)
navigate("/home");
// ,{state:{prop1:func[0].id}}
}
  
  
  
}


  return (
    <div className="login">
      <form onSubmit={(e)=>submitLogin(e)}  className="login-form">
        <div className="head">
          <h1>Login</h1>
          <span>Please login to continue.</span>
        </div>
        <div className="input">
          <div>
            <span>O</span>
            <input value={email} onChange={(e)=>handleEmail(e)} required  placeholder="Email" type="email" className="email" />
          </div>
          <div>
            <span>O</span>
            <input value={password} onChange={(e)=>handlePassword(e)} required placeholder="Password" type={eye ? "text":"password"} className="password" />
            <span className="eye" onClick={()=>setEye(!eye)} style={{color:eye?"red":""}}>O</span>
          </div>
        </div>
        <div className="buttons">
            <button className="forgot-btn">Forgot Password?</button>
            <button type="submit" className="login-btn">LOGIN</button>
        </div>
        <div className="goto-signup">
            Don't have an account?
            <span onClick={()=>navigate("/signup")}>Sign up</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
