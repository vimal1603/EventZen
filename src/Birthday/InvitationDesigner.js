import React, { useState } from 'react'
import "../Birthday/Invitation.css"
import { useEffect } from 'react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF  from 'jspdf';
const InvitationCard = () => {
    const [eventName1, setEventName1] = useState('');
    const [day,setDay]=useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [invitationImage, setInvitationImage] = useState(null);
    const [showInvitation1, setShowInvitation1] = useState(false);
    const [showInvitation2, setShowInvitation2] = useState(false);
    const [wedtime,setWedtime]=useState();
    
  
    const cardRef = useRef(null);

    const handleDownload = () => {
      // Capture card content as an image using html2canvas
      html2canvas(cardRef.current).then(canvas => {
        // Convert the image to a data URL
        const imageUrl = canvas.toDataURL('image/png');
  
        // Create a new jsPDF instance
        const pdf = new jsPDF();
  
        // Add the image to the PDF document
        pdf.addImage(imageUrl, 'PNG', 0, 0);
  
        // Save the PDF document
        pdf.save('card.pdf');
      });
    }

    const handleEventName1Change = (e) => {
      setEventName1(e.target.value);
    };
   
  const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const handleEventDateChange = (e) => {
      setEventDate(e.target.value);
      
    };
    
    const handleEventLocationChange = (e) => {
      setEventLocation(e.target.value);
    };
    
    const handleWedtime = (e) =>
    {
      setWedtime(e.target.value);
    }
    
    const handleSubmit = (e) => {
      e.preventDefault();
      setShowInvitation1(true);
      const date = new Date(eventDate);
      const day1=date.getDay();
      setDay(days[day1]);
    };
    const Theme = () =>
      {
        setShowInvitation1(false);
        setShowInvitation2(true);
      }

      const Previous = () =>
      {
        setShowInvitation1(true);
        setShowInvitation2(false);
      }
      useEffect(() => {
        setEventDate(localStorage.getItem('eventDate'));
      }, []); 
  return (
    <div>
    <div className='inviteb'>
       <form className='greetingb' onSubmit={handleSubmit}>
        
          <label>Name:</label>
          <input
            type="text"
            value={eventName1}
            onChange={handleEventName1Change}
            required
          />
        
        
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={handleEventDateChange}
            required
          />
        
          <label>Event Location:</label>
          <input
            type="text"
            value={eventLocation}
            onChange={handleEventLocationChange}
            required
          />

          <label>Wedding Time:</label>
          <input 
          type="time"
          value={wedtime}
          onChange={handleWedtime}
          required
          />

          
        <br></br>
        <button type="submit">Create Invitation</button>
      </form>
      </div>
      <br>
      </br>
      <br/>
      <center>
        
        <div>
      {showInvitation1 &&
      <div>
      <div className='card1b' ref={cardRef}>
        <p style={{paddingTop:'10vh',fontFamily:'unset'}}>{eventName1}</p>
        
        <p style={{paddingTop:'35%',fontSize:'20px'}}>{eventDate}</p>
        <p style={{fontSize:'20px'}}>{day}</p>
        <p style={{fontSize:'20px'}}>AT {eventLocation}</p>
        <p style={{fontSize:'20px'}}>STARTS FROM:{wedtime}</p>
        <br></br>
        
        </div>
        <br/>
        <button className="button1"onClick={Theme}>Change Theme</button>
        </div>}
      {showInvitation2 &&
      <div>
      <div className='cardb2' ref={cardRef}>
        <p style={{paddingTop:'42vh'}}>{eventName1}'s</p>
        <p style={{paddingTop:'25%',fontSize:'15px'}}>ON {eventDate}</p>
        <p style={{fontSize:'20px'}}>{day}</p>
        <p style={{fontSize:'20px'}}>AT {eventLocation}</p>
        <p style={{fontSize:'20px'}}>STARTS FROM:{wedtime}</p>
        </div>
        <br/>
        <br/>
        <button className='button1' onClick={Previous}>Previous Theme</button>
        </div>}
        <br></br>
        <br></br>
        <button className="button1"onClick={handleDownload}>Download</button>
        </div>
        
        </center>
    </div>
  )
}

export default InvitationCard