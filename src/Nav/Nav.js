
import React, { useContext } from 'react'
import bg from '../Images/event.png'
import { Outlet, useNavigate } from 'react-router-dom'
import '../Nav/Nav.css'
import NavSlide from './NavSlide'
import img from "../Images/logO.png"
import Birthday from '../Birthday/Birthday'
import Home from '../Home/Home'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import Drop from "../Drop/Drop"
import user from '../Images/user.png';
import logout from '../Images/log-out.png';

const Nav = () => {
    const navigate=useNavigate();
    const [open, setOpen] = useState(false);
  const [l1, setL1] = useState(localStorage.getItem("logg") || "logout"); // Initialize state with local storage value
  
  const handleLogout = () => {
    localStorage.setItem('logg', 'logout'); // Update local storage
    setL1("logout"); // Update state
    navigate("/home");
  };
  let menuRef = useRef();
  
  useEffect(() => {
    setL1(localStorage.getItem("logg") || "logout");
   

  },[]);
  return (
    <div>
        
        <ul style={{listStyle:'none',display:'flex',color:'white',paddingBottom:'30px'}}>
            <li>
                <a href='/home'><img src={img} height={50} width={50} style={{borderRadius:'50%'}}></img></a>
            </li>
            <li style={{paddingLeft:'60vw',paddingTop:'0px'}}>
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
            
           {l1 === "logout" &&
            <li style={{paddingLeft:'30px'}}>
            <a href="/signup" >LOGIN</a>
            </li>
            }
            {l1 === "login" &&
            <div style={{paddingRight:"50px"}}>
            <div className='dy'>
            <div className="App">
              <div className='menu-container' ref={menuRef}>
                <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
                  <img src={user}></img>
                </div>
        
                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                  {/* <h3 style={{color:'white'}}><br/></h3> */}
                  <ul class='dr'>
                    <li style={{display:'flex'}}>
                      <img height={40} width={40}src={user}></img>
                      <a href='' style={{paddingLeft:'20px'}}>My Profile</a>
                    </li>
                    {/* <DropdownItem img = {edit} text = {"Edit Profile"}/>  
                    <DropdownItem img = {settings} text = {"Settings"}/>
                    <DropdownItem img = {help} text = {"Helps"}/> */}
                    <li style={{display:'flex'}}>
                      <img height={40} width={40}src={logout}></img>
                      <button onClick={handleLogout} style={{paddingLeft:'20px',background:'none',border:'none',color:'white'}}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            </div>
            
            </div>
            }
        
        <br></br>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Nav