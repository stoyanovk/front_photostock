import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};
export default App;
