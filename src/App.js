import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import Breadcrumb from './demo/Breadcrumb';
import CodeReview from './demo/CodeReview';
import Courses from './demo/Courses'
import Header from './demo/Header';
import ModalTest from './demo/ModalTest';

export default function App() {
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
      <ModalTest/>
      <CodeReview/>
    </React.Fragment>
  );
}
