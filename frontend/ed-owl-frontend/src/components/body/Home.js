import React from 'react';
import "./Home.css"
import { useEffect } from 'react';
import Lottie from "lottie-react"
import animationData from "./animations/animation.json"
import registerData from "./animations/registeranimation.json"
import gamesData from "./animations/gamesanimation.json"
import notesData from "./animations/notesanimation.json"
import progressData from "./animations/progressanimation.json"
import leaderData from "./animations/leaderanimation.json"
import freegameData from "./animations/freegameanimations.json"
import {Link} from 'react-router-dom'

import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,MDBRow, MDBCol
} from 'mdb-react-ui-kit';
const Home = () => {

 useEffect(() => {
    document.title = 'Home'
    AOS.init();
 },[])
  return (
    <div className="">
        <div className="hero">
        <MDBRow>

            <MDBCol>  
                <div className='intro'>

                <h1>The HE digital learning companion app</h1>
                <p>Make your learning journey more interactive by using this game based learning app 
                        to engage with module specific formative tasks.<br/><br/> Ed Owl also enables you to check your learning progress 
                        and access supporting reading materials such as vlog, podcasts and more for your module!
                </p>

                <MDBBtn>Get Started</MDBBtn>
                <MDBBtn class="btn btn-danger">Video</MDBBtn>
                <MDBBtn class="btn btn-warning">Play Games!</MDBBtn>

                </div>      

                
            </MDBCol>
            <MDBCol >                
                <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'500px',marginTop:'50px'}} animationData={animationData}></Lottie>
            </MDBCol>

        </MDBRow>

        </div>
       

        <div className="home font"><section className="features-section">

<h1 data-aos="fade-zoom-in"  data-aos-duration="2000"  className="home-heading">Ed Owl Features</h1>

<p data-aos="fade-zoom-in"  data-aos-duration="2000" className="home-description">This app is designed to make blended learning both fun & engaging using games with additional built in features. </p> 
<ul className="features-list">
    
    <button className="features-element shadow small-scale">
        <div className="card-body" >
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={registerData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Getting started</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">Open your free account in seconds by clicking login within the applications navigation-bar and complete the sign-up forms.</p>
            <MDBBtn color='danger'>Sign Up</MDBBtn>      
        </div>
    </button>
    

 
    <button className="features-element shadow small-scale">
        <div className="card-body" >
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={gamesData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Games, learning and HE</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">Browse or participate in subject specific tasks at your own time.</p>
            <br /> <MDBBtn color='danger'>See Tasks</MDBBtn>          </div>
    </button>

   
    {/* <button className="features-element shadow small-scale">
        <div className="card-body">
            <img className="card-img-top features-image" src="Image/Icons/varied-formats.svg" alt="Extras" />
            <h2 className="feature-title">Varied formats</h2>
            <p className="feature-text">Extra resources such as: Vlogs, Podcasts, Video tutorials and reading articles curated by tutors & students. 
            <br /> Available from within "Extra" area.</p>
        </div>
    </button> */}

    {/* <button button className="features-element shadow small-scale">
        <div className="card-body">
            <img className="card-img-top features-image" src="Image/Icons/calendar-outline.svg" alt="Updates" />
            <h2 className="feature-title">Frequent updates</h2>
            <p className="feature-text">Get updates for new updates, content & features that are relevant to your supported modules. 
            <br /> Available within "Updates" of the applications navigation-bar</p>
        </div>
    </button> */}


    <button className="features-element shadow small-scale">
        <div className="card-body" >
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={freegameData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Play free 3D games</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">Click on the button to see 3D games that are completely free and not module specific</p>
            <MDBBtn color='danger'>See Board</MDBBtn>      
        </div>
    </button>
    <button className="features-element shadow small-scale">
        <div className="card-body" >
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={leaderData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Leadership Board</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">see your ranking in a game or a quiz by viweing the Leadership board</p>
            <MDBBtn color='danger'>See Board</MDBBtn>      
        </div>
    </button>

    <button className="features-element shadow small-scale" >
        <div className="card-body">
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={notesData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Notes</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">Allowing you to create & manage quick notes.
                <br /> Available within "Notes" of the applications navigation-bar</p>
                <MDBBtn color='danger'>Go to Notes</MDBBtn>      
        </div>
    </button>

    <button className="features-element shadow small-scale" >
        <div className="card-body">
        <Lottie data-aos="fade-up"  data-aos-duration="2000" style={{height:'250px'}} animationData={progressData}></Lottie>
            <h2 data-aos="fade-up"  data-aos-duration="2000" className="feature-title">Progression tracking</h2>
            <p data-aos="fade-up"  data-aos-duration="2000" className="feature-text">Paticipate in games, analyse attempts & review your statistics. 
            <br /> Available within "Dashboard" and "Profile" area.</p>
            <MDBBtn color='danger'>See Progress</MDBBtn>      
        </div>
    </button>

    {/* <button className="features-element shadow small-scale">
        <div className="card-body">
            <img className="card-img-top features-image" src="Image/Icons/qr-2.svg" alt="Profile" />
            <h2 className="feature-title">QR intergration</h2>
            <p className="feature-text">Download, share & access activities via our simple QR code intergration.
            <br /> Available within various activity areas when you click "QR Code".</p>
        </div>
    </button> */}
</ul>
</section></div>

        
    </div>
);
}

export default Home