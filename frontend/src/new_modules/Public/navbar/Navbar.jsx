import React, { useState } from 'react'
import "./Navbar.scss"
import dp from "../../../assets/dp.jpg"
import { IoPeopleOutline } from "react-icons/io5";

import { IoHomeOutline } from "react-icons/io5";

function Navbar({handleCondition,handleCondition2}) {

const [condition, setCondition] = useState(false);

  return (
    <div className='navbar'>

<h1>PIC<span>STA</span></h1>
<div className="inputdiv">
    <input className='input' type="text" placeholder='Search Post' />
    <span>O</span>
</div>
<div className="icons">

<span className="one"><IoHomeOutline  /></span>
<span className="four" onClick={()=>handleCondition2()}><IoPeopleOutline /></span>
</div>
<img src={dp} alt="dp"  onClick={()=>handleCondition()} />
    </div>
  )
}

export default Navbar