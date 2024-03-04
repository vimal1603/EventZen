import logo from '../Images/pro.png';
import user from '../Images/user.png';
import edit from '../Images/edit.png';
import inbox from '../Images/envelope.png';
import settings from '../Images/settings.png';
import help from '../Images/question.png';
import logout from '../Images/log-out.png';
import "./Drop.css";


import React, {useState, useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

function Drop() {

  const [open, setOpen] = useState(false);
  
  const [username, setUsername] = useState('');
  const [log1, setLog1] = useState("true");
  const [nav, setNav] = useState(true);
  const navigate=useNavigate();
  const Click = () =>
  {
    setLog1("false");
    localStorage.setItem('log1',log1);
    localStorage.setItem('log',log1);
    navigate('/');
  }

 

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <div className='dy'>
    <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
         {log1 && <h3 style={{color:'white'}}>{username}<br/></h3>}
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
              <button onClick={Click} style={{paddingLeft:'20px',background:'none',border:'none',color:'white'}}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

function DropdownItem(props){
  return(
    <li className = 'dropdownItem'>
      <img src={props.img}></img>
      <a> {props.text} </a>
    </li>
  );
}

export default Drop;