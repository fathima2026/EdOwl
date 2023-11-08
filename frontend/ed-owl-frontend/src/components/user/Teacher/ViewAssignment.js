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
import Tabs from 'react-bootstrap/Tabs';
const baseUrl = 'http://127.0.0.1:8000/api'
const ViewAssignment = () => {

    const [assignmentData, setAssignmentData] = useState({
  
        title: '',
        description: '',
        file: '',
        image: '',
        total_mark:'',
        created_time:'',
        module:''
    
      });
      
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
        <Card.Subtitle style={{color:'green'}}className="mb-2">Date posted : {assignmentData.created_time}</Card.Subtitle>
        <Card.Subtitle className="mb-2">Total marks : {assignmentData.total_mark}</Card.Subtitle>

        <hr />
        <Card.Subtitle className="mb-2">Description : </Card.Subtitle>
        <Card.Text>{extension}</Card.Text>
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

export default ViewAssignment