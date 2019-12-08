import React from 'react';
import { makeStyles } from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Breadcrumb from './demo/Breadcrumb';
import Courses from './demo/Courses'
import Header from './demo/Header';

const useStyles = makeStyles(theme => ({

}));

export default function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Header/>
      <Breadcrumb items={['Demo', 'Tomato', 'Sauce']}/>
      <Container maxWidth="lg">
        <Box my={4}>
          <Typography variant="h4" component="h2" gutterBottom>
            CS198 Material UI
          </Typography>
          <Typography>
            A bunch of demo pages and components using the React Material UI library.
          </Typography>
        </Box>
      </Container>
      <Courses/>
    </React.Fragment>
  );
}
