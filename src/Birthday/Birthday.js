
import React from 'react';
import b from '../Images/b1.jpg';
import './Birthday.css'; // Import the CSS file
import BdaySlide from './BdaySlide';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Book from '../Booking/Book';
import b1 from "../Images/birthday invitation.webp"
import b4 from "../Images/b3.jpg"
import InvitationDesigner from './InvitationDesigner';
const Birthday = () => {
  const navigate=useNavigate();
  const [book,setBook]=useState(false);
  const Click = () =>
  {
      setBook(true)
  }
  const Clickinvite = () =>
  {
    navigate("/birthinvite")
  }
  return (
    <>
      <div class='birthdaybox'>
      
        
          <p class='para'>
                Celebrating a milestone of success, our event management company takes great pride in the countless memorable
            birthdays we've orchestrated with precision and flair. From intimate gatherings to
            grand celebrations, our team has seamlessly woven dreams into reality, ensuring that every birthday is a
            unique and joyous occasion. As we reflect on the numerous events we've brought to life, we're not just tallying
            numbers; we're measuring the laughter, the shared moments, and the delighted smiles that have marked our journey.
            Cheers to the past and the countless more birthdays to come!
          </p>
        <img src={b}  alt="Birthday Celebration" />
          </div>
          <center>
          <p style={{color:'white',fontSize:20}}>Lets Make this as one of the memorable birthdays with us</p>
          <br></br>
          <button className="book" onClick={Click}>BOOK NOW</button>
          {book &&
          <div>
            <Book/>
            <br></br>
            </div>
          }
          </center>
          <div>
          <br></br>
          <br></br>
          <div className='birthdaybox'>
          <img src={b1}></img>
          <p class='para' style={{marginTop:'150px'}}>"Design and download unique invitations with ease, adding a touch of creativity to your event planning process."</p>
          </div>
          <br></br>
          <br></br>
          <center>
          <button className="book" onClick={Clickinvite}>CREATE ONE</button>
          </center>
          <br></br>
          <br></br>
          <center>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          </center>
        </div>
        <Footer/>
    </>
  );
}

export default Birthday;

