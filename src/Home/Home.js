
import React, { useState } from 'react';
import corp from '../Images/corp.jpg';
import EventCard1 from './EventCard1';
import '../Home/Home.css';
import Footer from '../Footer/Footer';
import SlideShow from './SlideShow';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const Home = () => {
  const [l1, setL1] = useState(localStorage.getItem("logg") || "logout");
  useEffect(() => {
    setL1(localStorage.getItem("logg") || "logout");
  }, []); 

  const navigate=useNavigate();
  const Click = () =>
  {
    navigate('/signup')
  }
  return (
    <div>
    <div className="container">
      <div>
        <center>
          <h1 style={{color:'white'}}>Welcome to EventZen  </h1>
          <br/>
          <SlideShow />
          <br/>
          <br/>
          <h1 style={{ color: 'white' }}>Transforming Your Vision into Unforgettable Moments. <br /> Where Every Celebration Finds Perfect Harmony</h1>
          <br />
          <br />
          
          <div style={{backgroundColor:"rgba(4,37,93)" }}>
            <br></br>
            <p style={{fontSize:'30px',color:'white',textAlign:'center'}}>End-to-end event planning</p>
          <div style={{ display: 'flex',alignItems: 'center',backgroundColor:"rgb(6,38,95)" }}>
            <br></br>
            <img src={corp}  style={{paddingLeft:'60px', width: '100%', maxWidth: '500px' }} alt="Corporate Event"></img>
            <p style={{  textAlign: 'center', padding: '20px', maxWidth: '800px', margin: 'auto', color: 'white',fontSize:20 }}>
              "EventZen believes in the power of moments. We understand that behind every gathering, celebration, or conference lies a unique story waiting to unfold. With meticulous planning, creative vision, and unwavering dedication, we craft experiences that resonate long after the final guest departs. From intimate affairs to grand galas, our passion is to orchestrate seamless events that leave a lasting impression. Let us turn your dreams into reality, as we navigate every detail with precision and flair. Together, we'll create unforgettable memories that stand the test of time."
            </p>
          </div>
          <p style={{ color: 'white', fontSize: 'clamp(18px, 3vw, 25px)' }}>100+ successful events and countless memories made</p>
          <br></br>
          </div>
          <br></br>
          <br></br>
          {l1 === "logout" &&
            <div>
          <p style={{textAlign:'center',color:'whitesmoke',fontSize:30}}>Ready to manage your events smarter, better?
          </p>
          <button onClick={Click}className='button3'>Get Started</button>
          </div>
            }
          <br></br>
          <br></br>
          <h1 style={{color:'white'}}>Our Services</h1>
        <div className="ab">
          <span >
            <EventCard1/>
          </span>
        </div>
        <br></br>
        <br></br>
        </center>
        
      </div>
    </div>
      <Footer/>
      </div>
  )
}

export default Home;

