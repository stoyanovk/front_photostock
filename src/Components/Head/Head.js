import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import img from "../../assets/img/photo-camera.svg";
import MenuDropList from "./MenuDropList";
import HeaderSearch from "../Common/HeaderSearch";
import useStyles from "./style";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const mouseEnter = () => {
    setOpen(open => true);
  };
  const mouseLeave = () => {
    setOpen(open => false);
  };
  return (
    <div>
      <AppBar className={classes.header} position='static'>
        <Toolbar className={classes.justifyContent}>
          <div className={classes.menuItem}>
            <div className={classes.logoWrap}>
              <Link to='/'>
                <img className={classes.logo} src={img} alt='logo' />
              </Link>
            </div>
            <div
              className={classes.menuButton}
              onMouseLeave={mouseLeave}
              onMouseEnter={mouseEnter}
              body1='span'>
              CATEGORY
              <MenuDropList open={open} />
            </div>
          </div>
          <div className={classes.dFlex}>
            <HeaderSearch />
            <Link to='/sign-in'>
              <Button color='inherit'>Sign In</Button>
            </Link>
            <Link to='/sign-up'>
              <Button color='inherit'>Sign Up</Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
