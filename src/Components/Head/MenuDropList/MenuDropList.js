import React from "react";
import { MenuDropListWrapper } from "./style";
import { withConsumer } from "../../../HOC";
import { withRouter } from "react-router-dom";
const columnCount = arr => {
  if (arr.length > 10) {
    return 2;
  }
  if (arr.length > 20) {
    return 3;
  }
  return 1;
};
const handleClick = (id, method) => () => {
 method(`/category/${id}`)
};
function MenuDropList({ open, value: { categories }, history }) {
  const count = columnCount(categories);
  return (
    <MenuDropListWrapper count={count}>
      {open ? (
        <ul>
          {categories.map(({ name, id }) => (
            <li key={id} onClick={handleClick(id,history.push)}>{name}</li>
          ))}
        </ul>
      ) : null}
    </MenuDropListWrapper>
  );
}
MenuDropList.defaultProps = {
  categories: [
    { id: 1, label: "anime" },
    { id: 2, label: "animal" },
    { id: 3, label: "food" }
  ]
};

export default withRouter(withConsumer(MenuDropList));
