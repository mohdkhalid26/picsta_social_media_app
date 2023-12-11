import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router';

function PrivateRouteLogin(props) {
const {Component} = props;
const navigate = useNavigate()
useEffect(() => {
    
    let login = sessionStorage.getItem("login");
    if (!login) {
        navigate("/")
    }
}, []);
  return (
    <>
    <Component/>
    </>
  )
}

export default PrivateRouteLogin