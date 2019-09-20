import React, { useContext } from "react";
import { MyContext } from "../Components/App/App";
const withConsumer = BaseComponent => {
  return props => {
    const value = useContext(MyContext);
    return <BaseComponent {...props} value={value} />;
  };
};
export default withConsumer;

// function mapStateToProps(state) {
//   const { todos } = state;
//   return { todoList: todos };
// }
// const stateStorage = {
//     todos: [1, 2, 3, 4]
// }
    
// const connect = func => component => (Obje.assign());

// const TodoList = {};

// connect(mapStateToProps)(TodoList);

// console.log(connect(mapStateToProps)(TodoList));
