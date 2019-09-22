import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";

export default () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route
        exact
        path='/category/:id'
        render={({match:{params:{id}}}) => {
          console.log(id);
          return <Category id={id} />;
        }}
      />
      <Route path='/sign-up' component={SignUp} />
      <Route path='/sign-in' component={SignIn} />
    </Switch>
  );
};
