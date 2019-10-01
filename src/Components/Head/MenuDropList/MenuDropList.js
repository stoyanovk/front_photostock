import React from "react";
import { MenuDropListWrapper } from "./style";
import { withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
const columnCount = arr => {
  if (arr.length > 10) {
    return 2;
  }
  if (arr.length > 20) {
    return 3;
  }
  return 1;
};

function MenuDropList({ categories, open }) {
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

const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});

export default connect(mapStateToProps)(withRouter(MenuDropList));
