const container = document.querySelector('#content');

function populateContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const menuPage = createMenuPage();
  container.appendChild(menuPage);
}

function createMenuPage() {
  const menu = document.createElement('main');
  const header = document.createElement('h1');
  const itemList = makeItemList();

  menu.classList.add('menu-container');
  header.textContent = "Menu";

  [header, itemList].forEach(elem => menu.appendChild(elem));

  return menu;
}

function makeItemList() {
  const list = document.createElement('ul');
  const items = [
    makeItem('content'),
    makeItem('content'),
    makeItem('content'),
    makeItem('content'),
    makeItem('content'),
  ];

  items.forEach(item => list.appendChild(item));
  return list;
}

function makeItem(content) {
  const item = document.createElement('li');
  item.textContent = content;
  return item;
}

export default populateContainer;