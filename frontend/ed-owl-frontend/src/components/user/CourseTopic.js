import React from 'react'
import Sidebar from './Sidebar'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
const baseUrl = 'http://127.0.0.1:8000/api'
const Topics = () => {
 
  const[topicData, setTopicData]=useState([]);
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
    
    <section className='col-8' style={{backgroundColor: '#eee'}}>
    <div className="container py-5">
    <div className="row">

    {topicData.length==0 && <> <p className="py-4"style={{textAlign:'center'}}>You do not have any topics currently! Please add some topics!</p>
   
    </>}
    {topicData!=0 && <>
    
      {topicData.map((topic,index)=>
      
       <Card style={{ margin:'10px',width: '18rem' }}>
       <Card.Body>
        <Card.Title>{topic.title}</Card.Title>
        <Card.Link style={{ color:'green' }} as={Link} to={`/teacher/view-topic/`+topic.id}>View topic</Card.Link>
        <Button onClick={()=>handleDelete(topic.id)} style={{ color:'red' }}>Delete topic</Button>
       </Card.Body>
      </Card>
      
      )}
         

        
</>}

      </div>
    </div>
    
    <Button size="sm" style={{width:'30%', margin:'auto'}} as={Link} to={`/teacher/add-topic/`+module_id} variant="success">Add topics!</Button>{' '}

  </section>

  
  </div>)
}

export default Topics