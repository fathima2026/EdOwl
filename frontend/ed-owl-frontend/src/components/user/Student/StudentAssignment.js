import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from '../Sidebar';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const baseUrl = 'http://127.0.0.1:8000/api'
const StudentAssignment = () => {
        
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);

        const student_id = localStorage.getItem('id')
        const [assignmentSubmissionData, setAssignmentSubmissionData] = useState({
  
            assignment: '',
            student: '',
            file: '',
        
          });

          const [assignmentData, setAssignmentData] = useState({
           
            title: '',
            description: '',
            file: '',
            image:'',
            total_mark:'',
            created_time:'',
            module:''
        
          });

          
        const handleFileChange=(event) => {
          console.log(event.target.name,event.target.value)
          setAssignmentSubmissionData({
            ...assignmentSubmissionData,
            [event.target.name]:event.target.files[0]
          })
        }

        const handleClose = (event) => {          
        
          setShow(false);
      
          if(assignmentSubmissionData.file){
          
            try{
              axios.get(baseUrl+'/fetch-submission-status/'+student_id+'/'+assignment_id).then((response)=>{
                
                if(response.data.bool){
                  console.log(response.data.bool);
                  alert("You have already submitted this assignment");
                }else{
        
                  const assignmentSubmitFormData = new FormData();
        
                  assignmentSubmitFormData.append("assignment", assignment_id)
                  assignmentSubmitFormData.append("student", student_id);
                  assignmentSubmitFormData.append("file",assignmentSubmissionData.file,assignmentSubmissionData.file.name);
                 
                  try{
                    axios.post(baseUrl+'/submit-assignment/',assignmentSubmitFormData).then((response)=>{
                      console.log(response)
                      Swal.fire({
                    
                        title: 'Submitted Successfully',
                        icon: 'success',
                        toast:true,
                        timer:3000,
                        timerProgressBar: true,
                        showConfirmButton: false
                
                       })
                    })}
                    catch(error){
                      console.log(error)
                    }}
                })
            }catch(error){
               console.log(error)
            }
             
           
        
          }     
          else{
            
              alert("Submit the file")
          
          }
        
          }
     
      
      
          
            const {assignment_id} = useParams();
          
            useEffect(() =>{ 
          
              try{
               axios.get(baseUrl+'/teacher-assignment-detail/'+assignment_id).then((response)=>{
          
                setAssignmentData( 
                    {
                     title: response.data.title,
                     description: response.data.description,
                     file: response.data.file,
                     image:response.data.image,
                     total_mark:response.data.total_mark,
                     created_time:response.data.created_time,
                     module:response.data.module
                    }
                ); 
          
               });}
               catch(error){
                console.log(error)
               }
          
             },[]);
    
    
      return (
        <div className='row' style={{height:'800px'}}>
        <aside className='col-3'>
        <Sidebar/>
        </aside>
        <section className='col-8' style={{backgroundColor: '#eee',height:'800px'}}>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Assignment Detail">
           <section style={{textAlign:'left'}}>
              <Card style={{ height: '350px' }}>
               <Card.Body>
              <Card.Title style={{display:'block'}}>Title: {assignmentData.title} <span style={{float:'right'}}><button onClick={handleShow} id="submit-assignment"style={{borderRadius:'5px',backgroundColor:'#FFDA33'}}>Submit now</button></span></Card.Title>
              <hr />
            <Card.Subtitle style={{color:'green'}}className="mb-2">Date posted : {assignmentData.created_time}</Card.Subtitle>
            <Card.Subtitle className="mb-2">Total marks : {assignmentData.total_mark}</Card.Subtitle>
    
            <hr />
            <Card.Subtitle className="mb-2">Description : </Card.Subtitle>
    
            <Card.Text>
             {assignmentData.description}
            </Card.Text>
                    
            <hr />
                    
         

          </Card.Body>
        </Card>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3">
          <Form.Label>Document</Form.Label>
          <Form.Control onChange={handleFileChange} type="file" placeholder="Upload Document" name="file"/>
          </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button size="sm" style={{width:'30%', margin:'auto'}} variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button size="sm" style={{width:'30%', margin:'auto'}} variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        

         {/* <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} />; */}
    
           </section>
          </Tab>
          <Tab eventKey="Submissions" title="Submissions">
            Tab content for Profile
          </Tab>
          <Tab eventKey="Pending" title="Pending" disabled>
            Tab content for Contact
          </Tab>
        </Tabs>
        </section>
    
        </div>
       )
}

export default StudentAssignment