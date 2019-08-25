import React, { useState, useEffect } from 'react';

const Todo = () => {
  const [Bookmark, setBookmark] = useState([]);

  const iteration = (acc, i) => {
    return Array.isArray(i.children) ? [i.children].reduce(iteration, acc) : acc.concat(i);
  };

  const getSubTree = id => {
    chrome.bookmarks.getSubTree(id, v => {
      const BookmarkList = v[0].children.reduce(iteration, []);
      console.log(BookmarkList);
      setBookmark(BookmarkList);
    });
  };

  useEffect(() => {
    chrome.bookmarks.search({ title: 'todo' }, v => {
      getSubTree(v[0].id);
      console.log(v);
      chrome.bookmarks.onRemoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onCreated.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChildrenReordered.addListener(_ => console.log('onChildrenReordered'));
      chrome.bookmarks.onMoved.addListener(_ => getSubTree(v[0].id));
      chrome.bookmarks.onChanged.addListener(_ => getSubTree(v[0].id));
    });
  }, []);

  return (
    <div className='todo'>
      {Bookmark.map(Bookmark => (
        <a key={Bookmark.id} href={Bookmark.url} target='_blank' title={Bookmark.title}>
          <img src={`chrome://favicon/size/24/${Bookmark.url}`} />
          <p>{Bookmark.title}</p>
        </a>
      ))}
    </div>
  );
};

export default Todo;
