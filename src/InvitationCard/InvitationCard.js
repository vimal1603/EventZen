import React, { useState } from 'react'
import "../InvitationCard/InvitationCard.css"
import { useEffect } from 'react';
import { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF  from 'jspdf';
const InvitationCard = () => {
    const [eventName1, setEventName1] = useState('');
    const [eventName2, setEventName2] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [invitationImage, setInvitationImage] = useState(null);
    const [showInvitation1, setShowInvitation1] = useState(false);
    const [showInvitation2, setShowInvitation2] = useState(false);
    const [wedtime,setWedtime]=useState();
    const [reception,setReception]=useState();
    
  
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
    const handleEventName2Change = (f) => {
      setEventName2(f.target.value);
    };
  
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
      const handleReception = (e) =>
      {
        setReception(e.target.value);
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        setShowInvitation1(true);
      };
      const Theme = () =>
      {
        setShowInvitation1(false);
        setShowInvitation2(true);
      }
      useEffect(() => {
        setEventDate(localStorage.getItem('eventDate'));
      }, []); 
  return (
    <div>
    <div className='invite'>
       <form className='greeting' onSubmit={handleSubmit}>
        
          <label>Groom:</label>
          <input
            type="text"
            value={eventName1}
            onChange={handleEventName1Change}
            required
          />
        
          <label>Bride:</label>
          <input
            type="text"
            value={eventName2}
            onChange={handleEventName2Change}
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

          <label>Reception Time:</label>
          <input 
          type="time"
          value={reception}
          onChange={handleReception}
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
      {showInvitation1 &&
      <div className='card1' ref={cardRef}>
        <p style={{paddingTop:'23vh',fontFamily:'unset'}}>{eventName1}</p>
        <p style={{paddingTop:'11%'}}>{eventName2}</p>
        <p style={{paddingTop:'10%',fontSize:'20px'}}>ON {eventDate}</p>
        <p style={{fontSize:'20px'}}>AT {eventLocation}</p>
        <p style={{fontSize:'20px'}}>Wedding:{wedtime}</p>
        <p style={{fontSize:'20px'}}>Reception:{reception}</p>
        <br></br>
        <button onClick={handleDownload}>Download</button>
        <button onClick={Theme}>Change Theme</button>
        </div>}
        
      {showInvitation2 &&
      <div className='card2' ref={cardRef}>
        <p style={{paddingTop:'30vh'}}>{eventName1}</p>
        <p>&</p>
        <p style={{paddingTop:'1%'}}>{eventName2}</p>
        <p style={{paddingTop:'33%',fontSize:'15px'}}>ON {eventDate}</p>
        <p style={{fontSize:'20px'}}>AT {eventLocation}</p>
        <p style={{fontSize:'20px'}}>Wedding:{wedtime}</p>
        <p style={{paddingTop:'19%',fontSize:'20px'}}>AT {reception}</p>
        <button onClick={handleDownload}>Download</button>
        </div>}
        
        <br/>
        <br/>
        </center>
    </div>
  )
}

export default InvitationCard