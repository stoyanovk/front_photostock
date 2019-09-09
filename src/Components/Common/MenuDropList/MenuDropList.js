import React from "react";
import Typography from "@material-ui/core/Typography";
import { CategoryListWrapper, CategoryList } from "./style";
export default function MenuDropList({ open }) {
  return (
    <CategoryListWrapper>
      {open ? (
        <CategoryList>
          <li>
            <Typography>some category</Typography>
          </li>
          <li>
            <Typography>some category</Typography>
          </li>
          <li>
            <Typography>some category</Typography>
          </li>
          <li>
            <Typography>some category</Typography>
          </li>
        </CategoryList>
      ) : null}
    </CategoryListWrapper>
  );
}
