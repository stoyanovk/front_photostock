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

const arr = [
  {
    img: "./img/1.jpg",
    title: "Image 1",
    author: "author 1",
    cols: 3
  },
  {
    img: "./img/2.jpeg",
    title: "Image 1",
    author: "author 1"
  },
  {
    img: "./img/3.jpg",
    title: "Image 1",
    author: "author 1"
  },
  {
    img: "./img/4.jpg",
    title: "Image 1",
    author: "author 1"
  },
  {
    img: "./img/5.jpg",
    title: "Image 1",
    author: "author 1"
  },
  {
    img: "./img/6.jpg",
    title: "Image 1",
    author: "author 1"
  }
];
export default function CategorySection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={260} className={classes.gridList} cols={6}>
              {arr.map(({ img, title }) => {
            
          return (
              <GridListTile key={img} cols={2}>
              <img src={img} alt={title} />
            </GridListTile>
          );
        })}
      </GridList>
    </div>
  );
}
