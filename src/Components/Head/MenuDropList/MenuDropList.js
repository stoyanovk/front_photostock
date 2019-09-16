import React from "react";
import { MenuDropListWrapper } from "./style";
import { withConsumer } from "../../../HOC";

function MenuDropList({ open, categories }) {
  const columnCount = arr => {
    if (arr.length > 10) {
      return 2;
    }
    if (arr.length > 20) {
      return 3;
    }
    return 1;
  };
    const count = columnCount(categories);
    console.log(count)
  return (
    <MenuDropListWrapper count={count}>
      {open ? (
        <ul>
          {categories.map(({ label, id }) => (
            <li key={id}>{label}</li>
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
    { id: 3, label: "food" },
    { id: 4, label: "girls" },
    { id: 5, label: "sea" },
    { id: 6, label: "sea" },
    { id: 7, label: "sea" },
    { id: 8, label: "sea" },
    { id: 9, label: "sea" },
    { id: 10, label: "sea" },
    { id: 11, label: "anime" },
    { id: 21, label: "animal" },
    { id: 31, label: "food" },
    { id: 41, label: "girls" }
  ]
};

export default withConsumer(MenuDropList);
