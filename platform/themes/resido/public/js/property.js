(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,i){for(var r=0;r<i.length;r++){var o=i[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(n=o.key,s=void 0,s=function(t,i){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,i||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===i?String:Number)(t)}(n,"string"),"symbol"===e(s)?s:String(s)),o)}var n,s}var i=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.cookieName=window.currentLanguage+"_recently_viewed_properties",this.propertyId=$("div[data-property-id]").data("property-id"),this.recentPropertyCookies=decodeURIComponent(this.getCookie(this.cookieName)),this.arrList=[]}var i,r,o;return i=e,(r=[{key:"handleRecentlyViewedProperties",value:function(){if(null!=this.recentPropertyCookies&&null!=this.recentPropertyCookies&&this.recentPropertyCookies.length>0&&(this.arrList=JSON.parse(this.getCookie(this.cookieName))),null!=this.propertyId&&0!=this.propertyId&&null!=this.propertyId){var e={id:this.propertyId};if(null==this.recentPropertyCookies||null==this.recentPropertyCookies||""==this.recentPropertyCookies)this.arrList.push(e),this.setCookie(this.cookieName,JSON.stringify(this.arrList),60);else{this.arrList=JSON.parse(this.recentPropertyCookies);var t=this.arrList.map((function(e){return e.id})).indexOf(e.id);-1===t?(this.arrList.length>=20&&this.arrList.shift(),this.arrList.push(e),this.clearCookies(this.cookieName),this.setCookie(this.cookieName,JSON.stringify(this.arrList),60)):(this.arrList.splice(t,1),this.arrList.push(e),this.clearCookies(this.cookieName),this.setCookie(this.cookieName,JSON.stringify(this.arrList),60))}}}},{key:"setCookie",value:function(e,t,i){var r=new Date,o=new URL(window.siteUrl);r.setTime(r.getTime()+24*i*60*60*1e3);var n="expires="+r.toUTCString();document.cookie=e+"="+t+"; "+n+"; path=/; domain="+o.hostname}},{key:"getCookie",value:function(e){for(var t=e+"=",i=document.cookie.split(";"),r=0;r<i.length;r++){for(var o=i[r];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return""}},{key:"clearCookies",value:function(e){var t=new URL(window.siteUrl);document.cookie=e+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/; domain="+t.hostname}},{key:"parseCookie",value:function(){var e=window.currentLanguage+"_wishlist",t=decodeURIComponent(this.getCookie(e));null!=t&&null!=t&&t&&(t=JSON.parse(t))}},{key:"getProperties",value:function(){var e=$("#property-component"),t=e.data("url"),i=e.data("type"),r=!0,o=[],n=t+"?type="+i;$.ajax({url:n,method:"GET"}).done((function(t){o=t.data?t.data:[],r=!1,e.empty(),r?e.append('<div class="half-circle-spinner"><div class="circle circle-1"></div><div class="circle circle-2"></div></div>'):o.forEach((function(t){var i=$('<div class="col-lg-4 col-md-6 col-sm-12 item-recent"></div>');i.html(t.HTML),e.append(i)}))}))}}])&&t(i.prototype,r),o&&t(i,o),Object.defineProperty(i,"prototype",{writable:!1}),e}();$(document).ready((function(){var e=new i;e.handleRecentlyViewedProperties(),$("#property-component").length&&(e.parseCookie(),e.getProperties())}))})();