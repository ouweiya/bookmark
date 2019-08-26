import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MyDialog from './MyDialog';
import { makeStyles } from '@material-ui/core/styles';

const options = ['None', 'Atria', 'Callisto', 'Dione', 'Ganymede'];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles(theme => ({
  btn: {
    position: 'absolute',
    right: 0,
    top: 0,
    fontSize: 12,
    '&:hover': {
      background: 'none',
      color: '#000'
    }
  },
  icon: {
    transform: 'scale(0.8)'
  },
  dis: {
    visibility: 'hidden'
  }
}));

const LongMenu = ({ data, id }) => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  return (
    <div>
      <IconButton
        onClick={_ => setOpen(true)}
        className={`${classes.btn} ${classes.dis}`}
        disableRipple={false}
        size='small'
        disableFocusRipple={true}
        edge='end'
        classes={{ label: classes.icon }}
        id='dis'
      >
        <MoreVertIcon />
      </IconButton>

      <MyDialog open={open} onClose={_ => setOpen(false)} data={data} id={id} />
    </div>
  );
};

export default LongMenu;
