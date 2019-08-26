import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center'
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes } = props;

  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant='body2'>{children}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(1)
  }
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(1)
  }
}))(MuiDialogActions);

const useStyles = makeStyles(theme => ({
  box: {
    '& .MuiBackdrop-root': {
      background: '#ffffff8a'
    }
  },
  container: {
    display: 'flex',
    flexFlow: 'column wrap',
    width: 352
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  }
}));

export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState(props.data);

  const handleChange = name => e => setValues({ ...values, [name]: e.target.value });

  const submit = () => {
    props.onClose();
    chrome.bookmarks.update(props.id, { title: values.title, url: values.url });
  };

  const cancel = init => _ => {
    props.onClose();
    setValues(init);
  };

  return (
    <div>
      <Dialog onClose={props.onClose} open={props.open} className={classes.box}>
        <DialogTitle onClose={props.onClose}>修改快捷方式</DialogTitle>
        <DialogContent>
          <form className={classes.container} noValidate autoComplete='off'>
            <TextField
              label='标题'
              className={classes.textField}
              value={values.title}
              onChange={handleChange('title')}
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              label='地址'
              className={classes.textField}
              value={values.url}
              onChange={handleChange('url')}
              margin='normal'
              InputLabelProps={{
                shrink: true
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel(props.data)} color='primary' variant='outlined' size='small'>
            取消
          </Button>
          <Button onClick={submit} color='primary' variant='contained' size='small'>
            保存
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
