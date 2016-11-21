/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	let ajax = __webpack_require__(/*! ./ajax/helpers */ 1),
	    render = __webpack_require__(/*! ./view/render */ 2),
	    newsSrc = 'bbc-news',
	    newsApiKey = '7075477dd0074880bc9b96eafd22cd03',
	    containerId = 'main';
	
	
	ajax.getJSON(`https://newsapi.org/v1/articles?source=${newsSrc}&apiKey=${newsApiKey}`)
	    .then(news => { render.displayNews(containerId, news) })
	    .catch(reason => { render.displyError(containerId, reason) });


/***/ },
/* 1 */
/*!*****************************!*\
  !*** ./src/ajax/helpers.js ***!
  \*****************************/
/***/ function(module, exports) {

	function getJSON(url) {
	    'use strict';
	    var xhr = new XMLHttpRequest();
	    return new Promise((resolve, reject) => {
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	                if (xhr.status === 200) {
	                    resolve(JSON.parse(xhr.responseText));
	                } else {
	                    reject(xhr.responseText);
	                }
	            }
	        };
	        xhr.open('GET', url);
	        xhr.send();
	    });
	}
	
	module.exports = {
	    getJSON
	};


/***/ },
/* 2 */
/*!****************************!*\
  !*** ./src/view/render.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	let articleCard = __webpack_require__(/*! ./articleCard */ 3);
	
	function displayNews(elemId, news) {
	    let elem = document.getElementById(elemId);
	    if (elem && news.status == 'ok') {
	        elem.innerHTML = news.articles
	            .map(a => '<li class="col-xs-12 col-md-8">' + articleCard.render(a) + '</li>')
	            .reduce((txt, li) => txt + li, '<ul class="articles row">') + '</ul>';
	    }
	}
	
	function displyError(elemId, reason) {
	    let elem = document.getElementById(elemId);
	    if (elem) {
	        elem.innerHTML = reason;
	    }
	}
	
	module.exports = {
	    displayNews,
	    displyError
	};


/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/view/articleCard.js ***!
  \*********************************/
/***/ function(module, exports) {

	module.exports = {
	    render(article) {
	        return `<div class="card">
	          <img class="card-img-top w-100" src="${article.urlToImage}" alt="${article.title}">
	          <div class="card-block">
	            <h4 class="card-title">${article.title}</h4>
	            <p class="text-muted small">${(new Date(article.publishedAt)).toLocaleString()}</p>
	            <p class="card-text">${article.description}</p>
	            <a href="${article.url}" target="_blank" class="btn btn-primary">Read on BBC</a>
	          </div>
	        </div>`;
	    }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map