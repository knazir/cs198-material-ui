import React from 'react';
import { fade, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  searchIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1,
    width: theme.spacing(4),
    pointerEvents: 'none',
  },
}));

export default function SearchInput() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.searchIcon}><SearchIcon fontSize="small"/></div>
      <TextField id="outlined-search" label="Search" type="search" variant="outlined" size="small"/>
    </div>
  );
}
