import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => {
  console.log(theme);
  return ({
    root: {
      width: '100%',
    },
    paper: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 650,
    },
    tableColumnHeader: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText,
      fontSize: '1.25em',
      fontWeight: 'bold',
    },
    tableRow: {
      cursor: 'pointer',

      '&:nth-child(even)': {
        backgroundColor: '#e0e0e0',
      },
      '&:hover': {
        backgroundColor: '#e0eeee',
      },
    },
  });
});

function createData(course, role, instructors) {
  return { course, role, instructors };
}

const rows = [
  createData('CS106A', 'Developer (staff)', 'Nick Parlante'),
  createData('CS106AX', 'Developer (staff)', 'Jerry Cain'),
  createData('CS106B', 'Developer (staff)', 'Cynthia Lee, Julie Zelenski'),
  createData('CS106L', 'Developer (staff)', 'Avery Wang, Anna Zeng'),
  createData('CS106X', 'Developer (staff)', 'Jerry Cain, Julie Zelenski'),
];

export default function Courses() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" component="h2">
        Courses for Autumn 2019
      </Typography>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell className={classes.tableColumnHeader}>Course</TableCell>
              <TableCell className={classes.tableColumnHeader}>Role</TableCell>
              <TableCell className={classes.tableColumnHeader}>Instructor(s)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.course} className={classes.tableRow}>
                <TableCell component="th" scope="row">
                  {row.course}
                </TableCell>
                <TableCell align="left">{row.role}</TableCell>
                <TableCell align="left">{row.instructors}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}
