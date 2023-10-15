import React from 'react'
// import {MyCourses,AddCourse,AddTopic,Topics,EditTopic,TopicDetail,EditCourse} from './user/Teacher'
import Navigation from './header/Navigation'
import Home from './body/Home'
import FooterComponent from './footer/FooterComponent'
import{Routes, Route} from 'react-router-dom'
import Login from './user/user-login'
import Register from './user/user-register'
import Dashboard from './user/user-dashboard'
import StudentLogout from './user/StudentLogout'
import MyCourses from './user/Teacher/MyCourses'
import AddCourse from './user/Teacher/AddCourse'
import AddTopic from './user/Teacher/AddTopic'
import Topics from './user/Teacher/CourseTopic'
import EditTopic from './user/Teacher/EditTopic'
import TopicDetail from './user/Teacher/TopicDetail'
import EditCourse from './user/Teacher/EditModule'
import LayoutComponent from './LayoutComponent'
import RequireAuth from './user/RequireAuth'
import LoginChoice from './user/LoginChoice'
import Unauthorized from './user/Unauthorized'
const Main = () => {
  return (

    <div className="App">
        <Navigation/>
        <Routes>
        
        <Route path = "/" element={<LayoutComponent/>}>
       
        {/* public routes */}
        <Route path ="" element = {<Home/>}/>
        
        <Route path = "login/:role" element={<Login/>}/>
        
        <Route path = "role" element={<LoginChoice/>}/>
        
        <Route path = "register" element={<Register/>}/>

        <Route path='unauthorized' element={<Unauthorized/>}></Route>



        {/* Protect routes */}

        <Route element = {<RequireAuth allowedRoles={["student"]}/>} >
        <Route path = "/dashboard" element={<Dashboard/>}/>

        </Route>
        <Route element = {<RequireAuth allowedRoles={["teacher"]}/>} >

        
        <Route path = "teacher/edit-module/:module_id" element={<EditCourse/>}/>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/student-logout" element={<StudentLogout/>}/>
        <Route path = "teacher/courses" element={<MyCourses/>}/>
        <Route path = "/teacher/add-course" element={<AddCourse/>}/>
        <Route path = "/teacher/add-topic/:module_id" element={<AddTopic/>}/>
        <Route path = "/teacher/topic/:module_id" element={<Topics/>}/>
        <Route path = "/teacher/edit-topic/:topic_id" element={<EditTopic/>}/>
        <Route path = "/teacher/view-topic/:topic_id" element={<TopicDetail/>}/>
        <Route path = "/teacher/edit-module/:module_id" element={<EditCourse/>}/>
        </Route>
        {/* catch all */}
        <Route path="*"/>

        </Route>
   
        </Routes>
        <FooterComponent/>
    </div>
  )
   
    
}

export default Main