import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";
import PageWrapper from "../../Components/PageWrapper";
import { StyledTextField } from "../SignUpSignIn/style";
import { useStyles } from "./style";

export default function SignIn() {
  const classes = useStyles();

  return (
    <PageWrapper>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
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
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
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
