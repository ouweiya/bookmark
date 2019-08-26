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
  if (command === 'addTodo') {
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
