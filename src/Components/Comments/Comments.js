import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { photosApi } from "../../Api";
import Comment from "./Comment";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 720,
    margin: "0 auto",
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  inline: {
    display: "inline"
  }
}));

export default function Comments({ photoId }) {
  const classes = useStyles();
  const [comments, setComments] = useState([]);
  useEffect(() => {
    photoId &&
      photosApi
        .getPhotoComments(photoId)
        .then(({ data: { data: { comments } } }) => setComments(comments));
  }, [photoId]);

  return (
    <List className={classes.root}>
      {comments.map(({text,_id,user:{label,name}}) => {
        return <Comment key={_id} comment={text} imageUrl={label} name={name}/>;
      })}
    </List>
  );
}
