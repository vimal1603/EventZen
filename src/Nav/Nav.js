
import React from 'react'
import bg from '../Images/event.png'
import { Outlet, useNavigate } from 'react-router-dom'
import '../Nav/Nav.css'
import NavSlide from './NavSlide'
import img from "../Images/logO.png"
import Birthday from '../Birthday/Birthday'
import Home from '../Home/Home'
import { useState } from 'react'
import { useEffect } from 'react'
import Drop from "../Drop/Drop"
const Nav = () => {
    const navigate=useNavigate();
    const [username, setUsername] = useState('');
  const [log, setLog] = useState(false);

  useEffect(() => {
    // Fetch values from localStorage when component mounts or when localStorage changes
    setUsername(localStorage.getItem('username'));
    setLog(localStorage.getItem('log'));
  }, []); // Run this effect only once when component mounts
  return (
    <div>
        
        <ul style={{listStyle:'none',display:'flex',color:'white',paddingBottom:'30px'}}>
            <li>
                <a href='/home'><img src={img} height={50} width={50} style={{borderRadius:'50%'}}></img></a>
            </li>
            <li style={{paddingLeft:'55vw',paddingTop:'0px'}}>
            <NavSlide/>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="/pricing" >PRICING</a>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="/aboutus" >ABOUTUS</a>
            </li>
            <li style={{paddingLeft:'30px'}}>
            <a href="/contactus" >CONTACTUS</a>
            </li>
            {!log && 
            <li style={{paddingLeft:'30px'}}>
            <a href="/" >LOGIN</a>
            </li>
            }
           
            <li style={{paddingLeft:'30px'}}>
              <Drop/>
            </li>
            
            
        
        <br></br>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav