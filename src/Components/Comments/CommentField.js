import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { makeStyles } from "@material-ui/core/styles";
import { url } from "../../utils";
import Fab from "@material-ui/core/Fab";
import Icon from "@material-ui/core/Icon";
import { photosApi } from "../../Api";

import openSocket from "socket.io-client";
const socket = openSocket("http://10.0.1.179:3000/");

const useStyles = makeStyles(theme => ({
  textArea: {
    width: "100%"
  },
  white: {
    color: "#fff"
  },
  button: {
    padding: "0 10px",
    marginLeft: 8,
    backgroundColor: "rgba(255,255,255, 0.15)",
    transform: "scale(.8)"
  },
  textItemList: {
    display: "flex",
    alignItems: "center"
  }
}));
const initialState = {
  text: ""
};
function CommentField({ user: { name, label, _id }, photoId, commentsUpdate }) {
  const classes = useStyles();
  const [state, setState] = React.useState(initialState);

  useEffect(() => {
    socket.on("chatCreated", (data) => {
      // alert(resultData[0].name + ' connected')
      console.log(data)
    });

    socket.on('newUser', ({name}) => {
      // console.log(data)
      alert(name + ' connected to chat')
    })
    socket.emit("createChat", { user_id: _id, name: 112,});
    console.log('render')
  }, []);
  const handleChange = ({ target: { value } }) => {
    setState(state => ({ ...state, text: value }));
  };

  const addComment = async () => {
    const apiCall = await photosApi.addPhotoComment(photoId, state);
    const {
      data: {
        data: { comment }
      },
      status
    } = await apiCall;
    if (status === 200) {
      commentsUpdate(comment);
      setState(state => ({ ...state, text: "" }));
    }
  };

  const addMessage = (text) => {
    socket.emit("createChat", { user_id: _id, name: 112,message:{user_id:_id,text} });
  };

  const handlesubmit = e => {
    e.preventDefault();
    // addComment();
    addMessage(state.text);
  };
  console.log('rend')
  return (
    <form onSubmit={handlesubmit}>
      <ListItem alignItems='center'>
        <div>
          <ListItemAvatar>
            <Avatar alt={name} src={`${url}${label}`} />
          </ListItemAvatar>
          <span className={classes.white}>{name}</span>
        </div>
        <ListItemText>
          <div className={classes.textItemList}>
            <TextField
              id='outlined-multiline-static'
              label=''
              multiline
              rows='1'
              value={state.text}
              margin='normal'
              variant='outlined'
              className={classes.textArea}
              onChange={handleChange}
            />
            <Fab
              component='button'
              type='submit'
              variant='round'
              className={classes.button}>
              <Icon>send</Icon>
            </Fab>
          </div>
        </ListItemText>
      </ListItem>
    </form>
  );
}
const mapStateToProps = ({ userReducer: { user } }) => ({ user });

export default connect(mapStateToProps)(CommentField);
