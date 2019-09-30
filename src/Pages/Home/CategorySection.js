import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Title, SectionWrapper } from "./style";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { redirectTo } from "../../utils";
import { url } from "../../utils";


function CategorySection({ categories, history }) {

  return (
    <SectionWrapper>
      <Title>Categories</Title>
      <GridList cellHeight={260} cols={6}>
        {categories.map(({ _id, name, label }) => (
          <GridListTile
            key={_id}
            cols={2}
            onClick={redirectTo(_id, history.push, "category")}>
            <img src={`${url}${label}`} alt={name} />
            <GridListTileBar title={name} />
          </GridListTile>
        ))}
      </GridList>
    </SectionWrapper>
  );
}
const mapStateToProps = ({ categoryReducer: { categories } }) => ({
  categories
});

export default connect(mapStateToProps)(withRouter(CategorySection));
