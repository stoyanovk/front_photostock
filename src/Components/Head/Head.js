import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import img from "../../assets/img/photo-camera.svg";
import MenuDropList from "./MenuDropList";
import HeaderSearch from "../Common/HeaderSearch";
import { useStyles, LinkWrapper } from "./style";
import { Link } from "react-router-dom";
import UserMenu from "./UserMenu";
import { connect } from "react-redux";
import Spinner from "../../Components/Common/Spinner";
function Head({ auth, loaded }) {
  console.log(loaded);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const mouseEnter = () => () => {
    setOpen(true);
  };
  const mouseLeave = () => () => {
    setOpen(false);
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
              onMouseLeave={mouseLeave()}
              onMouseEnter={mouseEnter()}
              body1='span'>
              CATEGORY
              <MenuDropList open={open} />
            </div>
          </div>

          <HeaderSearch />
          {loaded ? (
            auth ? (
              <UserMenu />
            ) : (
              <LinkWrapper>
                <Link to='/sign-in'>Sign In</Link>
                <Link to='/sign-up'>Sign Up</Link>
              </LinkWrapper>
            )
          ) : (
            <Spinner />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps = ({ userReducer: { auth, loaded } }) => ({
  auth,
  loaded
});

export default connect(mapStateToProps)(Head);
