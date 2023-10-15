import React from 'react'
import { MDBContainer} from 'mdb-react-ui-kit'
import { Link } from 'react-router-dom'
import {Button} from 'react-bootstrap'

const LoginChoice = () => {

  const handleSubmit = () => {

  }
  const student = "student"
  const teacher = "teacher"
  return (
    <div className='container' style={{background:'white',width:'50%',height:'500px',marginTop:'50px'}}>

     <div className='row justify-content-center' style={{paddingTop:'180px'}}>
      <div className='col'> 
        <Button as={Link} to={`/login/`+student} className='me-1' color='success' >
        STUDENT
        </Button>
      </div>
      <div className='col'>
      <Button as={Link} to={`/login/`+teacher} className='me-1' color='danger'>
        TEACHER
      </Button>
      <img src="/Image/teacher.png" style={{height:'150px',display:'block',margin:'auto'}}alt="Diccionario Png - Personalised 'owl' Teacher Card@pngkey.com"></img>

      </div>
    

     </div>
  


    </div>
  )
}

export default LoginChoice