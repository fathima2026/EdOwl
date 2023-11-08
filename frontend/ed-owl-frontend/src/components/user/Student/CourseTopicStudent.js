import React from 'react'
import Sidebar from '../Sidebar'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';

import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'
const CourseTopicStudent = () => {
 
  const[topicData, setTopicData]=useState([]);
  const[studentList, setStudentList]=useState([]);
  const[assignmentList, setAssignmentList]=useState([]);
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
      axios.get(baseUrl+'/module-assignment/'+module_id).then((response)=>{
 
       setAssignmentList(response.data); 
 
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

  return (
    <div className="row">
    <aside className='col-3'>
    <Sidebar/>
    </aside>
    
    <section className='col-8' style={{backgroundColor: '#eee'}}>
    <div className="container">
    <div className="row">

    <Tabs
      defaultActiveKey="home"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Home">
      {topicData.length==0 && <> <p className="py-4"style={{textAlign:'center'}}>You do not have any topics currently! Please add some topics!</p>
   
   </>}
   {topicData!=0 && <>
   
     {topicData.map((topic,index)=>
     
      <Card style={{ margin:'10px',width: '18rem' }}>
      <Card.Body>
       <Card.Title>{topic.title}</Card.Title>
       <Card.Link style={{ color:'green' }} as={Link} to={`/teacher/view-topic/`+topic.id}>View topic</Card.Link>
      </Card.Body>
     </Card>
     
     )}
        </>}

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

      <Tab eventKey="assignments" title="assignments">
      <div style={{overflowX:'hidden',overflowY:'auto',overflow:'auto',height:'600px'}}>
    

    {assignmentList.map((assignment,index)=>
         <Card  border="warning" style={{marginBottom:'20px'}}>
            <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{assignment.title}</Card.Subtitle>
        <Card.Text>
          {assignment.description}
        </Card.Text>
        <Card.Link as={Link} to={`/student/assignment/`+assignment.id} href="#">View Assignment</Card.Link>
      </Card.Body>
     
     

       </Card>
      

     )}
      </div>
      
        </Tab>

     </Tabs>

      </div>
    </div>
    
  </section>

  
  </div>)
}

export default CourseTopicStudent