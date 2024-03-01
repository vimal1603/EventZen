
import React from 'react';
import b from '../Images/wed1.jpg';
import './Wed.css'
import Wedding from './Wedding'
import { useNavigate } from 'react-router-dom';
import { FoodBank } from '@mui/icons-material';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import Book from '../Booking/Book';
import w1 from "../Images/w1.jpg"
import w2 from "../Images/w2.jpeg"
import w3 from "../Images/w3.webp"
import w5 from "../Images/w5.webp"
const Wed = () => {
  const [book,setBook]=useState(false);
  const navigate=useNavigate();
  const Click = () =>
  {
      setBook(true)
  }
  const Invite = () =>
  {
    navigate("/invitation");
  }
  const featuredWeddings = [
    { id: 1,img:w2, title: "Vintage Wedding ", date: "June 15, 2023", location: "Pune" },
    { id: 2,img:w1, title: "Rustic Wedding", date: "July 28, 2023", location: "Telengana" },
    { id: 3,img:w3, title: "Elegant Garden Wedding", date: "September 10, 2023", location: "Cochin" }
  ];
  return (
    <div style={{color:'whitesmoke'}}>
      <center>
      <div className="image-containerw">
        <img src={b} alt="Birthday Celebration" style={{height:'70vh',width:'70vw'}}/>
          <h3 class='h31'>
          Embrace the magic of your special day with EventZen, your premier destination for exquisite wedding planning and execution. As a nationally recognized event planning and organizing company based in Mumbai, we bring dreams to life with meticulous attention to detail and unparalleled creativity. Our journey began with a mission to alleviate all wedding-related worries, offering comprehensive solutions under one roof. Specializing in wedding event management, we curate enchanting experiences that reflect your unique love story. From intimate ceremonies to grand celebrations, we orchestrate every aspect of your wedding with finesse and elegance. With a reputation for excellence, EventZen is the go-to choice for couples seeking flawless execution and unforgettable moments. Our commitment goes beyond mere organization; we strive to create cherished memories that last a lifetime.
          </h3>
      </div>

          <button class="book" onClick={Click}>BOOK NOW</button>
          <br></br>
          {book &&
          <div>
            <Book/>
            <br></br>
            </div>
          }
        <br></br>
        <div className='birthdaybox'>
          <img src={w5}></img>
          <p class='para' style={{marginTop:'150px'}}>"Design and download unique invitations with ease, adding a touch of creativity to your event planning process."</p>
          </div>
          <br></br>
          <button className="book" onClick={Invite}>CREATE ONE</button>
          <br></br>
          <br></br>
      <div style={{padding:'5vh'}}>
        <Wedding/>
      </div>
      <br/>
      <br/>
      <h2>Our Services</h2>
      <div style={{display:'flex',padding:'5px',color:'whitesmoke',paddingLeft:'25%'}}>
      <ul >
        <li>Consultation and Planning</li>
        <li>Venue Selection</li>
        <li>Decoration</li>
      </ul>
      <ul>
        <li>Design</li>
        <li>Budget Management</li>
        <li>Timeline and Logistics</li>
      </ul>
      <ul>
        <li>Photography & Videography</li>
        <li>Entertainment</li>
        <li>Designing & Printing Invitation Cards</li>
      </ul>
      </div>
      <br/>
      <br/>
      <h2 style={{color:'white',textAlign:'center'}}>Featured Weddings</h2>
      <div className='featured' style={{marginLeft:"150px"}}>
      
        {featuredWeddings.map(wedding => (
          <div class='box1'>
          <li key={wedding.id}>
            <img style={{height:'30vh',width:'40vh'}} src={wedding.img}></img>
            <h3 style={{color:'black',textAlign:"center"}}>{wedding.title}</h3>
            <p style={{color:'blueviolet',textAlign:"center"}}>Date: {wedding.date}</p>
            <p style={{color:'blueviolet' ,textAlign:"center"}}>Location: {wedding.location}</p>
          </li>
          </div>
        ))}
      
    </div>
          </center>
      <Footer/>
    </div>
  );
}

export default Wed;

