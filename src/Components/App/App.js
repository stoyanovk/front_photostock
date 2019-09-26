import React, { createContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../Store/store";
import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
import { categories, tags } from "../../Api/dataTest";
const MyContext = createContext();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <CssBaseline />
      <MyContext.Provider value={{ categories, tags }}>
        <Router>
          <Routes />
        </Router>
      </MyContext.Provider>
    </Provider>
  );
};
export { MyContext };
export default App;
