
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import b from '../Images/birthdayzen.jpg'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import b1 from '../Images/bday1.jpg';
import b2 from '../Images/bday2.jpg';
import b3 from '../Images/bday3.jpg';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center' ,
  color: theme.palette.text.secondary,
}));

export default function BdaySlide() {
  
  return (
    <Grid container spacing={3}>
  <Grid item xs>
    <Item>
    <Card sx={{ maxWidth: 300 }} className='ima'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={b1}
          alt="Birthday"
        />
        <CardContent>
          <Typography style={{color:'black'}} gutterBottom variant="h5" component="div">
            PAST
          </Typography>
          <Typography variant="body2" color="text.secondary">
"We have successfully accomplished over 50 birthday parties, ensuring full satisfaction for our customers."
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
  </Grid>
  <Grid item xs>
    <Item>
    <Card sx className='ima'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={b2}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{color:'black'}} gutterBottom variant="h5" component="div">
            PRESENT
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Currently, we are working on two projects for which we have planned to achieve great things, drawing from our past successful experiences.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
  </Grid>
  <Grid item xs>
    <Item>
    <Card sx className='ima'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={b3}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{color:'black'}} gutterBottom variant="h5" component="div">
            FUTURE
          </Typography>
          <Typography variant="body2" color="text.secondary">
          For future endeavors, we have planned to expand our services to include all types of events, including concerts.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Item>
  </Grid>
</Grid>
    
  );
}

