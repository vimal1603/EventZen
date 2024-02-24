<<<<<<< HEAD
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
import inperson from "../Images/a1.jpg"
import party from '../Images/party.jpeg'
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'
export default function EventCard1() {
  const navigate = useNavigate();
  const Clickwed = () => {
    navigate('/wedding')
  }
  const ClickBirth = () => {
    navigate('/birthday')
  }
  const ClickCorp = () => {
    navigate('/corporate')
  }
  return (
    <div class="ab">
      <span>
      <Card sx={{
        maxWidth: 345,
        minWidth: 275,

        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },

      }} onClick={Clickwed}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={wed}

            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={'black'}>
              Weddings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Outlet />
      </Card>
      </span>
      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickBirth} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={birth}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                Birthdays
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age is just a number; let's make this birthday unforgettable!.
                Let us handle the details, while you enjoy the spotlight on your special day.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickCorp}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={cor}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                Corporate Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Where professionalism meets perfection – creating impactful corporate events that leave a lasting impression.
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={inperson}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                In Person Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Elevating events, exceeding expectations. Creating unforgettable moments,
                one event at a time
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>
      <br></br>
      <br></br>
    </div>
  );
=======
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
import inperson from "../Images/a1.jpg"
import party from '../Images/party.jpeg'
import { useNavigate } from 'react-router-dom';
import '../Home/Home.css'
export default function EventCard1() {
  const navigate = useNavigate();
  const Clickwed = () => {
    navigate('/wedding')
  }
  const ClickBirth = () => {
    navigate('/birthday')
  }
  const ClickCorp = () => {
    navigate('/corporate')
  }
  return (
    <div class="ab">
      <span>
      <Card sx={{
        maxWidth: 345,
        minWidth: 275,

        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)',
        },

      }} onClick={Clickwed}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={wed}

            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={'black'}>
              Weddings
            </Typography>
            <Typography variant="body2" color="text.secondary">
              With every last detail taken care of, we're here to ensure the day you've always dreamed of will be the day you'll never forget.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Outlet />
      </Card>
      </span>
      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickBirth} >
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={birth}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                Birthdays
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Age is just a number; let's make this birthday unforgettable!.
                Let us handle the details, while you enjoy the spotlight on your special day.
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }} onClick={ClickCorp}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={cor}
              alt="green iguana"
            />

            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                Corporate Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Where professionalism meets perfection – creating impactful corporate events that leave a lasting impression.
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>

      <span>
        <Card sx={{
          maxWidth: 345,
          minWidth: 275,
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={inperson}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color={'black'}>
                In Person Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Elevating events, exceeding expectations. Creating unforgettable moments,
                one event at a time
                <br></br>
                <br></br>
              </Typography>
            </CardContent>
          </CardActionArea>
          <Outlet />
        </Card>
      </span>
      <br></br>
      <br></br>
    </div>
  );
>>>>>>> 3d42d72 (updated)
}  