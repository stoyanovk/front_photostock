import React from "react";
import { MenuDropListWrapper } from "./style";
import { withConsumer } from "../../../HOC";
const columnCount = arr => {
  if (arr.length > 10) {
    return 2;
  }
  if (arr.length > 20) {
    return 3;
  }
  return 1;
};
function MenuDropList({ open, value: { categories } }) {
  const count = columnCount(categories);
  return (
    <MenuDropListWrapper count={count}>
      {open ? (
        <ul>
          {categories.map(({ name, id }) => (
            <li key={id}>{name}</li>
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

export default withConsumer(MenuDropList);
