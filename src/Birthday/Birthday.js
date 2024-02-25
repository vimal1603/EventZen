
import React from 'react';
import b from '../Images/b1.jpg';
import './Birthday.css'; // Import the CSS file
import BdaySlide from './BdaySlide';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Book from '../Booking/Book';
const Birthday = () => {
  const [book,setBook]=useState(false);
  const Click = () =>
  {
      setBook(true)
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
          <button class='button2'>GET STARTED</button>
          </center>
          <div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <center>
          
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <button className="book" onClick={Click}>BOOK NOW</button>
          </center>
          {book &&
          <div>
            <Book/>
            <br></br>
            </div>
          }
        </div>
        <Footer/>
    </>
  );
}

export default Birthday;

