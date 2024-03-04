
import React from 'react';
import b from '../Images/bgn.jpg';
import './Cop.css'; 
import BdaySlide from './Corprate';
import { useNavigate } from 'react-router-dom';
import Corporate from './Corprate';
import Footer from '../Footer/Footer';
import Book from '../Booking/Book';
import { useState } from 'react';
const Corp = () => {
  const [book,setBook]=useState(false);
  const Click = () =>
  {
      setBook(true)
  }
  return (
    <>
      <div className="image-container">
        <img src={b} alt="Birthday Celebration" style={{height:'50vh',width:'50vw',alignContent:'center'}}/>
      </div>
      <br/>
      <br/>
      <center>
          <div style={{backgroundColor:"rgb(60,50,60)",height:'40vh'}}><h3 className='h32'>
          Welcome to EventZen, a nationally recognized event planning and organizing company based in Coimbatore. We embarked on our journey with a mission to provide comprehensive solutions for all your event-related worries. EventZen specializes in corporate event management, BTL activation, and is highly recommended for conference event organizing and exhibition stall designing. As the premier Event Management Agency in Mumbai, EventZen prides itself on offering more than just event organizing services. We are thrilled to introduce STAGE WORLD, our complete production house equipped with the experience and capabilities to produce and manage exhibitions and events. Our in-house staging unit, fabrication, and designing workshop, along with audiovisual equipment and basic sound, serve as our greatest assets. EventZen ensures state-of-the-art equipment, technical staff, and experienced event support around the world.
          </h3></div>
        <div className="content-container"><br></br>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/TEBtrcu6dOo?si=0HFcFlH53Fjwm5-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/jLRXicRdNCQ?si=5fAXX2WhPErK89nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><br></br>
          </div><br></br>
          <br></br>
          <center>
          <Corporate/>
          </center>
          <br></br>
          <button className="book" onClick={Click}>BOOK NOW</button>
          <br></br>
          <br></br>
          {book &&
          <div>
            <Book/>
            </div>
          }
        
      </center>
      <Footer/>
    </>
  );
}

export default Corp;

