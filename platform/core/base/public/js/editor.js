(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,a=void 0,a=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,n||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(o,"string"),"symbol"===t(a)?a:String(a)),i)}var o,a}const n=function(){function t(e,n,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loader=e,this.url=n,this.t=r}var n,r,i;return n=t,(r=[{key:"upload",value:function(){var t=this;return this.loader.file.then((function(e){return new Promise((function(n,r){t._initRequest(),t._initListeners(n,r,e),t._sendRequest(e)}))}))}},{key:"abort",value:function(){this.xhr&&this.xhr.abort()}},{key:"_initRequest",value:function(){var t=this.xhr=new XMLHttpRequest;t.open("POST",this.url,!0),t.responseType="json"}},{key:"_initListeners",value:function(t,e,n){var r=this.xhr,i=this.loader,o=(0,this.t)("Cannot upload file:")+" ".concat(n.name,".");r.addEventListener("error",(function(){return e(o)})),r.addEventListener("abort",(function(){return e()})),r.addEventListener("load",(function(){var n=r.response;if(!n||!n.uploaded)return e(n&&n.error&&n.error.message?n.error.message:o);t({default:n.url})})),r.upload&&r.upload.addEventListener("progress",(function(t){t.lengthComputable&&(i.uploadTotal=t.total,i.uploaded=t.loaded)}))}},{key:"_sendRequest",value:function(t){var e=new FormData;e.append("upload",t),e.append("_token",$('meta[name="csrf-token"]').attr("content")),this.xhr.send(e)}}])&&e(n.prototype,r),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t,e,n){return(e=d(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},l="function"==typeof Symbol?Symbol:{},c=l.iterator||"@@iterator",u=l.asyncIterator||"@@asyncIterator",s=l.toStringTag||"@@toStringTag";function f(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,n){return t[e]=n}}function d(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),l=new P(r||[]);return o(a,"_invoke",{value:L(t,n,l)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=d;var p="suspendedStart",g="suspendedYield",m="executing",y="completed",v={};function b(){}function w(){}function k(){}var E={};f(E,c,(function(){return this}));var _=Object.getPrototypeOf,C=_&&_(_(R([])));C&&C!==n&&i.call(C,c)&&(E=C);var x=k.prototype=b.prototype=Object.create(E);function O(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function n(o,a,l,c){var u=h(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,l,c)}),(function(t){n("throw",t,l,c)})):e.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return n("throw",t,l,c)}))}c(u.arg)}var a;o(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,i){n(t,r,e,i)}))}return a=a?a.then(i,i):i()}})}function L(e,n,r){var i=p;return function(o,a){if(i===m)throw new Error("Generator is already running");if(i===y){if("throw"===o)throw a;return{value:t,done:!0}}for(r.method=o,r.arg=a;;){var l=r.delegate;if(l){var c=j(l,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===p)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=m;var u=h(e,n,r);if("normal"===u.type){if(i=r.done?y:g,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(i=y,r.method="throw",r.arg=u.arg)}}}function j(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,j(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var o=h(i,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var a=o.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function R(e){if(e||""===e){var n=e[c];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){for(;++o<e.length;)if(i.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,o(x,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:w,configurable:!0}),w.displayName=f(k,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,f(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},O(S.prototype),f(S.prototype,u,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new S(d(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},O(x),f(x,s,"Generator"),f(x,c,(function(){return this})),f(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=R,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return l.type="throw",l.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],l=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),u=i.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;T(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function l(t,e,n,r,i,o,a){try{var l=t[o](a),c=l.value}catch(t){return void n(t)}l.done?e(c):Promise.resolve(c).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(t){l(o,r,i,a,c,"next",t)}function c(t){l(o,r,i,a,c,"throw",t)}a(void 0)}))}}function u(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,o=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,d(r.key),r)}}function d(t){var e=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!==r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===r(e)?e:String(e)}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.CKEDITOR={},this.ckEditorConfigCallbacks=[],this.ckEditorInitialCallbacks=[],this.ckFinderCallback=null,this.tinyMceConfigCallbacks=[],this.tinyMceInitialCallbacks=[],document.dispatchEvent(new CustomEvent("core-editor-init",{detail:this}))}var e,r,l,s,d,h;return e=t,r=[{key:"ckEditorConfigUsing",value:function(t){this.ckEditorConfigCallbacks.push(t)}},{key:"ckEditorInitialUsing",value:function(t){this.ckEditorInitialCallbacks.push(t)}},{key:"ckEditorConfig",value:function(t){var e,n=u(this.ckEditorConfigCallbacks);try{for(n.s();!(e=n.n()).done;)t=(0,e.value)(t)}catch(t){n.e(t)}finally{n.f()}return t}},{key:"ckFinderUsing",value:function(t){this.ckFinderCallback=t}},{key:"ckFinderInitial",value:(h=c(a().mark((function t(e,r){var i,o,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.ckFinderCallback){t.next=2;break}return t.abrupt("return",this.ckFinderCallback(e,r));case 2:(i=e.plugins.get("FileRepository"))&&RV_MEDIA_URL.media_upload_from_editor&&(i.createUploadAdapter=function(t){return new n(t,RV_MEDIA_URL.media_upload_from_editor,e.t)}),o=e.commands.get("ckfinder"),l=$("#".concat(r)).parent().find('.btn_gallery[data-action="media-insert-ckeditor"]'),o&&l.length?o.execute=function(){return l.trigger("click")}:o.execute=function(){return Botble.showError("Not available.")};case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return h.apply(this,arguments)})},{key:"initCkEditor",value:function(t,e){var n=this;if(this.CKEDITOR[t]||!$("#"+t).is(":visible"))return!1;var r=document.querySelector("#"+t),l=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({fontSize:{options:[9,10,11,12,13,"default",15,16,17,18,19,20,21,22,23,24]},alignment:{options:["left","right","center","justify"]},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"},{model:"heading5",view:"h5",title:"Heading 5",class:"ck-heading_heading4"},{model:"heading6",view:"h6",title:"Heading 6",class:"ck-heading_heading4"}]},placeholder:" ",toolbar:{items:["heading","|","fontColor","fontSize","fontBackgroundColor","fontFamily","bold","italic","underline","link","strikethrough","bulletedList","numberedList","|","alignment","direction","shortcode","outdent","indent","|","htmlEmbed","imageInsert","ckfinder","blockQuote","insertTable","mediaEmbed","undo","redo","findAndReplace","removeFormat","sourceEditing","codeBlock","fullScreen"],shouldNotGroupWhenFull:!0},language:{ui:window.siteEditorLocale||"en",content:window.siteEditorLocale||"en"},image:{toolbar:["imageTextAlternative","imageStyle:inline","imageStyle:block","imageStyle:side","imageStyle:wrapText","imageStyle:breakText","toggleImageCaption","ImageResize"],upload:{types:["jpeg","png","gif","bmp","webp","tiff","svg+xml"]}},codeBlock:{languages:[{language:"plaintext",label:"Plain text"},{language:"c",label:"C"},{language:"cs",label:"C#"},{language:"cpp",label:"C++"},{language:"css",label:"CSS"},{language:"diff",label:"Diff"},{language:"html",label:"HTML"},{language:"java",label:"Java"},{language:"javascript",label:"JavaScript"},{language:"php",label:"PHP"},{language:"python",label:"Python"},{language:"ruby",label:"Ruby"},{language:"typescript",label:"TypeScript"},{language:"xml",label:"XML"},{language:"dart",label:"Dart",class:"language-dart"}]},link:{defaultProtocol:"http://",decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","tableCellProperties","tableProperties"]},htmlSupport:{allow:[{name:/.*/,attributes:!0,classes:!0,styles:!0}]},mediaEmbed:{extraProviders:[{name:"tiktok",url:"^.*https:\\/\\/(?:m|www|vm)?\\.?tiktok\\.com\\/((?:.*\\b(?:(?:usr|v|embed|user|video)\\/|\\?shareId=|\\&item_id=)(\\d+))|\\w+)",html:function(t){return'<iframe src="https://www.tiktok.com/embed/v2/'.concat(t[1],'" width="100%" height="400" frameborder="0"></iframe>')}}]}},e);l=this.ckEditorConfig(l),ClassicEditor.create(r,l).then(function(){var e=c(a().mark((function e(r){var i,o,l;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.insertHtml=function(t){var e=r.data.processor.toView(t),n=r.data.toModel(e);r.model.insertContent(n)},window.editor=r,n.CKEDITOR[t]=r,i=90*$("#"+t).prop("rows"),o="ckeditor-".concat(t,"-inline"),$(r.ui.view.editable.element).addClass(o).after("\n                    <style>\n                        .ck-editor__editable_inline {\n                            min-height: ".concat(i-100,"px;\n                            max-height: ").concat(i+100,"px;\n                        }\n                    </style>\n                ")),r.model.document.on("change:data",(function(){clearTimeout(l),l=setTimeout((function(){r.updateSourceElement()}),150)})),r.commands._commands.get("mediaEmbed").execute=function(t){r.execute("shortcode",'[media url="'.concat(t,'"][/media]'))},e.next=10,n.ckEditorInitialUsing(r);case 10:return e.next=12,n.ckFinderInitial(r,t);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.error(t)}))}},{key:"uploadImageFromEditor",value:function(t,e){var n=new FormData;"function"==typeof t.blob?n.append("upload",t.blob(),t.filename()):n.append("upload",t),$httpClient.make().postForm(RV_MEDIA_URL.media_upload_from_editor,n).then((function(t){var n=t.data;n.uploaded&&e(n.url)}))}},{key:"tinyMceConfigUsing",value:function(t){this.tinyMceConfigCallbacks.push(t)}},{key:"tinyMceInitialUsing",value:function(t){this.tinyMceInitialCallbacks.push(t)}},{key:"tinyMceConfig",value:function(t){var e,n=u(this.tinyMceConfigCallbacks);try{for(n.s();!(e=n.n()).done;)t=(0,e.value)(t)}catch(t){n.e(t)}finally{n.f()}return t}},{key:"tinyMceInitial",value:(d=c(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e);case 1:case"end":return t.stop()}}),t)}))),function(t){return d.apply(this,arguments)})},{key:"initTinyMce",value:(s=c(a().mark((function t(e){var n,r,i=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={menubar:!0,selector:"#".concat(e),min_height:110*$("#".concat(e)).prop("rows"),resize:"vertical",plugins:"code autolink advlist visualchars link image media table charmap hr pagebreak nonbreaking anchor insertdatetime lists wordcount imagetools visualblocks",extended_valid_elements:"input[id|name|value|type|class|style|required|placeholder|autocomplete|onclick]",toolbar:"formatselect | bold italic strikethrough forecolor backcolor | link image table | alignleft aligncenter alignright alignjustify  | numlist bullist indent  |  visualblocks code",convert_urls:!1,image_caption:!0,image_advtab:!0,image_title:!0,placeholder:"",contextmenu:"link image inserttable | cell row column deletetable",images_upload_url:RV_MEDIA_URL.media_upload_from_editor,automatic_uploads:!0,block_unsupported_drop:!1,file_picker_types:"file image media",images_upload_handler:this.uploadImageFromEditor.bind(this),file_picker_callback:function(t){$('<input type="file" accept="image/*" />').click().on("change",(function(e){i.uploadImageFromEditor(e.target.files[0],t)}))}},"dark"===localStorage.getItem("themeMode")&&(n.skin="oxide-dark",n.content_css="dark"),n=this.tinyMceConfig(n),r=tinymce.init(n),t.next=6,this.tinyMceInitial(r);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return s.apply(this,arguments)})},{key:"initEditor",value:function(t,e,n){if(!t.length)return!1;var r=this;switch(n){case"ckeditor":$.each(t,(function(t,n){r.initCkEditor($(n).prop("id"),e)}));break;case"tinymce":$.each(t,(function(t,e){r.initTinyMce($(e).prop("id"))}))}}},{key:"init",value:function(){var t=this,e=$(document).find(".editor-ckeditor"),n=$(document).find(".editor-tinymce"),r=this;return e.length>0&&r.initEditor(e,{},"ckeditor"),n.length>0&&r.initEditor(n,{},"tinymce"),$(document).off("click",".show-hide-editor-btn").on("click",".show-hide-editor-btn",(function(e){e.preventDefault();var n=$(e.currentTarget).data("result"),i=$("#"+n);if(i.hasClass("editor-ckeditor")){var o=$(".editor-action-item");t.CKEDITOR[n]&&void 0!==t.CKEDITOR[n]?(t.CKEDITOR[n].destroy(),t.CKEDITOR[n]=null,o.not(".action-show-hide-editor").hide()):(r.initCkEditor(n,{},"ckeditor"),o.not(".action-show-hide-editor").show())}else i.hasClass("editor-tinymce")&&tinymce.execCommand("mceToggleEditor",!1,n)})),this}}],r&&f(e.prototype,r),l&&f(e,l),Object.defineProperty(e,"prototype",{writable:!1}),t}();$((function(){window.EDITOR=(new h).init(),window.EditorManagement=window.EditorManagement||h,$(document).on("shown.bs.modal",(function(){window.EDITOR.init()}))}))})();