import React, { useContext } from 'react';
import { Context } from '../store/Provider';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  search: {
    display: 'flex',
    height: 40,
    width: '39%',
    maxWidth: 460,
    minWidth: 280,
    borderRadius: '100px',
    color: '#757575',
    background: 'white',
    boxShadow: '0 1px 6px 0 rgba(32, 33, 36, .28)',
    boxSizing: 'border-box',
    transition: '0.2s',
    '&:hover': {
      boxShadow: '0 1px 9px 0 rgba(32, 33, 36, .30)'
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    flex: 1
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [{ filtxt }, dispatch] = useContext(Context);

  return (
    <div>
      <Toolbar className={classes.root}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>

          <InputBase
            placeholder='Search…'
            value={filtxt}
            onChange={e => dispatch({ type: 'filtxt', filtxt: e.target.value })}
            classes={{
              root: classes.inputRoot
            }}
          />
        </div>
      </Toolbar>
    </div>
  );
}
