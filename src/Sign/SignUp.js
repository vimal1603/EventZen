import React, { useState } from 'react'
import "../Css/Up.css"
import "../Css/Sign.css"
import img1 from '../Images/logO.png'
import ins from'../Images/ins.png'
import x from '../Images/x.jpg'
import go from '../Images/go.png'
import img2 from '../Images/back.jpg'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const SignUp = () => {
  const navigate=useNavigate();
  const [user, setUser] = useState('');
  const [sign,setSign]=useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [username1, setUsername1] = useState('');
  const [password1, setPassword1] = useState('');
  const [error, setError] = useState('');
  const [postedData, setPostedData] = useState([]);
   
  const Click = () =>
  {
    const userData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username1: username1,
      password1: password1
    };
   
   axios.post("https://jsonplaceholder.typicode.com/users", userData)
      .then(response => {
        console.log("Response:", response);
        setPostedData(response.data);
        console.log("---->>>",postedData.username1)
      })
      .catch(error => {
        console.error("Error:", error);
      }); 
    setSign(true);
  }
  const Change = (e) =>
  {
    setUser(e.target.value);
  }
  const Click1 = () =>
  {
    setSign(false);
  }
  const Click2 = () =>
  {
    setSign(true);
  }
  const fetchUserData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        
        const userData = response.data;
        const user = userData.find(user => user.username === username ||  postedData.username1 === username);
        if (user) {
          
          console.log("User found:", user);
          setError('');
          navigate('/home')
          
        } else {
          console.log("User not found");
          setError('Invalid username or password');
        }
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
        setError('Failed to fetch user data');
      });
  };
  const handleLogin = (e) =>
  {
    e.preventDefault();
    fetchUserData();
  }
  return (
    <div>
    {!sign &&
    <div><form onSubmit={Click} className='sig'><br></br>
      <center><img src={img1} alt='loading'height={90} width={90} style={{borderRadius:'50%'}}></img><br></br>
      <h2>Sign Up</h2>
      <input className='in' type='text' placeholder='First Name' value={firstName} onChange={e => setFirstName(e.target.value)} required></input>
          <input className='in' type='text' placeholder='Last Name' value={lastName} onChange={e => setLastName(e.target.value)} required></input><br></br><br></br>
          <input className='ina' type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required></input><br></br><br></br>
          <input className='ina' type='text' placeholder='Username' value={username1} onChange={e => setUsername1(e.target.value)} required></input><br></br><br></br>
          <input className='ina' type='password' placeholder='Password' value={password1} onChange={e => setPassword1(e.target.value)} required></input><br></br><br></br>
          <input className='cb' type="checkbox"></input>
          <lable className='la'>I want to  receive inspiration, marketing promotions<br></br>and updates via email </lable><br></br><br></br>
          <img className='lo' src={ins} alt='loading' height={30} width={30} style={{ borderRadius: '50%' }}></img>
          <img className='lo' src={x} alt='loading' height={30} width={30} style={{ borderRadius: '50%' }}></img>
          <img className='lo' src={go} alt='loading' height={30} width={30} style={{ borderRadius: '50%' }}></img><br></br><br></br>
          <button className='but' type='submit'>Sign Up</button><br></br><br></br>
          <button className='switch' onClick={Click2}>Already have an Account ?</button><br></br><br></br>
      </center>
      </form>
      </div>
    }
    {sign &&
      <div>
      <div style={{display:'flex'}}>
      <img className='im'src={img2} height={620}width={700}></img>
      <form onSubmit={handleLogin}className='log'><br></br>
      <img src={img1} alt='loading'height={90} width={90} style={{borderRadius:'50%'}}></img><br></br>
      <center><h1 style={{color:'white'}}>Sign In</h1></center>
    <input className='ina' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}></input><br></br>
    <br></br>
    <input required className='ina' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} ></input><br></br><br></br>
    <input className='cb' type="checkbox" ></input>
    <lable className='la'>Remember Me</lable><br></br><br></br>
    <button className='but' type='submit'>Login</button><br></br><br></br>
    <a className='al' href='#'>Forget password</a>
    <button className='switch' onClick={Click1}>New User?</button><br></br><br></br>
    </form>
    </div>
    </div>
    }
    </div>
  )
}

export default SignUp