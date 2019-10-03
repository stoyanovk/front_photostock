import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import PhotoPage from "../Pages/PhotoPage";
import User from "../Pages/User";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";
import { connect } from "react-redux";
// import ProvatRoute from "./PrivatRoute";
const Routes = ({ auth, user }) => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        path='/user/:id'
        // render={() => (auth ? <User user={user} /> : <Redirect to='/' />)}
        render={() => <User user={user} />}
      />

      <Route
        exact
        path='/photo/:id'
        render={({
          match: {
            params: { id }
          }
        }) => <PhotoPage id={id} />}
      />
      <Route
        exact
        path='/category/:id'
        render={({
          match: {
            params: { id }
          }
        }) => {
          return <Category id={id} />;
        }}
      />
      <Route
        path='/sign-up'
        render={() => (!auth ? <SignUp /> : <Redirect to='/' />)}
      />
      <Route
        path='/sign-in'
        component={() => (!auth ? <SignIn /> : <Redirect to='/' />)}
      />
      <Redirect to='/' />
    </Switch>
  );
};

const mapStateToProps = ({ userReducer: { auth, user } }) => ({ auth, user });
export default connect(mapStateToProps)(Routes);
