import React from 'react'
import Sidebar from '../Sidebar'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

const baseUrl = 'http://127.0.0.1:8000/api'
const Topics = () => {
 
  const[topicData, setTopicData]=useState([]);
  const[studentList, setStudentList]=useState([]);
  const[totalResult, setTotalResult]=useState(0);
  const {module_id} = useParams()

  useEffect(() =>{ 

    try{
     axios.get(baseUrl+'/module-topic/'+module_id).then((response)=>{

      setTopicData(response.data); 
      setTotalResult(response.data.length); 

     });}
     catch(error){
      console.log(error)
     }

              
     try{

      axios.get(baseUrl+'/fetch-enroll-students/'+module_id).then((response)=>{
         setStudentList(response.data)
      })

     }catch(error){
      console.log(error)
     }
          


   },[]);

  const handleDelete = (topic_id) => {
   Swal.fire({
    title: 'Delete Topic',
    text: 'Are you sure you want to delete',
    icon: 'info',
    confirmButtonText: 'continue',
    showCancelButton: true
   }).then((result)=>{

    if(result.isConfirmed){

      try {
        
        axios.delete(baseUrl + '/topic/'+topic_id + '/')
        .then((res)=>{
          
          Swal.fire('success', 'Data deleted successfully');
         
          try{
            axios.get(baseUrl+'/module-topic/'+module_id).then((response)=>{
       
             setTopicData(response.data); 
             setTotalResult(response.data.length); 
       
            });}
            catch(error){
             console.log(error)
            }

   
        
        
        });
      }catch(error){
        Swal.fire('error', 'Error deleting')
      }
    }else{
      Swal.fire('error', 'Error deleting')
    }
   })
  }
  return (
    <div className="row">
    <aside className='col-3'>
    <Sidebar/>
    </aside>
    
    <section className='col-9' style={{backgroundColor: '#eee'}}>
   

    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
             <div className="container py-5">
      <div className="row">

    {topicData.length==0 && <> <p className="py-4"style={{textAlign:'center'}}>You do not have any topics currently! Please add some topics!</p>
   
    </>}
    {topicData!=0 && <>
    
      {topicData.map((topic,index)=>
      
       <Card style={{ }}>
       <Card.Body>
        <Card.Title>{topic.title}</Card.Title>
        <Card.Link style={{ color:'green' }} as={Link} to={`/teacher/view-topic/`+topic.id}>View topic</Card.Link>
        <Card.Link onClick={()=>handleDelete(topic.id)} style={{ color:'red' }}>Delete topic</Card.Link>
       </Card.Body>
      </Card>
      
      )}
         

        
</>}



      </div>
    </div>
    
    <Button size="sm" style={{width:'30%', margin:'auto'}} as={Link} to={`/teacher/add-topic/`+module_id} variant="success">Add topics!</Button>{' '}
      </Tab>
      <Tab eventKey="students" title="students">
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
      {studentList.map((student,index)=>
      
      <tr>
      <td>{student.id}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>{student.email}</td>
    </tr>
     
     )}
        
      </tbody>
    </Table>
      </Tab>
      <Tab eventKey="Assignments" title="Assignments">
       <p>Post an Assignment</p>
       <Button size="sm" style={{width:'30%', margin:'auto'}} as={Link} to={`/teacher/add-assignment/`+module_id} variant="success">Add Assignment!</Button>{' '}
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  </section>

  
  </div>)
}

export default Topics