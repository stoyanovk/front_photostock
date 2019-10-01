import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const LinkWrapper = styled.div`
  a {
    color: #fff;
    font-size: 16px;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }
`;
const useStyles = makeStyles(theme => ({
  header: {
    position: "relative",
    zIndex: 10,
    background: "#2d2d2d"
  },
  logoWrap: {
    width: "50px",
    marginRight: "50px"
  },
  logo: {
    width: "100%"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    padding: 23,
    cursor: "pointer"
  },
  title: {
    flexGrow: 1
  },
  justifyContent: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuItem: {
    display: "flex",
    alignItems: "center"
  },
  dFlex: {
    display: "flex"
  }
}));
export { LinkWrapper, useStyles };
