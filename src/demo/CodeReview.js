import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Chip from '@material-ui/core/Chip';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Paper from '@material-ui/core/Paper';

import Code from './Code';
import SubmissionControlBar from './SubmissionControlBar';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(4)
  },
  categories: {
    padding: theme.spacing(0.5),
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  disabledPanel: {
    marginBottom: theme.spacing(2),
  },
  enabledPanel: {
    marginBottom: theme.spacing(0.5),
  },
  grade: {
    flexDirection: 'column',
  },
  header: {
    marginBottom: theme.spacing(0.5),
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  label: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  overallComment: {

  },
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
}));

export default function CodeReview() {
  const classes = useStyles();
  const grades = [
    { category: 'Functionality', score: '✓+' },
    { category: 'Style', score: '✓' },
  ];
  return (
    <Container className={classes.root} maxWidth="lg">
      <Typography className={classes.header} variant="h5" component="h2">Code Review</Typography>
      <Paper className={`${classes.paper} ${classes.disabledPanel}`}>
        <ExpansionPanel disabled>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="overall-comment-content"
                                 id="overall-comment-header">
            <Typography className={classes.heading}>Grade (Not Released)</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.grade}>
            Disabled
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
      <Paper className={`${classes.paper} ${classes.enabledPanel}`}>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="overall-comment-content"
                                 id="overall-comment-header">
            <Typography className={classes.heading}>Grade</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.grade}>
            <div className={classes.overallComment}>
              Fantastic work! I can tell that you're really grasping the material. A couple of notes:
              <ul>
                <li>Add comments, even when you think you don't need them</li>
                <li>Take time to "refactor" you're code</li>
              </ul>
            </div>
            <Paper className={classes.categories}>
              {grades.map((data, index) => {
                const label = <><span className={classes.gradeLabel}>{data.category}</span>: {data.score}</>;
                return <Chip key={index} label={label} className={classes.chip}/>;
              })}
            </Paper>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Paper>
      <SubmissionControlBar/>
      <Code/>
    </Container>
  );
}
