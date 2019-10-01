import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function PrivatRoute({ component: Component, auth, ...rest }) {
  return auth ? (
      <Route {...rest} render={(props) => {
          console.log(props, rest);
          return (<Component {...rest} {...props} />)
      }} />
  ) : (
    <Redirect to='/' />
  );
}
const mapStateToProps = ({ userReducer: { auth } }) => ({ auth });
export default connect(mapStateToProps)(PrivatRoute);
