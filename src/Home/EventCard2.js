<<<<<<< HEAD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import birth from '../Images/birthday.jpg'
import { useNavigate } from 'react-router-dom';
export default function EventCard2() {
  const navigate=useNavigate();
  const Click = () =>
    {
        navigate('/b')
    }
  return (
    <Card sx={{ maxWidth: 345 ,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      },}} onClick={Click}>
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
      
    </Card>
  );
=======
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import birth from '../Images/birthday.jpg'
import { useNavigate } from 'react-router-dom';
export default function EventCard2() {
  const navigate=useNavigate();
  const Click = () =>
    {
        navigate('/b')
    }
  return (
    <Card sx={{ maxWidth: 345 ,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      },}} onClick={Click}>
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
      
    </Card>
  );
>>>>>>> 3d42d72 (updated)
}