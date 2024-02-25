
import * as React from 'react';
import "../Css/Sign.css"
import "../Css/Login.css"
import img1 from '../Images/logO.png'
import img2 from '../Images/pac.jpg'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://eventsbyspark.com/work">
        SPARK
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignInSide() {
  const navi=useNavigate();
  const hn=()=>{
    navi("/h")
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  


  return (
    <div className='all'>
      <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '50vh' }}>
        <CssBaseline />
        <Grid className='im'
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/45a30c70380219.5ba1a46baa70d.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: '1080px',
            backgroundPosition: 'center',
          }}
        />
        <Grid className='log' item xs={10} sm={7} md={4} component={Paper} elevation={5} square>
          <Box
            sx={{
              my: 5,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <img src={img1} alt='loading' height={150} width={150} style={{borderRadius:'50%'}}>
            </img><br></br>
            <div className='ty'><Typography >
              SIGN IN 
            </Typography></div>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
              
              className='ti'
                margin="nomargin"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField className='tl'
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel className='ch'
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button 
                onClick={hn}
                fullWidth
                variant="contained"
                
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider></div>
  );

}