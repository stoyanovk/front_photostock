import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import { useStyles, StyledTextField } from "./style";

export default function SignUp() {
  const classes = useStyles();

  return (
    <PageWrapper>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography className={classes.title} component='h1' variant='h5'>
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTextField
                  autoComplete='fname'
                  name='firstName'
                  variant='standard'
                  required
                  fullWidth
                  id='firstName'
                  label='First Name'
                  autoFocus
                />
              </Grid>

              <Grid item xs={12}>
                <StyledTextField
                  variant='standard'
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
              <Grid item xs={12}>
                <StyledTextField
                  variant='standard'
                  required
                  fullWidth
                  name='repeatPassword'
                  label='Repeat password'
                  type='password'
                  id='repeat-password'
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel className={classes.controlLabel}
                  control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
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
