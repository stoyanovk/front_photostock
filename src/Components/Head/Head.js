import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Button from "@material-ui/core/Button";
import img from "../../assets/img/photo-camera.svg";
import MenuDropList from "../Common/MenuDropList";
import HeaderSearch from "../Common/HeaderSearch";
import useStyles from "./style";

export default function ButtonAppBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log(open);
  const mouseEnter = () => {
    setOpen(open => true);
  };
  const mouseLeave = () => {
    setOpen(open => false);
  };
  return (
    <div>
      <AppBar className={classes.bg} position="static">
        <Toolbar className={classes.justifyContent}>
          <div className={classes.menuItem}>
            <div className={classes.logoWrap}>
              <img className={classes.logo} src={img} alt="logo" />
            </div>
            <div
              className={classes.menuButton}
                onMouseLeave={mouseLeave}
              onMouseEnter={mouseEnter}
              body1="span"
            >
              CATEGORY
              <MenuDropList open={open} />
            </div>
            <HeaderSearch/>
          </div>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
