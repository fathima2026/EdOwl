import React from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Viewer from './Viewer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Sidebar from '../Sidebar';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import {useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const baseUrl = 'http://127.0.0.1:8000/api'
const ViewAssignment = () => {

    const [assignmentData, setAssignmentData] = useState({
  
        title: '',
        description: '',
        file: '',
        image: '',
        total_mark:'',
        created_time:'',
        created_date:'',
        module:''
    
      });

      const [submissionsData, setSubmissionsData] = useState([])

      const [updateSubmissionsData, setUpdateSubmissionsData] = useState({
        
        assignment:'',
        student:'',
        file:'',
        marks: '',
        remarks:''

      })
      
        const {assignment_id} = useParams();

        useEffect(() =>{ 

          try{
           
            axios.get(baseUrl+'/assignment-submissions/'+assignment_id).then((response)=>{

                      setSubmissionsData(response.data);


            })


          }catch{



          }
      
          try{
           axios.get(baseUrl+'/teacher-assignment-detail/'+assignment_id).then((response)=>{

            let d = new Date(response.data.created_date)
            let date = d.toLocaleDateString();
            let t = new Date(response.data.created_time);
            const time = new Date(response.data.created_time).toLocaleTimeString('en',
                 { timeStyle: 'short', hour12: false, timeZone: 'UTC' })
            setAssignmentData( 
                {
                 title: response.data.title,
                 description: response.data.description,
                 file: response.data.file,
                 image:response.data.image,
                 total_mark:response.data.total_mark,
                 created_time:time,
                 created_date:date,
                 module:response.data.module
                }

            ); 

           });}
           catch(error){
            console.log(error)
           }
      
         },[]);
         const fname = assignmentData.file
         const extension = fname.slice((fname.lastIndexOf(".") - 1 >>> 0) + 2);

         const docs = [

          { uri: assignmentData.image,
           }, 
           {
            uri: assignmentData.file,
            fileType: extension
           }// Local File
       
        ];

  const handleGrade=(submission_id)=>{

    
    try{
      axios.get(baseUrl+'/submissions/'+submission_id).then((response)=>{
    
        setUpdateSubmissionsData( 
            {
              assignment:response.data.assignment,
              student:response.data.student,
              file:response.data.file,
              marks: response.data.marks,
              remarks:response.data.remarks
            }
        ); 
  
       });}
       catch(error){
        console.log(error)
       }


  }

      
  return (
    <div className='row' style={{height:'auto'}}>
    <aside className='col-3'>
    <Sidebar/>
    </aside>
    <section className='col-8' style={{backgroundColor: '#eee'}}>
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
      <Tab eventKey="home" title="Assignment Detail">
       <section style={{textAlign:'left'}}>
          <Card style={{ height: 'auto' }}>
           <Card.Body>
          <Card.Title>Title: {assignmentData.title}</Card.Title>
          <hr />
        <Card.Subtitle style={{color:'green'}}className="mb-2">Date and Time posted : {assignmentData.created_date}, {assignmentData.created_time}</Card.Subtitle>
        
        <Card.Subtitle className="mb-2">Total marks : {assignmentData.total_mark}</Card.Subtitle>

        <hr />
        <Card.Subtitle className="mb-2">Description : </Card.Subtitle>
        <Card.Text>
         {assignmentData.description}
        </Card.Text>
        <hr />
        <Card.Text>
        Download fies : <br />
        {assignmentData.image && <>
        <a href={assignmentData.image} target='_blank'>Download Attached Image</a>
        </>} <br />
        {assignmentData.file && <>
        <a href={assignmentData.file} target='_blank'>Download Attached File</a>
        </>}
        </Card.Text>
      </Card.Body>
   
    </Card>

     <DocViewer documents={docs} style={{width: 800, height: 700, margin: 'auto'}} pluginRenderers={DocViewerRenderers} />;

     {/* <div>Files <img src={assignmentData.image} alt="" /></div> */}

       </section>
      </Tab>
     
     
      <Tab eventKey="Submissions" title="Submissions">
      {submissionsData.map((submission,index)=> 

         <Card border="success" style={{  }}>
           
           <Row>
               <Col md="3">
                <img width="280px"src="/image/baselogo.svg" alt="" />
               </Col>
               <Col>
                 <Card.Body style={{textAlign:'left'}}>
                      <Card.Title style={{display:'block'}}>{submission.assignment.title}<span style={{float:'right'}} ><button id="submit-assignment" onClick={handleGrade(submission.id)} style={{borderRadius:'5px',backgroundColor:'4BB543'}}>Grade</button></span></Card.Title>
                      <hr />
                      <Card.Text><b>Assignment : </b><a href={submission.file} target='_blank'>Download Attached File</a></Card.Text>

                      <Card.Text><b>Submission date : </b>{submission.completed_date}</Card.Text>
                      <Card.Text><b>Submission time : </b>{submission.completed_time}</Card.Text>
                      <Card.Text><b>Submitted by : </b>{submission.student.email}</Card.Text>
                      <Card.Text><b>Student name : </b> {submission.student.first_name} {submission.student.last_name}</Card.Text>

                </Card.Body>
                </Col>
            </Row>
         
         </Card>
      
                
         )}
         <hr/>
      </Tab>



      <Tab eventKey="Pending" title="Pending" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
    </section>

    </div>
   )
}

export default ViewAssignment