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
    marginTop: theme.spacing(5),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function StaffReg(props) {

  const classes = useStyles();

  const [err, setErr] = useState('');

  const islogged = SessionService.isAuthenticated();
  console.log(islogged);

  if (!islogged) {
    return (
      <Redirect
        to={{ pathname: '/', state: { from: props.location } }}
      />
    );
  }

  var submitform = () => {

    API_Service.signupstaff(document, (result) => {
      console.log(result);
      try{
      if (result === "error" || result.data.success === false) {
          setErr("Failed Sign Up Check Values");
        }
        else {
          setErr("Success we will contact you as soon as possible");
          
        };
        
      }catch(e){
        setErr("Failed Sign Up Check Values Err");
      }
      

      


      }
    );
  }






  var rows = [
    { id: "Username", type: "string" },
    { id: "Password", type: "password" },
    { id: "full_name", type: "strng" },
    { id: "Name_with_init", type: "string" },    
    { id: "Date_of_birth", type: "date" },
    { id: "Member_Since", type: "date" },

    { id: "NIC", type: "string" },
    { id: "Gender", type: "string" },
    { id: "House_no", type: "string" },

    { id: "Street", type: "string" },
    { id: "City", type: "string" },
    { id: "Postal_Code", type: "number" },
    { id: "Contact_Primary", type: "number" },
    { id: "Post_ID (0-5)", type: "number" },
  ]

  const field = rows.map((row) => {
    return <Grid  key={row.id} item xs={12}>
      <p>{row.id}</p>
      <TextField
        key={row.id}
        variant="outlined"
        required
        fullWidth
        id={row.id}
        name={row.id}
        type={row.type}
      />
    </Grid>

  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            {field}
            <Grid item xs={12}>
              <p>{err}</p>
            </Grid>
          </Grid>


          <Button
            onClick={submitform}
            fullWidth
            variant="contained"
            color="primary"
          >
            Add Memeber
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="./signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}