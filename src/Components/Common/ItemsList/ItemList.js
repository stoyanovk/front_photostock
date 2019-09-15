import React from "react";
import { ListWrapper } from "./style";
export default function ItemList({ children, listStyle }) {
  return (
    <ListWrapper>
          <ul className={listStyle}>{children}</ul>
    </ListWrapper>
  );
}
