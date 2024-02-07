import populateAbout from "./about/about.js";
import populateMenu from "./menu/menu.js";
import populateContact from "./contact/contact.js";

const aboutBtn = document.querySelector('.about');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

populateAbout();
aboutBtn.addEventListener("click", populateAbout);
menuBtn.addEventListener("click", populateMenu);
contactBtn.addEventListener("click", populateContact);
