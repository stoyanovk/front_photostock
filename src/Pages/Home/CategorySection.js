import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

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


export default function CategorySection({ category }) {
  const classes = useStyles();

  return (
    <div></div>
    // <div className={classes.root}>
    //   <GridList cellHeight={260} className={classes.gridList} cols={6}>
    //     {category.map(({ img, title }) => {
    //       return (
    //         <GridListTile key={img} cols={2}>
    //           <img src={img} alt={title} />
    //         </GridListTile>
    //       );
    //     })}
    //   </GridList>
    // </div>
  );
}
