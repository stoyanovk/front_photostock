import React, { useContext } from "react";
import { MyContext } from "../Components/App/App";
const withConsumer = BaseComponent => {
  return props => {
    const value = useContext(MyContext);
    return <BaseComponent {...props} value={value} />;
  };
};
export default withConsumer;



