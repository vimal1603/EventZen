
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import b from '../Images/cocp.jpg'
import c from '../Images/download.jpg'
import d from '../Images/new bc.jpg'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Corporate() {
  
  return (
    <Grid container spacing={6}>
  <Grid item xs>
    <Item>
    <Card sx={{ maxWidth: 300 }} className='ima'>
      <CardActionArea>
        <CardMedia 
          component="img"
          height="110"
          image={b}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{color:'black'}}gutterBottom variant="h5" component="div" color={''}>
            PAST
          </Typography>
          <Typography variant="body2" color="text.secondary">
"We have successfully accomplished over 10 corporate events, ensuring full satisfaction for our customers."
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
          height="90"
          image={c}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{color:'black'}}gutterBottom variant="h5" component="div">
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
          height="110"
          image={d}
          alt="green iguana"
        />
        <CardContent>
          <Typography style={{color:'black'}}gutterBottom variant="h5" component="div">
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

