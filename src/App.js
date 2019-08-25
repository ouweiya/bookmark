import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { Context } from './store/Provider';
import Search from './components/Search';
import Item from './components/Item';
// import data from './last';

// console.log(data);

// chrome.bookmarks.search({ title: 'todo2' }, newFolder => {
//   data.map(v => {
//     const { title, url } = v;
//     if (url) {
//       chrome.bookmarks.create({ parentId: newFolder[0].id, title, url });
//     }
//   });
// });

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
    <div
      style={{
        border: '1px solid',
        width: '80%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto'
      }}
    >
      <Search />
      <div className='item-conent'>
        {Bookmark.filter(filterHandler).map(v => (
          <Item key={v.id} Bookmark={v} />
        ))}
      </div>
    </div>
  );
};

export default App;
