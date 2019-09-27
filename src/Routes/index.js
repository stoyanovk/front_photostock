import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import PhotoPage from "../Pages/PhotoPage";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";

export default () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
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
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Suspense>
  );
};
