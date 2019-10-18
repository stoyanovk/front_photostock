import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignUp, SignIn } from "../Pages/SignUpSignIn";
import { connect } from "react-redux";
import Home from "../Pages/Home";
import Spinner from "../Components/Common/Spinner";
const Category = lazy(() => import("../Pages/Category"));
const PhotoPage = lazy(() => import("../Pages/PhotoPage"));
const User = lazy(() => import("../Pages/User"));
const AddPhoto = lazy(() => import("../Pages/AddPhoto"));
const AdminPage = lazy(() => import("../Pages/AdminPage"));
const ChatPage = lazy(() => import("../Pages/ChatPage"));
const Routes = ({ auth, user }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/user/:id'
          // render={() => (auth ? <User user={user} /> : <Redirect to='/' />)}
          render={() => <User user={user} />}
        />

        <Route
          exact
          path='/photo/add'
          // render={() => (auth ? <AddPhoto user={user} /> : <Redirect to='/' />)}
          render={() => <AddPhoto user={user} />}
        />
        <Route
          path='/admin-page'
          // render={() => (auth ? <AddPhoto user={user} /> : <Redirect to='/' />)}
          render={() => <AdminPage user={user} />}
        />
        <Route
          exact
          path='/photo/:id'
          render={({
            match: {
              params: { id }
            }
          }) => (
            <Suspense fallback={<Spinner />}>
              <PhotoPage id={id} />
            </Suspense>
          )}
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
        <Route path='/chat-page' render={() => <ChatPage />} />
        <Redirect to='/' />
      </Switch>
    </Suspense>
  );
};

const mapStateToProps = ({ userReducer: { auth, user } }) => ({ auth, user });
export default connect(mapStateToProps)(Routes);
