import React from 'react'
import "../Css/Up.css"
import img1 from '../Images/logO.png'
import ins from'../Images/ins.png'
import x from '../Images/x.jpg'
import go from '../Images/go.png'
import { useNavigate } from 'react-router-dom'
const SignUp = () => {
  const navigate=useNavigate();
  const Click=()=>
  {
    navigate('/');
  }
  return (
    <div><form className='sig'><br></br>
      <center><img src={img1} alt='loading'height={90} width={90} style={{borderRadius:'50%'}}></img><br></br>
      <h2 style={{color:'wheat'}}>Sign Up</h2>
      </center>
      <input className='in' type='text' placeholder='First Name'></input><br></br><br></br>
      <input className='in' type='text' placeholder='Last Name'></input><br></br><br></br>
      <input className='ina' type='password' placeholder='Email'></input><br></br><br></br>
      <input className='ina' type='password' placeholder='Password'></input><br></br><br></br>
      <input className='ina' type='password' placeholder='Confirm Password'></input><br></br><br></br>
      <input className='cb' type="checkbox" ></input>
      <lable className='la'>I want to  receive inspiration, marketing promotions<br></br>and updates via email </lable><br></br><br></br>
      <img className='lo' src={ins} alt='loading' height={30} width={30} style={{borderRadius:'50%'}}></img>
      <img className='lo' src={x} alt='loading' height={30} width={30} style={{borderRadius:'50%'}}></img>
      <img className='lo' src={go} alt='loading' height={30} width={30} style={{borderRadius:'50%'}}></img><br></br><br></br>
      <button className='but' onClick={Click}>Sign Up</button><br></br>
      <a className='hr' href='/'>Already have an Account</a><br></br><br></br>

      </form></div>
  )
}

export default SignUp