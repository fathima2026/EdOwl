import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Sidebar from '../Sidebar'
import {Button} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import {Link, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'

const HangmanDashboard = () => {
    function handleClick(e) {
        console.log(e);   
    }

return (
    <>
    <div className="row" style={{marginBottom:'20px'}}>
    <aside className='col-3'>
    <Sidebar/>
    </aside>
    
    <section className='col-8' style={{backgroundColor: '#eee'}}>
   

    <Tabs defaultActiveKey="home" id="justify-tab-example" className="mb-3" justify onSelect={(e) => handleClick(e)}>
      <Tab eventKey="home" title="Set Hangman quiz" >



      </Tab>
      <Tab eventKey="list" title="Hangman Quizes">

      </Tab>
      <Tab eventKey="submissions" title="submissions">

      </Tab>
      <Tab eventKey="leadership" title="leadership board">

     </Tab>
    </Tabs> 
    
    </section>
    
    </div>
    </>
  )
}

export default HangmanDashboard