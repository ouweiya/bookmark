// console.log(chrome.bookmarks, 'back');
// chrome.bookmarks.getTree(console.log);
/* chrome.bookmarks.create({ parentId: '6', title: '2019' }, newFolder => {
  console.log('创建文件夹', newFolder);
  chrome.bookmarks.create(
    { parentId: newFolder.id, title: 'google', url: 'https://www.google.com' },
    newmarks => {
      console.log('创建书签', newmarks);
    }
  );
}); */

// chrome.bookmarks.get(['30', '12'], console.log);
// chrome.bookmarks.getChildren('6', console.log);
// chrome.bookmarks.search({ title: 'new' }, v => {
//   chrome.bookmarks.getChildren(v[0].id, console.log);
// });

const url = chrome.runtime.getURL('index.html#todo');
chrome.browserAction.onClicked.addListener(activeTab => {
  chrome.tabs.create({ url });
  console.log('open');
});

const addTodo = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    const { id, title, url } = tabs[0];

    chrome.tabs.remove(id, () => {
      chrome.bookmarks.search({ title: 'todo' }, newFolder => {
        chrome.bookmarks.create({ parentId: newFolder[0].id, title, url }, newmarks => {
          console.log('创建书签', newmarks);
        });
      });
    });
  });
};

chrome.commands.onCommand.addListener(command => {
  if (command === 'one') {
    addTodo();
  }
});

chrome.contextMenus.create({
  id: 'todo',
  title: 'Add todo',
  contexts: ['all']
});

chrome.contextMenus.onClicked.addListener(_ => {
  addTodo();
});
