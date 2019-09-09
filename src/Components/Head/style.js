import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
    
    logoWrap:{
        width:"50px",
        marginRight:"50px"
    },
    logo:{
        width:"100%"
    },
    bg: {
      background: "#2d2d2d"
    },
    root: {
      flexGrow: 1
    },
    menuButton: {
     padding:20,
     cursor:'pointer'
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
    }
  }));
  export default useStyles