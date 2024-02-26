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
  const [log, setLog] = useState(false);
  const navigate=useNavigate();
  const Click = () =>
  {
    setLog(false);
    setUsername("");
    navigate('/')
  }

  useEffect(() => {
   
    setUsername(localStorage.getItem('username'));
    setLog(localStorage.getItem('log'));
  }, []); 

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
         {log && <h3 style={{color:'white'}}>{username}<br/></h3>}
          <ul>
            <DropdownItem img = {user} text = {"My Profile"}/>
            <DropdownItem img = {edit} text = {"Edit Profile"}/>
            
            <DropdownItem img = {settings} text = {"Settings"}/>
            <DropdownItem img = {help} text = {"Helps"}/>
            <DropdownItem  img={logout} text = {"Logout"} ></DropdownItem>
            
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
      <a href='/'> {props.text} </a>
    </li>
  );
}

export default Drop;