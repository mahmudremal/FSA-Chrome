/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./FSA-Chrome/assets/src/js/content/buyerRequestsDetails.js":
/*!******************************************************************!*\
  !*** ./FSA-Chrome/assets/src/js/content/buyerRequestsDetails.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function ($) {
  var buyerRequestDetails = /*#__PURE__*/function () {
    function buyerRequestDetails() {
      _classCallCheck(this, buyerRequestDetails);

      this.user = {
        currency: this.is(document.querySelector('.locale-settings-package .currency-selection-trigger')) ? this.currency(document.querySelector('.locale-settings-package .currency-selection-trigger').innerText) : '$'
      };
      this.base = {};
      this.request = [];
      this.database = this.getDatabase();
      this.isCDN = false;
      this.isDef = false;
      this.me = 'mahmud_remal';
      this.init();
    }

    _createClass(buyerRequestDetails, [{
      key: "init",
      value: function init() {
        // this.dev();
        this.trigger();
        this.filters();
        this.keyboard(); // this.loadMore();

        this.loadAll();
      }
    }, {
      key: "dev",
      value: function dev() {
        var _this = this;

        var thisClass = this;
        document.addEventListener("keypress", function (e) {
          // e.preventDefault();
          if (!e.ctrlKey) {
            return;
          }

          if (e.keyCode === 76) {
            return;
          }

          var div = document.createElement('div');
          div.classList.add('db-new-main-table', 'align-top', 'js-db-table');
          var table = '\
          <style>' + thisClass.css() + '</style>';
          div.innerHTML = table;

          if (document.querySelector('.db-new-main-table.align-top.js-db-table') !== null) {
            document.querySelector('.db-new-main-table.align-top.js-db-table').remove();
          }

          document.querySelector('article.db-new-content.db-requests.js-db-cont').appendChild(div);

          _this.trigger();

          _this.filters();
        });
      }
    }, {
      key: "keyboard",
      value: function keyboard() {
        var thisClass = this;
        document.addEventListener("keypress", function (e) {
          // e.preventDefault();
          // var key = String.fromCharCode( e.which ); // a, b,c, d, e.
          // http://blogs.longwin.com.tw/lifetype/key_codes.html
          // Ctrl + Alt + Shift + U shortcut for delete all from Junk
          if (e.ctrlKey && e.altKey && e.shiftKey && e.which == 85) {
            thisClass.clean(true); // parametar is if it is all delete? efault: False
            // Ctrl + Alt + U shortcut for delete all which are replied.
          } else if (e.ctrlKey && e.altKey && e.which == 85) {
            thisClass.clean(false);
          } else {}
        });
      }
    }, {
      key: "css",
      value: function css() {
        return '';
      }
    }, {
      key: "trigger",
      value: function trigger() {
        var thisClass = this;
        document.querySelector('.js-db-table').classList.add('fwp-js-activate');

        if (thisClass.isCDN) {
          var link = document.createElement('link');
          link.href = 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/css/flag-icons.min.css';
          link.rel = 'stylesheet';
          document.head.appendChild(link);
        }

        setInterval(function () {
          thisClass.load();
        }, 5000);
      }
    }, {
      key: "load",
      value: function load() {
        var thisClass = this;
        var e;
        document.querySelectorAll('.js-db-table table tbody tr').forEach(function (e, i) {
          if (!thisClass.is(e.dataset.fwpid)) {
            thisClass.request[e.dataset.id] = e;
          }
        });
        Object.keys(thisClass.request).forEach(function (i) {
          e = thisClass.request[i];

          if (!thisClass.is(e.dataset.fwpid)) {
            if (e.querySelectorAll('a.js-send-offer').length >= 1) {
              var meta = e.querySelector('a.js-send-offer').dataset.meta;

              if (!meta.requestId) {
                meta = meta.replace("\n", "");

                try {
                  meta = JSON.parse(meta);
                } catch (e) {
                  meta = {};
                  console.log(e);
                }
              }

              meta.offers = e.querySelector('td.applications span').innerHTML;
              meta.budget = e.querySelector('td.hidden-action span.budget').innerHTML;
              meta.delivery = e.querySelector('td.hidden-action .duration').innerHTML;
              meta.requestDate = e.querySelector('td.date span').innerHTML;
              meta.requestStatus = false; // False because Button still apear.

              meta.requestAttach = [];

              if (thisClass.is(e.querySelector('td.see-more .attachment')) && e.querySelectorAll('td.see-more .attachment').length >= 1) {
                e.querySelectorAll('td.see-more .attachment').forEach(function (e, i) {
                  meta.requestAttach.push(e.innerHTML);
                });
              }

              meta.requestTags = [];

              if (thisClass.is(e.querySelector('td.text-wide .tags-standard')) && e.querySelectorAll('td.text-wide .tags-standard span').length >= 1) {
                e.querySelectorAll('td.text-wide .tags-standard span').forEach(function (e, i) {
                  meta.requestTags.push(e.innerText);
                });
              }

              if (!thisClass.isDef) {
                thisClass.fetch(meta, e);
              } else {
                thisClass.frame(meta, e);
              }
            } else {
              // Button not found.
              if (e.querySelectorAll('td.hidden-action .hover-show i.fa.fa-reply').length >= 1 && thisClass.is(thisClass.base[e.dataset.fwpid]) && thisClass.base[e.dataset.fwpid].meta.requestStatus === false) {
                // Is Proposed. Should be remove.
                thisClass.base[e.dataset.fwpid].meta.requestStatus = true;
              }
            }
          } else {
            // Already Executed.
            if (thisClass.is(thisClass.base[e.dataset.fwpid])) {
              thisClass.base[e.dataset.fwpid].meta.trHtml = e.innerHTML;
            }
          }
        });
      }
    }, {
      key: "fetch",
      value: function fetch(meta, e) {
        var thisClass = this;
        var data;

        if (!meta.requestId) {
          return;
        }

        e.setAttribute('data-fwpid', meta.requestId);
        meta.trHtml = e.innerHTML;
        $.ajax({
          url: "https://www.fiverr.com/inbox/contacts/" + meta.username + "/info",
          dataType: 'json',
          success: function success(result) {
            data = result;
            result = thisClass.fetchScrap(meta, result, e);
            thisClass.execute(result, e);
            thisClass.updateFilters('all');
          },
          error: function error(err) {
            console.log('Some error detected', err);

            if (!thisClass.is(e.getAttribute('data-tried'))) {
              e.setAttribute('data-tried', 1);
            }

            if (Number(e.getAttribute('data-tried')) <= 3) {
              e.removeAttribute('data-fwpid');
              e.setAttribute('data-tried', Number(e.getAttribute('data-tried')) + 1);
            }

            thisClass.request[e.dataset.fwpid] = e;
          }
        });
      }
    }, {
      key: "frame",
      value: function frame(meta, data, e) {
        var thisClass = this;

        if (!meta.requestId) {
          return;
        }

        e.setAttribute('data-fwpid', meta.requestId);
        meta.trHtml = e.innerHTML;
        $.ajax({
          url: "https://www.fiverr.com/" + meta.username,
          dataType: 'text',
          // data: {
          //   url: "https://www.fiverr.com/" + meta.username
          // },
          success: function success(data) {
            var elements = document.createElement('div');
            elements.innerHTML = data;
            var result = thisClass.scrap(elements);
            result.meta = meta;
            thisClass.base[meta.requestId] = result;
            thisClass.execute(result, e);
            thisClass.updateFilters('all');
          },
          error: function error(err) {
            console.log('Some error detected', err);

            if (!thisClass.is(e.getAttribute('data-tried'))) {
              e.setAttribute('data-tried', 1);
            }

            if (Number(e.getAttribute('data-tried')) <= 3) {
              e.removeAttribute('data-fwpid');
              e.setAttribute('data-tried', Number(e.getAttribute('data-tried')) + 1);
            }

            thisClass.request[e.dataset.fwpid] = e;
          }
        });
      }
    }, {
      key: "execute",
      value: function execute(args, e) {
        var thisClass = this;
        var node, a, div, i, span;

        if (e.querySelectorAll('td .fwp-tr-td').length <= 0) {
          e.querySelectorAll('td').forEach(function (td, i) {
            node = document.createElement('div');
            node.classList.add('fwp-tr-td');
            td.appendChild(node);
          });
        } // Insert Country Name after DATE.


        if (e.querySelectorAll('td.date .fwp-c-location').length <= 0) {
          if (thisClass.isCDN) {
            i = document.createElement('i');
            i.classList.add('fwp-c-location', 'fi', 'fi-' + thisClass.flags(args.info.location));
            e.querySelector('td.date .fwp-tr-td').appendChild(i);
          } else {
            i = document.createElement('img');
            i.classList.add('fwp-c-location');
            i.src = thisClass.flags(args.info.location);
            e.querySelector('td.date .fwp-tr-td').appendChild(i);
          }

          node = document.createElement('span');
          node.classList.add('fwp-c-location');
          node.innerText = args.info.location ? args.info.location : 'N/A';
          e.querySelector('td.date .fwp-tr-td').appendChild(node);
        } // Insert Buyer Account date after USER Image.


        if (e.querySelectorAll('td.profile-40 .fwp-c-date').length <= 0) {
          node = document.createElement('a');
          node.classList.add('fwp-c-name');
          node.href = 'https://www.fiverr.com/' + args.meta.username;
          node.target = '_blank';
          node.innerText = args.meta.username;
          e.querySelector('td.profile-40').appendChild(node);
          node = document.createElement('span');
          node.classList.add('fwp-c-date');
          node.innerText = thisClass.is(args.info.since) ? args.info.since : 'N/A';
          e.querySelector('td.profile-40 .fwp-tr-td').appendChild(thisClass.icons('profile'));
          e.querySelector('td.profile-40 .fwp-tr-td').appendChild(node);
        } // Insert Buyer Account review after Descriptions.


        if (e.querySelectorAll('td.text-wide .fwp-c-review').length <= 0) {
          var div = document.createElement('div'),
              div1 = document.createElement('div'),
              div2 = document.createElement('div');
          div.classList.add('fwp-wrap-review');
          div1.classList.add('fwp-wrap-review-col');
          div2.classList.add('fwp-wrap-review-col');
          div1.appendChild(thisClass.icons('review'));
          div2.appendChild(thisClass.icons('review'));
          span = document.createElement('span');
          span.innerText = 'Reviews as Buyer';
          div1.appendChild(span);
          span = document.createElement('span');
          span.innerText = 'Reviews as Seller';
          div2.appendChild(span);
          span = document.createElement('span');
          span.innerText = thisClass.is(args.rating.rab) ? parseFloat(args.rating.rab).toFixed(1) + '' + (thisClass.is(args.rating.rabt) ? !isNaN(args.rating.rabt) ? '(' + args.rating.rabt + ')' : args.rating.rabt : '') : 'None';
          div1.appendChild(span);
          span = document.createElement('span');
          span.innerText = thisClass.is(args.rating.ras) ? parseFloat(args.rating.ras).toFixed(1) + '' + (thisClass.is(args.rating.rast) ? !isNaN(args.rating.rast) ? '(' + args.rating.rast + ')' : args.rating.rast : '') : 'None';
          div2.appendChild(span);
          div.appendChild(div1);
          div.appendChild(div2);
          e.querySelector('td.text-wide .fwp-tr-td, td.see-more .fwp-tr-td').appendChild(div);
        } // Insert Buyer Responding time after OFFERS SENT.


        if (e.querySelectorAll('td.applications .fwp-c-link').length <= 0) {
          node = document.createElement('a');
          node.classList.add('fwp-c-link');
          node.href = 'https://www.fiverr.com/' + args.meta.username;
          node.target = '_blank';
          node.appendChild(thisClass.icons('link'));
          e.querySelector('td.applications .fwp-tr-td').appendChild(node);
        } // Insert Buyer Online Status time after DURATION.


        if (e.querySelectorAll('td.hidden-action:nth-child(5) .fwp-c-status').length <= 0) {
          var status = thisClass.is(args.info.online) && args.info.online.toLowerCase().includes('online') ? 'Online' : 'Offline';
          node = document.createElement('span');
          node.classList.add('fwp-c-online');
          node.innerText = status;
          e.querySelector('td.hidden-action:nth-child(5) .fwp-tr-td').appendChild(thisClass.icons(status.toLowerCase()));
          e.querySelector('td.hidden-action:nth-child(5) .fwp-tr-td').appendChild(node);
        } // Insert Buyer Responding time after Price and Button.


        if (e.querySelectorAll('td.hidden-action:nth-child(6) .fwp-c-response').length <= 0 && e.querySelector('td.hidden-action:nth-child(6)') !== null) {
          node = document.createElement('span');
          node.classList.add('fwp-c-response');
          node.innerText = thisClass.is(args.info.response) ? args.info.response : 'N/A';
          e.querySelector('td.hidden-action:nth-child(6) .fwp-tr-td').appendChild(thisClass.icons('response'));
          e.querySelector('td.hidden-action:nth-child(6) .fwp-tr-td').appendChild(node);
        } // Insert an Iframe after Description.
        // if( e.querySelectorAll( 'td.see-more .extension-requestpage-iframe' ).length <= 0 && e.querySelector( 'td.see-more' ) !== null ) {
        //   node = document.createElement( 'iframe' );node.classList.add( 'extension-requestpage-iframe' );node.src = 'https://www.fiverr.com/' + args.meta.username;node.setAttribute( 'frameborder', 0 );node.setAttribute( 'allowfullscreen', true );
        //   // e.querySelector( 'td.see-more' ).appendChild( node );
        // }


        thisClass.request[e.dataset.fwpid] = e;
      }
    }, {
      key: "fetchScrap",
      value: function fetchScrap(meta, result, e) {
        var thisClass = this;
        var data,
            r = result,
            lang = [];
        ;

        if (thisClass.is(r.languages)) {
          r.languages.forEach(function (l, i) {
            lang.push([thisClass.is(thisClass.database.langs[l.language]) ? thisClass.database.langs[l.language].name : l.language, l.level]);
          });
        }

        data = {
          info: {
            user: meta.username,
            link: 'https://www.fiverr.com/' + meta.username,
            location: thisClass.is(r.country) ? r.country : false,
            locationShort: thisClass.is(r.countryCode) ? r.countryCode : false,
            since: thisClass.is(r.memberSince) ? new Date(r.memberSince * 1000).toLocaleDateString("en-US", {
              year: 'numeric',
              month: 'short'
            }) : false,
            // https://stackoverflow.com/questions/3552461/how-do-i-format-a-date-in-javascript
            response: thisClass.is(r.avgResponseTimeInHours) ? r.avgResponseTimeInHours + ' ' + (r.avgResponseTimeInHours <= 1 ? 'Hour' : 'Hours') : false,
            delivery: thisClass.is(r.lastDelivery) ? r.lastDelivery : false,
            online: thisClass.is(!r.isAway) ? 'Online' : false
          },
          rating: {
            rating: thisClass.is(r.starsRating) ? r.starsRating : false,
            total: thisClass.is(r.ratingsCount) ? r.ratingsCount : false,
            html: thisClass.is(r.avgRatingHtml) ? r.avgRatingHtml : false,
            scl: thisClass.is(r.sellerCommunicationLevel) ? r.sellerCommunicationLevel : false,
            rtf: thisClass.is(r.recommendToaFriend) ? r.recommendToaFriend : false,
            sad: thisClass.is(r.sellerDeliveryLevel) ? r.sellerDeliveryLevel : false,
            rab: thisClass.is(r.sellingReviews) ? r.sellingReviews.valuationsAverage : false,
            rabt: thisClass.is(r.sellingReviews) ? r.sellingReviews.totalCount : false,
            ras: r.starsRating,
            rast: r.ratingsCount
          },
          language: lang,
          skills: [],
          education: [],
          certification: [],
          meta: meta
        };
        thisClass.base[meta.requestId] = data;
        return data;
      }
    }, {
      key: "scrap",
      value: function scrap(doc) {
        var thisClass = this;
        var e = doc.querySelector('.rating-stars'),
            u = thisClass.is(doc.querySelector('.seller-card .username-line .seller-link')) ? doc.querySelector('.seller-card .username-line .seller-link').innerText : false,
            r = thisClass.is(doc.querySelector('.rating-stars')) ? doc.querySelector('.rating-stars').getAttribute('data-user-rating') : false,
            t = thisClass.is(doc.querySelector('.rating-stars')) ? doc.querySelector('.rating-stars').getAttribute('data-user-ratings-count') : false,
            scl = thisClass.is(doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 1 ) .orca-rating .rating-score')) ? doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 1 ) .orca-rating .rating-score').innerText : false,
            rtf = thisClass.is(doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 2 ) .orca-rating .rating-score')) ? doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 2 ) .orca-rating .rating-score').innerText : false,
            sad = thisClass.is(doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 3 ) .orca-rating .rating-score')) ? doc.querySelector('.reviews-package .reviews-header .summary ul.header-stars li:nth-child( 3 ) .orca-rating .rating-score').innerText : false,
            ras = thisClass.is(doc.querySelector('#reviews_header_as_seller .orca-rating .rating-score')) ? doc.querySelector('#reviews_header_as_seller .orca-rating .rating-score').innerText : false,
            rast = thisClass.is(doc.querySelector('#reviews_header_as_seller .orca-rating .ratings-count')) ? doc.querySelector('#reviews_header_as_seller .orca-rating .ratings-count').innerText : false,
            rab = thisClass.is(doc.querySelector('#reviews_header_as_buyer .orca-rating .rating-score')) ? doc.querySelector('#reviews_header_as_buyer .orca-rating .rating-score').innerText : false,
            rabt = thisClass.is(doc.querySelector('#reviews_header_as_buyer .orca-rating .ratings-count')) ? doc.querySelector('#reviews_header_as_buyer .orca-rating .ratings-count').innerText : false,
            l = thisClass.is(doc.querySelector('.seller-card ul.user-stats li.location b')) ? doc.querySelector('.seller-card ul.user-stats li.location b').innerText : false,
            ms = thisClass.is(doc.querySelector('.seller-card ul.user-stats li.member-since b')) ? doc.querySelector('.seller-card ul.user-stats li.member-since b').innerText : false,
            rt = thisClass.is(doc.querySelector('.seller-card ul.user-stats li.response-time b')) ? doc.querySelector('.seller-card ul.user-stats li.response-time b').innerText : false,
            rth = thisClass.is(doc.querySelector('.orca-rating .stars')) ? doc.querySelector('.orca-rating .stars').innerHTML : false,
            ld = thisClass.is(doc.querySelector('.seller-card ul.user-stats li.recent-delivery strong')) ? doc.querySelector('.seller-card ul.user-stats li.recent-delivery strong').innerText : false,
            ol = thisClass.is(doc.querySelector('.seller-card .user-online-indicator.is-online')) ? doc.querySelector('.seller-card .user-online-indicator.is-online').innerText.replace('·\n', '') : false,
            lnk = thisClass.is(doc.querySelector('.seller-card .username-line .seller-link')) ? doc.querySelector('.seller-card .username-line .seller-link').getAttribute('href') : false,
            lg = [],
            skl = [],
            edu = [],
            cert = [];
        doc.querySelectorAll('.user-page-perseus .seller-profile .languages li').forEach(function (e, i) {
          lg[i] = _typeof(e.innerText) !== undefined ? e.innerText.split('-') : false;
        });
        doc.querySelectorAll('.user-page-perseus .seller-profile .skills ul li').forEach(function (e, i) {
          var text = e.innerText;

          if (e.classList.contains('verified')) {
            text = [text, 'Verified'];
          }

          skl[i] = text;
        });
        doc.querySelectorAll('.user-page-perseus .seller-profile .education-list ul li').forEach(function (e, i) {
          edu[i] = _typeof(e.firstElementChild.innerText) !== undefined ? e.firstElementChild.innerText.split('\n\n') : false;
        });
        doc.querySelectorAll('.user-page-perseus .seller-profile .list:not(.education-list) ul li').forEach(function (e, i) {
          cert[i] = _typeof(e.firstElementChild.innerText) !== undefined ? e.firstElementChild.innerText.split('\n\n') : false;
        });
        var result = {
          info: {
            user: u,
            link: _typeof(lnk) !== undefined ? 'https://www.fiverr.com' + lnk : false,
            location: l,
            since: ms,
            response: rt,
            delivery: ld,
            online: ol
          },
          rating: {
            rating: r,
            total: t,
            html: rth,
            scl: scl,
            rtf: rtf,
            sad: sad,
            rab: rab,
            rabt: rabt,
            ras: ras,
            rast: rast
          },
          language: lg,
          skills: skl,
          education: edu,
          certification: cert
        };
        return result;
      }
    }, {
      key: "is",
      value: function is(elem) {
        return _typeof(elem) !== undefined && elem !== null && elem;
      }
    }, {
      key: "filters",
      value: function filters() {
        /**
         * Special filters for extensions.
         */
        var thisClass = this;
        var td, tr, div, span, a, i;

        if (document.querySelectorAll('.js-fwp-filters').length >= 1) {
          return;
        }

        document.querySelectorAll('.db-new-main-table table thead tr.header-filter td').forEach(function (td, i) {
          td.setAttribute('colspan', 1);
        });
        var html = '\
      <td colspan="4" class="js-fwp-filters listings-perseus">\
        <div class="floating-menu" data-active="open">\
          <div class="menu-title filter-menu">Filters <span class="XQskgrQ chevron-icon-down" aria-hidden="true" style="width: 10px; height: 10px">\
              <svg width="11" height="7" viewBox="0 0 11 7" xmlns="http://www.w3.org/2000/svg">\
                <path d="M5.4636 6.38899L0.839326 1.769C0.692474 1.62109 0.692474 1.38191 0.839326 1.23399L1.45798 0.61086C1.60483 0.462945 1.84229 0.462945 1.98915 0.61086L5.72919 4.34021L9.46923 0.61086C9.61608 0.462945 9.85354 0.462945 10.0004 0.61086L10.619 1.23399C10.7659 1.38191 10.7659 1.62109 10.619 1.769L5.99477 6.38899C5.84792 6.5369 5.61046 6.5369 5.4636 6.38899Z"></path>\
              </svg>\
            </span>\
          </div>\
          <div class="menu-content">\
            <form class="content-scroll" name="fwpfilter" id="fwpfilter" style="max-height: 264px">\
              ' + thisClass.getFilters('all') + '\
            </form>\
            <div class="button-row">\
              <a class="clear-all co-text-light" onclick="window.fwpfilter.reset();">Clear All</a>\
              <a class="apply">Apply</a>\
            </div>\
          </div>\
        </div>\
      </td>';
        div = ['.db-new-main-table table thead tr.header-filter', '.db-new-main-table table thead tr.header-filter td'];
        td = document.createElement('td');
        td.setAttribute('colspan', 1);
        a = document.createElement('a');
        a.href = '#';
        a.classList.add('js-fwp-load-all-btn');
        a.innerHTML = 'Load All';
        a.appendChild(document.createElement('i'));
        td.appendChild(a);
        document.querySelector(div[0]).insertBefore(td, document.querySelectorAll(div[1])[1]);
        td = document.createElement('td');
        td.setAttribute('colspan', 3);
        td.classList.add('js-fwp-filters', 'listings-perseus');
        td.innerHTML = html;
        document.querySelector(div[0]).insertBefore(td, document.querySelectorAll(div[1])[1]);
        thisClass.event();
      }
    }, {
      key: "event",
      value: function event() {
        var thisClass = this;
        var node;
        document.querySelectorAll('.listings-perseus .floating-menu > .filter-menu').forEach(function (menu, i) {
          menu.addEventListener('click', function (e) {
            this.parentElement.classList.toggle('open');
          });
        });
        node = document.querySelector('.listings-perseus .floating-menu .menu-content .button-row .apply');
        node.addEventListener('click', function (e) {
          e.preventDefault();
          var form = document.getElementById('fwpfilter'),
              formData,
              values; // window.fwpfilter

          formData = new FormData(form);
          values = _toConsumableArray(formData.entries());
          thisClass.filterOut(values);
        });
      }
    }, {
      key: "currency",
      value: function currency() {
        var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '$';
        var tr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'sign';

        /**
         * Default available country
         */
        var arr = [{
          "title": "United States Dollar",
          "currency": "USD - $",
          "short": "USD",
          "sign": "$"
        }, {
          "title": "Euro",
          "currency": "EUR - €",
          "short": "EUR",
          "sign": "€"
        }, {
          "title": "British Pound",
          "currency": "GBP - £",
          "short": "GBP",
          "sign": "£"
        }, {
          "title": "Australian Dollar",
          "currency": "AUD - A$",
          "short": "AUD",
          "sign": "A$"
        }, {
          "title": "Canadian Dollar",
          "currency": "CAD - CA$",
          "short": "CAD",
          "sign": "CA$"
        }, {
          "title": "Israeli Shekel",
          "currency": "ILS - ₪",
          "short": "ILS",
          "sign": "₪"
        }, {
          "title": "Brazilian Real",
          "currency": "BRL - R$",
          "short": "BRL",
          "sign": "R$"
        }, {
          "title": "Hong Kong Dollar",
          "currency": "HKD - HK$",
          "short": "HKD",
          "sign": "HK$"
        }, {
          "title": "Swedish Krona",
          "currency": "SEK - SEK",
          "short": "SEK",
          "sign": "SEK"
        }, {
          "title": "New Zealand Dollar",
          "currency": "NZD - NZ$",
          "short": "NZD",
          "sign": "NZ$"
        }, {
          "title": "Singapore Dollar",
          "currency": "SGD - SGD",
          "short": "SGD",
          "sign": "SGD"
        }, {
          "title": "Swiss Franc",
          "currency": "CHF - CHF",
          "short": "CHF",
          "sign": "CHF"
        }, {
          "title": "South African Rand",
          "currency": "ZAR - ZAR",
          "short": "ZAR",
          "sign": "ZAR"
        }, {
          "title": "Chinese Renminbi Yuan",
          "currency": "CNY - CN¥",
          "short": "CNY",
          "sign": "CN¥"
        }, {
          "title": "Indian Rupee",
          "currency": "INR - ₹",
          "short": "INR",
          "sign": "₹"
        }, {
          "title": "Malaysian Ringgit",
          "currency": "MYR - MYR",
          "short": "MYR",
          "sign": "MYR"
        }, {
          "title": "Mexican Peso",
          "currency": "MXN - MX$",
          "short": "MXN",
          "sign": "MX$"
        }, {
          "title": "Pakistani Rupee",
          "currency": "PKR - PKR",
          "short": "PKR",
          "sign": "PKR"
        }, {
          "title": "Philippine Peso",
          "currency": "PHP - ₱",
          "short": "PHP",
          "sign": "₱"
        }, {
          "title": "New Taiwan Dollar",
          "currency": "TWD - NT$",
          "short": "TWD",
          "sign": "NT$"
        }, {
          "title": "Thai Baht",
          "currency": "THB - THB",
          "short": "THB",
          "sign": "THB"
        }, {
          "title": "Turkish New Lira",
          "currency": "TRY - TRY",
          "short": "TRY",
          "sign": "TRY"
        }, {
          "title": "United Arab Emirates Dirham",
          "currency": "AED - AED",
          "short": "AED",
          "sign": "AED"
        }]; // var currency = this.getCurrency();

        var sign = '$'; // arr.forEach( function( c, i ) {
        //   if( c.currency == str ) {sign = c.sign;}
        // } );

        return sign;
      }
    }, {
      key: "getCurrency",
      value: function getCurrency() {
        var currencies = [];
        document.querySelectorAll('.locale-settings-package .selection-list .item-row.default-currency-item').forEach(function (c, i) {
          var symbol = jQuery(c).find('.currency-code-symbol').text();
          sp = symbol.split(' - ');
          var cur = {
            title: jQuery(c).find('.currency-name').text(),
            currency: symbol,
            short: sp[0],
            sign: sp[1]
          };
          currencies.push(cur);
        });
        return currencies;
      }
    }, {
      key: "checkIf",
      value: function checkIf(tr, cnd) {
        return tr == 'all' || tr == cnd;
      }
    }, {
      key: "getFilters",
      value: function getFilters() {
        var tr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
        var database = this.database,
            html = '';
        var thisClass = this;

        if (thisClass.checkIf(tr, 'budget') && thisClass.permit('budget')) {
          // Client budget range filter
          html += '\
        <div class="more-filter-item with-carrot">\
          <div class="content-title"> Budget </div>\
          <div class="budget-filter">\
            <div class="price-range-filter">\
              <div class="input-wrapper">\
                <label>MIN.</label>\
                <input type="number" name="range-min" class="min" placeholder="Any" min="0" max="500000" value="" />\
                <i>' + thisClass.currency() + '</i>\
              </div>\
              <div class="input-wrapper">\
                <label>MAX.</label>\
                <input type="number" name="range-max" class="max" placeholder="Any" min="0" max="500000" value="" />\
                <i>' + thisClass.currency() + '</i>\
              </div>\
            </div>\
          </div>\
        </div>';
        }

        if (thisClass.checkIf(tr, 'delivery') && thisClass.permit('delivery')) {
          // Project Delivery time filter
          html += '\
        <div class="more-filter-item with-carrot delivery">\
          <div class="content-title"> Delivery time </div>\
          <div class="radio-list">';
          database.delivery.forEach(function (e, i) {
            html += '\
          <div class="radio-item-wrapper">\
            <label class="Yxq3IHR DOMdBU+ radio-item ' + (i == 3 ? 'selected' : '') + '">\
              <input type="radio" name="delivery" value="' + (i + 1) + '" ' + (i == 3 ? 'checked=""' : '') + '>\
              <span class="zHaeckV"></span>' + e + '</label>\
          </div>';
          });
          html += '\
          </div>\
        </div>';
        }

        if (thisClass.checkIf(tr, 'label') && thisClass.permit('label')) {
          // Client Label, or is it professional account
          html += '\
        <div class="more-filter-item with-carrot label">\
          <div class="content-title"> Client Account Label </div>\
          <div class="checkbox-list">';
          database.label.forEach(function (e, i) {
            html += '\
          <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
              <input type="checkbox" name="label" value="' + (i + 1) + '">\
              <span class="FO1WDvp">\
                <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                  <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                  </svg>\
                </span>\
              </span>\
              <div class="inner-checkbox">\
                <span class="label">' + e + '</span>\
              </div>\
            </label>';
          });
          html += '\
          </div>\
        </div>';
        }

        if (thisClass.checkIf(tr, 'lives') && thisClass.permit('lives')) {
          // Client Country filter.
          html += '\
        <div class="more-filter-item with-carrot lives">\
          <div class="content-title"> Buyer Location </div>\
          <div class="checkbox-list lives">';
          database.lives.forEach(function (e, i) {
            html += '\
              <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
                <input type="checkbox" name="lives" value="' + e[1] + '" data-short="' + e[0] + '" ' + (thisClass.is(document.querySelector('.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="' + e[0] + '"]')) && document.querySelector('.fwp-js-activate .more-filter-item.with-carrot.lives .checkbox-list.lives [data-short="' + e[0] + '"]').checked === true ? 'checked' : '') + '>\
                <span class="FO1WDvp">\
                  <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                    <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                      <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                    </svg>\
                  </span>\
                </span>\
                <div class="inner-checkbox">\
                  <span class="label">' + e[1] + '</span>\
                  ' + (e[2] ? '<span class="count"> (' + e[2] + ')</span>' : '') + '\
                </div>\
              </label>';
          });
          html += '\
          </div>\
        </div>';
        }

        if (thisClass.checkIf(tr, 'speak') && thisClass.permit('speak')) {
          // Client Language filter
          html += '\
        <div class="more-filter-item with-carrot speak">\
          <div class="content-title"> Buyer Speaks </div>\
          <div class="checkbox-list">';
          database.speak.forEach(function (e, i) {
            html += '\
          <label class="-SSRhMt zsZmoTB cWwLjTL checkbox">\
              <input type="checkbox" name="speak" value="' + e[0] + '">\
              <span class="FO1WDvp">\
                <span class="XQskgrQ L8UwSlD" aria-hidden="true" style="width: 10px; height: 10px;">\
                  <svg width="11" height="9" viewBox="0 0 11 9" xmlns="http://www.w3.org/2000/svg">\
                    <path d="M3.64489 8.10164L0.158292 4.61504C-0.0511769 4.40557 -0.0511769 4.06594 0.158292 3.85645L0.916858 3.09786C1.12633 2.88837 1.46598 2.88837 1.67545 3.09786L4.02419 5.44658L9.05493 0.41586C9.2644 0.206391 9.60405 0.206391 9.81352 0.41586L10.5721 1.17445C10.7816 1.38392 10.7816 1.72355 10.5721 1.93303L4.40348 8.10166C4.19399 8.31113 3.85436 8.31113 3.64489 8.10164V8.10164Z"></path>\
                  </svg>\
                </span>\
              </span>\
              <div class="inner-checkbox">\
                <span class="label">' + e[0] + '</span>\
                ' + (e[1] ? '<span class="count"> (' + e[1] + ')</span>' : '') + '\
              </div>\
            </label>';
          });
          html += '\
          </div>\
        </div>';
        }

        return html;
      }
    }, {
      key: "updateFilters",
      value: function updateFilters() {
        var _this2 = this;

        var tr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'all';
        return function (tr) {
          var thisClass = _this2;
          var tr = 'lives',
              html,
              node,
              selector = '.fwp-js-activate .listings-perseus .floating-menu .menu-content .content-scroll .more-filter-item.with-carrot.' + tr;
          thisClass.getLive(false, true);

          if (thisClass.is(document.querySelector(selector))) {
            html = thisClass.getFilters(tr);
            node = document.createElement('div');
            node.innerHTML = html;
            html = thisClass.is(node.querySelector('.more-filter-item.with-carrot.' + tr)) ? node.querySelector('.more-filter-item.with-carrot.' + tr).innerHTML : html;
            document.querySelector(selector).innerHTML = html;
          }
        }(tr);
      }
    }, {
      key: "getLive",
      value: function getLive() {
        var rtn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
        var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var thisClass = this;
        var vase = thisClass.base,
            lives = thisClass.getDatabase().lives,
            lv = '',
            output = [],
            e;
        lives.forEach(function (lv, l) {
          Object.keys(thisClass.base).forEach(function (i) {
            e = vase[i];

            if (e.info.location == lv[1]) {
              lv[2] = lv[2] ? lv[2] + 1 : 1;
              output[lv[0]] = [lv[0], lv[1], lv[2]];
            }
          });
        });
        lives = [];
        Object.keys(output).forEach(function (i) {
          lives.push(output[i]);
        });

        if (sort) {
          lives.sort(function (a, b) {
            return a[2] < b[2] ? 1 : -1;
          }); //For Decending
          // lives.sort( ( a, b ) => ( a[ 2 ] > b[ 2 ] ? 1 : -1 ) ); //For Ascending
        }

        if (rtn) {
          return lives;
        } else {
          thisClass.database.lives = lives;
        }
      }
    }, {
      key: "functions",
      value: function functions() {
        var thisClass = this;
        var arr = [];
        document.querySelectorAll('.listings-perseus .floating-menu .menu-content .checkbox-list.speak .label').forEach(function (e, i) {
          arr.push(e.innerText);
        });
        console.log(JSON.stringify(arr));
        var country = [],
            e;
        Object.keys(flags).forEach(function (i) {
          e = flags[i];
          country.push([i, e]);
        });
        console.log(country);

        var fetchMoviesJSON = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return fetch('https://www.fiverr.com/users/' + thisClass.me + '/requests?current_filter=active&page=1&per_page=15', {
                      "credentials": "include",
                      "headers": {
                        "Accept": "text/javascript",
                        "Accept-Language": "en-US,en;q=0.5"
                      },
                      "referrer": 'https://www.fiverr.com/users/' + thisClass.me + '/requests',
                      "method": "GET",
                      "mode": "cors"
                    });

                  case 2:
                    response = _context.sent;
                    _context.next = 5;
                    return response.json();

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function fetchMoviesJSON() {
            return _ref.apply(this, arguments);
          };
        }();

        fetchMoviesJSON().then(function (json) {
          console.log(json);
        }); // 
      }
    }, {
      key: "getDatabase",
      value: function getDatabase() {
        var database = {
          speak: [["English"], ["French"], ["Spanish"], ["Urdu"], ["German"], ["Hindi"], ["Bengali"], ["Arabic"], ["Italian"], ["Russian"], ["Portuguese"], ["Punjabi"], ["Dutch"], ["Ukrainian"], ["Gujarati"], ["Chinese"], ["Turkish"], ["Hebrew"], ["Tamil"], ["Polish"], ["Marathi"], ["Malayalam"], ["Telugu"], ["Persian"], ["Vietnamese"], ["Kannada"], ["Thai"], ["Oriya"], ["Javanese"], ["Burmese"]],
          label: [// all lowercase and replace " " with "_"
          "Top Rated Seller", "Level Two", "Level One", "New Seller"],
          lives: [["US", "United States"], ["GB", "United Kingdom"], ["CA", "Canada"], ["DE", "Germany"], ["AF", "Afghanistan"], ["AL", "Albania"], ["DZ", "Algeria"], ["AO", "Angola"], ["AR", "Argentina"], ["AM", "Armenia"], ["AW", "Aruba"], ["AU", "Australia"], ["AT", "Austria"], ["AZ", "Azerbaijan"], ["BS", "Bahamas"], ["BH", "Bahrain"], ["BD", "Bangladesh"], ["BB", "Barbados"], ["BY", "Belarus"], ["BE", "Belgium"], ["BZ", "Belize"], ["BJ", "Benin"], ["BT", "Bhutan"], ["BO", "Bolivia"], ["BA", "Bosnia and Herzegovina"], ["BR", "Brazil"], ["BG", "Bulgaria"], ["KH", "Cambodia"], ["CM", "Cameroon"], ["CL", "Chile"], ["CN", "China"], ["CO", "Colombia"], ["CD", "Congo [DRC]"], ["CR", "Costa Rica"], ["HR", "Croatia"], ["CY", "Cyprus"], ["CZ", "Czech Republic"], ["DK", "Denmark"], ["DO", "Dominican Republic"], ["EC", "Ecuador"], ["EG", "Egypt"], ["SV", "El Salvador"], ["EE", "Estonia"], ["ET", "Ethiopia"], ["FI", "Finland"], ["FR", "France"], ["PF", "French Polynesia"], ["GE", "Georgia"], ["GH", "Ghana"], ["GR", "Greece"], ["GP", "Guadeloupe"], ["GU", "Guam"], ["GT", "Guatemala"], ["GY", "Guyana"], ["HT", "Haiti"], ["HN", "Honduras"], ["HK", "Hong Kong"], ["HU", "Hungary"], ["IN", "India"], ["ID", "Indonesia"], ["IE", "Ireland"], ["IL", "Israel"], ["IT", "Italy"], ["CI", "Ivory Coast"], ["JM", "Jamaica"], ["JP", "Japan"], ["JO", "Jordan"], ["KZ", "Kazakhstan"], ["KE", "Kenya"], ["XK", "Kosovo"], ["KW", "Kuwait"], ["KG", "Kyrgyzstan"], ["LV", "Latvia"], ["LY", "Libya"], ["LT", "Lithuania"], ["LU", "Luxembourg"], ["MK", "Macedonia [FYROM]"], ["MG", "Madagascar"], ["MW", "Malawi"], ["MY", "Malaysia"], ["MT", "Malta"], ["MU", "Mauritius"], ["MX", "Mexico"], ["MD", "Moldova"], ["MN", "Mongolia"], ["ME", "Montenegro"], ["MA", "Morocco"], ["MZ", "Mozambique"], ["MM", "Myanmar [Burma]"], ["NA", "Namibia"], ["NP", "Nepal"], ["NL", "Netherlands"], ["NC", "New Caledonia"], ["NZ", "New Zealand"], ["NI", "Nicaragua"], ["NG", "Nigeria"], ["MP", "Northern Mariana Islands"], ["NO", "Norway"], ["OM", "Oman"], ["PK", "Pakistan"], ["PS", "Palestinian Territories"], ["PA", "Panama"], ["PY", "Paraguay"], ["PE", "Peru"], ["PH", "Philippines"], ["PL", "Poland"], ["PT", "Portugal"], ["PR", "Puerto Rico"], ["QA", "Qatar"], ["RO", "Romania"], ["RU", "Russia"], ["RW", "Rwanda"], ["LC", "Saint Lucia"], ["VC", "Saint Vincent and the Grenadines"], ["SA", "Saudi Arabia"], ["SN", "Senegal"], ["RS", "Serbia"], ["SG", "Singapore"], ["SK", "Slovakia"], ["SI", "Slovenia"], ["SO", "Somalia"], ["ZA", "South Africa"], ["KR", "South Korea"], ["ES", "Spain"], ["LK", "Sri Lanka"], ["SD", "Sudan"], ["SZ", "Swaziland"], ["SE", "Sweden"], ["CH", "Switzerland"], ["TW", "Taiwan"], ["TJ", "Tajikistan"], ["TZ", "Tanzania"], ["TH", "Thailand"], ["TG", "Togo"], ["TT", "Trinidad and Tobago"], ["TN", "Tunisia"], ["TR", "Turkey"], ["UG", "Uganda"], ["UA", "Ukraine"], ["AE", "United Arab Emirates"], ["UY", "Uruguay"], ["UZ", "Uzbekistan"], ["VE", "Venezuela"], ["VN", "Vietnam"], ["YE", "Yemen"], ["ZM", "Zambia"], ["ZW", "Zimbabwe"]],
          delivery: ["Express 24H", "Up to 3 days", "Up to 7 days", "Anytime"],
          flags: [["ad", "Andorra"], ["ae", "United Arab Emirates"], ["af", "Afghanistan"], ["ag", "Antigua and Barbuda"], ["ai", "Anguilla"], ["al", "Albania"], ["am", "Armenia"], ["ao", "Angola"], ["aq", "Antarctica"], ["ar", "Argentina"], ["as", "American Samoa"], ["at", "Austria"], ["au", "Australia"], ["aw", "Aruba"], ["ax", "Åland Islands"], ["az", "Azerbaijan"], ["ba", "Bosnia and Herzegovina"], ["bb", "Barbados"], ["bd", "Bangladesh"], ["be", "Belgium"], ["bf", "Burkina Faso"], ["bg", "Bulgaria"], ["bh", "Bahrain"], ["bi", "Burundi"], ["bj", "Benin"], ["bl", "Saint Barthélemy"], ["bm", "Bermuda"], ["bn", "Brunei"], ["bo", "Bolivia"], ["bq", "Caribbean Netherlands"], ["br", "Brazil"], ["bs", "Bahamas"], ["bt", "Bhutan"], ["bv", "Bouvet Island"], ["bw", "Botswana"], ["by", "Belarus"], ["bz", "Belize"], ["ca", "Canada"], ["cc", "Cocos (Keeling) Islands"], ["cd", "DR Congo"], ["cf", "Central African Republic"], ["cg", "Republic of the Congo"], ["ch", "Switzerland"], ["ci", "Côte d'Ivoire (Ivory Coast)"], ["ck", "Cook Islands"], ["cl", "Chile"], ["cm", "Cameroon"], ["cn", "China"], ["co", "Colombia"], ["cr", "Costa Rica"], ["cu", "Cuba"], ["cv", "Cape Verde"], ["cw", "Curaçao"], ["cx", "Christmas Island"], ["cy", "Cyprus"], ["cz", "Czechia"], ["de", "Germany"], ["dj", "Djibouti"], ["dk", "Denmark"], ["dm", "Dominica"], ["do", "Dominican Republic"], ["dz", "Algeria"], ["ec", "Ecuador"], ["ee", "Estonia"], ["eg", "Egypt"], ["eh", "Western Sahara"], ["er", "Eritrea"], ["es", "Spain"], ["et", "Ethiopia"], ["eu", "European Union"], ["fi", "Finland"], ["fj", "Fiji"], ["fk", "Falkland Islands"], ["fm", "Micronesia"], ["fo", "Faroe Islands"], ["fr", "France"], ["ga", "Gabon"], ["gb", "United Kingdom"], ["gb-eng", "England"], ["gb-nir", "Northern Ireland"], ["gb-sct", "Scotland"], ["gb-wls", "Wales"], ["gd", "Grenada"], ["ge", "Georgia"], ["gf", "French Guiana"], ["gg", "Guernsey"], ["gh", "Ghana"], ["gi", "Gibraltar"], ["gl", "Greenland"], ["gm", "Gambia"], ["gn", "Guinea"], ["gp", "Guadeloupe"], ["gq", "Equatorial Guinea"], ["gr", "Greece"], ["gs", "South Georgia"], ["gt", "Guatemala"], ["gu", "Guam"], ["gw", "Guinea-Bissau"], ["gy", "Guyana"], ["hk", "Hong Kong"], ["hm", "Heard Island and McDonald Islands"], ["hn", "Honduras"], ["hr", "Croatia"], ["ht", "Haiti"], ["hu", "Hungary"], ["id", "Indonesia"], ["ie", "Ireland"], ["il", "Israel"], ["im", "Isle of Man"], ["in", "India"], ["io", "British Indian Ocean Territory"], ["iq", "Iraq"], ["ir", "Iran"], ["is", "Iceland"], ["it", "Italy"], ["je", "Jersey"], ["jm", "Jamaica"], ["jo", "Jordan"], ["jp", "Japan"], ["ke", "Kenya"], ["kg", "Kyrgyzstan"], ["kh", "Cambodia"], ["ki", "Kiribati"], ["km", "Comoros"], ["kn", "Saint Kitts and Nevis"], ["kp", "North Korea"], ["kr", "South Korea"], ["kw", "Kuwait"], ["ky", "Cayman Islands"], ["kz", "Kazakhstan"], ["la", "Laos"], ["lb", "Lebanon"], ["lc", "Saint Lucia"], ["li", "Liechtenstein"], ["lk", "Sri Lanka"], ["lr", "Liberia"], ["ls", "Lesotho"], ["lt", "Lithuania"], ["lu", "Luxembourg"], ["lv", "Latvia"], ["ly", "Libya"], ["ma", "Morocco"], ["mc", "Monaco"], ["md", "Moldova"], ["me", "Montenegro"], ["mf", "Saint Martin"], ["mg", "Madagascar"], ["mh", "Marshall Islands"], ["mk", "North Macedonia"], ["ml", "Mali"], ["mm", "Myanmar"], ["mn", "Mongolia"], ["mo", "Macau"], ["mp", "Northern Mariana Islands"], ["mq", "Martinique"], ["mr", "Mauritania"], ["ms", "Montserrat"], ["mt", "Malta"], ["mu", "Mauritius"], ["mv", "Maldives"], ["mw", "Malawi"], ["mx", "Mexico"], ["my", "Malaysia"], ["mz", "Mozambique"], ["na", "Namibia"], ["nc", "New Caledonia"], ["ne", "Niger"], ["nf", "Norfolk Island"], ["ng", "Nigeria"], ["ni", "Nicaragua"], ["nl", "Netherlands"], ["no", "Norway"], ["np", "Nepal"], ["nr", "Nauru"], ["nu", "Niue"], ["nz", "New Zealand"], ["om", "Oman"], ["pa", "Panama"], ["pe", "Peru"], ["pf", "French Polynesia"], ["pg", "Papua New Guinea"], ["ph", "Philippines"], ["pk", "Pakistan"], ["pl", "Poland"], ["pm", "Saint Pierre and Miquelon"], ["pn", "Pitcairn Islands"], ["pr", "Puerto Rico"], ["ps", "Palestine"], ["pt", "Portugal"], ["pw", "Palau"], ["py", "Paraguay"], ["qa", "Qatar"], ["re", "Réunion"], ["ro", "Romania"], ["rs", "Serbia"], ["ru", "Russia"], ["rw", "Rwanda"], ["sa", "Saudi Arabia"], ["sb", "Solomon Islands"], ["sc", "Seychelles"], ["sd", "Sudan"], ["se", "Sweden"], ["sg", "Singapore"], ["sh", "Saint Helena, Ascension and Tristan da Cunha"], ["si", "Slovenia"], ["sj", "Svalbard and Jan Mayen"], ["sk", "Slovakia"], ["sl", "Sierra Leone"], ["sm", "San Marino"], ["sn", "Senegal"], ["so", "Somalia"], ["sr", "Suriname"], ["ss", "South Sudan"], ["st", "São Tomé and Príncipe"], ["sv", "El Salvador"], ["sx", "Sint Maarten"], ["sy", "Syria"], ["sz", "Eswatini (Swaziland)"], ["tc", "Turks and Caicos Islands"], ["td", "Chad"], ["tf", "French Southern and Antarctic Lands"], ["tg", "Togo"], ["th", "Thailand"], ["tj", "Tajikistan"], ["tk", "Tokelau"], ["tl", "Timor-Leste"], ["tm", "Turkmenistan"], ["tn", "Tunisia"], ["to", "Tonga"], ["tr", "Turkey"], ["tt", "Trinidad and Tobago"], ["tv", "Tuvalu"], ["tw", "Taiwan"], ["tz", "Tanzania"], ["ua", "Ukraine"], ["ug", "Uganda"], ["um", "United States Minor Outlying Islands"], ["un", "United Nations"], ["us", "United States"], ["us-ak", "Alaska"], ["us-al", "Alabama"], ["us-ar", "Arkansas"], ["us-az", "Arizona"], ["us-ca", "California"], ["us-co", "Colorado"], ["us-ct", "Connecticut"], ["us-de", "Delaware"], ["us-fl", "Florida"], ["us-ga", "Georgia"], ["us-hi", "Hawaii"], ["us-ia", "Iowa"], ["us-id", "Idaho"], ["us-il", "Illinois"], ["us-in", "Indiana"], ["us-ks", "Kansas"], ["us-ky", "Kentucky"], ["us-la", "Louisiana"], ["us-ma", "Massachusetts"], ["us-md", "Maryland"], ["us-me", "Maine"], ["us-mi", "Michigan"], ["us-mn", "Minnesota"], ["us-mo", "Missouri"], ["us-ms", "Mississippi"], ["us-mt", "Montana"], ["us-nc", "North Carolina"], ["us-nd", "North Dakota"], ["us-ne", "Nebraska"], ["us-nh", "New Hampshire"], ["us-nj", "New Jersey"], ["us-nm", "New Mexico"], ["us-nv", "Nevada"], ["us-ny", "New York"], ["us-oh", "Ohio"], ["us-ok", "Oklahoma"], ["us-or", "Oregon"], ["us-pa", "Pennsylvania"], ["us-ri", "Rhode Island"], ["us-sc", "South Carolina"], ["us-sd", "South Dakota"], ["us-tn", "Tennessee"], ["us-tx", "Texas"], ["us-ut", "Utah"], ["us-va", "Virginia"], ["us-vt", "Vermont"], ["us-wa", "Washington"], ["us-wi", "Wisconsin"], ["us-wv", "West Virginia"], ["us-wy", "Wyoming"], ["uy", "Uruguay"], ["uz", "Uzbekistan"], ["va", "Vatican City (Holy See)"], ["vc", "Saint Vincent and the Grenadines"], ["ve", "Venezuela"], ["vg", "British Virgin Islands"], ["vi", "United States Virgin Islands"], ["vn", "Vietnam"], ["vu", "Vanuatu"], ["wf", "Wallis and Futuna"], ["ws", "Samoa"], ["xk", "Kosovo"], ["ye", "Yemen"], ["yt", "Mayotte"], ["za", "South Africa"], ["zm", "Zambia"], ["zw", "Zimbabwe"]],
          langs: {
            "ab": {
              "name": "Abkhaz",
              "nativeName": "аҧсуа"
            },
            "aa": {
              "name": "Afar",
              "nativeName": "Afaraf"
            },
            "af": {
              "name": "Afrikaans",
              "nativeName": "Afrikaans"
            },
            "ak": {
              "name": "Akan",
              "nativeName": "Akan"
            },
            "sq": {
              "name": "Albanian",
              "nativeName": "Shqip"
            },
            "am": {
              "name": "Amharic",
              "nativeName": "አማርኛ"
            },
            "ar": {
              "name": "Arabic",
              "nativeName": "العربية"
            },
            "an": {
              "name": "Aragonese",
              "nativeName": "Aragonés"
            },
            "hy": {
              "name": "Armenian",
              "nativeName": "Հայերեն"
            },
            "as": {
              "name": "Assamese",
              "nativeName": "অসমীয়া"
            },
            "av": {
              "name": "Avaric",
              "nativeName": "авар мацӀ, магӀарул мацӀ"
            },
            "ae": {
              "name": "Avestan",
              "nativeName": "avesta"
            },
            "ay": {
              "name": "Aymara",
              "nativeName": "aymar aru"
            },
            "az": {
              "name": "Azerbaijani",
              "nativeName": "azərbaycan dili"
            },
            "bm": {
              "name": "Bambara",
              "nativeName": "bamanankan"
            },
            "ba": {
              "name": "Bashkir",
              "nativeName": "башҡорт теле"
            },
            "eu": {
              "name": "Basque",
              "nativeName": "euskara, euskera"
            },
            "be": {
              "name": "Belarusian",
              "nativeName": "Беларуская"
            },
            "bn": {
              "name": "Bengali",
              "nativeName": "বাংলা"
            },
            "bh": {
              "name": "Bihari",
              "nativeName": "भोजपुरी"
            },
            "bi": {
              "name": "Bislama",
              "nativeName": "Bislama"
            },
            "bs": {
              "name": "Bosnian",
              "nativeName": "bosanski jezik"
            },
            "br": {
              "name": "Breton",
              "nativeName": "brezhoneg"
            },
            "bg": {
              "name": "Bulgarian",
              "nativeName": "български език"
            },
            "my": {
              "name": "Burmese",
              "nativeName": "ဗမာစာ"
            },
            "ca": {
              "name": "Catalan; Valencian",
              "nativeName": "Català"
            },
            "ch": {
              "name": "Chamorro",
              "nativeName": "Chamoru"
            },
            "ce": {
              "name": "Chechen",
              "nativeName": "нохчийн мотт"
            },
            "ny": {
              "name": "Chichewa; Chewa; Nyanja",
              "nativeName": "chiCheŵa, chinyanja"
            },
            "zh": {
              "name": "Chinese",
              "nativeName": "中文 (Zhōngwén), 汉语, 漢語"
            },
            "cv": {
              "name": "Chuvash",
              "nativeName": "чӑваш чӗлхи"
            },
            "kw": {
              "name": "Cornish",
              "nativeName": "Kernewek"
            },
            "co": {
              "name": "Corsican",
              "nativeName": "corsu, lingua corsa"
            },
            "cr": {
              "name": "Cree",
              "nativeName": "ᓀᐦᐃᔭᐍᐏᐣ"
            },
            "hr": {
              "name": "Croatian",
              "nativeName": "hrvatski"
            },
            "cs": {
              "name": "Czech",
              "nativeName": "česky, čeština"
            },
            "da": {
              "name": "Danish",
              "nativeName": "dansk"
            },
            "dv": {
              "name": "Divehi; Dhivehi; Maldivian;",
              "nativeName": "ދިވެހި"
            },
            "nl": {
              "name": "Dutch",
              "nativeName": "Nederlands, Vlaams"
            },
            "en": {
              "name": "English",
              "nativeName": "English"
            },
            "eo": {
              "name": "Esperanto",
              "nativeName": "Esperanto"
            },
            "et": {
              "name": "Estonian",
              "nativeName": "eesti, eesti keel"
            },
            "ee": {
              "name": "Ewe",
              "nativeName": "Eʋegbe"
            },
            "fo": {
              "name": "Faroese",
              "nativeName": "føroyskt"
            },
            "fj": {
              "name": "Fijian",
              "nativeName": "vosa Vakaviti"
            },
            "fi": {
              "name": "Finnish",
              "nativeName": "suomi, suomen kieli"
            },
            "fr": {
              "name": "French",
              "nativeName": "français, langue française"
            },
            "ff": {
              "name": "Fula; Fulah; Pulaar; Pular",
              "nativeName": "Fulfulde, Pulaar, Pular"
            },
            "gl": {
              "name": "Galician",
              "nativeName": "Galego"
            },
            "ka": {
              "name": "Georgian",
              "nativeName": "ქართული"
            },
            "de": {
              "name": "German",
              "nativeName": "Deutsch"
            },
            "el": {
              "name": "Greek, Modern",
              "nativeName": "Ελληνικά"
            },
            "gn": {
              "name": "Guaraní",
              "nativeName": "Avañeẽ"
            },
            "gu": {
              "name": "Gujarati",
              "nativeName": "ગુજરાતી"
            },
            "ht": {
              "name": "Haitian; Haitian Creole",
              "nativeName": "Kreyòl ayisyen"
            },
            "ha": {
              "name": "Hausa",
              "nativeName": "Hausa, هَوُسَ"
            },
            "he": {
              "name": "Hebrew (modern)",
              "nativeName": "עברית"
            },
            "hz": {
              "name": "Herero",
              "nativeName": "Otjiherero"
            },
            "hi": {
              "name": "Hindi",
              "nativeName": "हिन्दी, हिंदी"
            },
            "ho": {
              "name": "Hiri Motu",
              "nativeName": "Hiri Motu"
            },
            "hu": {
              "name": "Hungarian",
              "nativeName": "Magyar"
            },
            "ia": {
              "name": "Interlingua",
              "nativeName": "Interlingua"
            },
            "id": {
              "name": "Indonesian",
              "nativeName": "Bahasa Indonesia"
            },
            "ie": {
              "name": "Interlingue",
              "nativeName": "Originally called Occidental; then Interlingue after WWII"
            },
            "ga": {
              "name": "Irish",
              "nativeName": "Gaeilge"
            },
            "ig": {
              "name": "Igbo",
              "nativeName": "Asụsụ Igbo"
            },
            "ik": {
              "name": "Inupiaq",
              "nativeName": "Iñupiaq, Iñupiatun"
            },
            "io": {
              "name": "Ido",
              "nativeName": "Ido"
            },
            "is": {
              "name": "Icelandic",
              "nativeName": "Íslenska"
            },
            "it": {
              "name": "Italian",
              "nativeName": "Italiano"
            },
            "iu": {
              "name": "Inuktitut",
              "nativeName": "ᐃᓄᒃᑎᑐᑦ"
            },
            "ja": {
              "name": "Japanese",
              "nativeName": "日本語 (にほんご／にっぽんご)"
            },
            "jv": {
              "name": "Javanese",
              "nativeName": "basa Jawa"
            },
            "kl": {
              "name": "Kalaallisut, Greenlandic",
              "nativeName": "kalaallisut, kalaallit oqaasii"
            },
            "kn": {
              "name": "Kannada",
              "nativeName": "ಕನ್ನಡ"
            },
            "kr": {
              "name": "Kanuri",
              "nativeName": "Kanuri"
            },
            "ks": {
              "name": "Kashmiri",
              "nativeName": "कश्मीरी, كشميري‎"
            },
            "kk": {
              "name": "Kazakh",
              "nativeName": "Қазақ тілі"
            },
            "km": {
              "name": "Khmer",
              "nativeName": "ភាសាខ្មែរ"
            },
            "ki": {
              "name": "Kikuyu, Gikuyu",
              "nativeName": "Gĩkũyũ"
            },
            "rw": {
              "name": "Kinyarwanda",
              "nativeName": "Ikinyarwanda"
            },
            "ky": {
              "name": "Kirghiz, Kyrgyz",
              "nativeName": "кыргыз тили"
            },
            "kv": {
              "name": "Komi",
              "nativeName": "коми кыв"
            },
            "kg": {
              "name": "Kongo",
              "nativeName": "KiKongo"
            },
            "ko": {
              "name": "Korean",
              "nativeName": "한국어 (韓國語), 조선말 (朝鮮語)"
            },
            "ku": {
              "name": "Kurdish",
              "nativeName": "Kurdî, كوردی‎"
            },
            "kj": {
              "name": "Kwanyama, Kuanyama",
              "nativeName": "Kuanyama"
            },
            "la": {
              "name": "Latin",
              "nativeName": "latine, lingua latina"
            },
            "lb": {
              "name": "Luxembourgish, Letzeburgesch",
              "nativeName": "Lëtzebuergesch"
            },
            "lg": {
              "name": "Luganda",
              "nativeName": "Luganda"
            },
            "li": {
              "name": "Limburgish, Limburgan, Limburger",
              "nativeName": "Limburgs"
            },
            "ln": {
              "name": "Lingala",
              "nativeName": "Lingála"
            },
            "lo": {
              "name": "Lao",
              "nativeName": "ພາສາລາວ"
            },
            "lt": {
              "name": "Lithuanian",
              "nativeName": "lietuvių kalba"
            },
            "lu": {
              "name": "Luba-Katanga",
              "nativeName": ""
            },
            "lv": {
              "name": "Latvian",
              "nativeName": "latviešu valoda"
            },
            "gv": {
              "name": "Manx",
              "nativeName": "Gaelg, Gailck"
            },
            "mk": {
              "name": "Macedonian",
              "nativeName": "македонски јазик"
            },
            "mg": {
              "name": "Malagasy",
              "nativeName": "Malagasy fiteny"
            },
            "ms": {
              "name": "Malay",
              "nativeName": "bahasa Melayu, بهاس ملايو‎"
            },
            "ml": {
              "name": "Malayalam",
              "nativeName": "മലയാളം"
            },
            "mt": {
              "name": "Maltese",
              "nativeName": "Malti"
            },
            "mi": {
              "name": "Māori",
              "nativeName": "te reo Māori"
            },
            "mr": {
              "name": "Marathi (Marāṭhī)",
              "nativeName": "मराठी"
            },
            "mh": {
              "name": "Marshallese",
              "nativeName": "Kajin M̧ajeļ"
            },
            "mn": {
              "name": "Mongolian",
              "nativeName": "монгол"
            },
            "na": {
              "name": "Nauru",
              "nativeName": "Ekakairũ Naoero"
            },
            "nv": {
              "name": "Navajo, Navaho",
              "nativeName": "Diné bizaad, Dinékʼehǰí"
            },
            "nb": {
              "name": "Norwegian Bokmål",
              "nativeName": "Norsk bokmål"
            },
            "nd": {
              "name": "North Ndebele",
              "nativeName": "isiNdebele"
            },
            "ne": {
              "name": "Nepali",
              "nativeName": "नेपाली"
            },
            "ng": {
              "name": "Ndonga",
              "nativeName": "Owambo"
            },
            "nn": {
              "name": "Norwegian Nynorsk",
              "nativeName": "Norsk nynorsk"
            },
            "no": {
              "name": "Norwegian",
              "nativeName": "Norsk"
            },
            "ii": {
              "name": "Nuosu",
              "nativeName": "ꆈꌠ꒿ Nuosuhxop"
            },
            "nr": {
              "name": "South Ndebele",
              "nativeName": "isiNdebele"
            },
            "oc": {
              "name": "Occitan",
              "nativeName": "Occitan"
            },
            "oj": {
              "name": "Ojibwe, Ojibwa",
              "nativeName": "ᐊᓂᔑᓈᐯᒧᐎᓐ"
            },
            "cu": {
              "name": "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
              "nativeName": "ѩзыкъ словѣньскъ"
            },
            "om": {
              "name": "Oromo",
              "nativeName": "Afaan Oromoo"
            },
            "or": {
              "name": "Oriya",
              "nativeName": "ଓଡ଼ିଆ"
            },
            "os": {
              "name": "Ossetian, Ossetic",
              "nativeName": "ирон æвзаг"
            },
            "pa": {
              "name": "Panjabi, Punjabi",
              "nativeName": "ਪੰਜਾਬੀ, پنجابی‎"
            },
            "pi": {
              "name": "Pāli",
              "nativeName": "पाऴि"
            },
            "fa": {
              "name": "Persian",
              "nativeName": "فارسی"
            },
            "pl": {
              "name": "Polish",
              "nativeName": "polski"
            },
            "ps": {
              "name": "Pashto, Pushto",
              "nativeName": "پښتو"
            },
            "pt": {
              "name": "Portuguese",
              "nativeName": "Português"
            },
            "qu": {
              "name": "Quechua",
              "nativeName": "Runa Simi, Kichwa"
            },
            "rm": {
              "name": "Romansh",
              "nativeName": "rumantsch grischun"
            },
            "rn": {
              "name": "Kirundi",
              "nativeName": "kiRundi"
            },
            "ro": {
              "name": "Romanian, Moldavian, Moldovan",
              "nativeName": "română"
            },
            "ru": {
              "name": "Russian",
              "nativeName": "русский язык"
            },
            "sa": {
              "name": "Sanskrit (Saṁskṛta)",
              "nativeName": "संस्कृतम्"
            },
            "sc": {
              "name": "Sardinian",
              "nativeName": "sardu"
            },
            "sd": {
              "name": "Sindhi",
              "nativeName": "सिन्धी, سنڌي، سندھی‎"
            },
            "se": {
              "name": "Northern Sami",
              "nativeName": "Davvisámegiella"
            },
            "sm": {
              "name": "Samoan",
              "nativeName": "gagana faa Samoa"
            },
            "sg": {
              "name": "Sango",
              "nativeName": "yângâ tî sängö"
            },
            "sr": {
              "name": "Serbian",
              "nativeName": "српски језик"
            },
            "gd": {
              "name": "Scottish Gaelic; Gaelic",
              "nativeName": "Gàidhlig"
            },
            "sn": {
              "name": "Shona",
              "nativeName": "chiShona"
            },
            "si": {
              "name": "Sinhala, Sinhalese",
              "nativeName": "සිංහල"
            },
            "sk": {
              "name": "Slovak",
              "nativeName": "slovenčina"
            },
            "sl": {
              "name": "Slovene",
              "nativeName": "slovenščina"
            },
            "so": {
              "name": "Somali",
              "nativeName": "Soomaaliga, af Soomaali"
            },
            "st": {
              "name": "Southern Sotho",
              "nativeName": "Sesotho"
            },
            "es": {
              "name": "Spanish; Castilian",
              "nativeName": "español, castellano"
            },
            "su": {
              "name": "Sundanese",
              "nativeName": "Basa Sunda"
            },
            "sw": {
              "name": "Swahili",
              "nativeName": "Kiswahili"
            },
            "ss": {
              "name": "Swati",
              "nativeName": "SiSwati"
            },
            "sv": {
              "name": "Swedish",
              "nativeName": "svenska"
            },
            "ta": {
              "name": "Tamil",
              "nativeName": "தமிழ்"
            },
            "te": {
              "name": "Telugu",
              "nativeName": "తెలుగు"
            },
            "tg": {
              "name": "Tajik",
              "nativeName": "тоҷикӣ, toğikī, تاجیکی‎"
            },
            "th": {
              "name": "Thai",
              "nativeName": "ไทย"
            },
            "ti": {
              "name": "Tigrinya",
              "nativeName": "ትግርኛ"
            },
            "bo": {
              "name": "Tibetan Standard, Tibetan, Central",
              "nativeName": "བོད་ཡིག"
            },
            "tk": {
              "name": "Turkmen",
              "nativeName": "Türkmen, Түркмен"
            },
            "tl": {
              "name": "Tagalog",
              "nativeName": "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔"
            },
            "tn": {
              "name": "Tswana",
              "nativeName": "Setswana"
            },
            "to": {
              "name": "Tonga (Tonga Islands)",
              "nativeName": "faka Tonga"
            },
            "tr": {
              "name": "Turkish",
              "nativeName": "Türkçe"
            },
            "ts": {
              "name": "Tsonga",
              "nativeName": "Xitsonga"
            },
            "tt": {
              "name": "Tatar",
              "nativeName": "татарча, tatarça, تاتارچا‎"
            },
            "tw": {
              "name": "Twi",
              "nativeName": "Twi"
            },
            "ty": {
              "name": "Tahitian",
              "nativeName": "Reo Tahiti"
            },
            "ug": {
              "name": "Uighur, Uyghur",
              "nativeName": "Uyƣurqə, ئۇيغۇرچە‎"
            },
            "uk": {
              "name": "Ukrainian",
              "nativeName": "українська"
            },
            "ur": {
              "name": "Urdu",
              "nativeName": "اردو"
            },
            "uz": {
              "name": "Uzbek",
              "nativeName": "zbek, Ўзбек, أۇزبېك‎"
            },
            "ve": {
              "name": "Venda",
              "nativeName": "Tshivenḓa"
            },
            "vi": {
              "name": "Vietnamese",
              "nativeName": "Tiếng Việt"
            },
            "vo": {
              "name": "Volapük",
              "nativeName": "Volapük"
            },
            "wa": {
              "name": "Walloon",
              "nativeName": "Walon"
            },
            "cy": {
              "name": "Welsh",
              "nativeName": "Cymraeg"
            },
            "wo": {
              "name": "Wolof",
              "nativeName": "Wollof"
            },
            "fy": {
              "name": "Western Frisian",
              "nativeName": "Frysk"
            },
            "xh": {
              "name": "Xhosa",
              "nativeName": "isiXhosa"
            },
            "yi": {
              "name": "Yiddish",
              "nativeName": "ייִדיש"
            },
            "yo": {
              "name": "Yoruba",
              "nativeName": "Yorùbá"
            },
            "za": {
              "name": "Zhuang, Chuang",
              "nativeName": "Saɯ cueŋƅ, Saw cuengh"
            }
          }
        };
        return database;
      }
    }, {
      key: "permit",
      value: function permit(e) {
        // 'label', , 'speak'
        var permit = ['budget', 'delivery', 'lives'];
        return permit.includes(e);
      }
    }, {
      key: "notice",
      value: function notice(e) {}
    }, {
      key: "flags",
      value: function flags() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var thisClass = this;
        var flags = thisClass.database.flags,
            rtn = false;

        if (e) {
          thisClass.database.lives.forEach(function (l, i) {
            if (l[1].toLowerCase() == e.toLowerCase()) {
              rtn = l[0].toLowerCase();
            }
          });

          if (!rtn) {
            flags.forEach(function (l, i) {
              if (l[1].toLowerCase() == e.toLowerCase()) {
                rtn = l[0].toLowerCase();
              }
            });
          } // 16x12, 20x15, 24x18, 28x21, 32x24, 36x27, 40x30, 48x36, 56x42, 60x45, 64x48, 72x54, 80x60, 84x63, 96x72, 108x81, 112x84, 120x90, 128x96, 144x108, 160x120, 192x144, 224x168, 256x192


          if (thisClass.isCDN) {
            return rtn ? rtn : 'xx';
          } else {
            return rtn ? 'https://flagcdn.com/20x15/' + rtn + '.png' : 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.6.6/flags/4x3/xx.svg';
          }
        } else {
          return flags;
        }
      }
    }, {
      key: "icons",
      value: function icons(tr) {
        var thisClass = this;
        var icons = {
          review: '<svg width="16px" height="15px" viewBox="0 0 16 15" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.81285C16 5.98299 15.875 6.14367 15.75 6.26654L12.2596 9.61248L13.0865 14.3384C13.0962 14.4045 13.0962 14.4612 13.0962 14.5274C13.0962 14.7732 12.9808 15 12.7019 15C12.5673 15 12.4327 14.9527 12.3173 14.8866L8 12.656L3.68269 14.8866C3.55769 14.9527 3.43269 15 3.29808 15C3.01923 15 2.89423 14.7732 2.89423 14.5274C2.89423 14.4612 2.90385 14.4045 2.91346 14.3384L3.74038 9.61248L0.240385 6.26654C0.125 6.14367 0 5.98299 0 5.81285C0 5.5293 0.298077 5.41588 0.538462 5.37807L5.36539 4.68809L7.52885 0.387524C7.61539 0.207939 7.77885 0 8 0C8.22115 0 8.38462 0.207939 8.47115 0.387524L10.6346 4.68809L15.4615 5.37807C15.6923 5.41588 16 5.5293 16 5.81285Z"></path></svg>',
          profile: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="16px" height="15px" viewBox="0 0 92 92" enable-background="new 0 0 92 92" xml:space="preserve"><path id="XMLID_1253_" d="M46,57.1c14.8,0,26.9-12.1,26.9-27C72.9,15.1,60.8,3,46,3S19.1,15.1,19.1,30C19.1,45,31.2,57.1,46,57.1z   M46,11c10.4,0,18.9,8.5,18.9,19c0,10.5-8.5,19-18.9,19s-18.9-8.5-18.9-19C27.1,19.5,35.6,11,46,11z M58.5,59.7  c-1.3-0.4-2.8-0.1-3.8,0.8L46,67.9l-8.7-7.4c-1.1-0.9-2.5-1.2-3.8-0.8C27.9,61.5,0,71.1,0,85c0,2.2,1.8,4,4,4h84c2.2,0,4-1.8,4-4  C92,71.1,64.1,61.5,58.5,59.7z M10.1,81c4.4-4.7,15-9.9,23.8-12.9l9.5,8.1c1.5,1.3,3.7,1.3,5.2,0l9.5-8.1  c8.8,3.1,19.4,8.3,23.8,12.9H10.1z"/></svg>',
          'online': '<svg width="16px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" fill="#00ff00"/></svg>',
          'offline': '<svg width="16px" height="15px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2z" fill="#ff0000"/></svg>',
          response: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 488 488" style="enable-background:new 0 0 488 488;" xml:space="preserve" width="16px" height="15px"><g transform="translate(0 -540.36)"><g><g><path d="M351.1,846.96l-97.1-67.9v-116.7c0-5.5-4.5-10-10-10s-10,4.5-10,10v122c0,3.3,1.6,6.3,4.3,8.2l101.4,70.9     c1.7,1.2,3.7,1.8,5.7,1.8v0c3.1,0,6.2-1.5,8.2-4.4C356.7,856.36,355.6,850.16,351.1,846.96z"/><path d="M416.4,611.96L416.4,611.96c-46.2-46.2-107.4-71.6-172.4-71.6s-126.2,25.4-172.4,71.6C25.4,658.16,0,719.36,0,784.36     s25.4,126.2,71.6,172.4c46.2,46.2,107.4,71.6,172.4,71.6s126.2-25.4,172.4-71.6s71.6-107.4,71.6-172.4S462.6,658.16,416.4,611.96     z M254,1008.16L254,1008.16v-40.8c0-5.5-4.5-10-10-10s-10,4.5-10,10v40.8c-115.6-5.1-208.7-98.2-213.8-213.8H61     c5.5,0,10-4.5,10-10s-4.5-10-10-10H20.2c5.1-115.6,98.2-208.7,213.8-213.8v40.8c0,5.5,4.5,10,10,10s10-4.5,10-10v-40.8     c115.6,5.1,208.7,98.2,213.8,213.8H427c-5.5,0-10,4.5-10,10s4.5,10,10,10h40.8C462.7,909.96,369.6,1003.06,254,1008.16z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
          link: '<svg width="16px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5H14zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="#0D0D0D"/></svg>'
        },
            node;
        node = document.createElement('span');
        node.classList.add('fwp-svg-icon');
        node.innerHTML = icons.review;

        if (thisClass.is(icons[tr])) {
          node.innerHTML = icons[tr];
        }

        return node;
      }
    }, {
      key: "sort",
      value: function sort(args) {
        var form = {
          range: {},
          delivery: 3,
          label: [],
          lives: [],
          speak: []
        };
        args.forEach(function (e, i) {
          if (e[0] == 'range-min' || e[0] == 'range-max') {
            form.range[e[0].replace('range-', '')] = e[1];
          } else if (e[0] == 'delivery') {
            form.delivery = e[1];
          } else {
            form[e[0]].push(e[1]);
          }
        });
        return form;
      }
    }, {
      key: "filterOut",
      value: function filterOut(args) {
        var thisClass = this;
        var args = thisClass.sort(args),
            vase = thisClass.base,
            output,
            delivery,
            e,
            amount;
        args.range.max = !args.range.max || args.range.max == '' ? 0 : args.range.max;
        args.range.min = !args.range.min || args.range.min == '' ? 0 : args.range.min;

        if (thisClass.permit('budget') && args.range.max != 0) {
          output = {};
          Object.keys(vase).forEach(function (i) {
            e = vase[i];
            amount = Number(e.meta.budget.replace(thisClass.currency(), ''));

            if (args.range.max >= amount && args.range.min <= amount) {
              output[i] = e;
            }
          });
          vase = output;
        }

        if (thisClass.permit('delivery') && args.delivery < 4) {
          var deliveries = ['', '24 hours', '3 days', '7 days', 0];
          output = {};
          Object.keys(vase).forEach(function (i) {
            e = vase[i];
            delivery = e.meta.delivery.split(' ');

            if (delivery[0] <= deliveries[args.delivery].split(' ')[0]) {
              output[i] = e;
            }
          });
          vase = output;
        }

        if (thisClass.permit('lives') && args.lives.length >= 1) {
          output = {};
          args.lives.forEach(function (lv) {
            Object.keys(vase).forEach(function (i) {
              e = vase[i];

              if (e.info.location == lv) {
                output[i] = e;
              }
            });
          });
          vase = output;
        }

        if (thisClass.permit('speak') && args.speak.length >= 1) {
          output = {}, lg;
          args.speak.forEach(function (sk) {
            Object.keys(vase).forEach(function (i) {
              e = vase[i];
              e.language.forEach(function (l) {
                lg = l[0];

                if (lg.replace(/ /g, '').toLowerCase() == sk[0].replace(/ /g, '').toLowerCase() || sk[0].contains(lg)) {
                  output[i] = e;
                }
              });
            });
          });
          vase = output;
        } // console.log( 'Filter', {filters: args, list: thisClass.base} );console.log( 'Filtered', vase );


        thisClass.getLists(vase);
      }
    }, {
      key: "getLists",
      value: function getLists(filtered) {
        var thisClass = this;
        var tbody = document.querySelector('.js-db-table.fwp-js-activate table tbody'),
            html = '',
            args,
            tr,
            td,
            span,
            div,
            a,
            itag,
            node;
        tbody.innerHTML = '';

        if (Object.keys(filtered).length >= 1) {
          Object.keys(filtered).forEach(function (i) {
            args = filtered[i];
            tr = document.createElement('tr');
            tr.setAttribute('data-fwpid', args.meta.requestId);

            if (thisClass.is(args.meta.trHtml)) {
              tr.innerHTML = args.meta.trHtml;
            } else {
              // Table Data Date <td>
              td = document.createElement('td');
              td.classList.add('date');
              span = document.createElement('span');
              span.innerHTML = args.meta.requestDate;
              td.appendChild(span);
              node = document.createElement('strong');
              node.classList.add('extension-requestpage-country');
              node.innerText = args.info.location;
              td.appendChild(node);
              tr.appendChild(td); // Table Data BUYER <td>

              td = document.createElement('td');
              td.classList.add('profile-40', 'height95');
              span = document.createElement('span');
              span.classList.add('user-pict-40');
              span.innerHTML = args.meta.userPict;
              td.appendChild(span);
              node = document.createElement('a');
              node.classList.add('extension-requestpage-username');
              node.href = 'https://www.fiverr.com/' + args.meta.username;
              node.target = '_blank';
              node.innerText = args.meta.username;
              td.appendChild(node);
              tr.appendChild(td); // Table Data REQUEST <td>

              td = document.createElement('td');
              td.classList.add('text-wide');
              span = document.createElement('span');
              span.innerText = args.meta.requestText.length >= 125 ? args.meta.requestText.substr(0, 125) + '...' : args.meta.requestText;

              if (args.meta.requestText.length >= 125) {
                a = document.createElement('a');
                a.href = '#';
                a.classList.add('is-online', 'btn-see-more', 'js-see-more', 'm-r-10', 'pos-abs');
                a.setAttribute('data-more', args.meta.requestText);
                a.innerText = 'See more';

                a.onclick = function (e) {
                  e.preventDefault();
                  this.parentNode.innerHTML = this.dataset.more;
                };

                itag = document.createElement('i');
                a.appendChild(itag);
                span.appendChild(a);
              }

              td.appendChild(span);

              if (args.meta.requestTags && args.meta.requestTags.length >= 1) {
                div = document.createElement('div');
                div.classList.add('tags-standard', 'tags-white-bg');
                args.meta.requestTags.forEach(function (tg, i) {
                  span = document.createElement('span');
                  span.innerText = tg;
                  div.appendChild(span);
                });
                td.appendChild(div);
              }

              tr.appendChild(td); // Table Data OFFERS <td>

              td = document.createElement('td');
              td.classList.add('applications', 't-a-center');
              span = document.createElement('span');
              span.innerText = args.meta.offers;
              td.appendChild(span);
              tr.appendChild(td); // Table Data DURATION <td>

              td = document.createElement('td');
              td.classList.add('hidden-action', 't-a-center', 'with-text');
              div = document.createElement('div');
              div.classList.add('hover-show');
              span = document.createElement('span');
              span.classList.add('duration');
              span.innerText = args.meta.delivery;
              div.appendChild(span);
              a = document.createElement('a');
              a.href = '#';
              a.setAttribute('data-meta', JSON.stringify({
                requestId: args.meta.requestId,
                isProfessional: args.meta.isProfessional
              }));
              a.classList.add('remove-request', 'js-remove-request');
              a.innerText = 'Remove Request';
              div.appendChild(a);
              td.appendChild(div);
              div = document.createElement('div');
              div.classList.add('hover-hide');
              span = document.createElement('span');
              span.innerText = args.meta.delivery;
              div.appendChild(span);
              td.appendChild(div);
              tr.appendChild(td); // Table Data BUDGET <td>

              td = document.createElement('td');
              td.classList.add('hidden-action', 't-a-center', 'with-text');
              div = document.createElement('div');
              div.classList.add('hover-show');
              span = document.createElement('span');
              span.classList.add('budget');
              span.innerText = args.meta.budget;
              div.appendChild(span);

              if (!args.meta.requestStatus) {
                a = document.createElement('a');
                a.href = '#';
                a.setAttribute('data-meta', JSON.stringify(args.meta));
                a.classList.add('btn-standard', 'btn-green-grad', 'js-send-offer');
                a.innerText = 'Send Offer';
                div.appendChild(a);
              } else {
                span = document.createElement('span');
                span.innerText = 'Offer Sent';
                itag = document.createElement('i');
                itag.classList.add('fa', 'fa-reply');
                span.appendChild(itag);
                div.appendChild(span);
              }

              td.appendChild(div);
              div = document.createElement('div');
              div.classList.add('hover-hide');
              span = document.createElement('span');
              span.innerText = args.meta.budget;
              div.appendChild(span);
              td.appendChild(div);
              tr.appendChild(td);
            }

            tbody.appendChild(tr);
          });
        } else {
          tr = document.createElement('tr');
          tr.setAttribute('data-empty', true);
          tr.classList.add('extension-requestpage-empty'); // Table Data Date <td>

          td = document.createElement('td');
          td.classList.add('empty');
          td.setAttribute('colspan', 6); // td.setAttribute( 'align', 'center' );

          td.innerText = 'Nothing found there.';
          tr.appendChild(td);
          tbody.appendChild(tr);
        }
      }
    }, {
      key: "clean",
      value: function clean() {
        var tr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var thisClass = this;

        if (!tr) {
          var vase = thisClass.base,
              e,
              base = [];
          Object.keys(vase).forEach(function (i) {
            e = vase[i];

            if (e.meta.requestStatus === false) {
              base[i] = e;
            }
          });
          thisClass.base = base;
        } else {
          thisClass.base = {};
        }
      }
    }, {
      key: "fetchJSON",
      value: function fetchJSON(args, e) {
        var thisClass = this;
        e.classList.add('fwp-loading');
        fetch('https://www.fiverr.com/users/' + thisClass.me + '/requests?current_filter=' + args.filter + '&page=' + args.page + '&per_page=' + args.per_page, {
          "credentials": "include",
          "headers": {
            "Accept": "text/javascript",
            "Accept-Language": "en-US,en;q=0.5"
          },
          "referrer": 'https://www.fiverr.com/users/' + thisClass.me + '/requests',
          "method": "GET",
          "mode": "cors"
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          if (data.results && data.results.rows && data.results.rows.length >= 1 && data.results.rows[0].cells && data.results.rows[0].cells[0].type && data.results.rows[0].cells[0].type == 'empty') {} else {
            thisClass.fetchExe(data);
            args.page = args.page + 1;
            e.setAttribute('data-meta', JSON.stringify(args));
          }

          e.classList.remove('fwp-loading');
        }).catch(function (err) {
          thisClass.notice(err);
          e.classList.remove('fwp-loading');
        });
      }
    }, {
      key: "fetchExe",
      value: function fetchExe(args) {
        var thisClass = this;
        var tbody = document.querySelector('.js-db-table.fwp-js-activate table tbody'),
            html = '',
            tr,
            td,
            span,
            div,
            a,
            itag,
            node,
            row;

        if (args.results && args.results.rows && args.results.rows.length >= 1) {
          if (args.results.rows[0].cells && args.results.rows[0].cells[0].type && args.results.rows[0].cells[0].type == 'empty') {
            return;
          } else {
            args.results.rows.forEach(function (e, i) {
              var _a$classList, _span$classList, _a$classList2;

              row = e; // Create TR Table Row

              tr = document.createElement('tr');
              tr.setAttribute('data-id', row.identifier); // Table Data Date <td>

              td = document.createElement('td');
              td.classList.add(row.cells[0].type);
              span = document.createElement('span');
              span.innerHTML = row.cells[0].text;
              td.appendChild(span);
              tr.appendChild(td); // Table Data BUYER <td>

              td = document.createElement('td');
              td.classList.add(row.cells[1].type, row.cells[1].cssClass);
              span = document.createElement('span');
              span.classList.add('user-pict-40');
              span.innerHTML = row.cells[1].userPict;
              td.appendChild(span);
              tr.appendChild(td); // Table Data REQUEST <td>

              td = document.createElement('td');
              td.classList.add(row.cells[2].type);
              div = document.createElement('div');
              div.classList.add('ellipsis', 'text-wrap');
              span = document.createElement('span');
              span.innerText = row.cells[2].text >= 125 ? row.cells[2].text.substr(0, 125) + '...' : row.cells[2].text;

              if (row.cells[2].text >= 125) {
                a = document.createElement('a');
                a.href = '#';
                a.classList.add('is-online', 'btn-see-more', 'js-see-more', 'm-r-10', 'pos-abs');
                a.setAttribute('data-more', row.cells[2].text);
                a.innerText = 'See more';

                a.onclick = function (e) {
                  e.preventDefault();
                  this.parentNode.innerHTML = this.dataset.more;
                };

                itag = document.createElement('i');
                a.appendChild(itag);
                span.appendChild(a);
              }

              div.appendChild(span);
              td.appendChild(div);

              if (row.cells[2].tags && row.cells[2].tags.length >= 1) {
                div = document.createElement('div');
                div.classList.add('tags-standard', 'tags-white-bg');
                row.cells[2].tags.forEach(function (tg, t) {
                  span = document.createElement('span');
                  span.innerText = tg;
                  div.appendChild(span);
                });
                td.appendChild(div);
              }

              tr.appendChild(td); // Table Data OFFERS <td>

              td = document.createElement('td');
              td.classList.add(row.cells[3].type, 't-a-center');
              span = document.createElement('span');
              span.innerText = row.cells[3].text;
              td.appendChild(span);
              tr.appendChild(td); // Table Data DURATION <td>

              td = document.createElement('td');
              td.classList.add(row.cells[4].type, 't-a-center', 'with-text');
              div = document.createElement('div');
              div.classList.add('hover-show');
              span = document.createElement(row.cells[4].buttons[0].type);
              span.classList.add(row.cells[4].buttons[0].class);
              span.innerText = row.cells[4].buttons[0].text;
              div.appendChild(span);
              a = document.createElement('a');
              a.href = '#';
              a.setAttribute('data-meta', JSON.stringify(row.cells[4].buttons[1].meta));

              (_a$classList = a.classList).add.apply(_a$classList, _toConsumableArray(row.cells[4].buttons[1].class.split(' ')));

              a.innerText = row.cells[4].buttons[1].text;
              div.appendChild(a);
              td.appendChild(div);
              div = document.createElement('div');
              div.classList.add('hover-hide');
              span = document.createElement('span');
              span.innerText = row.cells[4].text;
              div.appendChild(span);
              td.appendChild(div);
              tr.appendChild(td); // Table Data BUDGET <td>

              td = document.createElement('td');
              td.classList.add(row.cells[5].type, row.cells[5].withText ? 't-a-center' : 'no-t-a-center', row.cells[5].withText ? 'with-text' : 'no-width-text');
              div = document.createElement('div');
              div.classList.add('hover-show');
              span = document.createElement(row.cells[5].buttons[0].type);

              (_span$classList = span.classList).add.apply(_span$classList, _toConsumableArray(row.cells[5].buttons[0].class.split(' ')));

              span.innerText = row.cells[5].buttons[0].text;
              div.appendChild(span);
              a = document.createElement('a');
              a.href = '#';
              a.setAttribute('data-meta', JSON.stringify(row.cells[5].buttons[1].meta));

              (_a$classList2 = a.classList).add.apply(_a$classList2, _toConsumableArray(row.cells[5].buttons[1].class.split(' ')));

              a.innerText = row.cells[5].buttons[1].text;
              div.appendChild(a);
              td.appendChild(div);
              div = document.createElement('div');
              div.classList.add('hover-hide');
              span = document.createElement('span');
              span.innerText = row.cells[5].text;
              div.appendChild(span);
              td.appendChild(div);
              tr.appendChild(td);
              tbody.appendChild(tr);
            });
          }
        }
      }
    }, {
      key: "loadMore",
      value: function loadMore() {
        var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var thisClass = this;
        var col,
            tr,
            a,
            tfoot,
            hasTfoot = false;
        args = {
          page: 1,
          per_page: 15,
          filter: 'active'
        };

        if (document.querySelectorAll('.js-db-table.fwp-js-activate table tfoot').length >= 1) {
          tfoot = document.querySelector('.js-db-table.fwp-js-activate table tfoot');
          hasTfoot = true;
        } else {
          tfoot = document.createElement('tfoot');
          tfoot.classList.add('fwp-tfoot');
        }

        col = document.querySelectorAll('.js-db-table table thead tr.js-header-titles td').length;
        tr = document.createElement('tr');
        td = document.createElement('td');
        td.classList.add('fwp-tr-load-more');
        td.setAttribute('colspan', col && col > 1 ? col : 6);
        a = document.createElement('a');
        a.classList.add('fwp-load-more');
        a.href = '/users/' + thisClass.me + '/requests/offers?current_filter=' + args.filter + '&amp;page=' + args.page + '&amp;per_page=' + args.per_page;
        a.innerText = 'Load More';
        a.setAttribute('data-meta', JSON.stringify(args));
        a.appendChild(document.createElement('i'));
        td.appendChild(a);
        tr.appendChild(td);
        tfoot.innerHTML = '';
        tfoot.appendChild(tr);

        if (!hasTfoot) {
          document.querySelector('.js-db-table.fwp-js-activate table').appendChild(tfoot);
        }

        document.querySelector('.js-db-table.fwp-js-activate table tfoot .fwp-load-more').addEventListener('click', function (e) {
          e.preventDefault();
          var args = JSON.parse(this.dataset.meta);
          thisClass.fetchJSON(args, this);
        });
      }
    }, {
      key: "loadAll",
      value: function loadAll() {
        var thisClass = this;
        document.querySelector('.db-new-main-table table thead td .js-fwp-load-all-btn').addEventListener('click', function (e) {
          var _this3 = this;

          e.preventDefault();
          var tab = '.db-new-filters .tabs.js-db-status-tabs li a[data-type="all"]',
              index = 0;

          if (document.querySelectorAll(tab).length >= 1) {
            var tb = document.querySelector(tab),
                dc = thisClass.is(tb.dataset.countExtended) ? tb.dataset.countExtended : false,
                dce = thisClass.is(tb.dataset.count) ? tb.dataset.count : false,
                args = thisClass.is(this.dataset.meta) ? JSON.parse(this.dataset.meta) : {
              page: 1,
              per_page: dce >= 1 ? dce : 200,
              filter: 'active'
            };
            setInterval(function () {
              index++;
              args.page = index;

              if (index <= 20) {
                thisClass.fetchJSON(args, _this3);
              }
            }, 5000);
          }
        });
      }
    }]);

    return buyerRequestDetails;
  }(); // Execute functions


  new buyerRequestDetails();
})(jQuery);

/***/ }),

/***/ "./FSA-Chrome/assets/src/js/users.js":
/*!*******************************************!*\
  !*** ./FSA-Chrome/assets/src/js/users.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_buyerRequestsDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/buyerRequestsDetails */ "./FSA-Chrome/assets/src/js/content/buyerRequestsDetails.js");
/* harmony import */ var _content_buyerRequestsDetails__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_content_buyerRequestsDetails__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sass_users_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/users.scss */ "./FSA-Chrome/assets/src/sass/users.scss");
/* harmony import */ var _sass_users_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sass_users_scss__WEBPACK_IMPORTED_MODULE_1__);
// import 'regenerator-runtime/runtime';
// script loader
 // Css loader

 // Icons Loader

/***/ }),

/***/ "./FSA-Chrome/assets/src/sass/users.scss":
/*!***********************************************!*\
  !*** ./FSA-Chrome/assets/src/sass/users.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ 0:
/*!********************************************************************************!*\
  !*** multi regenerator-runtime/runtime.js ./FSA-Chrome/assets/src/js/users.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! regenerator-runtime/runtime.js */"./node_modules/regenerator-runtime/runtime.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\crx-download\FSA-Chrome\assets\src\js/users.js */"./FSA-Chrome/assets/src/js/users.js");


/***/ })

/******/ });
//# sourceMappingURL=users.js.map