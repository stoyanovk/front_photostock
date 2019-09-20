import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { Title, SectionWrapper } from "./style";
import { withConsumer } from "../../HOC";

function CategorySection({ value: { categories } }) {
  return (
    <SectionWrapper>
      <Title>Categories</Title>
      <GridList cellHeight={260} cols={6}>
        {categories.map(({ id, name, label }) => {
          return (
            <GridListTile key={id} cols={2}>
              <img src={label} alt={name} />
              <GridListTileBar title={name} />
            </GridListTile>
          );
        })}
      </GridList>
    </SectionWrapper>
  );
}
export default withConsumer(CategorySection);
