
import React from 'react'
import "../Pricing/Pricing.css"
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
const Pricing = () => {
  const navigate = useNavigate();
  const bold = 
  {
    fontWeight:'bold',
    fontSize:30
  }
  const Click = () =>
  {
    navigate('/contactus');
  }
  const Click1 = () =>
  {
    if(l1 === "login")
    {
    navigate('/contactus');
    }
    else
    {
      navigate('/signup')
    }
  }
  const [l1, setL1] = useState(localStorage.getItem("logg") || "logout");
  useEffect(() => {
    setL1(localStorage.getItem("logg") || "logout");
  }, []); 
  return (
    <div>
      <p style={{backgroundColor:'royalblue' ,color:'white',padding:'50px',fontSize:20}}>"At EventZen, we understand that every event is unique, which is why we offer a diverse range of packages and customizable event tech and production services. Whether you're planning a wedding, corporate event, or virtual conference, our flexible solutions ensure you get exactly what you need. Our offerings include everything from event apps and virtual platforms to registration, website, and ticketing services. We believe in providing tailored recommendations based on your requirements and preferences. Simply fill out our pricing form, and our experienced team will guide you through our range of options, helping you create the perfect event experience."</p>
    <div class='plan'>
    <div class='price'>
      <span>
      <br></br>
      
      <p style={bold}>BASIC PLAN</p>
      
      <p><span style={{color:'red',fontSize:30}}>₹3,499</span> per event</p>
      <dl>
        <br></br>
        <dt>FEATURES</dt>
        <dd>
          <ul>
            <li>Event setup and management for a single event</li>
            <li>Basic ticketing and registration features</li>
            <li>Email support during business hours</li>
          </ul>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          Ideal for: Small businesses, individuals, or organizations organizing occasional events on a limited budget.
        </dd>
      </dl>
      <br></br>
      <div class='move'>
      <button class='button1' onClick={Click1}>GET STARTED</button>
      </div>
      </span>
    </div>

    <div class='price'>
      <span>
      <p style={bold}>Standard Plan  "Essentials"</p>
      <p><span style={{color:'red',fontSize:30}}> ₹6,999 </span>per month</p>
      <dl>
        <dt>FEATURES</dt>
        <dd>
          <ul>
            <li>Unlimited events</li>
            <li>Advanced ticketing and registration features</li>
            <li>Custom branding options for event pages</li>
            <li>Email and chat support during business hours</li>
          </ul>
          <br></br>
          <br></br>
          Ideal for: Growing businesses and event planners managing multiple events throughout the year.
        </dd>
      </dl>
      <div class='move'>
      <button class='button1' onClick={Click1}>GET STARTED</button>
      </div>
      </span>
    </div>

    <div class='price'>
      <p style={bold}>Premium Plan  "Pro"</p>
      <p style={{color:'red',fontSize:30}}>Custom Quote</p>
      <dl>
        <dt>FEATURES</dt>
        <dd>
          <ul>
            <li>All features from the Standard Plan</li>
            <li>Dedicated account manager</li>
            <li>Custom integrations with CRM and marketing tools</li>
            <li>Priority email and chat support</li>
            <li>On-site training and consultation</li>
          </ul>
          Ideal for: Enterprises and large-scale event organizers requiring personalized solutions and dedicated support.
        </dd>
      </dl>
      <div class='move'>
      <button class='button1' onClick={Click}>TALK TO US</button>
      </div>
    </div>

    <div class='price'>
      <span>
      <p style={bold}>Enterprise Plan  "Tailored"</p>
      <p style={{color:'red',fontSize:30}}>Custom Quote</p>
      <dl>
        <dt>FEATURES</dt>
        <dd>
          <ul>
          <li>Fully customizable features and pricing</li>
          <li>White-label solutions</li>
          <li>API access for seamless integration with existing systems</li>
          <li>24/7 priority support</li>
          <li>Strategic partnership and consultation</li>
          </ul>
          Ideal for: Large corporations, agencies, or organizations with complex event management needs and high-volume events.
        </dd>
      </dl>
      <div class='move'>
      <button class='button1' onClick={Click}>TALK TO US</button>
      </div>
      </span>
    </div>

    </div>
    <Footer/>
    </div>
  )
}


export default Pricing