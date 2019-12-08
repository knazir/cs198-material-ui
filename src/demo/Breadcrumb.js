import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 1.5),
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomSeparator(props) {
  const classes = useStyles();
  const items = (props.items || []).map(item => {
    return (
      <Link key={item} color="inherit" href={item.toLowerCase()} onClick={handleClick}>{item}</Link>
    );
  });
  return (
    <Breadcrumbs className={classes.root} separator="›" aria-label="breadcrumb">
      {items.slice(0, items.length - 1)}
      <Typography color="textPrimary">
        {props.items[props.items.length - 1]}
      </Typography>
    </Breadcrumbs>
  );
}
