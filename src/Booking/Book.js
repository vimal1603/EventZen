import React from 'react'
import '../Booking/Book.css'
import { useNavigate } from 'react-router-dom'
import Date from './Date'
const Book = () => {
    const navigate=useNavigate();
    const Click=()=>
    {
        alert("Our Team will Contact you Shortly")
        navigate('/h');
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
        <h1>BOOK YOUR EVENTS
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
                <span style={{paddingLeft:'80px'}}>
               <Date/>
               </span>
               <br></br>
               <br></br>
                <input placeholder='Describe your Event' ></input>
                </div>
                <br></br>
                <br></br>
                <button style={{paddingLeft:'30px'}}className='button' onClick={Click}>SUBMIT</button>
            </form>
           
            </div>
            </center>
        </div>
  )
}

export default Book