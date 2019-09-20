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
    margin: theme.spacing(4, 0, 3),
    backgroundColor: "#fff",
    color: "#2d2d2d",
    borderRadius: 12
  },
  controlLabel: {
    color: "#fff"
  },
  title: {
    color: "#fff"
    },
    link: {
        color: '#fff',
        
  }
}));
export { useStyles, StyledTextField };
