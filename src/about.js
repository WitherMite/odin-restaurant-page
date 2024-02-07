import restaurantImage from './restaurant.jpg';

const container = document.querySelector('#content');

function populateContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const aboutPage = createAboutPage();
  container.appendChild(aboutPage);
}

function createAboutPage() {
  const about = document.createElement('main');
  const header = document.createElement('h1');
  const img = document.createElement('img');
  const para1 = document.createElement('p');
  const para2 = document.createElement('p');

  about.classList.add('about-container');
  header.textContent = "Wonderful Restaurant Name";
  img.setAttribute('src', restaurantImage);
  img.setAttribute('alt', 'A restaurant bar');
  para1.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam nobis possimus itaque recusandae maxime quis impedit odio vel! Temporibus aliquam id laudantium amet. Eaque quas sit omnis hic saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus quo quis consequatur nesciunt incidunt illum facere quos optio a ipsum eius harum deleniti sit, nisi provident non explicabo temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores quia nobis, quaerat esse aspernatur neque nihil autem, animi itaque assumenda modi tempore voluptatum saepe fugiat recusandae. Modi, in voluptatem.';
  para2.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam nobis possimus itaque recusandae maxime quis impedit odio vel! Temporibus aliquam id laudantium amet. Eaque quas sit omnis hic saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus quo quis consequatur nesciunt incidunt illum facere quos optio a ipsum eius harum deleniti sit, nisi provident non explicabo temporibus.';

  [header, img, para1, para2].forEach(elem => about.appendChild(elem));

  return about;
}

export default populateContainer;