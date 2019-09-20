import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import { withConsumer } from "../../HOC";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden"
  },
  gridList: {
    width: "100%"
  }
}));

function CategorySection({ value:{categories} }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={260} className={classes.gridList} cols={6}>
        {categories.map(({ id, name, label }) => {
          return (
            <GridListTile key={id} cols={2}>
              <img src={label} alt={name} />
              <GridListTileBar title={name} />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}
export default withConsumer(CategorySection);
