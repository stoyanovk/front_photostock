import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import {connect} from 'react-redux'
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import { StyledTextField } from "../SignUpSignIn/style";
import { useStyles } from "./style";
import { authApi } from "../../Api";
import { Redirect } from 'react-router-dom';
import {login} from '../../Store/Actions'

const initialState = {
  email: "",
  password: ""
};
function SignIn({auth,logIn}) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  console.log(auth, logIn)
  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const stringState = JSON.stringify(state);
    console.log(stringState);
    authApi
      .signIn(stringState, { "Content-type": "application/json" })
      .then(({ data: { data: { token } } }) => {
        window.localStorage.setItem('token', token)
        logIn(token)
      });
  };
  return (
    <PageWrapper>
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid item xs={12}>
              <StyledTextField
                variant='standard'
                value={state.email}
                onChange={handleChange}
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='off'
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                value={state.password}
                onChange={handleChange}
                variant='standard'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='off'
              />
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
}
const mapStateToProps = ({ auth }) => auth;
const mapDispatchToProps = (dispatch) => {
  return { logIn: () => dispatch(login()) }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);