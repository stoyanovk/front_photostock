import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store";
import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
const arr =[1,2,3,45,6,7]
const MyContext = createContext();
const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <MyContext.Provider value={arr}>
        <Router>
          <Routes />
        </Router>
      </MyContext.Provider>
    </Provider>
  );
};
export { MyContext };
export default App;
