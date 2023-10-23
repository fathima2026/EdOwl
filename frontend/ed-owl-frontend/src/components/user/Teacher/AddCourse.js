import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from '../Sidebar';
import axios from 'axios';
import {useState} from 'react'
const baseUrl = 'http://127.0.0.1:8000/api/module/'

const AddCourse = () => {
  const [moduleData, setModuleData] = useState({

    title: '',
    description: '',
    teacher: '',
    code:'',

  });

  const handleChange=(event) => {
    console.log(event.target.name,event.target.value)
    setModuleData({
      ...moduleData,
      [event.target.name]:event.target.value
    })
  }

  const submitForm=(event) => {
    const moduleFormData = new FormData();
    let code = (Math.random() + 1).toString(36).substring(7);

    moduleFormData.append("title", moduleData.title)
    moduleFormData.append("description", moduleData.description)
    moduleFormData.append("teacher", 1)
    moduleFormData.append("code", code)

    event.preventDefault()
    
    try{
    axios.post(baseUrl,moduleFormData).then((response)=>{
      
      console.log(response.data)
      event.preventDefault()

      setModuleData({

        title: '',
        description: '',
        teacher: '',
        code:'',
        status:'success'
  

    });
    }) }catch(e){
     console.log(e);
     setModuleData({status:'e'})
    }
  }
  return (
    <div className="row">
    <aside className='col-3'>
    <Sidebar/>
    </aside>
    <section className='py-10 col-8 m-3' style={{backgroundColor: '#eee', borderRadius:'5px'}}>
    <Form className="py-4"  style={{width:'50%', margin:'auto'}}>
      <Form.Group className="mb-3">
        <Form.Label>Module Title</Form.Label>
        <Form.Control onChange={handleChange} value={moduleData.title} type="text" placeholder="Enter Module Name" name="title"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={handleChange} value={moduleData.description} type="text" placeholder="description" name="description"/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>code</Form.Label>
        <Form.Control onChange={handleChange} value={moduleData.code} type="text" placeholder="code" name="code"/>
      </Form.Group>
      <Button onClick={submitForm} variant="primary" type="submit">
        Add
      </Button>
    </Form>
    </section>
    </div>
    
  )
}

export default AddCourse