import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
import { categoriesApi } from "../../Api";
import { tags } from "../../Api/dataTest";
const MyContext = createContext();

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesApi.getCategories().then(({ data: { data: { categories } } }) =>
      setCategories(categories)
    );
  }, []);

  return (
    <>
      <GlobalStyle />
      <CssBaseline />
      <MyContext.Provider value={{ categories, tags }}>
        <Router>
          <Routes />
        </Router>
      </MyContext.Provider>
    </>
  );
};
export { MyContext };
export default App;
