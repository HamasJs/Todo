(()=>{"use strict";const t=document.querySelector(".hamburger"),e=document.querySelector(".sidebar"),n=document.querySelector(".task-form"),a=document.querySelector(".create-task");let r=0;class o{constructor(t,e,n,a){this.title=t,this.description=e,this.date=n,this.priority=a}}function i(t,e){var n=localStorage.getItem(t);(n=n?JSON.parse(n):{}).priority=e,localStorage.setItem(t,JSON.stringify(n))}const u=document.querySelector(".add-task-form"),s=document.querySelector(".task-form"),d=document.querySelector(".tasks"),c=document.getElementById("Title"),l=document.getElementById("Details"),m=document.getElementById("Date"),f=document.querySelector(".cancel-task");let h,g=localStorage.length,v=[],w=[];function y(){return w}function b(){for(let t=0;t<d.childElementCount;t++){const e=document.getElementById(`star-${t}`);e.addEventListener("click",(function(){e.classList.toggle("checked"),e.classList.contains("checked")?i(t,!0):i(t,!1)}))}}function p(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function T(t){return T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},T(t)}function k(t){return p(1,arguments),t instanceof Date||"object"===T(t)&&"[object Date]"===Object.prototype.toString.call(t)}function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function M(t){p(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===C(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):("string"!=typeof t&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function S(t){if(p(1,arguments),!k(t)&&"number"!=typeof t)return!1;var e=M(t);return!isNaN(Number(e))}function D(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function E(t,e){p(2,arguments);var n=M(t).getTime(),a=D(e);return new Date(n+a)}function x(t,e){p(2,arguments);var n=D(e);return E(t,-n)}var U=864e5;function P(t){p(1,arguments);var e=1,n=M(t),a=n.getUTCDay(),r=(a<e?7:0)+a-e;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function W(t){p(1,arguments);var e=M(t),n=e.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=P(a),o=new Date(0);o.setUTCFullYear(n,0,4),o.setUTCHours(0,0,0,0);var i=P(o);return e.getTime()>=r.getTime()?n+1:e.getTime()>=i.getTime()?n:n-1}function L(t){p(1,arguments);var e=W(t),n=new Date(0);n.setUTCFullYear(e,0,4),n.setUTCHours(0,0,0,0);var a=P(n);return a}var Y=6048e5,N={};function q(){return N}function O(t,e){var n,a,r,o,i,u,s,d;p(1,arguments);var c=q(),l=D(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.weekStartsOn)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.weekStartsOn)&&void 0!==r?r:c.weekStartsOn)&&void 0!==a?a:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.weekStartsOn)&&void 0!==n?n:0);if(!(l>=0&&l<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var m=M(t),f=m.getUTCDay(),h=(f<l?7:0)+f-l;return m.setUTCDate(m.getUTCDate()-h),m.setUTCHours(0,0,0,0),m}function B(t,e){var n,a,r,o,i,u,s,d;p(1,arguments);var c=M(t),l=c.getUTCFullYear(),m=q(),f=D(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:m.firstWeekContainsDate)&&void 0!==a?a:null===(s=m.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1);if(!(f>=1&&f<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var h=new Date(0);h.setUTCFullYear(l+1,0,f),h.setUTCHours(0,0,0,0);var g=O(h,e),v=new Date(0);v.setUTCFullYear(l,0,f),v.setUTCHours(0,0,0,0);var w=O(v,e);return c.getTime()>=g.getTime()?l+1:c.getTime()>=w.getTime()?l:l-1}function I(t,e){var n,a,r,o,i,u,s,d;p(1,arguments);var c=q(),l=D(null!==(n=null!==(a=null!==(r=null!==(o=null==e?void 0:e.firstWeekContainsDate)&&void 0!==o?o:null==e||null===(i=e.locale)||void 0===i||null===(u=i.options)||void 0===u?void 0:u.firstWeekContainsDate)&&void 0!==r?r:c.firstWeekContainsDate)&&void 0!==a?a:null===(s=c.locale)||void 0===s||null===(d=s.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==n?n:1),m=B(t,e),f=new Date(0);f.setUTCFullYear(m,0,l),f.setUTCHours(0,0,0,0);var h=O(f,e);return h}var H=6048e5;function $(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}var F={y:function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return $("yy"===e?a%100:a,e.length)},M:function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):$(n+1,2)},d:function(t,e){return $(t.getUTCDate(),e.length)},a:function(t,e){var n=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];default:return"am"===n?"a.m.":"p.m."}},h:function(t,e){return $(t.getUTCHours()%12||12,e.length)},H:function(t,e){return $(t.getUTCHours(),e.length)},m:function(t,e){return $(t.getUTCMinutes(),e.length)},s:function(t,e){return $(t.getUTCSeconds(),e.length)},S:function(t,e){var n=e.length,a=t.getUTCMilliseconds();return $(Math.floor(a*Math.pow(10,n-3)),e.length)}};const j=F;var z={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return j.y(t,e)},Y:function(t,e,n,a){var r=B(t,a),o=r>0?r:1-r;return"YY"===e?$(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):$(o,e.length)},R:function(t,e){return $(W(t),e.length)},u:function(t,e){return $(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return $(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return $(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return j.M(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return $(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(t,e,n,a){var r=function(t,e){p(1,arguments);var n=M(t),a=O(n,e).getTime()-I(n,e).getTime();return Math.round(a/H)+1}(t,a);return"wo"===e?n.ordinalNumber(r,{unit:"week"}):$(r,e.length)},I:function(t,e,n){var a=function(t){p(1,arguments);var e=M(t),n=P(e).getTime()-L(e).getTime();return Math.round(n/Y)+1}(t);return"Io"===e?n.ordinalNumber(a,{unit:"week"}):$(a,e.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):j.d(t,e)},D:function(t,e,n){var a=function(t){p(1,arguments);var e=M(t),n=e.getTime();e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0);var a=e.getTime(),r=n-a;return Math.floor(r/U)+1}(t);return"Do"===e?n.ordinalNumber(a,{unit:"dayOfYear"}):$(a,e.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return $(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return $(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return $(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return j.h(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):j.H(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):$(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):$(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):j.m(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):j.s(t,e)},S:function(t,e){return j.S(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return Q(r);case"XXXX":case"XX":return G(r);default:return G(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return Q(r);case"xxxx":case"xx":return G(r);default:return G(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+A(r,":");default:return"GMT"+G(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+A(r,":");default:return"GMT"+G(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return $(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return $((a._originalDate||t).getTime(),e.length)}};function A(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+$(o,2)}function Q(t,e){return t%60==0?(t>0?"-":"+")+$(Math.abs(t)/60,2):G(t,e)}function G(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+$(Math.floor(r/60),2)+n+$(r%60,2)}const X=z;var R=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},J=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}},_={p:J,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return R(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",R(r,e)).replace("{{time}}",J(o,e))}};const V=_;function K(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}var Z=["D","DD"],tt=["YY","YYYY"];function et(t){return-1!==Z.indexOf(t)}function nt(t){return-1!==tt.indexOf(t)}function at(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var rt={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function ot(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth,a=t.formats[n]||t.formats[t.defaultWidth];return a}}var it,ut={date:ot({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:ot({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:ot({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},st={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function dt(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,u=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[u]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}function ct(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,u=o[0],s=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(s)?mt(s,(function(t){return t.test(u)})):lt(s,(function(t){return t.test(u)}));i=t.valueCallback?t.valueCallback(d):d,i=n.valueCallback?n.valueCallback(i):i;var c=e.slice(u.length);return{value:i,rest:c}}}function lt(t,e){for(var n in t)if(t.hasOwnProperty(n)&&e(t[n]))return n}function mt(t,e){for(var n=0;n<t.length;n++)if(e(t[n]))return n}const ft={code:"en-US",formatDistance:function(t,e,n){var a,r=rt[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:ut,formatRelative:function(t,e,n,a){return st[t]},localize:{ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:dt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:dt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:dt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:dt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:dt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(it={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(it.matchPattern);if(!n)return null;var a=n[0],r=t.match(it.parsePattern);if(!r)return null;var o=it.valueCallback?it.valueCallback(r[0]):r[0];o=e.valueCallback?e.valueCallback(o):o;var i=t.slice(a.length);return{value:o,rest:i}}),era:ct({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:ct({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:ct({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:ct({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:ct({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};var ht=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,gt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,vt=/^'([^]*?)'?$/,wt=/''/g,yt=/[a-zA-Z]/;function bt(t,e,n){var a,r,o,i,u,s,d,c,l,m,f,h,g,v,w,y,b,T;p(2,arguments);var k=String(e),C=q(),E=null!==(a=null!==(r=null==n?void 0:n.locale)&&void 0!==r?r:C.locale)&&void 0!==a?a:ft,U=D(null!==(o=null!==(i=null!==(u=null!==(s=null==n?void 0:n.firstWeekContainsDate)&&void 0!==s?s:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==u?u:C.firstWeekContainsDate)&&void 0!==i?i:null===(l=C.locale)||void 0===l||null===(m=l.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==o?o:1);if(!(U>=1&&U<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var P=D(null!==(f=null!==(h=null!==(g=null!==(v=null==n?void 0:n.weekStartsOn)&&void 0!==v?v:null==n||null===(w=n.locale)||void 0===w||null===(y=w.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==g?g:C.weekStartsOn)&&void 0!==h?h:null===(b=C.locale)||void 0===b||null===(T=b.options)||void 0===T?void 0:T.weekStartsOn)&&void 0!==f?f:0);if(!(P>=0&&P<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!E.localize)throw new RangeError("locale must contain localize property");if(!E.formatLong)throw new RangeError("locale must contain formatLong property");var W=M(t);if(!S(W))throw new RangeError("Invalid time value");var L=K(W),Y=x(W,L),N={firstWeekContainsDate:U,weekStartsOn:P,locale:E,_originalDate:W},O=k.match(gt).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,V[e])(t,E.formatLong):t})).join("").match(ht).map((function(a){if("''"===a)return"'";var r=a[0];if("'"===r)return pt(a);var o=X[r];if(o)return null!=n&&n.useAdditionalWeekYearTokens||!nt(a)||at(a,e,String(t)),null!=n&&n.useAdditionalDayOfYearTokens||!et(a)||at(a,e,String(t)),o(Y,a,E.localize,N);if(r.match(yt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return a})).join("");return O}function pt(t){var e=t.match(vt);return e?e[1].replace(wt,"'"):t}const Tt=function(t){document.querySelector(".active").classList.remove("active"),t.classList.add("active")};function kt(t){p(1,arguments);var e=M(t);return e.setHours(0,0,0,0),e}var Ct=864e5;const Mt=function t(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return a.length>=n?e.apply(null,a.slice(0,n).reverse()):function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return t(e,n,a.concat(o))}}((function(t,e){p(2,arguments);var n=kt(t),a=kt(e),r=n.getTime()-K(n),o=a.getTime()-K(a);return Math.round((r-o)/Ct)}),2),St=document.getElementById("All-Tasks"),Dt=document.getElementById("Today-Tasks"),Et=document.getElementById("Weekly-Tasks"),xt=document.getElementById("Important-Tasks"),Ut=document.querySelector(".tasks");t.addEventListener("click",(function(){e.classList.toggle("hidden")})),St.addEventListener("click",(function(){Tt(St),function(){for(let t=0;t<Ut.childElementCount;t++)document.getElementById(`task-${t}`).classList.remove("hidden")}()})),Et.addEventListener("click",(function(){Tt(Et),function(){for(let t=0;t<Ut.childElementCount;t++){const e=document.getElementById(`task-${t}`),n=document.getElementById(`date-${t}`);let a=new Date,r=new Date(n.textContent);const o=Mt(a,r);o>=0&&o<=7?e.classList.remove("hidden"):e.classList.add("hidden")}}()})),Dt.addEventListener("click",(function(){Tt(Dt),function(){for(let t=0;t<Ut.childElementCount;t++){const e=document.getElementById(`task-${t}`),n=document.getElementById(`date-${t}`);bt(new Date,"yyyy-MM-dd")!=n.textContent&&e.classList.add("hidden")}}()})),xt.addEventListener("click",(function(){Tt(xt),function(){for(let t=0;t<Ut.childElementCount;t++){const e=document.getElementById(`task-${t}`);document.getElementById(`star-${t}`).classList.contains("checked")||e.classList.add("hidden")}}()})),function(){for(let t=0;t<localStorage.length;t++){let e=JSON.parse(localStorage.getItem(t));h=e.priority?"checked":"";const n=document.createElement("div");n.className="task",n.id=`task-${t}`,n.innerHTML=`<div class="ct">\n    <div class="checkbox checked"></div>\n    <div class="details">\n      <h3 class="taskname">${e.title}</h3>\n      <p class="task-details">\n      ${e.description}\n      </p>\n    </div>\n    </div>\n  <div class="details-task">\n    <div class="date" id ="date-${t}">${e.date}</div>\n    <span class="fa fa-star ${h}" id="star-${t}"  value = "false"></span>\n    <button class="cancel-btn" id="cancel-btn-${t}">Delete</button>\n  </div>`,d.appendChild(n),document.getElementById(`cancel-btn-${t}`).addEventListener("click",(function(){document.getElementById(`task-${t}`).remove(),console.log(t),localStorage.removeItem(t)})),w[t]=e.date,y()}}(),u.addEventListener("click",(function(){v=[c.value,l.value,m.value],function(){const t=document.createElement("div");t.className="task",t.id=`task-${g}`,t.innerHTML=`<div class="ct">\n    <div class="checkbox checked"></div>\n    <div class="details">\n      <h3 class="taskname">${c.value}</h3>\n      <p class="task-details">\n      ${l.value}\n      </p>\n    </div>\n    </div>\n  <div class="details-task">\n    <div class="date" id ="date-${g}">${m.value}</div>\n    <span class="fa fa-star" id="star-${g}" value = "false"></span>\n    <button class="cancel-btn" id="cancel-btn-${g}">Delete</button>\n  </div>`,d.appendChild(t),document.getElementById(`cancel-btn-${g}`).addEventListener("click",(function(){document.getElementById("task-"+(g-1)).remove(),console.log(g-1),localStorage.removeItem(g-1)})),w[g]=m.value,y(),g++}(),function(t){let e=new o(t[0],t[1],t[2],!1);!function(){for(let t=0;t<=localStorage.length;t++)r=t}(),localStorage.setItem(r,JSON.stringify(e))}(v),b(),s.classList.toggle("hidden")})),b(),f.addEventListener("click",(function(){s.classList.toggle("hidden")})),a.addEventListener("click",(function(){n.classList.toggle("hidden")}))})();