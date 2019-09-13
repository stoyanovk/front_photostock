import { grey } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 22,
    right: 0,
    left: 0,
    padding:'10px',
    minWidth:'400px',
    maxHeight:'300px',
    columnCount:3
  },
  fake: {
    backgroundColor: grey[200],
    height: theme.spacing(1),
    margin: theme.spacing(2),
    '&:nth-child(2n)': {
      marginRight: theme.spacing(3),
    },
  },
}));
export {useStyles}
