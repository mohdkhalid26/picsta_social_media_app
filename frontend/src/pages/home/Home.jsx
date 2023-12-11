import React, { useState } from 'react'
import "./Home.scss"
import Navbar from '../../new_modules/Public/navbar/Navbar'
import Feedbar from '../../new_modules/Public/feedbar/Feedbar'
import LeftSidebar from '../../new_modules/Public/leftsidebar/LeftSidebar'
import RightSidebar from '../../new_modules/Public/rightsidebar/RightSidebar'
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from '../../new_modules/Public/login/Login'
import Signup from '../../new_modules/Public/signup/Signup'
import Forgot from '../../new_modules/Public/forgot/Forgot'
import { logDOM } from '@testing-library/react'

function Home() {
  const [condition, setCondition] = useState(false);
  const [condition2, setCondition2] = useState(false);
  const handleCondition=()=>{
    setCondition(!condition)
    setCondition2(false)
  }
  const handleCondition2=()=>{
    setCondition2(!condition2)
    setCondition(false)
  }
  return (
    <div className='home'>

<Navbar handleCondition = {handleCondition} handleCondition2 = {handleCondition2} />
    
     <LeftSidebar condition={condition}/>
     <Feedbar/>
     <RightSidebar condition2={condition2} />

    </div>
  )
}

export default Home