<<<<<<< HEAD
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Outlet } from 'react-router-dom';
import party from '../Images/party.jpeg'
export default function EventCard4() {
  return (
    <Card sx={{ maxWidth: 345,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      }, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={party}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'black'}>
            Party
          </Typography>
          <Typography variant="body2" color="text.secondary">
          From cocktails to confetti, we've got all the ingredients for the ultimate party experience.
          <br></br>
          <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Outlet/>
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
import party from '../Images/party.jpeg'
export default function EventCard4() {
  return (
    <Card sx={{ maxWidth: 345,
      minWidth: 275,
      transition: 'transform 0.2s',
      '&:hover': {
        transform: 'scale(1.05)',
      }, }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={party}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" color={'black'}>
            Party
          </Typography>
          <Typography variant="body2" color="text.secondary">
          From cocktails to confetti, we've got all the ingredients for the ultimate party experience.
          <br></br>
          <br></br>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Outlet/>
    </Card>
  );
>>>>>>> 3d42d72 (updated)
}