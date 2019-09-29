import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import Routes from "../../Routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import GlobalStyle from "../GlobalStyle";
import { getCategories } from "../../Store/Actions";
import { categoriesApi } from "../../Api";
import { tags } from "../../Api/dataTest";
const MyContext = createContext();

const App = props => {
  const [categories, setCategories] = useState([]);
  console.log(props);
  // useEffect(() => {
  //   categoriesApi.getCategories().then(({ data: { data: { categories } } }) =>
  //     setCategories(categories)
  //   );
  // }, []);

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

const mapStateToProps = state => ({ state });
const mapDispatchToProps = dispatch => {
  return { onload: dispatch(getCategories()) };
};
console.log();
export { MyContext };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
