import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Wedding = () => {
  return (

    <div className="testimonials">
      <h2 style={{color:'white'}}>What Our Clients Say</h2>
      <Grid container spacing={15}>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{height:'25vh',width:'40vh',backgroundColor:'wheat'}}>
            <CardContent>
              <Typography variant="body1">
                "We had an amazing experience with EventZen. They made our wedding day truly special and memorable."
                <br></br>
                <br></br>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                - Neha Sharma
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{height:'25vh',width:'40vh',backgroundColor:'wheat'}}>
            <CardContent>
              <Typography variant="body1">
                "EventZen went above and beyond to ensure that every detail of our event was perfect. Highly recommended!"
                <br></br>
                <br></br>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                - Rajesh Patel
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card style={{height:'25vh',width:'40vh',backgroundColor:'wheat'}}>
            <CardContent>
              <Typography variant="body1">
                "I couldn't have asked for a better team to plan our wedding. EventZen made the entire process stress-free and enjoyable."
                <br></br>
                <br></br>
              </Typography>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                - Priya Singh
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wedding;
