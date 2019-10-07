import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { url } from "../../utils";

const useStyles = makeStyles(theme => ({
  text: {
    color: "#fff"
  }
}));
export default function Comment({ comment, imageUrl, name }) {
  const classes = useStyles();
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar alt={name} src={`${url}${imageUrl}`} />
      </ListItemAvatar>
      <ListItemText
        className={classes.text}
        primary={name}
        secondary={
          <React.Fragment>
            <Typography
              component='span'
              className={classes.text}
              variant='body2'>
              {comment}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
