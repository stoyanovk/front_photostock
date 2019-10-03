import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import { connect } from "react-redux";
import { logout } from "../../Store/Actions";
import { Link, withRouter } from "react-router-dom";
const StyledMenu = styled(Menu)`
  transform: translateY(50px);
`;
function UserMenu({ logout, user, history }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    history.push('/sign-in')
  };
  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'>
        <AccountCircle />
      </IconButton>
      <StyledMenu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        <Link to={`/user/${user._id}`}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Log out</MenuItem>
      </StyledMenu>
    </div>
  );
}
const mapStateToProps = ({ userReducer: { user } }) => ({ user });
const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(UserMenu));
