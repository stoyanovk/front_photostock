import React, { useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
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
  },
  typographyText: {
    color: "#fff",
    textAlign: "center"
  }
}));
const socetEvent = (setState, user) => {
  socket.on("chatCreated", ({ data: { resultChat: { messages } } }) => {
    setState(prevState => ({ ...prevState, messages }));
  });
  socket.on("messageAdded", ({ data: { resultChat: { messages } } }) => {
    setState(prevState => ({ ...prevState, messages, text: "" }));
  });

  socket.on("newUser", user => {
    setState(prevState => ({
      ...prevState,
      userList: [...prevState.userList, user]
    }));
  });
  socket.emit("createChat", { user_id: user._id, name: 112 });
};

const initialState = {
  text: "",
  newUser: "",
  userList: [],
  messages: []
};
function CommentField({
  user: { name, label, _id },
  photoId,
  commentsUpdate,
  type,
  MessagesList
}) {
  const classes = useStyles();
  const [state, setState] = React.useState(initialState);

  useEffect(() => {
    const user = { name, label, _id };
    type === "chat" && _id && socetEvent(setState, user);
  }, [_id]);

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

  const addMessage = text => {
    socket.emit("addMessage", {
      user_id: _id,
      name: 112,
      message: { user_id: _id, text }
    });
  };

  const handlesubmit = e => {
    e.preventDefault();
    type === "chat" ? addMessage(state.text) : addComment();
  };
  console.log(state);
  return (
    <>
      {MessagesList ? (
        <MessagesList>
          {state.messages.map(({ _id, text, user_id: { name, label } }) => {
            return (
              <ListItem key={_id}>
                <ListItemAvatar>
                  <Avatar alt={`${name}`} src={`${url}${label}`} />
                </ListItemAvatar>
                <ListItemText primary={`${text}`} />
              </ListItem>
            );
          })}
        </MessagesList>
      ) : null}
      <form onSubmit={handlesubmit}>
        {state.userList.length > 0 &&
          state.userList.map(user => (
            <Typography
              key={user._id}
              className={classes.typographyText}
              variant='h5'
              component='h2'
              children={`${user.name} connected to chat!`}
            />
          ))}
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
    </>
  );
}
const mapStateToProps = ({ userReducer: { user } }) => ({ user });

export default connect(mapStateToProps)(CommentField);
