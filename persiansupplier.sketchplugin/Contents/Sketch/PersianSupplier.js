var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/PersianSupplier.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/Cities.js":
/*!**************************!*\
  !*** ./assets/Cities.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Cities = ['تهران', 'مشهد', 'اصفهان', 'کرج', 'شیراز', 'تبریز', 'قم', 'اهواز', 'کرمانشاه', 'ارومیه', 'رشت', 'زاهدان', 'همدان', 'کرمان', 'یزد', 'اردبیل', 'بندرعباس', 'اراک', 'اسلام‌شهر', 'زنجان', 'سنندج', 'قزوین', 'خرم‌آباد', 'گرگان', 'ساری', 'شهریار', 'قدس', 'کاشان', 'ملارد', 'دزفول', 'نیشابور', 'بابل', 'خمینی‌شهر', 'سبزوار', 'گلستان', 'آمل', 'پاکدشت', 'نجف‌آباد', 'بروجرد', 'آبادان', 'قرچک', 'بجنورد', 'ورامین', 'بوشهر', 'ساوه', 'قائم‌شهر', 'بیرجند', 'نسیم‌شهر', 'سیرجان', 'خوی', 'ایلام', 'بوکان', 'شهرکرد', 'سمنان', 'فردیس', 'مراغه', 'شاهین‌شهر', 'ملایر', 'مهاباد', 'سقز', 'بندر', 'ماهشهر', 'رفسنجان', 'گنبد', 'شاهرود', 'مرودشت', 'مریوان', 'اندیمشک', 'شهرضا', 'زابل', 'یاسوج', 'میاندوآب', 'خرمشهر', 'مرند', 'جیرفت', 'بم', 'بهبهان', 'دورود', 'ایذه', 'بندرانزلی', 'اندیشه', 'ایرانشهر', 'برازجان', 'بانه', 'چابهار', 'رباط', 'کریم', 'شوشتر', 'قوچان', 'لاهیجان', 'میانه', 'پرند', 'کازرون', 'بهشهر', 'الوند', 'سلماس', 'پیرانشهر', 'الیگودرز', 'کوهدشت', 'فولادشهر', 'بناب', 'شیروان', 'سهند', 'لنگرود', 'بومهن', 'بهارستان', 'شوش', 'نهاوند', 'اردکان', 'خمین', 'مشگین‌شهر', 'پردیس', 'داراب', 'بیدگل', 'چالوس', 'ماهدشت', 'مشکین', 'دشت', 'نکا', 'زرند', 'سراوان', 'بابلسر', 'پیشوا', 'دامغان', 'گلپایگان', 'بروجن', 'دهدشت', 'خاش', 'هشتگرد', 'تنکابن', 'چناران', 'آستارا', 'سوسنگرد', 'چهاردانگه', 'نوشهر', 'گرمسار', 'دماوند', 'ماکو', 'سردشت', 'آستانه', 'گناباد', 'قشم', 'کردکوی', 'کیش', 'طبس', 'خلخال', 'فریدونکنار', 'کهریزک', 'کلاله', 'رامسر', 'فومن', 'دیواندره', 'جویبار', 'محمودآباد', 'بندرلنگه', 'مینودشت', 'لامرد', 'رودهن', 'نور', 'قائمیه', 'آشخانه', 'شبستر', 'گلوگاه', 'طرقبه', 'نجف‌شهر'];
module.exports = Cities;

/***/ }),

/***/ "./assets/Dates.js":
/*!*************************!*\
  !*** ./assets/Dates.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Dates = ['۹۷/۰۱/۰۱', '۹۷/۰۱/۰۲', '۹۷/۰۱/۰۳', '۹۷/۰۱/۰۴', '۹۷/۰۱/۰۵', '۹۷/۰۱/۰۶', '۹۷/۰۱/۰۷', '۹۷/۰۱/۰۸', '۹۷/۰۱/۰۹', '۹۷/۰۱/۱۰', '۹۷/۰۱/۱۱', '۹۷/۰۱/۱۲', '۹۷/۰۱/۱۳', '۹۷/۰۱/۱۴', '۹۷/۰۱/۱۵', '۹۷/۰۱/۱۶', '۹۷/۰۱/۱۷', '۹۷/۰۱/۱۸', '۹۷/۰۱/۱۹', '۹۷/۰۱/۲۰', '۹۷/۰۱/۲۱', '۹۷/۰۱/۲۲', '۹۷/۰۱/۲۳', '۹۷/۰۱/۲۴', '۹۷/۰۱/۲۵', '۹۷/۰۱/۲۶', '۹۷/۰۱/۲۷', '۹۷/۰۱/۲۸', '۹۷/۰۱/۲۹', '۹۷/۰۱/۳۰', '۹۷/۰۱/۳۱', '۹۷/۰۲/۰۱', '۹۷/۰۲/۰۲', '۹۷/۰۲/۰۳', '۹۷/۰۲/۰۴', '۹۷/۰۲/۰۵', '۹۷/۰۲/۰۶', '۹۷/۰۲/۰۷', '۹۷/۰۲/۰۸', '۹۷/۰۲/۰۹', '۹۷/۰۲/۱۰', '۹۷/۰۲/۱۱', '۹۷/۰۲/۱۲', '۹۷/۰۲/۱۳', '۹۷/۰۲/۱۴', '۹۷/۰۲/۱۵', '۹۷/۰۲/۱۶', '۹۷/۰۲/۱۷', '۹۷/۰۲/۱۸', '۹۷/۰۲/۱۹', '۹۷/۰۲/۲۰', '۹۷/۰۲/۲۱', '۹۷/۰۲/۲۲', '۹۷/۰۲/۲۳', '۹۷/۰۲/۲۴', '۹۷/۰۲/۲۵', '۹۷/۰۲/۲۶', '۹۷/۰۲/۲۷', '۹۷/۰۲/۲۸', '۹۷/۰۲/۲۹', '۹۷/۰۲/۳۰', '۹۷/۰۲/۳۱', '۹۷/۰۳/۰۱', '۹۷/۰۳/۰۲', '۹۷/۰۳/۰۳', '۹۷/۰۳/۰۴', '۹۷/۰۳/۰۵', '۹۷/۰۳/۰۶', '۹۷/۰۳/۰۷', '۹۷/۰۳/۰۸', '۹۷/۰۳/۰۹', '۹۷/۰۳/۱۰', '۹۷/۰۳/۱۱', '۹۷/۰۳/۱۲', '۹۷/۰۳/۱۳', '۹۷/۰۳/۱۴', '۹۷/۰۳/۱۵', '۹۷/۰۳/۱۶', '۹۷/۰۳/۱۷', '۹۷/۰۳/۱۸', '۹۷/۰۳/۱۹', '۹۷/۰۳/۲۰', '۹۷/۰۳/۲۱', '۹۷/۰۳/۲۲', '۹۷/۰۳/۲۳', '۹۷/۰۳/۲۴', '۹۷/۰۳/۲۵', '۹۷/۰۳/۲۶', '۹۷/۰۳/۲۷', '۹۷/۰۳/۲۸', '۹۷/۰۳/۲۹', '۹۷/۰۳/۳۰', '۹۷/۰۳/۳۱', '۹۷/۰۴/۰۱', '۹۷/۰۴/۰۲', '۹۷/۰۴/۰۳', '۹۷/۰۴/۰۴', '۹۷/۰۴/۰۵', '۹۷/۰۴/۰۶', '۹۷/۰۴/۰۷', '۹۷/۰۴/۰۸', '۹۷/۰۴/۰۹', '۹۷/۰۴/۱۰', '۹۷/۰۴/۱۱', '۹۷/۰۴/۱۲', '۹۷/۰۴/۱۳', '۹۷/۰۴/۱۴', '۹۷/۰۴/۱۵', '۹۷/۰۴/۱۶', '۹۷/۰۴/۱۷', '۹۷/۰۴/۱۸', '۹۷/۰۴/۱۹', '۹۷/۰۴/۲۰', '۹۷/۰۴/۲۱', '۹۷/۰۴/۲۲', '۹۷/۰۴/۲۳', '۹۷/۰۴/۲۴', '۹۷/۰۴/۲۵', '۹۷/۰۴/۲۶', '۹۷/۰۴/۲۷', '۹۷/۰۴/۲۸', '۹۷/۰۴/۲۹', '۹۷/۰۴/۳۰', '۹۷/۰۴/۳۱', '۹۷/۰۵/۰۱', '۹۷/۰۵/۰۲', '۹۷/۰۵/۰۳', '۹۷/۰۵/۰۴', '۹۷/۰۵/۰۵', '۹۷/۰۵/۰۶', '۹۷/۰۵/۰۷', '۹۷/۰۵/۰۸', '۹۷/۰۵/۰۹', '۹۷/۰۵/۱۰', '۹۷/۰۵/۱۱', '۹۷/۰۵/۱۲', '۹۷/۰۵/۱۳', '۹۷/۰۵/۱۴', '۹۷/۰۵/۱۵', '۹۷/۰۵/۱۶', '۹۷/۰۵/۱۷', '۹۷/۰۵/۱۸', '۹۷/۰۵/۱۹', '۹۷/۰۵/۲۰', '۹۷/۰۵/۲۱', '۹۷/۰۵/۲۲', '۹۷/۰۵/۲۳', '۹۷/۰۵/۲۴', '۹۷/۰۵/۲۵', '۹۷/۰۵/۲۶', '۹۷/۰۵/۲۷', '۹۷/۰۵/۲۸', '۹۷/۰۵/۲۹', '۹۷/۰۵/۳۰', '۹۷/۰۵/۳۱', '۹۷/۰۶/۰۱', '۹۷/۰۶/۰۲', '۹۷/۰۶/۰۳', '۹۷/۰۶/۰۴', '۹۷/۰۶/۰۵', '۹۷/۰۶/۰۶', '۹۷/۰۶/۰۷', '۹۷/۰۶/۰۸', '۹۷/۰۶/۰۹', '۹۷/۰۶/۱۰', '۹۷/۰۶/۱۱', '۹۷/۰۶/۱۲', '۹۷/۰۶/۱۳', '۹۷/۰۶/۱۴', '۹۷/۰۶/۱۵', '۹۷/۰۶/۱۶', '۹۷/۰۶/۱۷', '۹۷/۰۶/۱۸', '۹۷/۰۶/۱۹', '۹۷/۰۶/۲۰', '۹۷/۰۶/۲۱', '۹۷/۰۶/۲۲', '۹۷/۰۶/۲۳', '۹۷/۰۶/۲۴', '۹۷/۰۶/۲۵', '۹۷/۰۶/۲۶', '۹۷/۰۶/۲۷', '۹۷/۰۶/۲۸', '۹۷/۰۶/۲۹', '۹۷/۰۶/۳۰', '۹۷/۰۶/۳۱', '۹۷/۰۷/۰۱', '۹۷/۰۷/۰۲', '۹۷/۰۷/۰۳', '۹۷/۰۷/۰۴', '۹۷/۰۷/۰۵', '۹۷/۰۷/۰۶', '۹۷/۰۷/۰۷', '۹۷/۰۷/۰۸', '۹۷/۰۷/۰۹', '۹۷/۰۷/۱۰', '۹۷/۰۷/۱۱', '۹۷/۰۷/۱۲', '۹۷/۰۷/۱۳', '۹۷/۰۷/۱۴', '۹۷/۰۷/۱۵', '۹۷/۰۷/۱۶', '۹۷/۰۷/۱۷', '۹۷/۰۷/۱۸', '۹۷/۰۷/۱۹', '۹۷/۰۷/۲۰', '۹۷/۰۷/۲۱', '۹۷/۰۷/۲۲', '۹۷/۰۷/۲۳', '۹۷/۰۷/۲۴', '۹۷/۰۷/۲۵', '۹۷/۰۷/۲۶', '۹۷/۰۷/۲۷', '۹۷/۰۷/۲۸', '۹۷/۰۷/۲۹', '۹۷/۰۷/۳۰', '۹۷/۰۸/۰۱', '۹۷/۰۸/۰۲', '۹۷/۰۸/۰۳', '۹۷/۰۸/۰۴', '۹۷/۰۸/۰۵', '۹۷/۰۸/۰۶', '۹۷/۰۸/۰۷', '۹۷/۰۸/۰۸', '۹۷/۰۸/۰۹', '۹۷/۰۸/۱۰', '۹۷/۰۸/۱۱', '۹۷/۰۸/۱۲', '۹۷/۰۸/۱۳', '۹۷/۰۸/۱۴', '۹۷/۰۸/۱۵', '۹۷/۰۸/۱۶', '۹۷/۰۸/۱۷', '۹۷/۰۸/۱۸', '۹۷/۰۸/۱۹', '۹۷/۰۸/۲۰', '۹۷/۰۸/۲۱', '۹۷/۰۸/۲۲', '۹۷/۰۸/۲۳', '۹۷/۰۸/۲۴', '۹۷/۰۸/۲۵', '۹۷/۰۸/۲۶', '۹۷/۰۸/۲۷', '۹۷/۰۸/۲۸', '۹۷/۰۸/۲۹', '۹۷/۰۸/۳۰', '۹۷/۰۹/۰۱', '۹۷/۰۹/۰۲', '۹۷/۰۹/۰۳', '۹۷/۰۹/۰۴', '۹۷/۰۹/۰۵', '۹۷/۰۹/۰۶', '۹۷/۰۹/۰۷', '۹۷/۰۹/۰۸', '۹۷/۰۹/۰۹', '۹۷/۰۹/۱۰', '۹۷/۰۹/۱۱', '۹۷/۰۹/۱۲', '۹۷/۰۹/۱۳', '۹۷/۰۹/۱۴', '۹۷/۰۹/۱۵', '۹۷/۰۹/۱۶', '۹۷/۰۹/۱۷', '۹۷/۰۹/۱۸', '۹۷/۰۹/۱۹', '۹۷/۰۹/۲۰', '۹۷/۰۹/۲۱', '۹۷/۰۹/۲۲', '۹۷/۰۹/۲۳', '۹۷/۰۹/۲۴', '۹۷/۰۹/۲۵', '۹۷/۰۹/۲۶', '۹۷/۰۹/۲۷', '۹۷/۰۹/۲۸', '۹۷/۰۹/۲۹', '۹۷/۰۹/۳۰', '۹۷/۱۰/۰۱', '۹۷/۱۰/۰۲', '۹۷/۱۰/۰۳', '۹۷/۱۰/۰۴', '۹۷/۱۰/۰۵', '۹۷/۱۰/۰۶', '۹۷/۱۰/۰۷', '۹۷/۱۰/۰۸', '۹۷/۱۰/۰۹', '۹۷/۱۰/۱۰', '۹۷/۱۰/۱۱', '۹۷/۱۰/۱۲', '۹۷/۱۰/۱۳', '۹۷/۱۰/۱۴', '۹۷/۱۰/۱۵', '۹۷/۱۰/۱۶', '۹۷/۱۰/۱۷', '۹۷/۱۰/۱۸', '۹۷/۱۰/۱۹', '۹۷/۱۰/۲۰', '۹۷/۱۰/۲۱', '۹۷/۱۰/۲۲', '۹۷/۱۰/۲۳', '۹۷/۱۰/۲۴', '۹۷/۱۰/۲۵', '۹۷/۱۰/۲۶', '۹۷/۱۰/۲۷', '۹۷/۱۰/۲۸', '۹۷/۱۰/۲۹', '۹۷/۱۰/۳۰', '۹۷/۱۱/۰۱', '۹۷/۱۱/۰۲', '۹۷/۱۱/۰۳', '۹۷/۱۱/۰۴', '۹۷/۱۱/۰۵', '۹۷/۱۱/۰۶', '۹۷/۱۱/۰۷', '۹۷/۱۱/۰۸', '۹۷/۱۱/۰۹', '۹۷/۱۱/۱۰', '۹۷/۱۱/۱۱', '۹۷/۱۱/۱۲', '۹۷/۱۱/۱۳', '۹۷/۱۱/۱۴', '۹۷/۱۱/۱۵', '۹۷/۱۱/۱۶', '۹۷/۱۱/۱۷', '۹۷/۱۱/۱۸', '۹۷/۱۱/۱۹', '۹۷/۱۱/۲۰', '۹۷/۱۱/۲۱', '۹۷/۱۱/۲۲', '۹۷/۱۱/۲۳', '۹۷/۱۱/۲۴', '۹۷/۱۱/۲۵', '۹۷/۱۱/۲۶', '۹۷/۱۱/۲۷', '۹۷/۱۱/۲۸', '۹۷/۱۱/۲۹', '۹۷/۱۱/۳۰', '۹۷/۱۲/۰۱', '۹۷/۱۲/۰۲', '۹۷/۱۲/۰۳', '۹۷/۱۲/۰۴', '۹۷/۱۲/۰۵', '۹۷/۱۲/۰۶', '۹۷/۱۲/۰۷', '۹۷/۱۲/۰۸', '۹۷/۱۲/۰۹', '۹۷/۱۲/۱۰', '۹۷/۱۲/۱۱', '۹۷/۱۲/۱۲', '۹۷/۱۲/۱۳', '۹۷/۱۲/۱۴', '۹۷/۱۲/۱۵', '۹۷/۱۲/۱۶', '۹۷/۱۲/۱۷', '۹۷/۱۲/۱۸', '۹۷/۱۲/۱۹', '۹۷/۱۲/۲۰', '۹۷/۱۲/۲۱', '۹۷/۱۲/۲۲', '۹۷/۱۲/۲۳', '۹۷/۱۲/۲۴', '۹۷/۱۲/۲۵', '۹۷/۱۲/۲۶', '۹۷/۱۲/۲۷', '۹۷/۱۲/۲۸', '۹۷/۱۲/۲۹'];
module.exports = Dates;

/***/ }),

/***/ "./assets/LastNames.js":
/*!*****************************!*\
  !*** ./assets/LastNames.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var LastNames = ['رضایی', 'اختر', 'حبیبی', 'قربانی', 'گرمساری', 'خجسته', 'صالحی فرد', 'شعبانی', 'توسلی', 'فریبا', 'حسین نژاد', 'اکبری', 'رجایی فرد', 'علیدوستی', 'کلانتری', 'مومنی', 'مسلمی', 'دانشور', 'تهرانی', 'طباطبایی', 'مظفری', 'رادمهر', 'مقدسی', 'رامین فر', 'کریمیان', 'غلامی', 'زارعی', 'بیات', 'خجسته', 'صادیقیان', 'باقر پور', 'باباپور', 'عباسی', 'قربانیان', 'کاظمی', 'افشار', 'میرزایی', 'مقدم', 'معظمی', 'غریبی', 'غلام پور', 'افشان', 'بیاتیان', 'اولادی', 'صادقی', 'ارشدی', 'یگانه', 'عباسی فرد', 'شیخی', 'خیلیلی', 'اکبری', 'آهنگران', 'جواهریان', 'گرشاسبی', 'جوادی', 'مصطفوی', 'احمدیان', 'خناری', 'وفایی نژاد', 'سلیمانی', 'قاسمی', 'محمدی ', 'حسینی', 'راد', 'وطن دوست', 'روحانی', 'ایران منش', 'کریمی', 'عشوری', 'علی پور', 'ماهینی', 'انصاری', 'خلیل زاده', 'محرمی', 'مهدویان', 'پناهیان', 'رازقی', 'یوسف نژاد', 'رئیسی', 'جهانگیر پور', 'امینی', 'امیریان', 'علی نژاد', 'نصیری', 'کامران زاده', 'بشیری', 'افشار زاده', 'میرزا پور', 'نوروزی', 'ترابی', 'محسنی', 'چاووشی', 'بابایی', 'اصحابی', 'لشگری', 'داداشی', 'شاعری', 'رحمتی', 'مهرابیان', 'احمدی', 'رضوی', 'حاتمی'];
module.exports = LastNames;

/***/ }),

/***/ "./assets/Names.js":
/*!*************************!*\
  !*** ./assets/Names.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var Names = [//Ladies first!
'ریما', 'فرزانه', 'فرشته', 'فریبا', 'ندا', 'گیسو', 'صبا', 'آزیتا', 'ارغوان', 'بهرخ', 'پریسا', 'پارمیدا', 'نیلوفر', 'ترانه', 'حمیرا', 'نگار', 'فهمیه', 'پریا', 'شهرزاد', 'نگار', 'نگین', 'رها', 'ریما', 'پادینا', 'نازنین', 'رومینا', 'روشانا', 'ساره', 'فاطمه', 'ریحانه', 'یاسمین', 'کیمیا', 'لیلا', 'آزین', 'بهار', 'انوشه', 'بهناز', 'بیتا', 'پارمیدا', 'نازگل', 'پروانه', 'پگاه', 'مهردخت', 'مهرآسا', 'زهرا', 'آوا', 'سیمین', 'رها', 'آذر', 'گلنوش', 'آوا', 'الهام', 'گلرخ', 'گلی', 'راحله', 'سحر', 'نیکا', 'پروین', 'پرستو', 'ستاره', 'تینا', 'پرنیا', 'پونه', 'دلارام', 'دریا', 'روشنک', 'ژاله', 'ساغر', 'سیما', 'شمیم', 'شهناز', 'شکوه', 'شیما', 'شیرین', 'شهرزاد', 'شکیبا', 'شقایق', 'پرستو', 'فیروزه', 'فریناز', 'فرانک', 'فروغ', 'قشنگ', 'دریا', 'کتایون', 'ژاله', 'کمند', 'کیان', 'گلنار', 'لادن', 'لاله', 'مژگان', 'میترا', 'مینا', 'مانا', 'ماهدخت', 'مرجان', 'مژده', 'مژگان', 'مهتا', 'مهتاب', 'مهربان', 'مهشید', 'ناهید', 'نهال', 'ویدا', 'هستی', 'هما', 'هنگامه', 'یاسمن', 'یاسمین', 'یکتا', //Males
'آرمان', 'محمد رضا', 'محمد', 'حسن', 'رضا', 'علی', 'پارسا', 'حسین', 'رضا', 'سید علی', 'پژمان', 'محمد رضا', 'بهرام', 'اسماعیل', 'احمد', 'امیر', 'کامیار', 'مهراد', 'بابک', 'هادی', 'حمید', 'ساسان', 'دانیال', 'نریمان', 'بهروز', 'برزو', 'علیرضا', 'قاسم', 'محمد طاها', 'سعید', 'ایمان', 'سلیمان', 'بهداد', 'عادل', 'ناصر', 'امین', 'حسین', 'محمدرضا', 'رضا', 'طاها', 'بهرنگ', 'ابوالفضل', 'علی', 'سجاد', 'امین', 'هومن', 'سینا', 'روزبه', 'آرمان', 'محمد', 'حسن', 'صابر', 'متین', 'احسان', 'کیارش', 'فرشید', 'فرشاد', 'مهراد', 'کیانوش', 'رضا', 'حمید', 'اکبر', 'قاسم', 'مسعود', 'احمد', 'فرامرز', 'آرمین', 'ماهان', 'شایان', 'پرهام', 'آرین', 'کیان', 'میلاد', 'سهیل', 'حسام', 'پویا', 'مهران', 'اشکان', 'آراد', 'آرتین', 'آرتا', 'آروین', 'آریانا', 'اردشیر', 'اردلان', 'ارژنگ', 'افشین', 'امید', 'بیژن', 'بهنام', 'بهداد', 'خسرو', 'دارا', 'رامبد', 'رهام', 'سپهر', 'سیاوش', 'سهند', 'سروش', 'شادمهر', 'شروین', 'شایان', 'شاهین', 'شهاب', 'شهریار', 'فربد', 'فرزان', 'فرزاد', 'فردین', 'فرهاد', 'کوروش', 'کارن', 'کامران', 'مهدیار', 'مازیار', 'ماهان', 'مهرزاد', 'نریمان', 'نوید', 'نیما', 'وریا', 'هوتن'];
module.exports = Names;

/***/ }),

/***/ "./src/PersianSupplier.js":
/*!********************************!*\
  !*** ./src/PersianSupplier.js ***!
  \********************************/
/*! exports provided: onStartup, onShutdown, onSupplyCities, onSupplyPhones, onSupplyNames, onSupplyDates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyCities", function() { return onSupplyCities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyPhones", function() { return onSupplyPhones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyNames", function() { return onSupplyNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyDates", function() { return onSupplyDates; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var names = __webpack_require__(/*! ../assets/Names */ "./assets/Names.js");

var lastnames = __webpack_require__(/*! ../assets/LastNames */ "./assets/LastNames.js");

var cities = __webpack_require__(/*! ../assets/Cities */ "./assets/Cities.js");

var dates = __webpack_require__(/*! ../assets/Dates */ "./assets/Dates.js");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

function onStartup() {
  DataSupplier.registerDataSupplier('public.text', 'Names', 'SupplyNames');
  DataSupplier.registerDataSupplier('public.text', 'Cities', 'SupplyCities');
  DataSupplier.registerDataSupplier('public.text', 'Dates', 'SupplyDates');
  DataSupplier.registerDataSupplier('public.text', 'Phone Numbers', 'SupplyPhones');
}
function onShutdown() {
  DataSupplier.deregisterDataSuppliers();
}
function onSupplyCities(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dynamicData = cities.slice(Math.floor(Math.random() * cities.length));
  dynamicData.push.apply(dynamicData, cities);

  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, cities);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
}
function onSupplyPhones(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var randomNumber = Math.floor(Math.random() * (9999999 - 1000000) + 1000000);
  var numbersFirstPart = ['۰۹۰۱', '۰۹۰۲', '۰۹۰۳', '۰۹۱۱', '۰۹۱۲', '۰۹۱۳', '۰۹۱۴', '۰۹۱۵', '۰۹۱۶', '۰۹۱۷', '۰۹۱۸', '۰۹۳۰', '۰۹۳۴', '۰۹۳۵', '۰۹۳۶', '۰۹۳۷', '۰۹۳۸', '۰۹۳۹', '۰۹۹۰'];
  var dynamicData = numbersFirstPart.slice(Math.floor(Math.random() * numbersFirstPart.length));
  dynamicData.push.apply(dynamicData, numbersFirstPart);

  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, numbersFirstPart);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, "".concat(dynamicData).concat(toPersian(randomNumber)), dataIndex);
    dataIndex++;
  }
}
function onSupplyNames(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount; // Start the data to be provided at a random position in the array.

  var namesDynamicData = names.slice(Math.floor(Math.random() * names.length));
  namesDynamicData.push.apply(namesDynamicData, names);

  while (namesDynamicData.length < dataCount) {
    namesDynamicData.push.apply(namesDynamicData, names);
  } // Start the data to be provided at a random position in the array.


  var lastNamesDynamicData = lastnames.slice(Math.floor(Math.random() * lastnames.length));
  lastNamesDynamicData.push.apply(lastNamesDynamicData, lastnames);

  while (lastNamesDynamicData.length < dataCount) {
    lastNamesDynamicData.push.apply(lastNamesDynamicData, lastnames);
  }

  shuffle(namesDynamicData);
  shuffle(lastNamesDynamicData);
  namesDynamicData = namesDynamicData.slice(0, dataCount);
  lastNamesDynamicData = lastNamesDynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, "".concat(namesDynamicData[dataIndex], " ").concat(lastNamesDynamicData[dataIndex]), dataIndex);
    dataIndex++;
  } // DataSupplier.supplyData(dataKey, dynamicData);  

}
function onSupplyDates(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var dynamicData = dates.slice(Math.floor(Math.random() * dates.length));
  dynamicData.push.apply(dynamicData, dates);

  while (dynamicData.length < dataCount) {
    dynamicData.push.apply(dynamicData, dates);
  }

  shuffle(dynamicData);
  dynamicData = dynamicData.slice(0, dataCount);
  var dataIndex = 0;

  while (dataIndex < dataCount) {
    DataSupplier.supplyDataAtIndex(dataKey, dynamicData[dataIndex], dataIndex);
    dataIndex++;
  }
}

var toPersian = function toPersian(value) {
  var charCodeZero = "۰".charCodeAt(0);
  return String(value).replace(/[0-9]/g, function (w) {
    return String.fromCharCode(w.charCodeAt(0) + charCodeZero - 48);
  });
};

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onSupplyNames'] = __skpm_run.bind(this, 'onSupplyNames');
that['onSupplyDates'] = __skpm_run.bind(this, 'onSupplyDates');
that['onSupplyCities'] = __skpm_run.bind(this, 'onSupplyCities');
that['onSupplyPhones'] = __skpm_run.bind(this, 'onSupplyPhones');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=PersianSupplier.js.map