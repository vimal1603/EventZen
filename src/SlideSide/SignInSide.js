import React, { useContext } from 'react'
import "../Css/Sign.css"
import img2 from '../Images/back.jpg'
import img1 from '../Images/logO.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import MyContext from '../UseContext/MyContext'
const SignInSide = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  const Click=()=>
  { 
    
 
    navigate('/home')
  }
  const Change = (e) =>
  {
    setUser(e.target.value);
  }
  return (
    <div>
      <div style={{display:'flex'}}>
      <img className='im'src={img2} height={620}width={700}></img>
      <form onSubmit={Click}className='log'><br></br>
      <img src={img1} alt='loading'height={90} width={90} style={{borderRadius:'50%'}}></img><br></br>
      <center><h1 style={{color:'white'}}>Sign In</h1></center>
    <input  value={user} onChange={Change} className='ina' type='text' placeholder='Username' ></input><br></br><br></br>
    <input required className='ina' type='password' placeholder='Password'></input><br></br><br></br>
    <input className='cb' type="checkbox" ></input>
    <lable className='la'>Remember Me</lable><br></br><br></br>
    <button className='but' onClick={Click}>Login</button><br></br><br></br>
    <a className='al' href='#'>Forget password</a>
    <a href='/signup' className='ar'>New User</a><br></br><br></br>
    </form>
    </div>
    </div>
  )
}

export default SignInSide