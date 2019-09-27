import React from "react";
import { MenuDropListWrapper } from "./style";
import { withConsumer } from "../../../HOC";
import { withRouter, Link } from "react-router-dom";
const columnCount = arr => {
  if (arr.length > 10) {
    return 2;
  }
  if (arr.length > 20) {
    return 3;
  }
  return 1;
};

function MenuDropList({ open, value: { categories }, history }) {
  const count = columnCount(categories);
  return (
    <MenuDropListWrapper count={count}>
      {open ? (
        <ul>
          {categories.map(({ name, _id }) => (
            <li key={_id}>
              <Link to={`/category/${_id}`}>{name}</Link>
            </li>
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
