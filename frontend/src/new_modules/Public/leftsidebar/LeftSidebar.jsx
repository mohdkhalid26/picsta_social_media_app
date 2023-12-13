import React, { useEffect, useState } from 'react'
import "./LeftSidebar.scss"
import dp from "../../../assets/dp.jpg"
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineContacts } from "react-icons/md";
import { MdOutlineMoreHoriz } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router';
import axios from 'axios';

function LeftSidebar({condition}) {
  const navigate = useNavigate()
  const [profileId, setProfileId] = useState(localStorage.getItem("id"));
  const [userProfile, setUserProfile] = useState([]);
  function handleLogout() {
    navigate("/")
  }
  const fetchUser = () => {
    axios
      .get(`https://6560c27c83aba11d99d1778b.mockapi.io/user_details/${profileId}`)
      .then((res) => 
      setUserProfile(res.data)
      // console.log(res.data)
        )
      .catch((rej) => console.log(rej));
    };
      
      useEffect(() => {
        fetchUser();
      }, []);
  
      useEffect(() => {
        fetchUser();
      }, []);

  return (
    <div className='leftsidebar' style={{left:condition? "0%": "-160%"}}>

<div className='list'>
  <i onClick={()=>navigate("/home")} style={{cursor:"pointer" }}><span className="li-icon"><IoHomeOutline /></span><span className='li Home' >Home</span></i>
  <i><span className="li-icon">O</span><span className="li Like">Likes</span></i>
  <i><span className="li-icon">O</span><span className="li Save">Saved</span></i>
  <i><span className="li-icon">O</span><span className="li Explore">About</span></i>
  <i onClick={()=>handleLogout()}><span style={{cursor:"pointer" }} className="li-icon"><MdLogout /></span><span className="li Contact">Logout</span></i>
  <i style={{cursor:"pointer"}} className='profile'>
<img className='Img' src={dp} alt="dp" />
<span className="NAME">{userProfile?.name}</span>
<span className="ID">{userProfile?.username}</span>
<span className='dotsicon'>...</span>
</i>
</div>

    </div>
  )
}

export default LeftSidebar
