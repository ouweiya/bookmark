import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Context } from './store/Provider';
import Search from './components/Search';
import Item from './components/Item';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const App = () => {
  const [{ filtxt }, dispatch] = useContext(Context);
  const [Bookmark, setBookmark] = useState([]);

  const iteration = (acc, i) => {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  const filterHandler = v => {
    return (v.title + v.url).toLowerCase().includes(filtxt.toLowerCase());
  };

  const getSubTree = id => {
    chrome.bookmarks.getSubTree(id, v => {
      const BookmarkList = v[0].children.reduce(iteration, []);
      console.log(BookmarkList);
      setBookmark(BookmarkList);
    });
  };

  useEffect(() => {
    chrome.bookmarks.search({ title: 'new' }, v => {
      getSubTree(v[0].id);
      chrome.bookmarks.onRemoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onCreated.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChildrenReordered.addListener(_ => console.log('onChildrenReordered'));
      chrome.bookmarks.onMoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChanged.addListener(_ => getSubTree(v[0].id));
    });
  }, []);

  return (
    <Container>
      <Search />
      <Grid container spacing={1}>
        {Bookmark.filter(filterHandler).map(v => (
          <Item key={v.id} Bookmark={v} />
        ))}
      </Grid>
    </Container>
  );
};

export default App;
