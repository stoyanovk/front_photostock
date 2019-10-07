import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { photosApi } from "../../Api";
import Typography from "@material-ui/core/Typography";
import { SectionWrapper } from "./style";
import CommentField from "./CommentField";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 720,
    margin: "0 auto",
    backgroundColor: "rgba(255,255,255,0.05)"
  },
  inline: {
    display: "inline"
  },
  title: {
    fontSize: 24,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20
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

  const commentsUpdate = () => {
    photosApi
      .getPhotoComments(photoId)
      .then(({ data: { data: { comments } } }) => setComments(comments));
  };

  return (
    <SectionWrapper>
      <Typography className={classes.title} component='h2'>
        Comments
      </Typography>

      <div className={classes.root}>
        <CommentField photoId={photoId} commentsUpdate={commentsUpdate} />
        <List>
          {comments.map(({ text, _id, user: { label, name } }) => {
            return (
              <Comment key={_id} comment={text} imageUrl={label} name={name} />
            );
          })}
        </List>
      </div>
    </SectionWrapper>
  );
}
