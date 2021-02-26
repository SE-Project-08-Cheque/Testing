import React, { useState } from 'react';
import { Avatar, Button, CssBaseline, TextField, Checkbox, Link, Grid, Box, Typography, makeStyles, Container, FormControlLabel } from '@material-ui/core';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import API_Service from '../Services/API_Service';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        2021, All Rights Reserved | Designed by University of Moratuwa
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(20),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn(props) {


  const [Username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState('');

  const classes = useStyles();
  const islogged = SessionService.isAuthenticated();
  console.log(islogged);

  // if (islogged) {
  //   return (
  //     <Redirect
  //       to={{ pathname: '/', state: { from: props.location } }}
  //     />
  //   );
  // }

  var submitform = () => {

  //   API_Service.authUser(Username, password, (result) => {
  //     if (result === "error" || result.data.success === false || result.data.data[0].status !== "APPROVED") {
  //       setErr("Failed Log In");
  //     }
  //     else if (result.data.data[0].user_type === "CUSTOMER") {
  //       console.log(result.data.data[0])
  //       var json1 = result.data.data[0];
  //       console.log("id");
  //       var id = result.data.data[0].user_id;

  //       API_Service.getAllDataCustomer(id, (result) => {
  //         if (result !== "error" && result.data.success !== false) {
  //           var json2 = result.data.data[0];
  //           var json3 = Object.assign(json1, json2);
  //           SessionService.initSession(JSON.stringify(json3));
  //           props.history.push('/dashboard')
  //         }
  //       });


  //     } else {
  //       console.log(result.data.data[0])
  //       var json1 = result.data.data[0];
  //       console.log("staff_id");
  //       var id = result.data.data[0].user_id;

  //       API_Service.getAllStaffData(id, (result) => {
  //         if (result !== "error" && result.data.success !== false) {
  //           console.log("JSON2");
  //           console.log(result.data);
  //           var json2 = result.data.data[0];
  //           console.log(json2);
  //           var json3 = Object.assign(json1, json2);
  //           SessionService.initSession(JSON.stringify(json3));
  //           props.history.push('/Staff_Dashboard')
  //         }
  //       });
  //     }
  //   });
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>

        </Avatar>
        <Typography 
          data-testid="signin-text"
        component="h1" variant="h5">
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="Username"
          label="Username"
          name="Username"
          data-testid="username_input"
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          data-testid="password_input"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
        <Grid item xs={12}>
          <p>{err}</p>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          data-testid="signin-button"
          className={classes.submit}
          onClick={submitform}
        >
          Sign In
          </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              
              </Link>
          </Grid>
          <Grid item>
            <Link href="./signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}