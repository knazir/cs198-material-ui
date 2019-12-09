import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import clsx from 'clsx';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Tooltip from '@material-ui/core/Tooltip';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: theme.spacing(4)
  },
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  icon: {
    fontSize: 20,
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
  },
  fieldLine: {
    display: 'flex',
    alignItems: 'center',
    fontWeight: theme.typography.fontWeightMedium,
    '&:not(:last-of-type)': {
      marginBottom: theme.spacing(1)
    }
  },
  modalDivider: {
    margin: theme.spacing(2, 0),
  },
  modalContent: {
    fontSize: '1.1em',
  },
  widthLabel: {
    marginRight: theme.spacing(2),
  },
  widthSelect: {
    minWidth: theme.spacing(7),
  },
}));

const variantIcon = {
  success: CheckCircleIcon,
  error: ErrorIcon,
};

function MySnackbarContentWrapper(props) {
  const classes = useStyles();
  const { className, message, onClose, variant, ...other } = props;
  const Icon = variantIcon[variant];

  return (
    <SnackbarContent
      className={clsx(classes[variant], className)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={clsx(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton key="close" aria-label="close" color="inherit" onClick={onClose}>
          <CloseIcon className={classes.icon} />
        </IconButton>,
      ]}
      {...other}
    />
  );
}

MySnackbarContentWrapper.propTypes = {
  className: PropTypes.string,
  message: PropTypes.string,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['error', 'info', 'success', 'warning']).isRequired,
};

export default function ModalTest() {
  const classes = useStyles();

  // state
  const [state, setState] = React.useState({
    modalOpen: false,
    snackbarOpen: false,
    snackbarSuccess: false,
    maxWidth: 'sm',
  });

  // modal
  const handleModalOpen = () => setState({ modalOpen: true });
  const handleModalClose = (success) => {
    setState({ modalOpen: false, snackbarOpen: success != null, snackbarSuccess: success });
  };

  // snackbar
  const handleSnackbarClose = (event, reason) => {
    if (reason !== 'clickaway') setState({ snackbarOpen: false });
  };

  // modal description
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (state.modalOpen) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [state.modalOpen]);

  // max width
  const handleMaxWidthChange = e => setState({ modalOpen: true, maxWidth: e.target.value });
  console.log(state);

  return (
    <div className={classes.root}>
      <Button variant="outlined" color="primary" onClick={handleModalOpen}>
        Open Partner Request Modal
      </Button>
      <Dialog open={state.modalOpen} onClose={() => handleModalClose(null)} scroll="paper"
              maxWidth={state.maxWidth} aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">Partner Request</DialogTitle>
        <DialogContent className={classes.modalContent} tabIndex={-1}>
          <div className={classes.fieldLine}>
            <div className={classes.widthLabel}>Modal Size:</div>
            <NativeSelect value={state.maxWidth} onChange={handleMaxWidthChange}
                          inputProps={{ name: 'maxWidth', id: 'maxWidth-native-simple', className: classes.widthSelect }}>
              {['xs', 'sm', 'md', 'lg', 'xl'].map(s => <option key={s} value={s}>{s}</option>)}
            </NativeSelect>
          </div>
          <Divider className={classes.modalDivider} variant="middle"/>
          <div className={classes.fieldLine}>
            <Tooltip title="Assignment">
              <AssignmentIcon className={clsx(classes.icon, classes.iconVariant)}/>
            </Tooltip>
            <span>3. Breakout</span>
          </div>
          <div className={classes.fieldLine}>
            <Tooltip title="From">
              <SendIcon className={clsx(classes.icon, classes.iconVariant)} />
            </Tooltip>
            <span>Kashif Nazir (knazir)</span>
          </div>
          <div className={classes.fieldLine}>
            <Tooltip title="Sent">
                <ScheduleIcon className={clsx(classes.icon, classes.iconVariant)} />
            </Tooltip>
            <span>Wed, Oct 2, 2019 11:55pm</span>
          </div>
          <Divider className={classes.modalDivider} variant="middle"/>
          <p>
            This partner request only applies to the above assignment. If you accept it, please note:
          </p>
          <ul>
            <li>
              You and <strong>Kashif</strong> can continue to make submissions.
              The latest submission that either of you makes will be graded.
            </li>
            <li>
              If you already submitted this assignment, your submission will be combined
              with <strong>Kashif&apos;s</strong>.
            </li>
            <li>
              You cannot change your partner for this assignment after you accept this request.
            </li>
          </ul>
          <p>
            By accepting this request, you represent under the Honor Code that you
            and <strong>Kashif</strong> worked jointly on this assignment.
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalClose(false)} color="primary">Disagree</Button>
          <Button onClick={() => handleModalClose(true)} color="primary" autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} onClose={handleSnackbarClose}
                open={state.snackbarOpen && state.snackbarSuccess} autoHideDuration={6000}>
        <MySnackbarContentWrapper onClose={handleSnackbarClose} variant="success"
                                  message="Successfully accepted partner request!"/>
      </Snackbar>
      <Snackbar anchorOrigin={{ vertical: 'bottom', horizontal: 'left',}} onClose={handleSnackbarClose}
                open={state.snackbarOpen && !state.snackbarSuccess} autoHideDuration={6000}>
        <MySnackbarContentWrapper onClose={handleSnackbarClose} variant="error"
                                  message="Partner request rejected."/>
      </Snackbar>
    </div>
  );
}
