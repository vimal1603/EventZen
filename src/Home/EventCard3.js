import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import cor from '../Images/corporate.jpg'
import { useNavigate } from 'react-router-dom';
export default function EventCard3() {
  const navigate=useNavigate();
  const Click = () =>
    {
        navigate('/c')
    }
  return (
    <Card sx={{ maxWidth: 345,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      }, }} onClick={Click}>
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
            
          Where professionalism meets perfection – creating impactful corporate events that leave a lasting impression."
          <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Outlet/>
    </Card>
  );
}