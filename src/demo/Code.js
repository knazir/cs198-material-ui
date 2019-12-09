import React from 'react';
import Paper from '@material-ui/core/Paper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import codeString from '../res/JavaScriptCodeSample';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '1.2em',
  },
}));

export default function Code() {
  const classes = useStyles();
  const props = {
    className: classes.root,
  };
  return (
    <Paper>
      <SyntaxHighlighter language="javascript" style={docco} showLineNumbers {...props}>
        {codeString}
      </SyntaxHighlighter>
    </Paper>
  );
}
