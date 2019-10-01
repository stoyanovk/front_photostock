import React from "react";
import { Switch, Route,Redirect } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import PhotoPage from "../Pages/PhotoPage";
import User from "../Pages/User";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";
import PrivatRoute from './PrivatRoute'
const Routes = () => {

  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/user/:id' component={User} />
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
      <PrivatRoute path='/sign-up' component={SignUp} />
      <PrivatRoute path='/sign-in' his='ke' component={SignIn} />
      <Redirect to="/"/>
    </Switch>
  );
};

export default Routes;
