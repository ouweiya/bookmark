import React, { useState, useEffect, useLayoutEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {
    width: 'auto',
    backgroundColor: theme.palette.background.paper
  },
  inputRoot: {
    color: 'inherit',
    paddingLeft: 0
  },
  iconRoot: {
    minWidth: 'auto'
  },
  avatar: {
    width: 30,
    height: 30,
    marginRight: 10
  },
  img: {
    width: 'auto',
    height: 'auto'
  },
  item: {
    padding: '0 16px'
  }
}));

const ListItemLink = props => {
  const classes = useStyles();

  return (
    <ListItem
      component='a'
      {...props}
      classes={{
        root: classes.inputRoot
      }}
    />
  );
};

const Todo = () => {
  const [Bookmark, setBookmark] = useState([]);
  const classes = useStyles();

  useLayoutEffect(() => {
    document.title = 'todo';
  }, []);

  const iteration = (acc, i) => {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  const getSubTree = id => {
    chrome.bookmarks.getSubTree(id, v => {
      const BookmarkList = v[0].children.reduce(iteration, []);
      setBookmark(BookmarkList);
    });
  };

  useEffect(() => {
    chrome.bookmarks.search({ title: 'todo' }, v => {
      getSubTree(v[0].id);
      chrome.bookmarks.onRemoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onCreated.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChildrenReordered.addListener(_ => console.log('onChildrenReordered'));
      chrome.bookmarks.onMoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChanged.addListener(_ => getSubTree(v[0].id));
    });
  }, []);

  const rows = [];
  let lastCategory = null;

  Bookmark.forEach(mark => {
    const time = new Date(mark.dateAdded);

    if (time.getDate() !== lastCategory) {
      if (!rows[rows.length]) {
        rows[rows.length] = [];
      }
      rows[rows.length - 1].push(
        <ListSubheader key={time.getDate()} component='div'>
          {time.toLocaleDateString().split('/').join('-')}
        </ListSubheader>
      );
    }

    rows[rows.length - 1].push(
      <ListItem button key={mark.id} className={classes.item}>
        <ListItemLink href={mark.url} target='_blank' title={mark.title}>
          <ListItemIcon classes={{ root: classes.iconRoot }}>
            <Avatar
              src={`chrome://favicon/size/16/${mark.url}`}
              className={classes.avatar}
              classes={{ img: classes.img }}
            />
          </ListItemIcon>
          <ListItemText primary={mark.title} />
        </ListItemLink>
      </ListItem>
    );

    lastCategory = time.getDate();
  });

  return (
    <Container>
      <div className={classes.root}>
        <List component='nav' dense>
          {rows.reverse()}
        </List>
      </div>
    </Container>
  );
};

export default Todo;
