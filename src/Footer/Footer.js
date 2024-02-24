import React from 'react'
import img from '../Images/bg.png'
const Footer = () => {
    
  return (
    <footer style={{backgroundImage:{img}}}>
        
        <ul style={{listStyle:'none',display:'flex'}}>
        <li>About us</li>
        <li>Contact us</li>
        </ul>
        
    </footer>
  )
}

export default Footer