
import React, { useState } from 'react'
import '../Booking/Book.css'
import { useNavigate } from 'react-router-dom'

const Book = () => {
    const navigate=useNavigate();
    const [eventDate,setEventDate]=useState('');
    const Click=()=>
    {
        localStorage.setItem('eventDate', eventDate);
        alert("Our Team will Contact you Shortly")
        navigate('/home');
    }
    const handleDate = (e) =>
    {
        setEventDate(e.target.value);
    }
    const box =
    {
       border:'3px solid white',
       height:'auto',
       width:'500px',
       padding:'5%',
       flexdirection:'column',
       margin:'0px',
       display:'flex',
       borderRadius:'20px',
       backgroundColor:'rgba(0,0,0,0.6)'
 }
  return (
    <div style={{color:'white'}}>
        <h1 style={{textAlign:'center'}}>BOOK YOUR EVENTS
            </h1>
            <center>
            <div style={box}>
                
            <form>
                <div className='input'>
                    <input type='text'placeholder='Your Name'></input>
                <br></br>
                <br></br>
                <input placeholder='Mobile No'></input>
                <br></br>
                <br></br>
                <input placeholder='Email'></input>
                <br></br>
                <br></br>
                <input placeholder='No.of.attendees(approx)'></input>
                <br></br>
                <br></br>
               <input type='date' onChange={handleDate} value={eventDate}></input>
               <br></br>
               <br></br>
                <input placeholder='Describe your Event' ></input>
                </div>
            </form>
            </div>
            <br></br>
            <br></br>
                <button style={{paddingLeft:'30px'}}className='button2' onClick={Click}>SUBMIT</button>
           <br></br>
           <br></br>
            </center>
        </div>
  )
}


export default Book