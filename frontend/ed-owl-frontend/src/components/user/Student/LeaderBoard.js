import React from 'react'
import { Leaderboard } from 'flywheel-leaderboard'
import "./LeaderBoard.css"
const data = [
  {
    name: 'dylan',
    twitter_handle: '@dxlantxch',
    github_username: '@dylanintech',
    users: 40,
    twitter_followers: 1055,
    github_stars: 5,
  },
  {
    name: 'arib',
    twitter_handle: '@aribk24',
    github_username: '@Aribk7',
    users: 105000,
    twitter_followers: 4949,
    github_stars: 4,
  },
  {
    name: 'aleem',
    twitter_handle: '@aleemrehmtulla',
    github_username: '@aleemrehmtulla',
    users: 50000,
    twitter_followers: 4107,
    github_stars: 200,
  },
  {
    name: 'rochan',
    twitter_handle: '@0xSxlty',
    github_username: '@0xSxlty',
    users: 40000,
    twitter_followers: 2226,
    github_stars: 4,
  },
  {
    name: 'aleem',
    twitter_handle: '@aleemrehmtulla',
    github_username: '@aleemrehmtulla',
    users: 50000,
    twitter_followers: 4107,
    github_stars: 200,
  },
  {
    name: 'rochan',
    twitter_handle: '@0xSxlty',
    github_username: '@0xSxlty',
    users: 40000,
    twitter_followers: 2226,
    github_stars: 4,
  },
  {
    name: 'aleem',
    twitter_handle: '@aleemrehmtulla',
    github_username: '@aleemrehmtulla',
    users: 50000,
    twitter_followers: 4107,
    github_stars: 200,
  },
  {
    name: 'rochan',
    twitter_handle: '@0xSxlty',
    github_username: '@0xSxlty',
    users: 40000,
    twitter_followers: 2226,
    github_stars: 4,
  }
]
const LeaderBoard = () => {

    
  return (
   <div style={{backgroundColor:'white', margin:'100px',width:'70%',marginLeft:'200px', height:'600px',overflowY:'auto'}}>
    <Leaderboard 
   className='max-w-4xl' //tailwind class (optional)
   scoringMetric="users" //the property you wanna rank your data by (required)
   id="name" //the property you wanna id each item in your data by (required)
   cell1="twitter_handle" //the first cell for your board (optional)
   cell2="github_username" //...
   cell3="users" //...
   cell4="twitter_followers" //...
   cell5="github_stars" //...
   items={data} //the data you wanna use for your board. e.g. db response. (required)
   > 
 </Leaderboard>
 </div> 
   
  )
}

export default LeaderBoard