import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Title, SectionWrapper } from "./style";
import { withConsumer } from "../../HOC";
import { withRouter } from "react-router-dom";
import {redirectTo} from '../../utils'
function CategorySection({ value: { categories }, history }) {
 
  return (
    <SectionWrapper>
      <Title>Categories</Title>
      <GridList cellHeight={260} cols={6}>
        {categories.map(({ id, name, label }) => {
          return (
            <GridListTile
              key={id}
              cols={2}
              onClick={redirectTo(id, history.push,'category')}>
              <img src={label} alt={name} />
              <GridListTileBar title={name} />
            </GridListTile>
          );
        })}
      </GridList>
    </SectionWrapper>
  );
}
export default withRouter(withConsumer(CategorySection));
