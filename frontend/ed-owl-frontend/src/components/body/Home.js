import React from 'react';
import "./Home.css"
import { useEffect } from 'react';
const Home = () => {

 useEffect(() => {
    document.title = 'Home'
 })
  return (
    <div className="home font">
        <section className="hero-section">
            <img className="edowl-logo shadow small-scale" src="/Image/baselogo.svg" alt="" />

            <div className="text">
                <div className="home-heading">
                    <h1>Ed <span /> Owl<br />The HE digital learning companion app</h1>
                </div>
                <div className="home-description">
                    <p>Make your learning journey more interactive by using this game based learning app 
                        to engage with module specific formative tasks.<br/><br/> Ed Owl also enables you to check your learning progress 
                        and access supporting reading materials such as vlog, podcasts and more for your module!
                    </p>
                </div>
                <br />
                <a href="https://youtu.be/N9efMxDuADI" className="btn btn-red shadow">Video</a>
                <button href="/AboutUs" className="btn btn-info shadow" variant="warning">More Information</button>
                <a href="https://forms.gle/PtLd3raF7q2WpnAH7" className="btn btn-dark shadow">Survey</a>
                <br/>
                {/* <QRGenerator url={window.location.href}/> */}
            </div>
        </section>

        <section className="features-section">

            <h1 className="home-heading">Ed Owl Features</h1>

            <p className="home-description">This app is designed to make blended learning both fun & engaging using games with additional built in features. </p> 
            <ul className="features-list">
                
                <button className="features-element shadow small-scale">
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/university-hat.svg" alt="Login Register" />
                        <h2 className="feature-title">Getting started</h2>
                        <p className="feature-text">Open your account in seconds by clicking login within the applications navigation-bar and complete the sign-up forms.</p>
                    </div>
                </button>

                <button className="features-element shadow small-scale" >
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/ven-diagram.svg" alt="Dashboard" />
                        <h2 className="feature-title">Games, learning and HE</h2>
                        <p className="feature-text">Browse or participate in subject specific tasks at your own time.
                        <br /> Available within "Dashboard" area.</p>
                    </div>
                </button>

                <button className="features-element shadow small-scale">
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/varied-formats.svg" alt="Extras" />
                        <h2 className="feature-title">Varied formats</h2>
                        <p className="feature-text">Extra resources such as: Vlogs, Podcasts, Video tutorials and reading articles curated by tutors & students. 
                        <br /> Available from within "Extra" area.</p>
                    </div>
                </button>

                <button button className="features-element shadow small-scale">
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/calendar-outline.svg" alt="Updates" />
                        <h2 className="feature-title">Frequent updates</h2>
                        <p className="feature-text">Get updates for new updates, content & features that are relevant to your supported modules. 
                        <br /> Available within "Updates" of the applications navigation-bar</p>
                    </div>
                </button>

                <button className="features-element shadow small-scale" >
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/notes.svg" alt="Notes" />
                        <h2 className="feature-title">Notes</h2>
                        <p className="feature-text">Allowing you to create & manage quick notes.
                            <br /> Available within "Notes" of the applications navigation-bar</p>
                    </div>
                </button>

                <button className="features-element shadow small-scale" >
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/progression-tracking.svg" alt="Profile" />
                        <h2 className="feature-title">Progression tracking</h2>
                        <p className="feature-text">Paticipate in games, analyse attempts & review your statistics. 
                        <br /> Available within "Dashboard" and "Profile" area.</p>
                    </div>
                </button>

                <button className="features-element shadow small-scale">
                    <div className="card-body">
                        <img className="card-img-top features-image" src="Image/Icons/qr-2.svg" alt="Profile" />
                        <h2 className="feature-title">QR intergration</h2>
                        <p className="feature-text">Download, share & access activities via our simple QR code intergration.
                        <br /> Available within various activity areas when you click "QR Code".</p>
                    </div>
                </button>
            </ul>
        </section>
    </div>
);
}

export default Home