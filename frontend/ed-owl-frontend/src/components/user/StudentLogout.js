import React from 'react'
import { useLocation, Navigate, Outlet } from "react-router-dom";

const StudentLogout = () => {
  
    localStorage.removeItem('studentLoginStatus')
       
    window.location.href= '/role'
 
}

export default StudentLogout