/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://english-app/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://english-app/./src/css/style.css?");

/***/ }),

/***/ "./src/authorisation.js":
/*!******************************!*\
  !*** ./src/authorisation.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthPageComponent\": () => (/* binding */ AuthPageComponent)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./src/index.js\");\n\r\n  \r\n\r\nconst AuthPageComponent = {\r\n  render: () => {\r\n    return `\r\n      <div class=\"block-auth\" >\r\n      <div class=\"container\" id=\"container\">\r\n        <div class=\"form-container sign-up-container\">\r\n            <div class=\" auth-form_register auth-form\">\r\n                <h2 class=\"auth-upper_text\">Create Account</h2>\r\n    \r\n                <input class=\"auth-input\" id=\"name-reg\" type=\"text\" name=\"name\" placeholder=\"Name\" />\r\n                <input class=\"auth-input\" id=\"email-reg\" type=\"email\" name=\"email\" placeholder=\"Email\" />\r\n                <input class=\"auth-input\" id=\"password-reg\" type=\"password\" name=\"password\" placeholder=\"Password\" />\r\n                <button class=\"auth-btn\" id=\"SignUpBtn\">Sign Up</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"form-container sign-in-container\">\r\n            <div class=\"auth-form auth-form_auth\">\r\n                <h2 class=\"auth-upper_text\">Sign in</h2>\r\n                <input class=\"auth-input\" type=\"email\" id=\"email-auth\" placeholder=\"Email\" />\r\n                <input class=\"auth-input\" type=\"password\" id=\"password-auth\" placeholder=\"Password\" />\r\n                \r\n                <button class=\"auth-btn\" id=\"Sign-in-btn\">Sign In</button>\r\n            </div>\r\n        </div>\r\n        <div class=\"overlay-container\">\r\n            <div class=\"overlay\">\r\n                <div class=\"overlay-panel overlay-left\">\r\n                    <h1>Welcome Back!</h1>\r\n                    <p class=\"auth-text\">To keep connected with us please login with your personal info</p>\r\n                    <button class=\"auth-btn ghost\" id=\"signIn\">Sign In</button>\r\n                </div>\r\n                <div class=\"overlay-panel overlay-right\">\r\n                    <h2 class=\"auth-upper_text\">Hello, Friend!</h2>\r\n                    <p class=\"auth-text\">Enter your personal details and start journey with us</p>\r\n                    <button class=\"auth-btn ghost\" id=\"signUp\">Sign Up</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    </div>\r\n      `;\r\n  },\r\n  afterRender: () => {\r\n\r\n    const myHeroky = \"https://react-learnwords-example77.herokuapp.com\";\r\n\r\n    const users = `${myHeroky}/users`;\r\n    const signin = `${myHeroky}/signin`;\r\n\r\n    const signUpButton = document.getElementById(\"signUp\");\r\n    const signInButton = document.getElementById(\"signIn\");\r\n    const container = document.getElementById(\"container\");\r\n    const signUpBtn = document.getElementById(\"SignUpBtn\");\r\n    const signInBtn = document.getElementById(\"Sign-in-btn\");\r\n    const nameReg = document.getElementById(\"name-reg\");\r\n    const emailReg = document.getElementById(\"email-reg\");\r\n    const emailAuth = document.getElementById(\"email-auth\");\r\n    const passwordReg = document.getElementById(\"password-reg\");\r\n    const passwordAuth = document.getElementById(\"password-auth\");\r\n\r\n    signUpButton.addEventListener(\"click\", () => {\r\n      container.classList.add(\"right-panel-active\");\r\n    });\r\n\r\n    signInButton.addEventListener(\"click\", () => {\r\n      container.classList.remove(\"right-panel-active\");\r\n    });\r\n\r\n    signUpBtn.addEventListener(\"click\", () => {\r\n      createtUser({\r\n        name: nameReg.value,\r\n        email: emailReg.value,\r\n        password: passwordReg.value,\r\n      });\r\n    });\r\n    // onclick=\"location.href='/'\"\r\n    signInBtn.addEventListener(\"click\", () => {\r\n      loginUser({\r\n        email: emailAuth.value,\r\n        password: passwordAuth.value,\r\n      });\r\n    });\r\n\r\n    const createtUser = async (user) => {\r\n      const response = await fetch(`${users}`, {\r\n        method: \"POST\",\r\n        headers: {\r\n          Accept: \"application/json\",\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify(user),\r\n      });\r\n\r\n      const data = await response.json();\r\n      await loginUser({\r\n        email: emailReg.value,\r\n        password: passwordReg.value,\r\n      });\r\n      // localStorage.removeItem(user);\r\n      // localStorage.user = JSON.stringify(data);\r\n      // setTimeout(function(){\r\n      //   document.location.assign(\"/\")\r\n      // }, 300);\r\n    };\r\n\r\n    const loginUser = async (user) => {\r\n      const rawResponse = await fetch(`${signin}`, {\r\n        method: \"POST\",\r\n        headers: {\r\n          Accept: \"application/json\",\r\n          \"Content-Type\": \"application/json\",\r\n        },\r\n        body: JSON.stringify(user),\r\n      });\r\n      const content = await rawResponse.json();\r\n\r\n      console.log(content);\r\n\r\n      localStorage.removeItem(user);\r\n      localStorage.user = JSON.stringify(content);\r\n\r\n      setTimeout(function(){\r\n        document.location.assign(\"/\")\r\n      }, 300);\r\n    };\r\n    // const signInUser = async () => {\r\n  \r\n  },\r\n};\r\n\r\n// const authBtn = document.querySelector(\".log-in_block\");\r\n// window.addEventListener('hashchange', () =>{\r\n// if (window.location.hash == \"#/auth\") {\r\n\r\n// authBtn.addEventListener(\"click\", () => {\r\n// renderAuth();\r\n\r\n// const arrr = () => {\r\n//   console.log(3111);\r\n//   // window.addEventListener(\"load\", () => {\r\n\r\n//   });\r\n\r\n//   // arrr()\r\n// }\r\n// })\r\n\n\n//# sourceURL=webpack://english-app/./src/authorisation.js?");

/***/ }),

/***/ "./src/dictionary.js":
/*!***************************!*\
  !*** ./src/dictionary.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DictionaryComponent\": () => (/* binding */ DictionaryComponent),\n/* harmony export */   \"DiffWordComponent\": () => (/* binding */ DiffWordComponent)\n/* harmony export */ });\n\r\n\r\n\r\nconst DictionaryComponent = {\r\n  render: () => {\r\n    if (localStorage.getItem(\"user\") !== null){\r\n      return `\r\n      <section class=\"dictionary\">\r\n      <h2 class=\"dictionary-title\">Словарь</h2>\r\n        <div class=\"dict-group\">\r\n        <a href=\"#/dictionary/diff\" class=\"diff-words\"><div class=\"diff-words\">Сложные слова </div></a>\r\n        <a href=\"#/dictionary/learn\" class=\"learn-words\"><div class=\"learn-words\">Изученные слова </div></a>\r\n      </div>\r\n      </section>\r\n        `;\r\n    }else{\r\n      return `\r\n      <section class=\"dictionary\">\r\n      <h2 class=\"dictionary-title\">Вам следует войти в систему </h2>\r\n      </section>\r\n        `;\r\n    }\r\n  },\r\n  afterRender: () => {\r\n    if (localStorage.getItem(\"user\") !== null){\r\n\r\n      console.log(6 + 5161651);\r\n    }\r\n  },\r\n};\r\n\r\nconst DiffWordComponent = {\r\n  render: () => {\r\n    return `\r\n    <section class=\"dictionary\">\r\n    <h2 class=\"dictionary-title\">Сложные слова</h2>\r\n    <div class=\"card-block\">\r\n    </div>\r\n    </section>\r\n      `;\r\n  },\r\n  afterRender: () => {\r\n    let userLocal = JSON.parse(localStorage.user);\r\n    const token = userLocal.token;\r\n\r\n    const getUserWord = async ({ userId }) => {\r\n      const rawResponse = await fetch(\r\n        `https://react-learnwords-example77.herokuapp.com/users/${userId}/words`,\r\n        {\r\n          method: \"GET\",\r\n          withCredentials: true,\r\n          headers: {\r\n            Authorization: `Bearer ${token}`,\r\n            Accept: \"application/json\",\r\n          },\r\n        }\r\n      );\r\n\r\n      const content = await rawResponse.json();\r\n\r\n      // console.log(content);\r\n\r\n      // getDiffWord(content.wordId)\r\n\r\n      for (let i = 0; i < content.length; i++) {\r\n        getDiffWord(content[i].wordId);\r\n      }\r\n    };\r\n\r\n    getUserWord({\r\n      userId: userLocal.userId,\r\n    });\r\n\r\n    const getDiffWord = async ( wordId ) => {\r\n      const response = await fetch(\r\n        `https://react-learnwords-example77.herokuapp.com/words/${wordId}`,\r\n        {\r\n          method: \"GET\",\r\n          withCredentials: true,\r\n          headers: {\r\n            Authorization: `Bearer ${token}`,\r\n            Accept: \"application/json\",\r\n          },\r\n        }\r\n      );\r\n\r\n      const data = await response.json();\r\n\r\n        document.querySelector(\".card-block\").innerHTML += `\r\n\r\n        <div class=\"card\">\r\n        <div class=\"card-block_img_tex\">\r\n        <div class=\"card-img\" style=\" background: url(https://react-learnwords-example77.herokuapp.com/${\r\n          data.image\r\n        }) no-repeat;\"></div>\r\n        <div class=\"card-item\">\r\n        <div class=\"card-title_double\">\r\n        <div class=\"card-color unit-${data.group + 1}\"></div>\r\n        <h3 class=\"card-title\">${data.word} ${data.transcription} - ${\r\n          data.wordTranslate\r\n      } </h3>\r\n        <div class=\"card-audio\" >\r\n\r\n        </div>\r\n        \r\n        </div>\r\n        <p class=\"card-text\">${data.textMeaning}</p>\r\n        <p class=\"card-small-text\">${data.textMeaningTranslate}</p>\r\n        <p class=\"card-text\">${data.textExample}</p>\r\n        <p class=\"card-small-text\">${data.textExampleTranslate}</p>\r\n        </div>\r\n        </div>\r\n        <div class=\"cart-btn\">\r\n        \r\n        <div class=\"card-dif-word diff-active\">Сложное слово</div>\r\n        <div class=\"card-studied-word \">Изученное слово</div>\r\n        </div>\r\n        </div>\r\n          `;\r\n\r\n        \r\n          const btnDiffWord = document.querySelectorAll('.card-dif-word')\r\n          btnDiffWord.forEach((elem) => {\r\n            elem.addEventListener('click', () => {\r\n              elem.classList.remove('diff-active')\r\n            })\r\n          })\r\n    };\r\n\r\n\r\n\r\n  },\r\n};\r\n\r\n\r\n// const getUserWord = async ({ userId, wordId }) => {\r\n//   const rawResponse = await fetch(`https://react-learnwords-example77.herokuapp.com/users/${userId}/words/${wordId}`, {\r\n//     method: 'GET',\r\n//     withCredentials: true,\r\n//     headers: {\r\n//       'Authorization': `Bearer ${token}`,\r\n//       'Accept': 'application/json',\r\n//     }\r\n//   });\r\n//   const content = await rawResponse.json();\r\n\r\n//   console.log(content);\r\n// };\r\n// getUserWord({\r\n//   userId: userLocal.userId,\r\n//   wordId: content[i].id,\r\n// });\r\n\n\n//# sourceURL=webpack://english-app/./src/dictionary.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeComponent\": () => (/* binding */ HomeComponent)\n/* harmony export */ });\n\r\n\r\n\r\n\r\nconst HomeComponent = {\r\n    render: () => {\r\n      return `\r\n      <section class=\"center\">\r\n\r\n          <div class=\"center-block\"> \r\n          <div class=\"about-block\">\r\n            <h3 class=\"about-block-title\">\r\n              The World is Yours with BrainEnglish!\r\n            </h3>\r\n            <p class=\"about-block-text\">\r\n              BrainEnglish - это эффективный сервис для увлекательной практики\r\n              языков.Используем эффективные методики со всего мира. Гарантируем\r\n              изучение языка.\r\n            </p>\r\n          </div>\r\n  \r\n      </div> \r\n  </section>\r\n          <div class=\"best-block\">\r\n            <div class=\"best-block-up\">\r\n              <h3 class=\"best-block-title\">Наши преимущества</h3>\r\n            </div>\r\n            <div class=\"best-block-items\">\r\n              <div class=\"best-item\">\r\n                <div class=\"best-item-img money\"></div>\r\n                <div class=\"best-item-text\">\r\n                  <h4 class=\"best-item-title\">Бесплатно</h4>\r\n                  <p class=\"best-item-text-small\">\r\n                    Наше приложение полностью бесплатно. за пользованием сайтом мы\r\n                    не берем деньги. Совсем))\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"best-item\">\r\n                <div class=\"best-item-img game\"></div>\r\n                <div class=\"best-item-text\">\r\n                  <h4 class=\"best-item-title\">Миниигры</h4>\r\n                  <p class=\"best-item-text-small\">\r\n                    Вы можете одновременно играть и учить английский.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"best-item\">\r\n                <div class=\"best-item-img books\"></div>\r\n                <div class=\"best-item-text\">\r\n                  <h4 class=\"best-item-title\">Словарь</h4>\r\n                  <p class=\"best-item-text-small\">\r\n                    Мы Используем самый большой словарь английских слов. Более\r\n                    4000 слов.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n              <div class=\"best-item\">\r\n                <div class=\"best-item-img time\"></div>\r\n                <div class=\"best-item-text\">\r\n                  <h4 class=\"best-item-title\">Время</h4>\r\n                  <p class=\"best-item-text-small\">\r\n                    Вы можете использовать наш сайт в любое время и получать\r\n                    поддержку.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <section class=\"bottom\" id=\"bottom\">\r\n\r\n            <div class=\"bottom-block\"> \r\n              <h3 class=\"bottom-block-title\">\r\n                    О команде\r\n              </h3>\r\n              <div class=\"bottom-block_item\">\r\n              <div class=\"bottom-image\"></div>\r\n              <div class=\"bottom-text\">\r\n              <a href=\"https://github.com/Artem07199\" target=\"_blank\"><div class=\"bottom-title\">\r\n              <div class=\"bottom-git\"></div>\r\n              <h3>Artem Litasov</h3>\r\n              </div>\r\n              </a>\r\n              <p>Developer</p>\r\n              </div>\r\n              </div>\r\n      \r\n            </div> \r\n          </section>\r\n      `\r\n    }\r\n  } \n\n//# sourceURL=webpack://english-app/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseLocation\": () => (/* binding */ parseLocation),\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages */ \"./src/pages.js\");\n/* harmony import */ var _authorisation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorisation */ \"./src/authorisation.js\");\n/* harmony import */ var _minigames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minigames */ \"./src/minigames.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dictionary */ \"./src/dictionary.js\");\n/* harmony import */ var _studiedWords__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./studiedWords */ \"./src/studiedWords.js\");\n/* harmony import */ var _sprint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sprint */ \"./src/sprint.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n  \r\n\r\n  \r\n\r\n  \r\n  const ErrorComponent = {\r\n    render: () => {\r\n      return `\r\n        <section>\r\n          <h1>Error</h1>\r\n          <p>This is just a test</p>\r\n        </section>\r\n      `;\r\n    }\r\n  }\r\n\r\n  const routes = [\r\n    { path: '/', component: _home__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, },\r\n    { path: '/textbook', component: _pages__WEBPACK_IMPORTED_MODULE_2__.TextBookComponent, },\r\n    { path: '/minigames', component: _minigames__WEBPACK_IMPORTED_MODULE_4__.MiniGamesComponent, },\r\n    { path: '/auth', component: _authorisation__WEBPACK_IMPORTED_MODULE_3__.AuthPageComponent, },\r\n    { path: '/dictionary', component: _dictionary__WEBPACK_IMPORTED_MODULE_6__.DictionaryComponent, },\r\n    { path: '/dictionary/diff', component: _dictionary__WEBPACK_IMPORTED_MODULE_6__.DiffWordComponent, },\r\n    { path: '/dictionary/learn', component: _studiedWords__WEBPACK_IMPORTED_MODULE_7__.LearnWordComponent, },\r\n  ];\r\n  const parseLocation = () => location.hash.slice(1).toLowerCase() || '/';\r\n  const findComponentByPath = (path, routes) => routes.find(r => r.path.match(new RegExp(`^\\\\${path}$`, 'gmi'))) || undefined;\r\n  const router = () => {\r\n    const path = parseLocation();\r\n    const { component = ErrorComponent } = findComponentByPath(path, routes) || {};\r\n    document.getElementById('main').innerHTML = component.render();\r\n    component.afterRender();\r\n  };\r\n  window.addEventListener('hashchange', router);\r\n  window.addEventListener('load', router);\r\n\r\n\r\n  const blockLogIn = document.querySelector(\".log-in_block\");\r\n\r\n  if (localStorage.getItem(\"user\") !== null) {\r\n    let userLocal = JSON.parse(localStorage.user);\r\n    function changeUser() {\r\n      blockLogIn.innerHTML = `\r\n      <div class=\"auth-ok\">\r\n        <div class=\"auth-ok_logo\"></div>\r\n        <button class=\"dropbtn\">${userLocal.name}\r\n        \r\n        </button>\r\n        <div class=\"dropdown-content\">\r\n        <a href=\"#\">Статистика</a>\r\n        <a href=\"/\" id=\"out\">Выйти</a>\r\n        \r\n      </div>\r\n      </div>\r\n  `;\r\n    }\r\n    changeUser();\r\n   \r\n    const dropbtn = document.getElementById('out');\r\n    dropbtn.addEventListener('click',() =>{\r\n      console.log(555)\r\n      localStorage.removeItem('user');\r\n      router\r\n    })\r\n  }\n\n//# sourceURL=webpack://english-app/./src/index.js?");

/***/ }),

/***/ "./src/minigames.js":
/*!**************************!*\
  !*** ./src/minigames.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MiniGamesComponent\": () => (/* binding */ MiniGamesComponent)\n/* harmony export */ });\n\r\nconst MiniGamesComponent = {\r\n    render: () => {\r\n      return `\r\n      <div class=\"page-games\">\r\n      <div class=\"game-sprint\">\r\n        <h2 class=\"game-title\">sprint</h2>\r\n      </div>\r\n      <div class=\"game-audio\">\r\n        <h2 class=\"game-title\">audio</h2>\r\n      </div>\r\n      </div>\r\n      `;\r\n    }\r\n  } \r\n\n\n//# sourceURL=webpack://english-app/./src/minigames.js?");

/***/ }),

/***/ "./src/pages.js":
/*!**********************!*\
  !*** ./src/pages.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextBookComponent\": () => (/* binding */ TextBookComponent)\n/* harmony export */ });\n\r\nconst TextBookComponent = {\r\n  render: () => {\r\n    return `\r\n    <h2 class=\"textbook\"> Учебник</h2>\r\n    <div class=\"unit\">\r\n        <div class=\"unit-item unit-1\">\r\n            <button class=\"unit-link\" data-filter=\"0\">Раздел 1</button>\r\n        </div>\r\n        <div class=\"unit-item unit-2\">\r\n            <button class=\"unit-link\" data-filter=\"1\">Раздел 2</button>\r\n        </div>\r\n        <div class=\"unit-item unit-3\">\r\n            <button class=\"unit-link\" data-filter=\"2\">Раздел 3</button>\r\n        </div>\r\n        <div class=\"unit-item unit-4\">\r\n            <button class=\"unit-link\" data-filter=\"3\">Раздел 4</button>\r\n        </div>\r\n        <div class=\"unit-item unit-5\">\r\n            <button class=\"unit-link\" data-filter=\"4\">Раздел 5</button>\r\n        </div>\r\n        <div class=\"unit-item unit-6\">\r\n            <button class=\"unit-link\" data-filter=\"5\">Раздел 6</button>\r\n        </div>\r\n    </div>\r\n    <div class=\"card-block\">\r\n    </div>\r\n\r\n    <div class=\"loader\" id=\"loader\">\r\n    </div>\r\n    `;\r\n  },\r\n  afterRender: () => {\r\n    let storage = {\r\n      page: null,\r\n      group: null,\r\n    };\r\n    if (\r\n      localStorage.getItem(\"page\") !== 0 &&\r\n      localStorage.getItem(\"group\") !== 0\r\n    ) {\r\n      storage.page = Number(localStorage.getItem(\"page\"));\r\n      storage.group = Number(localStorage.getItem(\"group\"));\r\n    }\r\n\r\n    const getWords = async () => {\r\n      const response = await fetch(\r\n        `https://react-learnwords-example77.herokuapp.com/words?page=${storage.page}&group=${storage.group}`\r\n      );\r\n\r\n      let content = await response.json();\r\n\r\n      // temTag += `<li class=\"btn prev\"><span><i class=\"numb-left\"></i>Prev</span></li>`\r\n\r\n      content.forEach((e) => {\r\n        document.querySelector(\".card-block\").innerHTML += `\r\n          \r\n          <div class=\"card\">\r\n          <div class=\"card-block_img_tex\">\r\n          <div class=\"card-img\" style=\" background: url(https://react-learnwords-example77.herokuapp.com/${\r\n            e.image\r\n          }) no-repeat;\"></div>\r\n          <div class=\"card-item\">\r\n          <div class=\"card-title_double\">\r\n          <div class=\"card-color unit-${storage.group + 1}\"></div>\r\n          <h3 class=\"card-title\">${e.word} ${e.transcription} - ${\r\n          e.wordTranslate\r\n        } </h3>\r\n          <div class=\"card-audio\" >\r\n\r\n          </div>\r\n          \r\n          </div>\r\n          <p class=\"card-text\">${e.textMeaning}</p>\r\n          <p class=\"card-small-text\">${e.textMeaningTranslate}</p>\r\n          <p class=\"card-text\">${e.textExample}</p>\r\n          <p class=\"card-small-text\">${e.textExampleTranslate}</p>\r\n          </div>\r\n          </div>\r\n          <div class=\"cart-btn\">\r\n          \r\n          <div class=\"card-dif-word hide\">Сложное слово</div>\r\n          <div class=\"card-studied-word hide\">Изученное слово</div>\r\n          </div>\r\n          </div>\r\n          `;\r\n\r\n\r\n          // <audio class=\"audio\"  >\r\n          // <source src='https://react-learnwords-example77.herokuapp.com/${\r\n          //   e.audio\r\n          // }' type=\"audio/mpeg\">\r\n          // </audio>\r\n          // <audio class=\"audio2\" >\r\n          // <source src='https://react-learnwords-example77.herokuapp.com/${\r\n          //   e.audioMeaning\r\n          // }'type=\"audio/mpeg\">\r\n          // </audio>\r\n          // <audio class=\"audio3\" >\r\n          // <source src='https://react-learnwords-example77.herokuapp.com/${\r\n          //   e.audioExample\r\n          // }' type=\"audio/mpeg\">\r\n          // </audio>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        // const cardAudio = document.querySelectorAll('.card-audio')\r\n\r\n        // cardAudio.forEach((e) => {\r\n        //   const audio = document.querySelectorAll('.audio')\r\n        //   const audio2 = document.querySelectorAll('.audio2')\r\n        //   const audio3 = document.querySelectorAll('.audio3')\r\n\r\n      });\r\n\r\n      document.querySelector(\".card-block\").innerHTML += `\r\n            <div class=\"pagination\">\r\n            <ul class=\"pagination-list\">\r\n            <li class=\"btn prev\"><span><i class=\"numb-left\"></i>Prev</span></li> \r\n            <select id=\"pages\" required>\r\n            <option value=\"0\">${storage.page + 1}</option>\r\n            </select>\r\n            <li class=\"btn next\")><span>Next<i class=\"numb-right\"></i></span></li>\r\n            </ul>\r\n            </div>\r\n            `;\r\n\r\n      const pages = document.getElementById(\"pages\");\r\n      pages.addEventListener(\"change\", () => {\r\n        storage.page = pages.value - 1;\r\n        // localStorage.setItem['page'] = storage.page;\r\n        renderUnit();\r\n        localStorage.setItem(\"page\", storage.page);\r\n      });\r\n\r\n      //   if(localStorage['page']){\r\n      //     pages.options[ localStorage['page'] ].selected = true;\r\n      // }\r\n\r\n      for (let i = 1; i <= 30; i++) {\r\n        pages.innerHTML += `\r\n          <option class=\"options\" value=\"${i}\">${i}</option>\r\n          `;\r\n      }\r\n\r\n      const nextBtn = document.querySelector(\".next\");\r\n      if (storage.page >= 29) {\r\n        nextBtn.classList.add(\"hide\");\r\n      }\r\n      nextBtn.addEventListener(\"click\", () => {\r\n        storage.page += 1;\r\n        renderUnit();\r\n        localStorage.setItem(\"page\", storage.page);\r\n      });\r\n      const prevBtn = document.querySelector(\".prev\");\r\n\r\n      if (storage.page < 1) {\r\n        prevBtn.classList.add(\"hide\");\r\n      }\r\n      prevBtn.addEventListener(\"click\", () => {\r\n        storage.page -= 1;\r\n        renderUnit();\r\n        localStorage.setItem(\"page\", storage.page);\r\n      });\r\n      console.log(storage.page);\r\n\r\n      const difWord = document.querySelectorAll(\".card-dif-word\");\r\n      const studyWord = document.querySelectorAll(\".card-studied-word\");\r\n\r\n      if (localStorage.getItem(\"user\") !== null) {\r\n        difWord.forEach(function (btn) {\r\n          btn.classList.remove(\"hide\");\r\n        });\r\n        studyWord.forEach(function (btn) {\r\n          btn.classList.remove(\"hide\");\r\n        });\r\n      }\r\n\r\n      let userLocal = JSON.parse(localStorage.user);\r\n      console.log(userLocal.userId)\r\n\r\n      for (let i = 0; i < difWord.length; i++) {\r\n        difWord[i].addEventListener(\"click\", (e) => {\r\n          difWord[i].style.background = \"#43bccd\";\r\n          difWord[i].style.color = \"#fff\";\r\n\r\n          createUserWord({\r\n            userId: userLocal.userId,\r\n            wordId: content[i].id,\r\n            word: {\r\n              difficulty: \"hard\",\r\n              optional: { group: storage.group, page: storage.page, word: content[i].word, testFieldBoolean: true },\r\n            },\r\n          });\r\n\r\n        });\r\n      }\r\n\r\n      studyWord.forEach(function (btn) {\r\n        btn.addEventListener(\"click\", () => {\r\n          btn.style.background = \"#f86624\";\r\n          btn.style.color = \"#fff\";\r\n        });\r\n      });\r\n\r\n      const loader = document.getElementById(\"loader\");\r\n      loader.classList.add(\"hide\");\r\n\r\n      const token = userLocal.token;\r\n\r\n      const createUserWord = async ({ userId, wordId, word }) => {\r\n        const rawResponse = await fetch(\r\n          `https://react-learnwords-example77.herokuapp.com/users/${userId}/words/${wordId}`,\r\n          {\r\n            method: \"POST\",\r\n            withCredentials: true,\r\n            headers: {\r\n              Authorization: `Bearer ${token}`,\r\n              Accept: \"application/json\",\r\n              \"Content-Type\": \"application/json\",\r\n            },\r\n            body: JSON.stringify(word),\r\n          }\r\n        );\r\n        const data = await rawResponse.json();\r\n\r\n        console.log(data);\r\n      };\r\n      \r\n    };\r\n    \r\n    \r\n    \r\n    \r\n    // const getUserWord = async ({ userId, wordId }) => {\r\n    //   const rawResponse = await fetch(`https://react-learnwords-example77.herokuapp.com/users/${userId}/words/${wordId}`, {\r\n    //     method: 'GET',\r\n    //     withCredentials: true,\r\n    //     headers: {\r\n    //       'Authorization': `Bearer ${token}`,\r\n    //       'Accept': 'application/json',\r\n    //     }\r\n    //   });\r\n    //   const content = await rawResponse.json();\r\n    \r\n    //   console.log(content);\r\n    // };\r\n    // getUserWord({\r\n    //   userId: userLocal.userId,\r\n    //   wordId: content[i].id,\r\n    // });\r\n\r\n    async function renderUnit() {\r\n      const cardBlock = document.querySelector(\".card-block\");\r\n\r\n      cardBlock.innerHTML = `\r\n        ${getWords()}\r\n    `;\r\n    }\r\n\r\n    renderUnit();\r\n\r\n    document.querySelector(\".unit\").addEventListener(\"click\", (event) => {\r\n      if (event.target.tagName !== \"BUTTON\") return false;\r\n\r\n      let filterUnit = event.target.dataset[\"filter\"];\r\n\r\n      switch (filterUnit) {\r\n        case \"0\":\r\n          storage.group = 0;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n        case \"1\":\r\n          storage.group = 1;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n        case \"2\":\r\n          storage.group = 2;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n        case \"3\":\r\n          storage.group = 3;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n        case \"4\":\r\n          storage.group = 4;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n        case \"5\":\r\n          storage.group = 5;\r\n          storage.page = 0;\r\n          renderUnit();\r\n          break;\r\n      }\r\n      localStorage.setItem(\"group\", storage.group);\r\n      localStorage.setItem(\"page\", storage.page);\r\n    });\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack://english-app/./src/pages.js?");

/***/ }),

/***/ "./src/sprint.js":
/*!***********************!*\
  !*** ./src/sprint.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SprintComponent\": () => (/* binding */ SprintComponent)\n/* harmony export */ });\nconst SprintComponent = {\r\n    render: () => {\r\n      return `\r\n      <div class=\"page-games\">\r\n      <div class=\"game-sprint\">\r\n        <h2 class=\"game-title\">sprint</h2>\r\n      </div>\r\n      <div class=\"game-audio\">\r\n        <h2 class=\"game-title\">audio</h2>\r\n      </div>\r\n      </div>\r\n      `;\r\n    }\r\n  } \r\n\n\n//# sourceURL=webpack://english-app/./src/sprint.js?");

/***/ }),

/***/ "./src/studiedWords.js":
/*!*****************************!*\
  !*** ./src/studiedWords.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LearnWordComponent\": () => (/* binding */ LearnWordComponent)\n/* harmony export */ });\nconst LearnWordComponent = {\r\n    render: () => {\r\n      return `\r\n      <section class=\"dictionary\">\r\n      <h2 class=\"dictionary-title\">Изученные слова</h2>\r\n      </section>\r\n        `;\r\n    },\r\n  };\n\n//# sourceURL=webpack://english-app/./src/studiedWords.js?");

/***/ })

/******/ 	});
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;