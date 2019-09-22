import { makeStyles } from "@material-ui/core/styles";
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
export default useStyles;
