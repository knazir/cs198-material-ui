import React from 'react';
import { makeStyles } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Paper from '@material-ui/core/Paper';
import Switch from '@material-ui/core/Switch';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: '1em',
  },
  controls: {
    '> *': {
      fontWeight: theme.typography.fontWeightMedium,
      marginLeft: '1em',
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  viewControl: {
    marginRight: '1em',
  },
}));

export default function SubmissionControlBar() {
  const classes = useStyles();
  const files = [
    'code1/checkerboard.py', 'code1/crazy-stanford.py', 'code1/logic-hw.py', 'code1/outback.py', 'code1.triple.py'
  ];
  const versions = ["Tue, Oct 1, 2019 2:34 PM - ajweiss"];

  const [state, setState] = React.useState({
    file: '',
    version: '',
    view: 'files',
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const handleViewChange = (event, newView) => {
    setState({
      view: newView
    });
  };

  return (
    <Paper className={classes.root}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="version-native-simple">Version</InputLabel>
          <NativeSelect value={state.version} onChange={handleChange('version')}
                  inputProps={{ name: 'version', id: 'version-native-simple' }}>
            <option value="" disabled/>
            {versions.map(version => <option key={version} value={version}>{version}</option>)}
          </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="file-native-simple">File</InputLabel>
          <NativeSelect value={state.file} onChange={handleChange('file')}
                  inputProps={{ name: 'file', id: 'file-native-simple' }}>
            <option value="" disabled/>
            {files.map(file => <option key={file} value={file}>{file}</option>)}
          </NativeSelect>
        </FormControl>
      </div>
      <div className={classes.controls}>
        <FormControlLabel value="end" control={<Switch color="primary"/>} label="Read-Only" labelPlacement="end"/>
        <FormControlLabel value="end" control={<Switch color="primary"/>} label="Released" labelPlacement="end"/>
      </div>
      <div className={classes.viewControl}>
        <ToggleButtonGroup size="medium" value={state.view} exclusive onChange={handleViewChange}>
          <ToggleButton value="files">Files</ToggleButton>
          <ToggleButton value="grade">Grade</ToggleButton>
          <ToggleButton value="split">Split</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </Paper>
  );
}
