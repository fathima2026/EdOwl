import React from 'react'
import { Leaderboard } from 'flywheel-leaderboard'
import "./LeaderBoard.css"
import { useParams } from 'react-router-dom';
import {useState,useEffect} from 'react'
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api'

// const data = [
  
// ]
const LeaderBoard = () => {

  const {assignment_id} = useParams();

  const [data, setData] = useState({});

  useEffect(() =>{ 
          
    try{
     axios.get(baseUrl+'/hangman-rank/'+1).then((response)=>{

      setData( 
          
           response.data
          
      ); 
      console.log(data.data)
     });}
     catch(error){
      console.log(error)
     } },[])

  return (
   <div style={{backgroundColor:'white', margin:'100px',width:'70%',marginLeft:'200px', height:'auto',overflowY:'auto'}}>
  {data && data.data ? (
        <Leaderboard
          className='max-w-4xl'
          scoringMetric="points"
          id="first_name"
          cell1="last_name"
          cell2="email"
          cell3="points"
          items={data.data}
        >
        </Leaderboard>
      ) : (
        <p>Loading...</p>
      )}
 </div> 
  
  )
}

export default LeaderBoard