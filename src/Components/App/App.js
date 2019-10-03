import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
import { $getCategories, onLoadLogin } from "../../Store/Actions";
import { tags } from "../../Api/dataTest";
const MyContext = createContext();

const App = ({ $getCategories, onLoadLogin }) => {
  const token = localStorage.getItem("token");

  token && onLoadLogin();
  $getCategories();

  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <MyContext.Provider value={{ tags }}>
        <Router>
          <Routes />
        </Router>
      </MyContext.Provider>
    </>
  );
};

const mapDispatchToProps = {
  $getCategories,
  onLoadLogin
};

export { MyContext };
export default connect(
  null,
  mapDispatchToProps
)(App);
