import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Paginations(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination count={20} variant="outlined" color="primary" style={{background:"rgba(255,255,255,0.1)"}} onChange={(e,n)=>{props.setI(n)}} />
    </div>
  );
}
