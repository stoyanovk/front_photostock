import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from '../Pages/Home';
import { SignUp, SignIn} from "../Pages/SignUpSignIn"

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </Switch>
  );
};
