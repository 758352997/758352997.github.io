"use strict";function getCookie(c){var e=document.cookie.split("; "),n="";return e.forEach(function(e,o){var t=e.split("=");c==t[0]&&(n=t[1])}),n}function setCookie(e,o,t){var c=(new Date).getTime()-288e5+1e3*t;console.log(c),document.cookie="".concat(e,"=").concat(o,";expires=").concat(new Date(c))}function deleteCookie(e){setCookie(e,1,-1)}