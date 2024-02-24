import React, { useState } from 'react';
import './ContactUs.css'; 
import { useNavigate } from 'react-router-dom';
const ContactUs = () => {
  

  const handleChange = (e) => {
    
  };
    const navigate=useNavigate();
    const alert1 = () =>
    {
        alert("SUBMITED!!")
        navigate('/h')
    }



  return (
    <div>
        <center>
      <header class="header">
        <h1>Contact Us</h1>
      </header>
      </center>

      <section className="section">
          <center>
        <form>
          <div className='input'>
          <label>
            
            <input type="text" name="name" placeholder='NAME' style={{color:'black'}} onChange={handleChange} required />
          </label>

          <label>
            
            <input type="email" name="email" placeholder='EMAIL' style={{color:'black'}} onChange={handleChange} required />
          </label>

          <label>
            
            <input type="text" name="subject" placeholder='SUBJECT'style={{color:'black'}} onChange={handleChange} required />
          </label>

          <label>
        
            <input type="text" name="subject" style={{color:'black'}} placeholder='Type your requirements here' onChange={handleChange} required />

            
          </label>
          </div>
<center>
          <button className='button' onClick={alert1}>Submit</button>
          </center>
        </form>
        </center>
      </section>
    </div>
  );
}

export default ContactUs;
