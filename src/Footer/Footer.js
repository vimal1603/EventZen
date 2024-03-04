import React from 'react';
import './Footer.css';
import i1 from "../Images/insta.jpg"
import f1 from "../Images/facebook.jpg"
import t1 from "../Images/twitter.jpg"
import g1 from "../Images/email.jpg"
import y1 from "../Images/utube.jpg"


const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-section">
                    <h3>EVENTZEN</h3>
                    <p>EventZen is passionate about crafting charmingly timeless and elegant luxurious weddings and events at stunning venues throughout the world. As the leading wedding designers and event organisers in Coimbatore, we are renowned to create authentic experiences worth cherishing for a lifetime.</p>
                </div>

                <div className="footer-section1">
                    <h3>ADDRESS</h3>
                    <p>Sri Krishna College of technology,<br />Kovaiputhur,Arivoli Nagar<br />Coimbatore,<br />Tamil Nadu-641042</p>
                </div>
                <div className='footer-section3'>
                    <h3>Quick Links</h3>
                    <a href='/'>Home</a>
                    <br/>
                    <a href='/birthday'>Events</a>
                    <br/>
                    <a href='/aboutus'>About Us</a>
                    <br/>
                    <a href='/contactus'>Contact Us</a>
                    <br/>
                </div>
                <div className="footer-section2">
                    <h3 style={{width:'40vw'}}>Contact Us</h3>        
                      <div className="social-icons">
                        <a href="https://www.instagram.com/" target="_blank" ><img src={i1} alt="Instagram" /></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src={f1} alt="Facebook" /></a>
                        <a href="https://twitter.com/" target="_blank" ><img src={t1} alt="Twitter" /></a>
                        <a href="mailto:info@vzevents.in"><img src={g1} alt="Gmail" /></a>
                        <a href="https://www.youtube.com/"><img src={y1} alt="You Tube" /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; EVENTZEN & ENTERTAINMENTS PVT.LTD 2018, All right need to be reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
