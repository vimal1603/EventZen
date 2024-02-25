import React, { useState } from 'react';
import './ContactUs.css'; 
import Footer from '../Footer/Footer';
// import Footer from '../Footer/Footer';
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

    const alret = () =>
    {
        alert("WE WILL CONTACT YOU SOON....")
    }
  return (
    <div className='contact'>
      
        <h1 style={{textAlign:'center',paddingTop:'40px'}}>Contact Us</h1>
    <div className='body1'>
      
      <div className="section">
        <form>
          <label>
            <b>Name:</b>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            <b>Email:</b>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>

          <label>
            <b>Subject:</b>
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} required />
          </label>

          <label>
            <b>Message:</b>
            <textarea required  name="message" value={formData.message} onChange={handleChange} />
          </label>
<center>
          <button className='button1' onClick={alret}>Submit</button>
          </center>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
