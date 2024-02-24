import React from 'react';
import b from '../Images/wed1.jpg';
import './Wed.css'
import Wedding from './Wedding'
import { useNavigate } from 'react-router-dom';
const Wed = () => {
  const navigate=useNavigate();
  const Click = () =>
  {
    navigate('/book')
  }
  return (
    <>
      <div className="image-container">
        <img src={b} alt="Birthday Celebration"  height={600} width={300}/>
      </div>
      <center>
        <div className="content-container"><br></br>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/TEBtrcu6dOo?si=0HFcFlH53Fjwm5-J" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="460" height="280" src="https://www.youtube.com/embed/jLRXicRdNCQ?si=5fAXX2WhPErK89nt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><br></br><br></br>
          <h3>
          Embrace the magic of your special day with EventZen, your premier destination for exquisite wedding planning and execution. As a nationally recognized event planning and organizing company based in Mumbai, we bring dreams to life with meticulous attention to detail and unparalleled creativity. Our journey began with a mission to alleviate all wedding-related worries, offering comprehensive solutions under one roof. Specializing in wedding event management, we curate enchanting experiences that reflect your unique love story. From intimate ceremonies to grand celebrations, we orchestrate every aspect of your wedding with finesse and elegance. With a reputation for excellence, EventZen is the go-to choice for couples seeking flawless execution and unforgettable moments. Our commitment goes beyond mere organization; we strive to create cherished memories that last a lifetime. Introducing STAGE WORLD, our dedicated production house equipped with cutting-edge technology and seasoned professionals, ensuring seamless execution and unforgettable experiences. Trust us to transform your wedding dreams into reality, with sophistication, style, and unmatched expertise.
          </h3>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center>
          <Wedding/>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button class="book" onClick={Click}>BOOK NOW</button>
        </div>
      </center>
    </>
  );
}

export default Wed;
