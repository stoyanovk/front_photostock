import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    zIndex:5,
    top: 20,
    right: 0,
    left: 0,
    padding:'10px',
    minWidth:'400px',
    maxHeight:'300px',
    columnCount:3
  },

}));
export {useStyles}
