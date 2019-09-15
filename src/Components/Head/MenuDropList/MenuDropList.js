import React from 'react';
import {useStyles} from './style'
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

export default function MenuDropList({open}) {

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <div>
          {open ? (
            <Paper className={classes.paper}>
             <Typography>
                 some category1
             </Typography>
             <Typography>
                 some category2
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category3
             </Typography>
             <Typography>
                 some category6
             </Typography>
             <Typography>
                 some category7
             </Typography>
             <Typography>
                 some cate gory8 some category8
             </Typography>
             <Typography>
                 some category9
             </Typography>
             <Typography>
                 some category10
             </Typography>
            </Paper>
          ) : null}
        </div>
    </div>
  );
}
