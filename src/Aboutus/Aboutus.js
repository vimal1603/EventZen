import React from 'react';
import './AboutUs.css'; 
import SlideShow from './Slideshow';
import Footer from '../Footer/Footer';

const AboutUs = () => {
  return (
    <div className='about-us-container'>
      <section className="section">
        <center>
        <h2 style={{color:'black'}}>About Us</h2>
        </center>
        <br></br>
        <SlideShow/>
        
           
          <p class="para2">Welcome to EventZen, where we specialize in transforming ordinary moments into extraordinary memories. As a dynamic and fast-growing event management company, we pride ourselves on curating unforgettable experiences tailored to birthdays, weddings, corporate celebrations, and private parties.<br></br>
          Our commitment to excellence is the driving force behind every event we undertake. Picture countless birthday bashes infused with laughter and joy, and dream weddings where your vision becomes a breathtaking reality with meticulous attention to detail.
          <br></br>
          At EventZen, we go beyond the ordinary, crafting corporate events that linger in the minds of attendees. From milestone celebrations to enhancing your brand's presence, our team combines creativity and precision for an unparalleled experience.
          <br></br>
          As a rising star in the event management scene, our passion fuels our vision to redefine the industry. With a dedicated team determined to exceed expectations, we weave dreams into reality for each unique event. Join us at EventZen, where every celebration is an opportunity to create lasting memories. Here's to crafting magic together!
          <br></br></p>
        
      </section>
      <Footer/>
    </div>
  );
}

export default AboutUs;
