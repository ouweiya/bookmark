import React, { useState } from 'react';

const Item = ({ Bookmark }) => {
  const [Dis, setDis] = useState('none');
  const [title, setTitle] = useState(Bookmark.title);
  const [url, setUrl] = useState(Bookmark.url);

  const changeHandler = id => {
    chrome.bookmarks.update(id, { title, url });
  };

  const submit = e => {
    e.preventDefault();
    setDis('none');
    changeHandler(Bookmark.id, { title, url });
  };

  return (
    <div className='item'>
      <a href={Bookmark.url} target='_blank' title={Bookmark.title}>
        <img src={`chrome://favicon/size/24/${Bookmark.url}`} />
        <p>{Bookmark.title}</p>
      </a>
      <span
        onClick={() => {
          setDis(d => (d === 'none' ? 'flex' : 'none'));
        }}
        className='menu'
      >
        改
      </span>

      <form onSubmit={submit} className='form' style={{ display: Dis }}>
        <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} />
        <input type='text' name='url' value={url} onChange={e => setUrl(e.target.value)} />
        <button>完成</button>
      </form>
    </div>
  );
};

export default Item;
