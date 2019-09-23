import React, { Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Category from "../Pages/Category";
import PhotoPage from "../Pages/PhotoPage";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";
const CategoryLazy = lazy(() => import("../Pages/Category"));
export default () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/photo' component={PhotoPage} />
        <Route
          exact
          path='/category/:id'
          render={({
            match: {
              params: { id }
            }
          }) => {
            console.log(id);
            return <CategoryLazy id={id} />;
          }}
        />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn} />
      </Switch>
    </Suspense>
  );
};
