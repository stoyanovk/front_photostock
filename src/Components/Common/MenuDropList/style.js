import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
const CategoryListWrapper = styled.span`
  position: relative;
`;
const CategoryList = styled.ul`
    position: absolute;
    top: 40px;
    left: -110px;
    width:300px;
   
    list-style:none;
    margin:0;
    li{
        padding: 8px 15px;
        border-bottom:1px solid rgba(256,256,256,0.8);
        background:rgba(0,0,0,0.8);
    }
`;
// import { makeStyles } from '@material-ui/core/styles';
// import { grey } from '@material-ui/core/colors';
// const useStyles = makeStyles(theme => ({
//     root: {
//       position: 'relative',
//     },
//     paper: {
//       position: 'absolute',
//       top: 40,
//       left: -100,
//       width:300,
//       padding:15,
//       background:'rgba(0,0,0,0.3)'

//     },
//     fake: {
//       backgroundColor: grey[200],
//       height: theme.spacing(1),
//       margin: theme.spacing(2),
//       // Selects every two elements among any group of siblings.
//       '&:nth-child(2n)': {
//         marginRight: theme.spacing(3),
//       },
//     },
//   }));
//   export default useStyles
export { CategoryListWrapper, CategoryList};
