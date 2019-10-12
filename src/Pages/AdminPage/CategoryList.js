import React from "react";
import ItemList from "../../Components/Common/ItemsList";
import { connect } from "react-redux";
import ListItem from '@material-ui/core/ListItem';
function CategoryList({ categories }) {
  return (
    <ItemList>
      {categories
        ? categories.map(({ _id, name }) => {
            return <ListItem key={_id}>{name}</ListItem>;
          })
        : null}
    </ItemList>
  );
}
const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});
export default connect(mapStateToProps)(CategoryList);
