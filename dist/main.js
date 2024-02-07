/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


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
  img.setAttribute('src', _restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__);
  img.setAttribute('alt', 'A restaurant bar');
  para1.textContent =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam nobis possimus itaque recusandae maxime quis impedit odio vel! Temporibus aliquam id laudantium amet. Eaque quas sit omnis hic saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus quo quis consequatur nesciunt incidunt illum facere quos optio a ipsum eius harum deleniti sit, nisi provident non explicabo temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis maiores quia nobis, quaerat esse aspernatur neque nihil autem, animi itaque assumenda modi tempore voluptatum saepe fugiat recusandae. Modi, in voluptatem.';
  para2.textContent = 
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quisquam nobis possimus itaque recusandae maxime quis impedit odio vel! Temporibus aliquam id laudantium amet. Eaque quas sit omnis hic saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque possimus quo quis consequatur nesciunt incidunt illum facere quos optio a ipsum eius harum deleniti sit, nisi provident non explicabo temporibus.';

  [header, img, para1, para2].forEach(elem => about.appendChild(elem));

  return about;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateContainer);

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e991bb030481ba56f69c.jpg";

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateContainer);

/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (populateContainer);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about_about_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);




const aboutBtn = document.querySelector('.about');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

(0,_about_about_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
aboutBtn.addEventListener("click", _about_about_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
menuBtn.addEventListener("click", _menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
contactBtn.addEventListener("click", _contact_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"]);

})();

/******/ })()
;