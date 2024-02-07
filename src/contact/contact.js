const container = document.querySelector('#content');

function populateContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const contactPage = createContactPage();
  container.appendChild(contactPage);
}

function createContactPage() {
  const contact = document.createElement('main');
  const header = document.createElement('h1');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  contact.classList.add('contact-container');
  header.textContent = "Contact Info";
  para1.textContent =
    '';
  para2.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam nobis possimus itaque recusandae maxime quis impedit odio vel! Temporibus aliquam id laudantium amet. Eaque quas sit omnis hic saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus quo quis consequatur nesciunt incidunt illum facere quos optio a ipsum eius harum deleniti sit, nisi provident non explicabo temporibus.';

  [header, para1, para2].forEach(elem => contact.appendChild(elem));

  return contact;
}

export default populateContainer;