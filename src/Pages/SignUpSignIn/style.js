import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  label {
    color: #fff !important;
  }
  input {
    color: #fff;
    &::placeholder {
      color: #fff;
    }
  }
  .MuiInputBase-root {
    &:before {
      border-bottom: 2px solid #fff !important;
    }
  }
  .MuiInput-root {
    &:after {
      border-bottom: 2px solid #fff !important;
    }
  }
`;
const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: '30px auto',
    backgroundColor: "#fff",
    color: "#2d2d2d",
    borderRadius: 12,
    maxWidth: 200,
    display:'block'
  },
  controlLabel: {
    color: "#fff"
  },
  title: {
    color: "#fff"
  },
  link: {
    color: "#fff"
  }
}));
const ErrMessage = styled.span`
  color: red;
  text-align: center;
  display: block;
`;

export { useStyles, StyledTextField, ErrMessage };
