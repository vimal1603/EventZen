
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import wed from '../Images/wedding.jpeg';
import birth from '../Images/birthday.jpg'
import cor from '../Images/corporate.jpg'
import virtual from "../Images/virtual.avif";
import inperson from "../Images/inperson.webp"
import { useNavigate } from 'react-router-dom';
import hybrid from "../Images/hybrid.jpg";
import '../Home/Home.css'
export default function EventCard1() {
  const navigate = useNavigate();
  const Clickwed = () => {
    navigate('')
  }
  const ClickBirth = () => {
    navigate('')
  }
  const ClickCorp = () => {
    navigate('')
  }
  return (
    <div style={{display:'flex',padding:'10px'}}>
      <span style={{paddingLeft:'8vw'}}>
      <Card sx={{
        maxWidth: 345,
        minWidth: 275,
        
        height: 300,
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },

      }} onClick={Clickwed}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={inperson}
            alt="green iguana"
            
          />
          <CardContent class='content'  style={{backgroundColor:'wheat'}}>
            <Typography gutterBottom variant="h5" component="div" color={'black'}>
              In Person Events
            </Typography>
            <Typography variant="body2" color={'black'}>
            "In a world of screens, nothing beats the magic of face-to-face interactions at live events."
            </Typography>
          </CardContent>
        </CardActionArea>
        <Outlet />
      </Card>
      </span>
      <span style={{paddingLeft:'8vw'}}>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          height: 300,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickBirth} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={virtual}
              alt="green iguana"
            />
            <CardContent class='content' style={{backgroundColor:'wheat'}}>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
              Virtual Events
              </Typography>
              <Typography variant="body2" color={'black'}>
              "Step into the virtual realm, where possibilities are infinite and experiences are boundless."
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

      <span style={{paddingLeft:'8vw'}}>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          height: 300,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickCorp}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={hybrid}
              alt="green iguana"
            />

            <CardContent class='content' style={{backgroundColor:'wheat'}}>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                Hybrid Events
              </Typography>
              <Typography variant="body2" color={'black'}>
             " Embrace the best of both worlds: hybrid events, where the digital and physical unite to create unforgettable experiences."
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

    </div>
  );
}  