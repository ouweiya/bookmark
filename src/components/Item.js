import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import MyMenu from './MyMenu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    display: 'flex',
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    margin: theme.spacing(0),
    width: 112,
    height: 112,
    background: 'none',
    position: 'relative',
    transition: '0.3s',
    '&:hover': {
      background: 'rgba(32, 33, 36, 0.06)'
    }
  },
  image: {
    width: 48,
    height: 48,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 'auto',
    background: '#f1f3f4',
    borderRadius: '50%'
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  link: {
    flex: 1,
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  }
}));

const Item = ({ Bookmark }) => {
  const { title, url, id } = Bookmark;
  const classes = useStyles();

  const changeHandler = id => {
    chrome.bookmarks.update(id, { title, url });
  };

  const submit = e => {
    e.preventDefault();
    changeHandler(Bookmark.id, { title, url });
  };

  return (
    <Paper className={classes.paper} elevation={0} id='par'>
      <Grid item container direction='column'>
        <Link
          href={Bookmark.url}
          target='_blank'
          title={Bookmark.title}
          color='inherit'
          underline='none'
          className={classes.link}
        >
          <Box className={classes.image} display='flex'>
            <img className={classes.img} src={`chrome://favicon/size/24/${Bookmark.url}`} />
          </Box>
          <Typography variant='body2' noWrap style={{ fontSize: '12px' }}>
            {Bookmark.title}
          </Typography>
        </Link>

        <MyMenu data={{ title, url }} id={id} />
      </Grid>
    </Paper>
  );
};

export default Item;
