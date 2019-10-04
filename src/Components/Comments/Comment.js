import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { url } from "../../utils";
export default function Comment({ comment, imageUrl, name }) {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar alt={name} src={`${url}${imageUrl}`} />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={
          <React.Fragment>
            <Typography component='span' variant='body2' color='textPrimary'>
              {comment}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}
