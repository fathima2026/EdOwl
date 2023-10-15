import React from 'react'

const StudentLogout = () => {
  
    localStorage.removeItem('studentLoginStatus')
    
    window.location.href = ''
   
  
    return (
    <div>StudentLogout</div>
  )
}

export default StudentLogout