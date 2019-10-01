import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import { StyledTextField, ErrMessage } from "./style";
import { useStyles } from "./style";
import { authApi } from "../../Api";
import { withRouter } from "react-router-dom";
import { login } from "../../Store/Actions/userActions";
import { isEmail, isEmpty } from "validator";
const initialState = {
  email: "",
  password: ""
};

function SignIn(props) {
  const { logIn, history } = props;
  const classes = useStyles();
  const [state, setState] = useState(initialState);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = state;
    if (isEmpty(email)) {
      setErrorMessage("empty email field");
      return;
    } else if (isEmpty(password)) {
      setErrorMessage("is empty password field");
      return;
    } else if (!isEmail(email)) {
      console.log(isEmail(email));
      setErrorMessage("is not valid email");
      return;
    }
    setErrorMessage("");
    const stringState = JSON.stringify(state);
    authApi
      .signIn(stringState, { "Content-type": "application/json" })
      .then(({ data: { data: { token } } }) => {
        window.localStorage.setItem("token", token);
        logIn(token);
        history.push("/");
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
                value={state.password}
                onChange={handleChange}
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
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}>
              Sign In
            </Button>
            <ErrMessage>{errorMessage}</ErrMessage>
          </form>
        </div>
      </Container>
    </PageWrapper>
  );
}
const mapStateToProps = ({ userReducer: { auth } }) => ({ auth });
const mapDispatchToProps = dispatch => {
  return { logIn: token => dispatch(login(token)) };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignIn)
);
