import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import codeString from '../res/JavaScriptCodeSample';

export default class Code extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(codeString);
    return (
      <Paper>
        <SyntaxHighlighter language="javascript" style={docco} showLineNumbers>
          {codeString}
        </SyntaxHighlighter>
      </Paper>
    );
  }
}
