import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import { useStyles, StyledTextField, ErrMessage } from "./style";
import { isEmail, isEmpty } from "validator";
import { withRouter } from "react-router-dom";
import { authApi } from "../../Api";
import ImgLabel from "../../Components/Common/ImgLabel";
const initialState = {
  name: "",
  email: "",
  password: "",
  label: ""
};

function SignUp({ history }) {
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, password, label } = state;
    if (isEmpty(name)) {
      setErrorMessage("empty name field");
      return;
    } else if (isEmpty(email)) {
      setErrorMessage("empty email field");
      return;
    } else if (isEmpty(password)) {
      setErrorMessage("is empty password field");
      return;
    } else if (!isEmail(email)) {
      console.log(isEmail(email));
      setErrorMessage("is not valid email");
      return;
    } else if (label === '') {
      setErrorMessage("is empty label field");
      return;
    }
    setErrorMessage("");
    const formData = new FormData();
    formData.append('name',name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('label', label)
    // const stringState = JSON.stringify(state);
    authApi
      .signUp(formData)
      .then(res => history.push("/sign-in"));
  };

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleChangeFile = file => {
    setState(prevdata => ({ ...prevdata, label: file }));
  };
  return (
    <PageWrapper>
      <Container component='main' maxWidth='md'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.title} component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Grid item xs={12}>
                  <StyledTextField
                    onChange={handleChange}
                    value={state.name}
                    autoComplete='Name'
                    name='name'
                    variant='standard'
                    required={true}
                    fullWidth
                    id='firstName'
                    label='Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    onChange={handleChange}
                    value={state.email}
                    variant='standard'
                    required={true}
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='off'
                  />
                </Grid>
                <Grid item xs={12}>
                  <StyledTextField
                    onChange={handleChange}
                    value={state.password}
                    variant='standard'
                    required={true}
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='off'
                  />
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <ImgLabel handleChangeFile={handleChangeFile} label={state.label} />
              </Grid>
            </Grid>
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign Up
            </Button>
            <ErrMessage>{errorMessage}</ErrMessage>
            <Grid container justify='flex-end'>
              <Grid item>
                <Link to='/sign-in' className={classes.link} variant='body2'>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
}
export default withRouter(SignUp);
