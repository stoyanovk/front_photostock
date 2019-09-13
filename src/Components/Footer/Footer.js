import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: "#2d2d2d"
  },
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color:"#fff"
  },
 
}));
export default function Footer() {
  const { root, paper,footer } = useStyles();

  return (
    <footer className={footer}>
      <Grid container direction="row" className={root}>
        <Grid item xs={12} sm={6} lg={3} className={paper}>
          <Typography>here could be your something interesting</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={paper}>
          <Typography>here could be your something interesting</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={paper}>
          <Typography>here could be your something interesting</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={paper}>
          <Typography>here could be your something interesting</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className={paper}>
          <Typography>something interesting</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={6} className={paper}>
          <Typography>something interesting</Typography>
        </Grid>
      </Grid>
    </footer>
  );
}
