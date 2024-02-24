<<<<<<< HEAD
import React from 'react';
import b from '../Images/bgn.jpg';
import './Cop.css'; 
import BdaySlide from './Corprate';
import { useNavigate } from 'react-router-dom';
import Corporate from './Corprate';
const Corp = () => {
  const navigate=useNavigate();
  const Click = () =>
  {
    navigate('/book')
  }
  return (
    <>
      <div className="image-container">
        <img src={b} alt="Birthday Celebration" width={1080} height={800} />
      </div>
      <center>
        <div className="content-container"><br></br>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/TEBtrcu6dOo?si=0HFcFlH53Fjwm5-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/jLRXicRdNCQ?si=5fAXX2WhPErK89nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><br></br>
          <h3>
          Welcome to EventZen, a nationally recognized event planning and organizing company based in Coimbatore. We embarked on our journey with a mission to provide comprehensive solutions for all your event-related worries. EventZen specializes in corporate event management, BTL activation, and is highly recommended for conference event organizing and exhibition stall designing. As the premier Event Management Agency in Mumbai, EventZen prides itself on offering more than just event organizing services. We are thrilled to introduce STAGE WORLD, our complete production house equipped with the experience and capabilities to produce and manage exhibitions and events. Our in-house staging unit, fabrication, and designing workshop, along with audiovisual equipment and basic sound, serve as our greatest assets. EventZen ensures state-of-the-art equipment, technical staff, and experienced event support around the world.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center>
          <Corporate/>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="book" onClick={Click}>BOOK NOW</button>
        </div>
      </center>
    </>
  );
}

export default Corp;
=======
import React from 'react';
import b from '../Images/bgn.jpg';
import './Cop.css'; 
import BdaySlide from './Corprate';
import { useNavigate } from 'react-router-dom';
import Corporate from './Corprate';
const Corp = () => {
  const navigate=useNavigate();
  const Click = () =>
  {
    navigate('/book')
  }
  return (
    <>
      <div className="image-container">
        <img src={b} alt="Birthday Celebration" width={1080} height={800} />
      </div>
      <center>
        <div className="content-container"><br></br>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/TEBtrcu6dOo?si=0HFcFlH53Fjwm5-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/jLRXicRdNCQ?si=5fAXX2WhPErK89nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><br></br>
          <h3>
          Welcome to EventZen, a nationally recognized event planning and organizing company based in Coimbatore. We embarked on our journey with a mission to provide comprehensive solutions for all your event-related worries. EventZen specializes in corporate event management, BTL activation, and is highly recommended for conference event organizing and exhibition stall designing. As the premier Event Management Agency in Mumbai, EventZen prides itself on offering more than just event organizing services. We are thrilled to introduce STAGE WORLD, our complete production house equipped with the experience and capabilities to produce and manage exhibitions and events. Our in-house staging unit, fabrication, and designing workshop, along with audiovisual equipment and basic sound, serve as our greatest assets. EventZen ensures state-of-the-art equipment, technical staff, and experienced event support around the world.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center>
          <Corporate/>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="book" onClick={Click}>BOOK NOW</button>
        </div>
      </center>
    </>
  );
}

export default Corp;
>>>>>>> 3d42d72 (updated)
