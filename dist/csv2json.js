/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/papaparse/papaparse.min.js"
/*!*************************************************!*\
  !*** ./node_modules/papaparse/papaparse.min.js ***!
  \*************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* @license
Papa Parse
v5.1.1
https://github.com/mholt/PapaParse
License: MIT
*/
!function(e,t){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (t),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):0}(this,function s(){"use strict";var f="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==f?f:{};var n=!f.document&&!!f.postMessage,o=n&&/blob:/i.test((f.location||{}).protocol),a={},h=0,b={parse:function(e,t){var i=(t=t||{}).dynamicTyping||!1;q(i)&&(t.dynamicTypingFunction=i,i={});if(t.dynamicTyping=i,t.transform=!!q(t.transform)&&t.transform,t.worker&&b.WORKERS_SUPPORTED){var r=function(){if(!b.WORKERS_SUPPORTED)return!1;var e=(i=f.URL||f.webkitURL||null,r=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",r,")();"],{type:"text/javascript"})))),t=new f.Worker(e);var i,r;return t.onmessage=m,t.id=h++,a[t.id]=t}();return r.userStep=t.step,r.userChunk=t.chunk,r.userComplete=t.complete,r.userError=t.error,t.step=q(t.step),t.chunk=q(t.chunk),t.complete=q(t.complete),t.error=q(t.error),delete t.worker,void r.postMessage({input:e,config:t,workerId:r.id})}var n=null;b.NODE_STREAM_INPUT,"string"==typeof e?n=t.download?new l(t):new p(t):!0===e.readable&&q(e.read)&&q(e.on)?n=new g(t):(f.File&&e instanceof File||e instanceof Object)&&(n=new c(t));return n.stream(e)},unparse:function(e,t){var n=!1,m=!0,_=",",v="\r\n",s='"',a=s+s,i=!1,r=null;!function(){if("object"!=typeof t)return;"string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter(function(e){return-1!==t.delimiter.indexOf(e)}).length||(_=t.delimiter);("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes);"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines);"string"==typeof t.newline&&(v=t.newline);"string"==typeof t.quoteChar&&(s=t.quoteChar);"boolean"==typeof t.header&&(m=t.header);if(Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");r=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s)}();var o=new RegExp(U(s),"g");"string"==typeof e&&(e=JSON.parse(e));if(Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(r||h(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:h(e.data[0])),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function h(e){if("object"!=typeof e)return[];var t=[];for(var i in e)t.push(i);return t}function u(e,t,i){var r="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var n=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(n&&m){for(var a=0;a<e.length;a++)0<a&&(r+=_),r+=y(e[a],a);0<t.length&&(r+=v)}for(var o=0;o<t.length;o++){var h=n?e.length:t[o].length,u=!1,f=n?0===Object.keys(t[o]).length:0===t[o].length;if(i&&!n&&(u="greedy"===i?""===t[o].join("").trim():1===t[o].length&&0===t[o][0].length),"greedy"===i&&n){for(var d=[],l=0;l<h;l++){var c=s?e[l]:l;d.push(t[o][c])}u=""===d.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!f&&(r+=_);var g=n&&s?e[p]:p;r+=y(t[o][g],p)}o<t.length-1&&(!i||0<h&&!f)&&(r+=v)}}return r}function y(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=e.toString().replace(o,a),r="boolean"==typeof n&&n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(i,b.BAD_DELIMITERS)||-1<i.indexOf(_)||" "===i.charAt(0)||" "===i.charAt(i.length-1);return r?s+i+s:i}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!n&&!!f.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=E,b.ParserHandle=i,b.NetworkStreamer=l,b.FileStreamer=c,b.StringStreamer=p,b.ReadableStreamStreamer=g,f.jQuery){var d=f.jQuery;d.fn.parse=function(o){var i=o.config||{},h=[];return this.each(function(e){if(!("INPUT"===d(this).prop("tagName").toUpperCase()&&"file"===d(this).attr("type").toLowerCase()&&f.FileReader)||!this.files||0===this.files.length)return!0;for(var t=0;t<this.files.length;t++)h.push({file:this.files[t],inputElem:this,instanceConfig:d.extend({},i)})}),e(),this;function e(){if(0!==h.length){var e,t,i,r,n=h[0];if(q(o.before)){var s=o.before(n.file,n.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",t=n.file,i=n.inputElem,r=s.reason,void(q(o.error)&&o.error({name:e},t,i,r));if("skip"===s.action)return void u();"object"==typeof s.config&&(n.instanceConfig=d.extend(n.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=n.instanceConfig.complete;n.instanceConfig.complete=function(e){q(a)&&a(e,n.file,n.inputElem),u()},b.parse(n.file,n.instanceConfig)}else q(o.complete)&&o.complete()}function u(){h.splice(0,1),e()}}}function u(e){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=w(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null);this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,e),this.parseChunk=function(e,t){if(this.isFirstChunk&&q(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(e);void 0!==i&&(e=i)}this.isFirstChunk=!1,this._halted=!1;var r=this._partialLine+e;this._partialLine="";var n=this._handle.parse(r,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=n.meta.cursor;this._finished||(this._partialLine=r.substring(s-this._baseIndex),this._baseIndex=s),n&&n.data&&(this._rowCount+=n.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(o)f.postMessage({results:n,workerId:b.WORKER_ID,finished:a});else if(q(this._config.chunk)&&!t){if(this._config.chunk(n,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);n=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(n.data),this._completeResults.errors=this._completeResults.errors.concat(n.errors),this._completeResults.meta=n.meta),this._completed||!a||!q(this._config.complete)||n&&n.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||n&&n.meta.paused||this._nextChunk(),n}this._halted=!0},this._sendError=function(e){q(this._config.error)?this._config.error(e):o&&this._config.error&&f.postMessage({workerId:b.WORKER_ID,error:e,finished:!1})}}function l(e){var r;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=n?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(r=new XMLHttpRequest,this._config.withCredentials&&(r.withCredentials=this._config.withCredentials),n||(r.onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)),r.open("GET",this._input,!n),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var t in e)r.setRequestHeader(t,e[t])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;r.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{r.send()}catch(e){this._chunkError(e.message)}n&&0===r.status&&this._chunkError()}},this._chunkLoaded=function(){4===r.readyState&&(r.status<200||400<=r.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:r.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");if(null===t)return-1;return parseInt(t.substring(t.lastIndexOf("/")+1))}(r),this.parseChunk(r.responseText)))},this._chunkError=function(e){var t=r.statusText||e;this._sendError(new Error(t))}}function c(e){var r,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((r=new FileReader).onload=y(this._chunkLoaded,this),r.onerror=y(this._chunkError,this)):r=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var t=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,t)}var i=r.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(r.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,r=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y(function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}},this),this._streamError=y(function(e){this._streamCleanUp(),this._sendError(e)},this),this._streamEnd=y(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=y(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function i(_){var a,o,h,r=Math.pow(2,53),n=-r,s=/^\s*-?(\d*\.?\d+|\d+\.?\d*)(e[-+]?\d+)?\s*$/i,u=/(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/,t=this,i=0,f=0,d=!1,e=!1,l=[],c={data:[],errors:[],meta:{}};if(q(_.step)){var p=_.step;_.step=function(e){if(c=e,m())g();else{if(g(),0===c.data.length)return;i+=e.data.length,_.preview&&i>_.preview?o.abort():(c.data=c.data[0],p(c,t))}}}function v(e){return"greedy"===_.skipEmptyLines?""===e.join("").trim():1===e.length&&0===e[0].length}function g(){if(c&&h&&(k("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),h=!1),_.skipEmptyLines)for(var e=0;e<c.data.length;e++)v(c.data[e])&&c.data.splice(e--,1);return m()&&function(){if(!c)return;function e(e){q(_.transformHeader)&&(e=_.transformHeader(e)),l.push(e)}if(Array.isArray(c.data[0])){for(var t=0;m()&&t<c.data.length;t++)c.data[t].forEach(e);c.data.splice(0,1)}else c.data.forEach(e)}(),function(){if(!c||!_.header&&!_.dynamicTyping&&!_.transform)return c;function e(e,t){var i,r=_.header?{}:[];for(i=0;i<e.length;i++){var n=i,s=e[i];_.header&&(n=i>=l.length?"__parsed_extra":l[i]),_.transform&&(s=_.transform(s,n)),s=y(n,s),"__parsed_extra"===n?(r[n]=r[n]||[],r[n].push(s)):r[n]=s}return _.header&&(i>l.length?k("FieldMismatch","TooManyFields","Too many fields: expected "+l.length+" fields but parsed "+i,f+t):i<l.length&&k("FieldMismatch","TooFewFields","Too few fields: expected "+l.length+" fields but parsed "+i,f+t)),r}var t=1;!c.data.length||Array.isArray(c.data[0])?(c.data=c.data.map(e),t=c.data.length):c.data=e(c.data,0);_.header&&c.meta&&(c.meta.fields=l);return f+=t,c}()}function m(){return _.header&&0===l.length}function y(e,t){return i=e,_.dynamicTypingFunction&&void 0===_.dynamicTyping[i]&&(_.dynamicTyping[i]=_.dynamicTypingFunction(i)),!0===(_.dynamicTyping[i]||_.dynamicTyping)?"true"===t||"TRUE"===t||"false"!==t&&"FALSE"!==t&&(function(e){if(s.test(e)){var t=parseFloat(e);if(n<t&&t<r)return!0}return!1}(t)?parseFloat(t):u.test(t)?new Date(t):""===t?null:t):t;// removed by dead control flow
 var i; }function k(e,t,i,r){var n={type:e,code:t,message:i};void 0!==r&&(n.row=r),c.errors.push(n)}this.parse=function(e,t,i){var r=_.quoteChar||'"';if(_.newline||(_.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(U(t)+"([^]*?)"+U(t),"gm"),r=(e=e.replace(i,"")).split("\r"),n=e.split("\n"),s=1<n.length&&n[0].length<r[0].length;if(1===r.length||s)return"\n";for(var a=0,o=0;o<r.length;o++)"\n"===r[o][0]&&a++;return a>=r.length/2?"\r\n":"\r"}(e,r)),h=!1,_.delimiter)q(_.delimiter)&&(_.delimiter=_.delimiter(e),c.meta.delimiter=_.delimiter);else{var n=function(e,t,i,r,n){var s,a,o,h;n=n||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<n.length;u++){var f=n[u],d=0,l=0,c=0;o=void 0;for(var p=new E({comments:r,delimiter:f,newline:t,preview:10}).parse(e),g=0;g<p.data.length;g++)if(i&&v(p.data[g]))c++;else{var m=p.data[g].length;l+=m,void 0!==o?0<m&&(d+=Math.abs(m-o),o=m):o=m}0<p.data.length&&(l/=p.data.length-c),(void 0===a||d<=a)&&(void 0===h||h<l)&&1.99<l&&(a=d,s=f,h=l)}return{successful:!!(_.delimiter=s),bestDelimiter:s}}(e,_.newline,_.skipEmptyLines,_.comments,_.delimitersToGuess);n.successful?_.delimiter=n.bestDelimiter:(h=!0,_.delimiter=b.DefaultDelimiter),c.meta.delimiter=_.delimiter}var s=w(_);return _.preview&&_.header&&s.preview++,a=e,o=new E(s),c=o.parse(a,t,i),g(),d?{meta:{paused:!0}}:c||{meta:{paused:!1}}},this.paused=function(){return d},this.pause=function(){d=!0,o.abort(),a=q(_.chunk)?"":a.substring(o.getCharIndex())},this.resume=function(){t.streamer._halted?(d=!1,t.streamer.parseChunk(a,!0)):setTimeout(this.resume,3)},this.aborted=function(){return e},this.abort=function(){e=!0,o.abort(),c.meta.aborted=!0,q(_.complete)&&_.complete(c),a=""}}function U(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function E(e){var O,D=(e=e||{}).delimiter,I=e.newline,T=e.comments,A=e.step,L=e.preview,F=e.fastMode,z=O=void 0===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(z=e.escapeChar),("string"!=typeof D||-1<b.BAD_DELIMITERS.indexOf(D))&&(D=","),T===D)throw new Error("Comment character same as delimiter");!0===T?T="#":("string"!=typeof T||-1<b.BAD_DELIMITERS.indexOf(T))&&(T=!1),"\n"!==I&&"\r"!==I&&"\r\n"!==I&&(I="\n");var M=0,j=!1;this.parse=function(a,t,i){if("string"!=typeof a)throw new Error("Input must be a string");var r=a.length,e=D.length,n=I.length,s=T.length,o=q(A),h=[],u=[],f=[],d=M=0;if(!a)return R();if(F||!1!==F&&-1===a.indexOf(O)){for(var l=a.split(I),c=0;c<l.length;c++){if(f=l[c],M+=f.length,c!==l.length-1)M+=I.length;else if(i)return R();if(!T||f.substring(0,s)!==T){if(o){if(h=[],b(f.split(D)),S(),j)return R()}else b(f.split(D));if(L&&L<=c)return h=h.slice(0,L),R(!0)}}return R()}for(var p=a.indexOf(D,M),g=a.indexOf(I,M),m=new RegExp(U(z)+U(O),"g"),_=a.indexOf(O,M);;)if(a[M]!==O)if(T&&0===f.length&&a.substring(M,M+s)===T){if(-1===g)return R();M=g+n,g=a.indexOf(I,M),p=a.indexOf(D,M)}else{if(-1!==p&&(p<g||-1===g)){if(!(p<_)){f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}var v=x(p,_,g);if(v&&void 0!==v.nextDelim){p=v.nextDelim,_=v.quoteSearch,f.push(a.substring(M,p)),M=p+e,p=a.indexOf(D,M);continue}}if(-1===g)break;if(f.push(a.substring(M,g)),C(g+n),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0)}else for(_=M,M++;;){if(-1===(_=a.indexOf(O,_+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:h.length,index:M}),w();if(_===r-1)return w(a.substring(M,_).replace(m,O));if(O!==z||a[_+1]!==z){if(O===z||0===_||a[_-1]!==z){-1!==p&&p<_+1&&(p=a.indexOf(D,_+1)),-1!==g&&g<_+1&&(g=a.indexOf(I,_+1));var y=E(-1===g?p:Math.min(p,g));if(a[_+1+y]===D){f.push(a.substring(M,_).replace(m,O)),a[M=_+1+y+e]!==O&&(_=a.indexOf(O,M)),p=a.indexOf(D,M),g=a.indexOf(I,M);break}var k=E(g);if(a.substring(_+1+k,_+1+k+n)===I){if(f.push(a.substring(M,_).replace(m,O)),C(_+1+k+n),p=a.indexOf(D,M),_=a.indexOf(O,M),o&&(S(),j))return R();if(L&&h.length>=L)return R(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:h.length,index:M}),_++}}else _++}return w();function b(e){h.push(e),d=M}function E(e){var t=0;if(-1!==e){var i=a.substring(_+1,e);i&&""===i.trim()&&(t=i.length)}return t}function w(e){return i||(void 0===e&&(e=a.substring(M)),f.push(e),M=r,b(f),o&&S()),R()}function C(e){M=e,b(f),f=[],g=a.indexOf(I,M)}function R(e){return{data:h,errors:u,meta:{delimiter:D,linebreak:I,aborted:j,truncated:!!e,cursor:d+(t||0)}}}function S(){A(R()),h=[],u=[]}function x(e,t,i){var r={nextDelim:void 0,quoteSearch:void 0},n=a.indexOf(O,t+1);if(t<e&&e<n&&(n<i||-1===i)){var s=a.indexOf(D,n);if(-1===s)return r;n<s&&(n=a.indexOf(O,n+1)),r=x(s,n,i)}else r={nextDelim:e,quoteSearch:t};return r}},this.abort=function(){j=!0},this.getCharIndex=function(){return M}}function m(e){var t=e.data,i=a[t.workerId],r=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var n={abort:function(){r=!0,_(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:v,resume:v};if(q(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},n),!r);s++);delete t.results}else q(i.userChunk)&&(i.userChunk(t.results,n,t.file),delete t.results)}t.finished&&!r&&_(t.workerId,t.results)}function _(e,t){var i=a[e];q(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function v(){throw new Error("Not implemented.")}function w(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=w(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function q(e){return"function"==typeof e}return o&&(f.onmessage=function(e){var t=e.data;void 0===b.WORKER_ID&&t&&(b.WORKER_ID=t.workerId);if("string"==typeof t.input)f.postMessage({workerId:b.WORKER_ID,results:b.parse(t.input,t.config),finished:!0});else if(f.File&&t.input instanceof File||t.input instanceof Object){var i=b.parse(t.input,t.config);i&&f.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(l.prototype=Object.create(u.prototype)).constructor=l,(c.prototype=Object.create(u.prototype)).constructor=c,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b});

/***/ },

/***/ "./src/common/line.ts"
/*!****************************!*\
  !*** ./src/common/line.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Line: () => (/* binding */ Line),
/* harmony export */   SubLine: () => (/* binding */ SubLine)
/* harmony export */ });
/* harmony import */ var _station__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./station */ "./src/common/station.ts");

class Line {
    constructor(id, stations, xPos) {
        this.id = id;
        this.stations = stations;
        this.xPos = xPos;
    }
    toJSON() {
        return {
            'id': this.id,
            'stations': this.stations,
            'xPos': this.xPos
        };
    }
    hasStation(stationId) {
        return this.stations.some(station => station.id == stationId);
    }
    findStation(stationId) {
        return this.stations.find(station => station.id == stationId);
    }
    findStationIdx(stationId) {
        return this.stations.findIndex(station => station.id == stationId);
    }
}
(function (Line) {
    function fromObj(line) {
        const stations = line.stations.map(st => new _station__WEBPACK_IMPORTED_MODULE_0__.Station(st));
        return new Line(line.id, stations, line.xPos);
    }
    Line.fromObj = fromObj;
})(Line || (Line = {}));
class SubLine {
    constructor(line, main) {
        this.line = line;
        const mainStations = main.stations.map(st => st.id);
        const tranfer = line.stations.find(st => mainStations.includes(st.id));
        if (tranfer == undefined)
            throw new Error(`Line id=${line.id} does not exists transfer station.`);
        this.transfer = tranfer;
    }
    id() {
        return this.line.id;
    }
    stations() {
        return this.line.stations;
    }
    xPos() {
        return this.line.xPos;
    }
    singleLineStations() {
        return this.stations().filter(st => st.id != this.transfer.id);
    }
    transferIdx() {
        return this.stations().findIndex(st => st.id == this.transfer.id);
    }
}


/***/ },

/***/ "./src/common/station.ts"
/*!*******************************!*\
  !*** ./src/common/station.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Station: () => (/* binding */ Station),
/* harmony export */   StationRank: () => (/* binding */ StationRank)
/* harmony export */ });
class Station {
    constructor(station) {
        this.id = station.id;
        this.name = station.name;
        this.rank = StationRank.parse(station.rank);
    }
}
var StationRank;
(function (StationRank) {
    function isRank(x) {
        return 1 <= x && x <= 5;
    }
    StationRank.isRank = isRank;
    function parse(x) {
        return x ? (StationRank.isRank(x) ? x : null) : null;
    }
    StationRank.parse = parse;
})(StationRank || (StationRank = {}));


/***/ },

/***/ "./src/csv2json/diagramAttrs.ts"
/*!**************************************!*\
  !*** ./src/csv2json/diagramAttrs.ts ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DiagramAttrs: () => (/* binding */ DiagramAttrs)
/* harmony export */ });
class DiagramAttrs {
    constructor(title, author, company, region) {
        this.title = title;
        this.author = author;
        this.company = company;
        this.region = region;
    }
    toJSON() {
        return {
            'title': this.title,
            'author': this.author,
            'company': this.company,
            'region': this.region
        };
    }
}


/***/ },

/***/ "./src/csv2json/firstParser.ts"
/*!*************************************!*\
  !*** ./src/csv2json/firstParser.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirstParser: () => (/* binding */ FirstParser)
/* harmony export */ });
/* harmony import */ var _lines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lines */ "./src/csv2json/lines.ts");
/* harmony import */ var _trainStops__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trainStops */ "./src/csv2json/trainStops.ts");
/* harmony import */ var _common_line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/line */ "./src/common/line.ts");
/* harmony import */ var _common_station__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/station */ "./src/common/station.ts");




class FirstParser {
    constructor(rows, attrs) {
        this.forwardTransfers = new Set();
        this.rows = rows;
        this.attrs = attrs;
        this.hasName = rows[2][0] == 'name';
        this.hasRank = !isNaN(parseInt(rows[this.headerCount()][1]));
    }
    parse() {
        const lines = this.parseStations();
        lines.subs.forEach(sub => this.addForwardTransfers(lines.main, sub));
        const trains = this.parseTrains(lines);
        return lines.toJSON(trains, this.attrs);
    }
    addForwardTransfers(main, sub) {
        const mainStations = main.stations.map(st => st.id);
        const idx = sub.stations.findIndex(st => mainStations.indexOf(st.id) != -1);
        sub.stations.slice(0, idx).forEach(st => this.forwardTransfers.add(st.id));
    }
    parseStations() {
        const stationRows = this.rows.slice(this.headerCount());
        const rawLines = [{ xPos: 0, stations: [] }];
        stationRows.forEach(row => {
            const first = parseInt(row[0]); // ID or xPos
            const [name, rank] = this.hasRank ? [row[2], parseInt(row[1])] : [row[1], null];
            if (name)
                rawLines[rawLines.length - 1].stations.push({ id: first, name: name, rank: _common_station__WEBPACK_IMPORTED_MODULE_3__.StationRank.parse(rank) });
            else
                rawLines.push({ xPos: first || 0, stations: [] });
        });
        const lines = rawLines.map((line, idx) => new _common_line__WEBPACK_IMPORTED_MODULE_2__.Line(idx + 1, line.stations, line.xPos));
        return new _lines__WEBPACK_IMPORTED_MODULE_0__.Lines(lines[0], lines.slice(1));
    }
    parseTrains(lines) {
        const hCount = this.statrionHeaderCount();
        const speeds = this.rows[0].slice(hCount);
        const counts = this.rows[1].slice(hCount);
        const names = this.hasName ? this.rows[2].slice(hCount) : null;
        const train_stops = [];
        speeds.forEach(_ => train_stops.push(new _trainStops__WEBPACK_IMPORTED_MODULE_1__.TrainStops(lines, [])));
        this.rows.slice(this.headerCount()).forEach(row => {
            if (row[0]) {
                const stationId = parseInt(row[0]);
                const stops = row.slice(hCount);
                speeds.forEach((speed, idx) => {
                    if (stops[idx]) {
                        train_stops[idx].push(stationId);
                    }
                });
            }
        });
        return train_stops.map((stops, idx) => {
            return new _lines__WEBPACK_IMPORTED_MODULE_0__.Train(stops, parseInt(speeds[idx]), parseInt(counts[idx]), names?.[idx]);
        });
    }
    headerCount() {
        return this.hasName ? 3 : 2;
    }
    statrionHeaderCount() {
        return this.hasRank ? 3 : 2;
    }
}


/***/ },

/***/ "./src/csv2json/lines.ts"
/*!*******************************!*\
  !*** ./src/csv2json/lines.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Lines: () => (/* binding */ Lines),
/* harmony export */   Order: () => (/* binding */ Order),
/* harmony export */   Train: () => (/* binding */ Train)
/* harmony export */ });
class Lines {
    constructor(main, subs) {
        this.main = main;
        this.subs = subs;
    }
    lines() {
        return [this.main].concat(this.subs);
    }
    toJSON(trains, attrs) {
        return {
            'mainLine': this.main.toJSON(),
            'subLines': this.subs.map(sub => sub.toJSON()),
            'trains': trains.map(train => train.toJSON()),
            ...attrs.toJSON()
        };
    }
    findLineFromStation(station) {
        return this.lines().find(line => line.hasStation(station));
    }
    findSub(lineId) {
        return this.subs.find(line => line.id == lineId);
    }
    branchStation(lineId) {
        const line = this.findSub(lineId);
        if (line == undefined)
            return undefined;
        const mainStations = this.main.stations.map(st => st.id);
        return mainStations.find(st => st == line.stations[0].id) ||
            mainStations.find(st => st == line.stations[line.stations.length - 1].id);
    }
    compareStation(x, y) {
        const xLine = this.findLineFromStation(x);
        const yLine = this.findLineFromStation(y);
        if (xLine == undefined)
            this.throwNotFoundStation(x);
        if (yLine == undefined)
            this.throwNotFoundStation(y);
        if (xLine.id == yLine.id) {
            const comp = xLine.findStationIdx(y) - xLine.findStationIdx(x);
            if (comp < 0)
                return Order.Desc;
            if (comp == 0)
                return Order.Equal;
            return Order.Asc;
        }
        else {
            const [subLine, mainStation] = xLine.id == this.main.id ? [yLine, x] : [xLine, y];
            const branch = this.branchStation(subLine.id);
            const subOrder = branch == subLine.stations[0].id ? Order.Desc : Order.Asc;
            const mainOrder = Order.number(mainStation, branch);
            if (subOrder == mainOrder)
                return null;
            if (mainStation == x)
                return Order.reverse(subOrder);
            return subOrder;
        }
    }
    throwNotFoundStation(id) {
        throw new Error(`Not found station. id=${id}`);
    }
}
class Train {
    constructor(stops, speed, count, name) {
        this.stops = stops;
        this.speed = speed;
        this.count = count;
        this.name = name;
    }
    toJSON() {
        const stops = this.stops.toJSON();
        return {
            'stations': stops.stations,
            'branches': 0 < stops.branches.length ? stops.branches : undefined,
            'speed': this.speed,
            'count': this.count,
            'name': this.name
        };
    }
}
var Order;
(function (Order) {
    Order[Order["Desc"] = -1] = "Desc";
    Order[Order["Equal"] = 0] = "Equal";
    Order[Order["Asc"] = 1] = "Asc";
})(Order || (Order = {}));
(function (Order) {
    function reverse(order) {
        switch (order) {
            case Order.Asc: return Order.Desc;
            case Order.Equal: return Order.Equal;
            case Order.Desc: return Order.Asc;
        }
    }
    Order.reverse = reverse;
    function number(x, y) {
        if (x < y)
            return Order.Asc;
        if (x == y)
            return Order.Equal;
        return Order.Desc;
    }
    Order.number = number;
})(Order || (Order = {}));


/***/ },

/***/ "./src/csv2json/trainStops.ts"
/*!************************************!*\
  !*** ./src/csv2json/trainStops.ts ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TrainStops: () => (/* binding */ TrainStops)
/* harmony export */ });
/* harmony import */ var _lines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lines */ "./src/csv2json/lines.ts");

class TrainStops {
    constructor(lines, stops) {
        this.lines = lines;
        this.stops = stops;
    }
    push(station) {
        const lastBranch = 0 < this.stops.length ? this.stops[this.stops.length - 1] : null;
        if (lastBranch == null) {
            this.stops.push([station]);
        }
        else {
            const lastStop = lastBranch[lastBranch.length - 1];
            switch (this.lines.compareStation(lastStop, station)) {
                case _lines__WEBPACK_IMPORTED_MODULE_0__.Order.Asc:
                    lastBranch.push(station);
                    break;
                case _lines__WEBPACK_IMPORTED_MODULE_0__.Order.Equal:
                    break;
                default:
                    this.stops.push([station]);
            }
        }
    }
    toJSON() {
        return {
            'stations': this.stops[0],
            'branches': this.stops.slice(1)
        };
    }
}


/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/csv2json.ts ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! papaparse */ "./node_modules/papaparse/papaparse.min.js");
/* harmony import */ var papaparse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(papaparse__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _csv2json_firstParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./csv2json/firstParser */ "./src/csv2json/firstParser.ts");
/* harmony import */ var _csv2json_diagramAttrs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./csv2json/diagramAttrs */ "./src/csv2json/diagramAttrs.ts");



const OPTIONS = { headers: { "Content-Type": "text/csv" } };
const urlForm = document.getElementById('url_form');
urlForm && urlForm.addEventListener('submit', saveJsonEvent);
function saveJsonEvent(event) {
    event.stopPropagation();
    event.preventDefault();
    saveJSON();
}
function getValueFromElementId(id) {
    const input = document.getElementById(id);
    return input.value;
}
function saveJSON() {
    const url = getValueFromElementId('url');
    const title = getValueFromElementId('title');
    const author = getValueFromElementId('author');
    const company = getValueFromElementId('company');
    const region = getValueFromElementId('region');
    const attrs = new _csv2json_diagramAttrs__WEBPACK_IMPORTED_MODULE_2__.DiagramAttrs(title, author, company, region);
    fetch(url, OPTIONS).then(response => {
        response.text().then(text => {
            const records = papaparse__WEBPACK_IMPORTED_MODULE_0__.parse(text).data;
            const first = new _csv2json_firstParser__WEBPACK_IMPORTED_MODULE_1__.FirstParser(records, attrs);
            const result = JSON.stringify(first.parse(), null, 2);
            const a = document.createElement('a');
            const file = new Blob([result], { type: 'application/json' });
            a.href = URL.createObjectURL(file);
            a.download = 'file.json';
            a.click();
        });
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLFFBQVEsR0FBRyxXQUFXLENBQUM7WUFDekIsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcGFwYXBhcnNlL3BhcGFwYXJzZS5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9saW5lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vc3RhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2Mmpzb24vZGlhZ3JhbUF0dHJzLnRzIiwid2VicGFjazovLy8uL3NyYy9jc3YyanNvbi9maXJzdFBhcnNlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY3N2Mmpzb24vbGluZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NzdjJqc29uL3RyYWluU3RvcHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL3NyYy9jc3YyanNvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAbGljZW5zZVxuUGFwYSBQYXJzZVxudjUuMS4xXG5odHRwczovL2dpdGh1Yi5jb20vbWhvbHQvUGFwYVBhcnNlXG5MaWNlbnNlOiBNSVRcbiovXG4hZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoKTplLlBhcGE9dCgpfSh0aGlzLGZ1bmN0aW9uIHMoKXtcInVzZSBzdHJpY3RcIjt2YXIgZj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnZvaWQgMCE9PWY/Zjp7fTt2YXIgbj0hZi5kb2N1bWVudCYmISFmLnBvc3RNZXNzYWdlLG89biYmL2Jsb2I6L2kudGVzdCgoZi5sb2NhdGlvbnx8e30pLnByb3RvY29sKSxhPXt9LGg9MCxiPXtwYXJzZTpmdW5jdGlvbihlLHQpe3ZhciBpPSh0PXR8fHt9KS5keW5hbWljVHlwaW5nfHwhMTtxKGkpJiYodC5keW5hbWljVHlwaW5nRnVuY3Rpb249aSxpPXt9KTtpZih0LmR5bmFtaWNUeXBpbmc9aSx0LnRyYW5zZm9ybT0hIXEodC50cmFuc2Zvcm0pJiZ0LnRyYW5zZm9ybSx0LndvcmtlciYmYi5XT1JLRVJTX1NVUFBPUlRFRCl7dmFyIHI9ZnVuY3Rpb24oKXtpZighYi5XT1JLRVJTX1NVUFBPUlRFRClyZXR1cm4hMTt2YXIgZT0oaT1mLlVSTHx8Zi53ZWJraXRVUkx8fG51bGwscj1zLnRvU3RyaW5nKCksYi5CTE9CX1VSTHx8KGIuQkxPQl9VUkw9aS5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1wiKFwiLHIsXCIpKCk7XCJdLHt0eXBlOlwidGV4dC9qYXZhc2NyaXB0XCJ9KSkpKSx0PW5ldyBmLldvcmtlcihlKTt2YXIgaSxyO3JldHVybiB0Lm9ubWVzc2FnZT1tLHQuaWQ9aCsrLGFbdC5pZF09dH0oKTtyZXR1cm4gci51c2VyU3RlcD10LnN0ZXAsci51c2VyQ2h1bms9dC5jaHVuayxyLnVzZXJDb21wbGV0ZT10LmNvbXBsZXRlLHIudXNlckVycm9yPXQuZXJyb3IsdC5zdGVwPXEodC5zdGVwKSx0LmNodW5rPXEodC5jaHVuayksdC5jb21wbGV0ZT1xKHQuY29tcGxldGUpLHQuZXJyb3I9cSh0LmVycm9yKSxkZWxldGUgdC53b3JrZXIsdm9pZCByLnBvc3RNZXNzYWdlKHtpbnB1dDplLGNvbmZpZzp0LHdvcmtlcklkOnIuaWR9KX12YXIgbj1udWxsO2IuTk9ERV9TVFJFQU1fSU5QVVQsXCJzdHJpbmdcIj09dHlwZW9mIGU/bj10LmRvd25sb2FkP25ldyBsKHQpOm5ldyBwKHQpOiEwPT09ZS5yZWFkYWJsZSYmcShlLnJlYWQpJiZxKGUub24pP249bmV3IGcodCk6KGYuRmlsZSYmZSBpbnN0YW5jZW9mIEZpbGV8fGUgaW5zdGFuY2VvZiBPYmplY3QpJiYobj1uZXcgYyh0KSk7cmV0dXJuIG4uc3RyZWFtKGUpfSx1bnBhcnNlOmZ1bmN0aW9uKGUsdCl7dmFyIG49ITEsbT0hMCxfPVwiLFwiLHY9XCJcXHJcXG5cIixzPSdcIicsYT1zK3MsaT0hMSxyPW51bGw7IWZ1bmN0aW9uKCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIHQpcmV0dXJuO1wic3RyaW5nXCIhPXR5cGVvZiB0LmRlbGltaXRlcnx8Yi5CQURfREVMSU1JVEVSUy5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuLTEhPT10LmRlbGltaXRlci5pbmRleE9mKGUpfSkubGVuZ3RofHwoXz10LmRlbGltaXRlcik7KFwiYm9vbGVhblwiPT10eXBlb2YgdC5xdW90ZXN8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQucXVvdGVzfHxBcnJheS5pc0FycmF5KHQucXVvdGVzKSkmJihuPXQucXVvdGVzKTtcImJvb2xlYW5cIiE9dHlwZW9mIHQuc2tpcEVtcHR5TGluZXMmJlwic3RyaW5nXCIhPXR5cGVvZiB0LnNraXBFbXB0eUxpbmVzfHwoaT10LnNraXBFbXB0eUxpbmVzKTtcInN0cmluZ1wiPT10eXBlb2YgdC5uZXdsaW5lJiYodj10Lm5ld2xpbmUpO1wic3RyaW5nXCI9PXR5cGVvZiB0LnF1b3RlQ2hhciYmKHM9dC5xdW90ZUNoYXIpO1wiYm9vbGVhblwiPT10eXBlb2YgdC5oZWFkZXImJihtPXQuaGVhZGVyKTtpZihBcnJheS5pc0FycmF5KHQuY29sdW1ucykpe2lmKDA9PT10LmNvbHVtbnMubGVuZ3RoKXRocm93IG5ldyBFcnJvcihcIk9wdGlvbiBjb2x1bW5zIGlzIGVtcHR5XCIpO3I9dC5jb2x1bW5zfXZvaWQgMCE9PXQuZXNjYXBlQ2hhciYmKGE9dC5lc2NhcGVDaGFyK3MpfSgpO3ZhciBvPW5ldyBSZWdFeHAoVShzKSxcImdcIik7XCJzdHJpbmdcIj09dHlwZW9mIGUmJihlPUpTT04ucGFyc2UoZSkpO2lmKEFycmF5LmlzQXJyYXkoZSkpe2lmKCFlLmxlbmd0aHx8QXJyYXkuaXNBcnJheShlWzBdKSlyZXR1cm4gdShudWxsLGUsaSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIGVbMF0pcmV0dXJuIHUocnx8aChlWzBdKSxlLGkpfWVsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGUuZGF0YSYmKGUuZGF0YT1KU09OLnBhcnNlKGUuZGF0YSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhKSYmKGUuZmllbGRzfHwoZS5maWVsZHM9ZS5tZXRhJiZlLm1ldGEuZmllbGRzKSxlLmZpZWxkc3x8KGUuZmllbGRzPUFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKT9lLmZpZWxkczpoKGUuZGF0YVswXSkpLEFycmF5LmlzQXJyYXkoZS5kYXRhWzBdKXx8XCJvYmplY3RcIj09dHlwZW9mIGUuZGF0YVswXXx8KGUuZGF0YT1bZS5kYXRhXSkpLHUoZS5maWVsZHN8fFtdLGUuZGF0YXx8W10saSk7dGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIHNlcmlhbGl6ZSB1bnJlY29nbml6ZWQgaW5wdXRcIik7ZnVuY3Rpb24gaChlKXtpZihcIm9iamVjdFwiIT10eXBlb2YgZSlyZXR1cm5bXTt2YXIgdD1bXTtmb3IodmFyIGkgaW4gZSl0LnB1c2goaSk7cmV0dXJuIHR9ZnVuY3Rpb24gdShlLHQsaSl7dmFyIHI9XCJcIjtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9SlNPTi5wYXJzZShlKSksXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PUpTT04ucGFyc2UodCkpO3ZhciBuPUFycmF5LmlzQXJyYXkoZSkmJjA8ZS5sZW5ndGgscz0hQXJyYXkuaXNBcnJheSh0WzBdKTtpZihuJiZtKXtmb3IodmFyIGE9MDthPGUubGVuZ3RoO2ErKykwPGEmJihyKz1fKSxyKz15KGVbYV0sYSk7MDx0Lmxlbmd0aCYmKHIrPXYpfWZvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgaD1uP2UubGVuZ3RoOnRbb10ubGVuZ3RoLHU9ITEsZj1uPzA9PT1PYmplY3Qua2V5cyh0W29dKS5sZW5ndGg6MD09PXRbb10ubGVuZ3RoO2lmKGkmJiFuJiYodT1cImdyZWVkeVwiPT09aT9cIlwiPT09dFtvXS5qb2luKFwiXCIpLnRyaW0oKToxPT09dFtvXS5sZW5ndGgmJjA9PT10W29dWzBdLmxlbmd0aCksXCJncmVlZHlcIj09PWkmJm4pe2Zvcih2YXIgZD1bXSxsPTA7bDxoO2wrKyl7dmFyIGM9cz9lW2xdOmw7ZC5wdXNoKHRbb11bY10pfXU9XCJcIj09PWQuam9pbihcIlwiKS50cmltKCl9aWYoIXUpe2Zvcih2YXIgcD0wO3A8aDtwKyspezA8cCYmIWYmJihyKz1fKTt2YXIgZz1uJiZzP2VbcF06cDtyKz15KHRbb11bZ10scCl9bzx0Lmxlbmd0aC0xJiYoIWl8fDA8aCYmIWYpJiYocis9dil9fXJldHVybiByfWZ1bmN0aW9uIHkoZSx0KXtpZihudWxsPT1lKXJldHVyblwiXCI7aWYoZS5jb25zdHJ1Y3Rvcj09PURhdGUpcmV0dXJuIEpTT04uc3RyaW5naWZ5KGUpLnNsaWNlKDEsMjUpO3ZhciBpPWUudG9TdHJpbmcoKS5yZXBsYWNlKG8sYSkscj1cImJvb2xlYW5cIj09dHlwZW9mIG4mJm58fFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm4oZSx0KXx8QXJyYXkuaXNBcnJheShuKSYmblt0XXx8ZnVuY3Rpb24oZSx0KXtmb3IodmFyIGk9MDtpPHQubGVuZ3RoO2krKylpZigtMTxlLmluZGV4T2YodFtpXSkpcmV0dXJuITA7cmV0dXJuITF9KGksYi5CQURfREVMSU1JVEVSUyl8fC0xPGkuaW5kZXhPZihfKXx8XCIgXCI9PT1pLmNoYXJBdCgwKXx8XCIgXCI9PT1pLmNoYXJBdChpLmxlbmd0aC0xKTtyZXR1cm4gcj9zK2krczppfX19O2lmKGIuUkVDT1JEX1NFUD1TdHJpbmcuZnJvbUNoYXJDb2RlKDMwKSxiLlVOSVRfU0VQPVN0cmluZy5mcm9tQ2hhckNvZGUoMzEpLGIuQllURV9PUkRFUl9NQVJLPVwiXFx1ZmVmZlwiLGIuQkFEX0RFTElNSVRFUlM9W1wiXFxyXCIsXCJcXG5cIiwnXCInLGIuQllURV9PUkRFUl9NQVJLXSxiLldPUktFUlNfU1VQUE9SVEVEPSFuJiYhIWYuV29ya2VyLGIuTk9ERV9TVFJFQU1fSU5QVVQ9MSxiLkxvY2FsQ2h1bmtTaXplPTEwNDg1NzYwLGIuUmVtb3RlQ2h1bmtTaXplPTUyNDI4ODAsYi5EZWZhdWx0RGVsaW1pdGVyPVwiLFwiLGIuUGFyc2VyPUUsYi5QYXJzZXJIYW5kbGU9aSxiLk5ldHdvcmtTdHJlYW1lcj1sLGIuRmlsZVN0cmVhbWVyPWMsYi5TdHJpbmdTdHJlYW1lcj1wLGIuUmVhZGFibGVTdHJlYW1TdHJlYW1lcj1nLGYualF1ZXJ5KXt2YXIgZD1mLmpRdWVyeTtkLmZuLnBhcnNlPWZ1bmN0aW9uKG8pe3ZhciBpPW8uY29uZmlnfHx7fSxoPVtdO3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oZSl7aWYoIShcIklOUFVUXCI9PT1kKHRoaXMpLnByb3AoXCJ0YWdOYW1lXCIpLnRvVXBwZXJDYXNlKCkmJlwiZmlsZVwiPT09ZCh0aGlzKS5hdHRyKFwidHlwZVwiKS50b0xvd2VyQ2FzZSgpJiZmLkZpbGVSZWFkZXIpfHwhdGhpcy5maWxlc3x8MD09PXRoaXMuZmlsZXMubGVuZ3RoKXJldHVybiEwO2Zvcih2YXIgdD0wO3Q8dGhpcy5maWxlcy5sZW5ndGg7dCsrKWgucHVzaCh7ZmlsZTp0aGlzLmZpbGVzW3RdLGlucHV0RWxlbTp0aGlzLGluc3RhbmNlQ29uZmlnOmQuZXh0ZW5kKHt9LGkpfSl9KSxlKCksdGhpcztmdW5jdGlvbiBlKCl7aWYoMCE9PWgubGVuZ3RoKXt2YXIgZSx0LGkscixuPWhbMF07aWYocShvLmJlZm9yZSkpe3ZhciBzPW8uYmVmb3JlKG4uZmlsZSxuLmlucHV0RWxlbSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHMpe2lmKFwiYWJvcnRcIj09PXMuYWN0aW9uKXJldHVybiBlPVwiQWJvcnRFcnJvclwiLHQ9bi5maWxlLGk9bi5pbnB1dEVsZW0scj1zLnJlYXNvbix2b2lkKHEoby5lcnJvcikmJm8uZXJyb3Ioe25hbWU6ZX0sdCxpLHIpKTtpZihcInNraXBcIj09PXMuYWN0aW9uKXJldHVybiB2b2lkIHUoKTtcIm9iamVjdFwiPT10eXBlb2Ygcy5jb25maWcmJihuLmluc3RhbmNlQ29uZmlnPWQuZXh0ZW5kKG4uaW5zdGFuY2VDb25maWcscy5jb25maWcpKX1lbHNlIGlmKFwic2tpcFwiPT09cylyZXR1cm4gdm9pZCB1KCl9dmFyIGE9bi5pbnN0YW5jZUNvbmZpZy5jb21wbGV0ZTtuLmluc3RhbmNlQ29uZmlnLmNvbXBsZXRlPWZ1bmN0aW9uKGUpe3EoYSkmJmEoZSxuLmZpbGUsbi5pbnB1dEVsZW0pLHUoKX0sYi5wYXJzZShuLmZpbGUsbi5pbnN0YW5jZUNvbmZpZyl9ZWxzZSBxKG8uY29tcGxldGUpJiZvLmNvbXBsZXRlKCl9ZnVuY3Rpb24gdSgpe2guc3BsaWNlKDAsMSksZSgpfX19ZnVuY3Rpb24gdShlKXt0aGlzLl9oYW5kbGU9bnVsbCx0aGlzLl9maW5pc2hlZD0hMSx0aGlzLl9jb21wbGV0ZWQ9ITEsdGhpcy5faGFsdGVkPSExLHRoaXMuX2lucHV0PW51bGwsdGhpcy5fYmFzZUluZGV4PTAsdGhpcy5fcGFydGlhbExpbmU9XCJcIix0aGlzLl9yb3dDb3VudD0wLHRoaXMuX3N0YXJ0PTAsdGhpcy5fbmV4dENodW5rPW51bGwsdGhpcy5pc0ZpcnN0Q2h1bms9ITAsdGhpcy5fY29tcGxldGVSZXN1bHRzPXtkYXRhOltdLGVycm9yczpbXSxtZXRhOnt9fSxmdW5jdGlvbihlKXt2YXIgdD13KGUpO3QuY2h1bmtTaXplPXBhcnNlSW50KHQuY2h1bmtTaXplKSxlLnN0ZXB8fGUuY2h1bmt8fCh0LmNodW5rU2l6ZT1udWxsKTt0aGlzLl9oYW5kbGU9bmV3IGkodCksKHRoaXMuX2hhbmRsZS5zdHJlYW1lcj10aGlzKS5fY29uZmlnPXR9LmNhbGwodGhpcyxlKSx0aGlzLnBhcnNlQ2h1bms9ZnVuY3Rpb24oZSx0KXtpZih0aGlzLmlzRmlyc3RDaHVuayYmcSh0aGlzLl9jb25maWcuYmVmb3JlRmlyc3RDaHVuaykpe3ZhciBpPXRoaXMuX2NvbmZpZy5iZWZvcmVGaXJzdENodW5rKGUpO3ZvaWQgMCE9PWkmJihlPWkpfXRoaXMuaXNGaXJzdENodW5rPSExLHRoaXMuX2hhbHRlZD0hMTt2YXIgcj10aGlzLl9wYXJ0aWFsTGluZStlO3RoaXMuX3BhcnRpYWxMaW5lPVwiXCI7dmFyIG49dGhpcy5faGFuZGxlLnBhcnNlKHIsdGhpcy5fYmFzZUluZGV4LCF0aGlzLl9maW5pc2hlZCk7aWYoIXRoaXMuX2hhbmRsZS5wYXVzZWQoKSYmIXRoaXMuX2hhbmRsZS5hYm9ydGVkKCkpe3ZhciBzPW4ubWV0YS5jdXJzb3I7dGhpcy5fZmluaXNoZWR8fCh0aGlzLl9wYXJ0aWFsTGluZT1yLnN1YnN0cmluZyhzLXRoaXMuX2Jhc2VJbmRleCksdGhpcy5fYmFzZUluZGV4PXMpLG4mJm4uZGF0YSYmKHRoaXMuX3Jvd0NvdW50Kz1uLmRhdGEubGVuZ3RoKTt2YXIgYT10aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJnRoaXMuX3Jvd0NvdW50Pj10aGlzLl9jb25maWcucHJldmlldztpZihvKWYucG9zdE1lc3NhZ2Uoe3Jlc3VsdHM6bix3b3JrZXJJZDpiLldPUktFUl9JRCxmaW5pc2hlZDphfSk7ZWxzZSBpZihxKHRoaXMuX2NvbmZpZy5jaHVuaykmJiF0KXtpZih0aGlzLl9jb25maWcuY2h1bmsobix0aGlzLl9oYW5kbGUpLHRoaXMuX2hhbmRsZS5wYXVzZWQoKXx8dGhpcy5faGFuZGxlLmFib3J0ZWQoKSlyZXR1cm4gdm9pZCh0aGlzLl9oYWx0ZWQ9ITApO249dm9pZCAwLHRoaXMuX2NvbXBsZXRlUmVzdWx0cz12b2lkIDB9cmV0dXJuIHRoaXMuX2NvbmZpZy5zdGVwfHx0aGlzLl9jb25maWcuY2h1bmt8fCh0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YT10aGlzLl9jb21wbGV0ZVJlc3VsdHMuZGF0YS5jb25jYXQobi5kYXRhKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMuZXJyb3JzPXRoaXMuX2NvbXBsZXRlUmVzdWx0cy5lcnJvcnMuY29uY2F0KG4uZXJyb3JzKSx0aGlzLl9jb21wbGV0ZVJlc3VsdHMubWV0YT1uLm1ldGEpLHRoaXMuX2NvbXBsZXRlZHx8IWF8fCFxKHRoaXMuX2NvbmZpZy5jb21wbGV0ZSl8fG4mJm4ubWV0YS5hYm9ydGVkfHwodGhpcy5fY29uZmlnLmNvbXBsZXRlKHRoaXMuX2NvbXBsZXRlUmVzdWx0cyx0aGlzLl9pbnB1dCksdGhpcy5fY29tcGxldGVkPSEwKSxhfHxuJiZuLm1ldGEucGF1c2VkfHx0aGlzLl9uZXh0Q2h1bmsoKSxufXRoaXMuX2hhbHRlZD0hMH0sdGhpcy5fc2VuZEVycm9yPWZ1bmN0aW9uKGUpe3EodGhpcy5fY29uZmlnLmVycm9yKT90aGlzLl9jb25maWcuZXJyb3IoZSk6byYmdGhpcy5fY29uZmlnLmVycm9yJiZmLnBvc3RNZXNzYWdlKHt3b3JrZXJJZDpiLldPUktFUl9JRCxlcnJvcjplLGZpbmlzaGVkOiExfSl9fWZ1bmN0aW9uIGwoZSl7dmFyIHI7KGU9ZXx8e30pLmNodW5rU2l6ZXx8KGUuY2h1bmtTaXplPWIuUmVtb3RlQ2h1bmtTaXplKSx1LmNhbGwodGhpcyxlKSx0aGlzLl9uZXh0Q2h1bms9bj9mdW5jdGlvbigpe3RoaXMuX3JlYWRDaHVuaygpLHRoaXMuX2NodW5rTG9hZGVkKCl9OmZ1bmN0aW9uKCl7dGhpcy5fcmVhZENodW5rKCl9LHRoaXMuc3RyZWFtPWZ1bmN0aW9uKGUpe3RoaXMuX2lucHV0PWUsdGhpcy5fbmV4dENodW5rKCl9LHRoaXMuX3JlYWRDaHVuaz1mdW5jdGlvbigpe2lmKHRoaXMuX2ZpbmlzaGVkKXRoaXMuX2NodW5rTG9hZGVkKCk7ZWxzZXtpZihyPW5ldyBYTUxIdHRwUmVxdWVzdCx0aGlzLl9jb25maWcud2l0aENyZWRlbnRpYWxzJiYoci53aXRoQ3JlZGVudGlhbHM9dGhpcy5fY29uZmlnLndpdGhDcmVkZW50aWFscyksbnx8KHIub25sb2FkPXkodGhpcy5fY2h1bmtMb2FkZWQsdGhpcyksci5vbmVycm9yPXkodGhpcy5fY2h1bmtFcnJvcix0aGlzKSksci5vcGVuKFwiR0VUXCIsdGhpcy5faW5wdXQsIW4pLHRoaXMuX2NvbmZpZy5kb3dubG9hZFJlcXVlc3RIZWFkZXJzKXt2YXIgZT10aGlzLl9jb25maWcuZG93bmxvYWRSZXF1ZXN0SGVhZGVycztmb3IodmFyIHQgaW4gZSlyLnNldFJlcXVlc3RIZWFkZXIodCxlW3RdKX1pZih0aGlzLl9jb25maWcuY2h1bmtTaXplKXt2YXIgaT10aGlzLl9zdGFydCt0aGlzLl9jb25maWcuY2h1bmtTaXplLTE7ci5zZXRSZXF1ZXN0SGVhZGVyKFwiUmFuZ2VcIixcImJ5dGVzPVwiK3RoaXMuX3N0YXJ0K1wiLVwiK2kpfXRyeXtyLnNlbmQoKX1jYXRjaChlKXt0aGlzLl9jaHVua0Vycm9yKGUubWVzc2FnZSl9biYmMD09PXIuc3RhdHVzJiZ0aGlzLl9jaHVua0Vycm9yKCl9fSx0aGlzLl9jaHVua0xvYWRlZD1mdW5jdGlvbigpezQ9PT1yLnJlYWR5U3RhdGUmJihyLnN0YXR1czwyMDB8fDQwMDw9ci5zdGF0dXM/dGhpcy5fY2h1bmtFcnJvcigpOih0aGlzLl9zdGFydCs9dGhpcy5fY29uZmlnLmNodW5rU2l6ZT90aGlzLl9jb25maWcuY2h1bmtTaXplOnIucmVzcG9uc2VUZXh0Lmxlbmd0aCx0aGlzLl9maW5pc2hlZD0hdGhpcy5fY29uZmlnLmNodW5rU2l6ZXx8dGhpcy5fc3RhcnQ+PWZ1bmN0aW9uKGUpe3ZhciB0PWUuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVJhbmdlXCIpO2lmKG51bGw9PT10KXJldHVybi0xO3JldHVybiBwYXJzZUludCh0LnN1YnN0cmluZyh0Lmxhc3RJbmRleE9mKFwiL1wiKSsxKSl9KHIpLHRoaXMucGFyc2VDaHVuayhyLnJlc3BvbnNlVGV4dCkpKX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbihlKXt2YXIgdD1yLnN0YXR1c1RleHR8fGU7dGhpcy5fc2VuZEVycm9yKG5ldyBFcnJvcih0KSl9fWZ1bmN0aW9uIGMoZSl7dmFyIHIsbjsoZT1lfHx7fSkuY2h1bmtTaXplfHwoZS5jaHVua1NpemU9Yi5Mb2NhbENodW5rU2l6ZSksdS5jYWxsKHRoaXMsZSk7dmFyIHM9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZpbGVSZWFkZXI7dGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSxuPWUuc2xpY2V8fGUud2Via2l0U2xpY2V8fGUubW96U2xpY2Uscz8oKHI9bmV3IEZpbGVSZWFkZXIpLm9ubG9hZD15KHRoaXMuX2NodW5rTG9hZGVkLHRoaXMpLHIub25lcnJvcj15KHRoaXMuX2NodW5rRXJyb3IsdGhpcykpOnI9bmV3IEZpbGVSZWFkZXJTeW5jLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9maW5pc2hlZHx8dGhpcy5fY29uZmlnLnByZXZpZXcmJiEodGhpcy5fcm93Q291bnQ8dGhpcy5fY29uZmlnLnByZXZpZXcpfHx0aGlzLl9yZWFkQ2h1bmsoKX0sdGhpcy5fcmVhZENodW5rPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5faW5wdXQ7aWYodGhpcy5fY29uZmlnLmNodW5rU2l6ZSl7dmFyIHQ9TWF0aC5taW4odGhpcy5fc3RhcnQrdGhpcy5fY29uZmlnLmNodW5rU2l6ZSx0aGlzLl9pbnB1dC5zaXplKTtlPW4uY2FsbChlLHRoaXMuX3N0YXJ0LHQpfXZhciBpPXIucmVhZEFzVGV4dChlLHRoaXMuX2NvbmZpZy5lbmNvZGluZyk7c3x8dGhpcy5fY2h1bmtMb2FkZWQoe3RhcmdldDp7cmVzdWx0Oml9fSl9LHRoaXMuX2NodW5rTG9hZGVkPWZ1bmN0aW9uKGUpe3RoaXMuX3N0YXJ0Kz10aGlzLl9jb25maWcuY2h1bmtTaXplLHRoaXMuX2ZpbmlzaGVkPSF0aGlzLl9jb25maWcuY2h1bmtTaXplfHx0aGlzLl9zdGFydD49dGhpcy5faW5wdXQuc2l6ZSx0aGlzLnBhcnNlQ2h1bmsoZS50YXJnZXQucmVzdWx0KX0sdGhpcy5fY2h1bmtFcnJvcj1mdW5jdGlvbigpe3RoaXMuX3NlbmRFcnJvcihyLmVycm9yKX19ZnVuY3Rpb24gcChlKXt2YXIgaTt1LmNhbGwodGhpcyxlPWV8fHt9KSx0aGlzLnN0cmVhbT1mdW5jdGlvbihlKXtyZXR1cm4gaT1lLHRoaXMuX25leHRDaHVuaygpfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXtpZighdGhpcy5fZmluaXNoZWQpe3ZhciBlLHQ9dGhpcy5fY29uZmlnLmNodW5rU2l6ZTtyZXR1cm4gdD8oZT1pLnN1YnN0cmluZygwLHQpLGk9aS5zdWJzdHJpbmcodCkpOihlPWksaT1cIlwiKSx0aGlzLl9maW5pc2hlZD0haSx0aGlzLnBhcnNlQ2h1bmsoZSl9fX1mdW5jdGlvbiBnKGUpe3UuY2FsbCh0aGlzLGU9ZXx8e30pO3ZhciB0PVtdLGk9ITAscj0hMTt0aGlzLnBhdXNlPWZ1bmN0aW9uKCl7dS5wcm90b3R5cGUucGF1c2UuYXBwbHkodGhpcyxhcmd1bWVudHMpLHRoaXMuX2lucHV0LnBhdXNlKCl9LHRoaXMucmVzdW1lPWZ1bmN0aW9uKCl7dS5wcm90b3R5cGUucmVzdW1lLmFwcGx5KHRoaXMsYXJndW1lbnRzKSx0aGlzLl9pbnB1dC5yZXN1bWUoKX0sdGhpcy5zdHJlYW09ZnVuY3Rpb24oZSl7dGhpcy5faW5wdXQ9ZSx0aGlzLl9pbnB1dC5vbihcImRhdGFcIix0aGlzLl9zdHJlYW1EYXRhKSx0aGlzLl9pbnB1dC5vbihcImVuZFwiLHRoaXMuX3N0cmVhbUVuZCksdGhpcy5faW5wdXQub24oXCJlcnJvclwiLHRoaXMuX3N0cmVhbUVycm9yKX0sdGhpcy5fY2hlY2tJc0ZpbmlzaGVkPWZ1bmN0aW9uKCl7ciYmMT09PXQubGVuZ3RoJiYodGhpcy5fZmluaXNoZWQ9ITApfSx0aGlzLl9uZXh0Q2h1bms9ZnVuY3Rpb24oKXt0aGlzLl9jaGVja0lzRmluaXNoZWQoKSx0Lmxlbmd0aD90aGlzLnBhcnNlQ2h1bmsodC5zaGlmdCgpKTppPSEwfSx0aGlzLl9zdHJlYW1EYXRhPXkoZnVuY3Rpb24oZSl7dHJ5e3QucHVzaChcInN0cmluZ1wiPT10eXBlb2YgZT9lOmUudG9TdHJpbmcodGhpcy5fY29uZmlnLmVuY29kaW5nKSksaSYmKGk9ITEsdGhpcy5fY2hlY2tJc0ZpbmlzaGVkKCksdGhpcy5wYXJzZUNodW5rKHQuc2hpZnQoKSkpfWNhdGNoKGUpe3RoaXMuX3N0cmVhbUVycm9yKGUpfX0sdGhpcyksdGhpcy5fc3RyZWFtRXJyb3I9eShmdW5jdGlvbihlKXt0aGlzLl9zdHJlYW1DbGVhblVwKCksdGhpcy5fc2VuZEVycm9yKGUpfSx0aGlzKSx0aGlzLl9zdHJlYW1FbmQ9eShmdW5jdGlvbigpe3RoaXMuX3N0cmVhbUNsZWFuVXAoKSxyPSEwLHRoaXMuX3N0cmVhbURhdGEoXCJcIil9LHRoaXMpLHRoaXMuX3N0cmVhbUNsZWFuVXA9eShmdW5jdGlvbigpe3RoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZGF0YVwiLHRoaXMuX3N0cmVhbURhdGEpLHRoaXMuX2lucHV0LnJlbW92ZUxpc3RlbmVyKFwiZW5kXCIsdGhpcy5fc3RyZWFtRW5kKSx0aGlzLl9pbnB1dC5yZW1vdmVMaXN0ZW5lcihcImVycm9yXCIsdGhpcy5fc3RyZWFtRXJyb3IpfSx0aGlzKX1mdW5jdGlvbiBpKF8pe3ZhciBhLG8saCxyPU1hdGgucG93KDIsNTMpLG49LXIscz0vXlxccyotPyhcXGQqXFwuP1xcZCt8XFxkK1xcLj9cXGQqKShlWy0rXT9cXGQrKT9cXHMqJC9pLHU9LyhcXGR7NH0tWzAxXVxcZC1bMC0zXVxcZFRbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZFxcLlxcZCsoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKXwoXFxkezR9LVswMV1cXGQtWzAtM11cXGRUWzAtMl1cXGQ6WzAtNV1cXGQoWystXVswLTJdXFxkOlswLTVdXFxkfFopKS8sdD10aGlzLGk9MCxmPTAsZD0hMSxlPSExLGw9W10sYz17ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7fX07aWYocShfLnN0ZXApKXt2YXIgcD1fLnN0ZXA7Xy5zdGVwPWZ1bmN0aW9uKGUpe2lmKGM9ZSxtKCkpZygpO2Vsc2V7aWYoZygpLDA9PT1jLmRhdGEubGVuZ3RoKXJldHVybjtpKz1lLmRhdGEubGVuZ3RoLF8ucHJldmlldyYmaT5fLnByZXZpZXc/by5hYm9ydCgpOihjLmRhdGE9Yy5kYXRhWzBdLHAoYyx0KSl9fX1mdW5jdGlvbiB2KGUpe3JldHVyblwiZ3JlZWR5XCI9PT1fLnNraXBFbXB0eUxpbmVzP1wiXCI9PT1lLmpvaW4oXCJcIikudHJpbSgpOjE9PT1lLmxlbmd0aCYmMD09PWVbMF0ubGVuZ3RofWZ1bmN0aW9uIGcoKXtpZihjJiZoJiYoayhcIkRlbGltaXRlclwiLFwiVW5kZXRlY3RhYmxlRGVsaW1pdGVyXCIsXCJVbmFibGUgdG8gYXV0by1kZXRlY3QgZGVsaW1pdGluZyBjaGFyYWN0ZXI7IGRlZmF1bHRlZCB0byAnXCIrYi5EZWZhdWx0RGVsaW1pdGVyK1wiJ1wiKSxoPSExKSxfLnNraXBFbXB0eUxpbmVzKWZvcih2YXIgZT0wO2U8Yy5kYXRhLmxlbmd0aDtlKyspdihjLmRhdGFbZV0pJiZjLmRhdGEuc3BsaWNlKGUtLSwxKTtyZXR1cm4gbSgpJiZmdW5jdGlvbigpe2lmKCFjKXJldHVybjtmdW5jdGlvbiBlKGUpe3EoXy50cmFuc2Zvcm1IZWFkZXIpJiYoZT1fLnRyYW5zZm9ybUhlYWRlcihlKSksbC5wdXNoKGUpfWlmKEFycmF5LmlzQXJyYXkoYy5kYXRhWzBdKSl7Zm9yKHZhciB0PTA7bSgpJiZ0PGMuZGF0YS5sZW5ndGg7dCsrKWMuZGF0YVt0XS5mb3JFYWNoKGUpO2MuZGF0YS5zcGxpY2UoMCwxKX1lbHNlIGMuZGF0YS5mb3JFYWNoKGUpfSgpLGZ1bmN0aW9uKCl7aWYoIWN8fCFfLmhlYWRlciYmIV8uZHluYW1pY1R5cGluZyYmIV8udHJhbnNmb3JtKXJldHVybiBjO2Z1bmN0aW9uIGUoZSx0KXt2YXIgaSxyPV8uaGVhZGVyP3t9OltdO2ZvcihpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciBuPWkscz1lW2ldO18uaGVhZGVyJiYobj1pPj1sLmxlbmd0aD9cIl9fcGFyc2VkX2V4dHJhXCI6bFtpXSksXy50cmFuc2Zvcm0mJihzPV8udHJhbnNmb3JtKHMsbikpLHM9eShuLHMpLFwiX19wYXJzZWRfZXh0cmFcIj09PW4/KHJbbl09cltuXXx8W10scltuXS5wdXNoKHMpKTpyW25dPXN9cmV0dXJuIF8uaGVhZGVyJiYoaT5sLmxlbmd0aD9rKFwiRmllbGRNaXNtYXRjaFwiLFwiVG9vTWFueUZpZWxkc1wiLFwiVG9vIG1hbnkgZmllbGRzOiBleHBlY3RlZCBcIitsLmxlbmd0aCtcIiBmaWVsZHMgYnV0IHBhcnNlZCBcIitpLGYrdCk6aTxsLmxlbmd0aCYmayhcIkZpZWxkTWlzbWF0Y2hcIixcIlRvb0Zld0ZpZWxkc1wiLFwiVG9vIGZldyBmaWVsZHM6IGV4cGVjdGVkIFwiK2wubGVuZ3RoK1wiIGZpZWxkcyBidXQgcGFyc2VkIFwiK2ksZit0KSkscn12YXIgdD0xOyFjLmRhdGEubGVuZ3RofHxBcnJheS5pc0FycmF5KGMuZGF0YVswXSk/KGMuZGF0YT1jLmRhdGEubWFwKGUpLHQ9Yy5kYXRhLmxlbmd0aCk6Yy5kYXRhPWUoYy5kYXRhLDApO18uaGVhZGVyJiZjLm1ldGEmJihjLm1ldGEuZmllbGRzPWwpO3JldHVybiBmKz10LGN9KCl9ZnVuY3Rpb24gbSgpe3JldHVybiBfLmhlYWRlciYmMD09PWwubGVuZ3RofWZ1bmN0aW9uIHkoZSx0KXtyZXR1cm4gaT1lLF8uZHluYW1pY1R5cGluZ0Z1bmN0aW9uJiZ2b2lkIDA9PT1fLmR5bmFtaWNUeXBpbmdbaV0mJihfLmR5bmFtaWNUeXBpbmdbaV09Xy5keW5hbWljVHlwaW5nRnVuY3Rpb24oaSkpLCEwPT09KF8uZHluYW1pY1R5cGluZ1tpXXx8Xy5keW5hbWljVHlwaW5nKT9cInRydWVcIj09PXR8fFwiVFJVRVwiPT09dHx8XCJmYWxzZVwiIT09dCYmXCJGQUxTRVwiIT09dCYmKGZ1bmN0aW9uKGUpe2lmKHMudGVzdChlKSl7dmFyIHQ9cGFyc2VGbG9hdChlKTtpZihuPHQmJnQ8cilyZXR1cm4hMH1yZXR1cm4hMX0odCk/cGFyc2VGbG9hdCh0KTp1LnRlc3QodCk/bmV3IERhdGUodCk6XCJcIj09PXQ/bnVsbDp0KTp0O3ZhciBpfWZ1bmN0aW9uIGsoZSx0LGkscil7dmFyIG49e3R5cGU6ZSxjb2RlOnQsbWVzc2FnZTppfTt2b2lkIDAhPT1yJiYobi5yb3c9ciksYy5lcnJvcnMucHVzaChuKX10aGlzLnBhcnNlPWZ1bmN0aW9uKGUsdCxpKXt2YXIgcj1fLnF1b3RlQ2hhcnx8J1wiJztpZihfLm5ld2xpbmV8fChfLm5ld2xpbmU9ZnVuY3Rpb24oZSx0KXtlPWUuc3Vic3RyaW5nKDAsMTA0ODU3Nik7dmFyIGk9bmV3IFJlZ0V4cChVKHQpK1wiKFteXSo/KVwiK1UodCksXCJnbVwiKSxyPShlPWUucmVwbGFjZShpLFwiXCIpKS5zcGxpdChcIlxcclwiKSxuPWUuc3BsaXQoXCJcXG5cIikscz0xPG4ubGVuZ3RoJiZuWzBdLmxlbmd0aDxyWzBdLmxlbmd0aDtpZigxPT09ci5sZW5ndGh8fHMpcmV0dXJuXCJcXG5cIjtmb3IodmFyIGE9MCxvPTA7bzxyLmxlbmd0aDtvKyspXCJcXG5cIj09PXJbb11bMF0mJmErKztyZXR1cm4gYT49ci5sZW5ndGgvMj9cIlxcclxcblwiOlwiXFxyXCJ9KGUscikpLGg9ITEsXy5kZWxpbWl0ZXIpcShfLmRlbGltaXRlcikmJihfLmRlbGltaXRlcj1fLmRlbGltaXRlcihlKSxjLm1ldGEuZGVsaW1pdGVyPV8uZGVsaW1pdGVyKTtlbHNle3ZhciBuPWZ1bmN0aW9uKGUsdCxpLHIsbil7dmFyIHMsYSxvLGg7bj1ufHxbXCIsXCIsXCJcXHRcIixcInxcIixcIjtcIixiLlJFQ09SRF9TRVAsYi5VTklUX1NFUF07Zm9yKHZhciB1PTA7dTxuLmxlbmd0aDt1Kyspe3ZhciBmPW5bdV0sZD0wLGw9MCxjPTA7bz12b2lkIDA7Zm9yKHZhciBwPW5ldyBFKHtjb21tZW50czpyLGRlbGltaXRlcjpmLG5ld2xpbmU6dCxwcmV2aWV3OjEwfSkucGFyc2UoZSksZz0wO2c8cC5kYXRhLmxlbmd0aDtnKyspaWYoaSYmdihwLmRhdGFbZ10pKWMrKztlbHNle3ZhciBtPXAuZGF0YVtnXS5sZW5ndGg7bCs9bSx2b2lkIDAhPT1vPzA8bSYmKGQrPU1hdGguYWJzKG0tbyksbz1tKTpvPW19MDxwLmRhdGEubGVuZ3RoJiYobC89cC5kYXRhLmxlbmd0aC1jKSwodm9pZCAwPT09YXx8ZDw9YSkmJih2b2lkIDA9PT1ofHxoPGwpJiYxLjk5PGwmJihhPWQscz1mLGg9bCl9cmV0dXJue3N1Y2Nlc3NmdWw6ISEoXy5kZWxpbWl0ZXI9cyksYmVzdERlbGltaXRlcjpzfX0oZSxfLm5ld2xpbmUsXy5za2lwRW1wdHlMaW5lcyxfLmNvbW1lbnRzLF8uZGVsaW1pdGVyc1RvR3Vlc3MpO24uc3VjY2Vzc2Z1bD9fLmRlbGltaXRlcj1uLmJlc3REZWxpbWl0ZXI6KGg9ITAsXy5kZWxpbWl0ZXI9Yi5EZWZhdWx0RGVsaW1pdGVyKSxjLm1ldGEuZGVsaW1pdGVyPV8uZGVsaW1pdGVyfXZhciBzPXcoXyk7cmV0dXJuIF8ucHJldmlldyYmXy5oZWFkZXImJnMucHJldmlldysrLGE9ZSxvPW5ldyBFKHMpLGM9by5wYXJzZShhLHQsaSksZygpLGQ/e21ldGE6e3BhdXNlZDohMH19OmN8fHttZXRhOntwYXVzZWQ6ITF9fX0sdGhpcy5wYXVzZWQ9ZnVuY3Rpb24oKXtyZXR1cm4gZH0sdGhpcy5wYXVzZT1mdW5jdGlvbigpe2Q9ITAsby5hYm9ydCgpLGE9cShfLmNodW5rKT9cIlwiOmEuc3Vic3RyaW5nKG8uZ2V0Q2hhckluZGV4KCkpfSx0aGlzLnJlc3VtZT1mdW5jdGlvbigpe3Quc3RyZWFtZXIuX2hhbHRlZD8oZD0hMSx0LnN0cmVhbWVyLnBhcnNlQ2h1bmsoYSwhMCkpOnNldFRpbWVvdXQodGhpcy5yZXN1bWUsMyl9LHRoaXMuYWJvcnRlZD1mdW5jdGlvbigpe3JldHVybiBlfSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7ZT0hMCxvLmFib3J0KCksYy5tZXRhLmFib3J0ZWQ9ITAscShfLmNvbXBsZXRlKSYmXy5jb21wbGV0ZShjKSxhPVwiXCJ9fWZ1bmN0aW9uIFUoZSl7cmV0dXJuIGUucmVwbGFjZSgvWy4qKz9eJHt9KCl8W1xcXVxcXFxdL2csXCJcXFxcJCZcIil9ZnVuY3Rpb24gRShlKXt2YXIgTyxEPShlPWV8fHt9KS5kZWxpbWl0ZXIsST1lLm5ld2xpbmUsVD1lLmNvbW1lbnRzLEE9ZS5zdGVwLEw9ZS5wcmV2aWV3LEY9ZS5mYXN0TW9kZSx6PU89dm9pZCAwPT09ZS5xdW90ZUNoYXI/J1wiJzplLnF1b3RlQ2hhcjtpZih2b2lkIDAhPT1lLmVzY2FwZUNoYXImJih6PWUuZXNjYXBlQ2hhciksKFwic3RyaW5nXCIhPXR5cGVvZiBEfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoRCkpJiYoRD1cIixcIiksVD09PUQpdGhyb3cgbmV3IEVycm9yKFwiQ29tbWVudCBjaGFyYWN0ZXIgc2FtZSBhcyBkZWxpbWl0ZXJcIik7ITA9PT1UP1Q9XCIjXCI6KFwic3RyaW5nXCIhPXR5cGVvZiBUfHwtMTxiLkJBRF9ERUxJTUlURVJTLmluZGV4T2YoVCkpJiYoVD0hMSksXCJcXG5cIiE9PUkmJlwiXFxyXCIhPT1JJiZcIlxcclxcblwiIT09SSYmKEk9XCJcXG5cIik7dmFyIE09MCxqPSExO3RoaXMucGFyc2U9ZnVuY3Rpb24oYSx0LGkpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXRocm93IG5ldyBFcnJvcihcIklucHV0IG11c3QgYmUgYSBzdHJpbmdcIik7dmFyIHI9YS5sZW5ndGgsZT1ELmxlbmd0aCxuPUkubGVuZ3RoLHM9VC5sZW5ndGgsbz1xKEEpLGg9W10sdT1bXSxmPVtdLGQ9TT0wO2lmKCFhKXJldHVybiBSKCk7aWYoRnx8ITEhPT1GJiYtMT09PWEuaW5kZXhPZihPKSl7Zm9yKHZhciBsPWEuc3BsaXQoSSksYz0wO2M8bC5sZW5ndGg7YysrKXtpZihmPWxbY10sTSs9Zi5sZW5ndGgsYyE9PWwubGVuZ3RoLTEpTSs9SS5sZW5ndGg7ZWxzZSBpZihpKXJldHVybiBSKCk7aWYoIVR8fGYuc3Vic3RyaW5nKDAscykhPT1UKXtpZihvKXtpZihoPVtdLGIoZi5zcGxpdChEKSksUygpLGopcmV0dXJuIFIoKX1lbHNlIGIoZi5zcGxpdChEKSk7aWYoTCYmTDw9YylyZXR1cm4gaD1oLnNsaWNlKDAsTCksUighMCl9fXJldHVybiBSKCl9Zm9yKHZhciBwPWEuaW5kZXhPZihELE0pLGc9YS5pbmRleE9mKEksTSksbT1uZXcgUmVnRXhwKFUoeikrVShPKSxcImdcIiksXz1hLmluZGV4T2YoTyxNKTs7KWlmKGFbTV0hPT1PKWlmKFQmJjA9PT1mLmxlbmd0aCYmYS5zdWJzdHJpbmcoTSxNK3MpPT09VCl7aWYoLTE9PT1nKXJldHVybiBSKCk7TT1nK24sZz1hLmluZGV4T2YoSSxNKSxwPWEuaW5kZXhPZihELE0pfWVsc2V7aWYoLTEhPT1wJiYocDxnfHwtMT09PWcpKXtpZighKHA8Xykpe2YucHVzaChhLnN1YnN0cmluZyhNLHApKSxNPXArZSxwPWEuaW5kZXhPZihELE0pO2NvbnRpbnVlfXZhciB2PXgocCxfLGcpO2lmKHYmJnZvaWQgMCE9PXYubmV4dERlbGltKXtwPXYubmV4dERlbGltLF89di5xdW90ZVNlYXJjaCxmLnB1c2goYS5zdWJzdHJpbmcoTSxwKSksTT1wK2UscD1hLmluZGV4T2YoRCxNKTtjb250aW51ZX19aWYoLTE9PT1nKWJyZWFrO2lmKGYucHVzaChhLnN1YnN0cmluZyhNLGcpKSxDKGcrbiksbyYmKFMoKSxqKSlyZXR1cm4gUigpO2lmKEwmJmgubGVuZ3RoPj1MKXJldHVybiBSKCEwKX1lbHNlIGZvcihfPU0sTSsrOzspe2lmKC0xPT09KF89YS5pbmRleE9mKE8sXysxKSkpcmV0dXJuIGl8fHUucHVzaCh7dHlwZTpcIlF1b3Rlc1wiLGNvZGU6XCJNaXNzaW5nUXVvdGVzXCIsbWVzc2FnZTpcIlF1b3RlZCBmaWVsZCB1bnRlcm1pbmF0ZWRcIixyb3c6aC5sZW5ndGgsaW5kZXg6TX0pLHcoKTtpZihfPT09ci0xKXJldHVybiB3KGEuc3Vic3RyaW5nKE0sXykucmVwbGFjZShtLE8pKTtpZihPIT09enx8YVtfKzFdIT09eil7aWYoTz09PXp8fDA9PT1ffHxhW18tMV0hPT16KXstMSE9PXAmJnA8XysxJiYocD1hLmluZGV4T2YoRCxfKzEpKSwtMSE9PWcmJmc8XysxJiYoZz1hLmluZGV4T2YoSSxfKzEpKTt2YXIgeT1FKC0xPT09Zz9wOk1hdGgubWluKHAsZykpO2lmKGFbXysxK3ldPT09RCl7Zi5wdXNoKGEuc3Vic3RyaW5nKE0sXykucmVwbGFjZShtLE8pKSxhW009XysxK3krZV0hPT1PJiYoXz1hLmluZGV4T2YoTyxNKSkscD1hLmluZGV4T2YoRCxNKSxnPWEuaW5kZXhPZihJLE0pO2JyZWFrfXZhciBrPUUoZyk7aWYoYS5zdWJzdHJpbmcoXysxK2ssXysxK2srbik9PT1JKXtpZihmLnB1c2goYS5zdWJzdHJpbmcoTSxfKS5yZXBsYWNlKG0sTykpLEMoXysxK2srbikscD1hLmluZGV4T2YoRCxNKSxfPWEuaW5kZXhPZihPLE0pLG8mJihTKCksaikpcmV0dXJuIFIoKTtpZihMJiZoLmxlbmd0aD49TClyZXR1cm4gUighMCk7YnJlYWt9dS5wdXNoKHt0eXBlOlwiUXVvdGVzXCIsY29kZTpcIkludmFsaWRRdW90ZXNcIixtZXNzYWdlOlwiVHJhaWxpbmcgcXVvdGUgb24gcXVvdGVkIGZpZWxkIGlzIG1hbGZvcm1lZFwiLHJvdzpoLmxlbmd0aCxpbmRleDpNfSksXysrfX1lbHNlIF8rK31yZXR1cm4gdygpO2Z1bmN0aW9uIGIoZSl7aC5wdXNoKGUpLGQ9TX1mdW5jdGlvbiBFKGUpe3ZhciB0PTA7aWYoLTEhPT1lKXt2YXIgaT1hLnN1YnN0cmluZyhfKzEsZSk7aSYmXCJcIj09PWkudHJpbSgpJiYodD1pLmxlbmd0aCl9cmV0dXJuIHR9ZnVuY3Rpb24gdyhlKXtyZXR1cm4gaXx8KHZvaWQgMD09PWUmJihlPWEuc3Vic3RyaW5nKE0pKSxmLnB1c2goZSksTT1yLGIoZiksbyYmUygpKSxSKCl9ZnVuY3Rpb24gQyhlKXtNPWUsYihmKSxmPVtdLGc9YS5pbmRleE9mKEksTSl9ZnVuY3Rpb24gUihlKXtyZXR1cm57ZGF0YTpoLGVycm9yczp1LG1ldGE6e2RlbGltaXRlcjpELGxpbmVicmVhazpJLGFib3J0ZWQ6aix0cnVuY2F0ZWQ6ISFlLGN1cnNvcjpkKyh0fHwwKX19fWZ1bmN0aW9uIFMoKXtBKFIoKSksaD1bXSx1PVtdfWZ1bmN0aW9uIHgoZSx0LGkpe3ZhciByPXtuZXh0RGVsaW06dm9pZCAwLHF1b3RlU2VhcmNoOnZvaWQgMH0sbj1hLmluZGV4T2YoTyx0KzEpO2lmKHQ8ZSYmZTxuJiYobjxpfHwtMT09PWkpKXt2YXIgcz1hLmluZGV4T2YoRCxuKTtpZigtMT09PXMpcmV0dXJuIHI7bjxzJiYobj1hLmluZGV4T2YoTyxuKzEpKSxyPXgocyxuLGkpfWVsc2Ugcj17bmV4dERlbGltOmUscXVvdGVTZWFyY2g6dH07cmV0dXJuIHJ9fSx0aGlzLmFib3J0PWZ1bmN0aW9uKCl7aj0hMH0sdGhpcy5nZXRDaGFySW5kZXg9ZnVuY3Rpb24oKXtyZXR1cm4gTX19ZnVuY3Rpb24gbShlKXt2YXIgdD1lLmRhdGEsaT1hW3Qud29ya2VySWRdLHI9ITE7aWYodC5lcnJvcilpLnVzZXJFcnJvcih0LmVycm9yLHQuZmlsZSk7ZWxzZSBpZih0LnJlc3VsdHMmJnQucmVzdWx0cy5kYXRhKXt2YXIgbj17YWJvcnQ6ZnVuY3Rpb24oKXtyPSEwLF8odC53b3JrZXJJZCx7ZGF0YTpbXSxlcnJvcnM6W10sbWV0YTp7YWJvcnRlZDohMH19KX0scGF1c2U6dixyZXN1bWU6dn07aWYocShpLnVzZXJTdGVwKSl7Zm9yKHZhciBzPTA7czx0LnJlc3VsdHMuZGF0YS5sZW5ndGgmJihpLnVzZXJTdGVwKHtkYXRhOnQucmVzdWx0cy5kYXRhW3NdLGVycm9yczp0LnJlc3VsdHMuZXJyb3JzLG1ldGE6dC5yZXN1bHRzLm1ldGF9LG4pLCFyKTtzKyspO2RlbGV0ZSB0LnJlc3VsdHN9ZWxzZSBxKGkudXNlckNodW5rKSYmKGkudXNlckNodW5rKHQucmVzdWx0cyxuLHQuZmlsZSksZGVsZXRlIHQucmVzdWx0cyl9dC5maW5pc2hlZCYmIXImJl8odC53b3JrZXJJZCx0LnJlc3VsdHMpfWZ1bmN0aW9uIF8oZSx0KXt2YXIgaT1hW2VdO3EoaS51c2VyQ29tcGxldGUpJiZpLnVzZXJDb21wbGV0ZSh0KSxpLnRlcm1pbmF0ZSgpLGRlbGV0ZSBhW2VdfWZ1bmN0aW9uIHYoKXt0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQuXCIpfWZ1bmN0aW9uIHcoZSl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fG51bGw9PT1lKXJldHVybiBlO3ZhciB0PUFycmF5LmlzQXJyYXkoZSk/W106e307Zm9yKHZhciBpIGluIGUpdFtpXT13KGVbaV0pO3JldHVybiB0fWZ1bmN0aW9uIHkoZSx0KXtyZXR1cm4gZnVuY3Rpb24oKXtlLmFwcGx5KHQsYXJndW1lbnRzKX19ZnVuY3Rpb24gcShlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBlfXJldHVybiBvJiYoZi5vbm1lc3NhZ2U9ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5kYXRhO3ZvaWQgMD09PWIuV09SS0VSX0lEJiZ0JiYoYi5XT1JLRVJfSUQ9dC53b3JrZXJJZCk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQuaW5wdXQpZi5wb3N0TWVzc2FnZSh7d29ya2VySWQ6Yi5XT1JLRVJfSUQscmVzdWx0czpiLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpLGZpbmlzaGVkOiEwfSk7ZWxzZSBpZihmLkZpbGUmJnQuaW5wdXQgaW5zdGFuY2VvZiBGaWxlfHx0LmlucHV0IGluc3RhbmNlb2YgT2JqZWN0KXt2YXIgaT1iLnBhcnNlKHQuaW5wdXQsdC5jb25maWcpO2kmJmYucG9zdE1lc3NhZ2Uoe3dvcmtlcklkOmIuV09SS0VSX0lELHJlc3VsdHM6aSxmaW5pc2hlZDohMH0pfX0pLChsLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHUucHJvdG90eXBlKSkuY29uc3RydWN0b3I9bCwoYy5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZSh1LnByb3RvdHlwZSkpLmNvbnN0cnVjdG9yPWMsKHAucHJvdG90eXBlPU9iamVjdC5jcmVhdGUocC5wcm90b3R5cGUpKS5jb25zdHJ1Y3Rvcj1wLChnLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHUucHJvdG90eXBlKSkuY29uc3RydWN0b3I9ZyxifSk7IiwiaW1wb3J0IHtTdGF0aW9uLCBTdGF0aW9uT2JqfSBmcm9tIFwiLi9zdGF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBMaW5lIHtcbiAgcmVhZG9ubHkgaWQ6IG51bWJlcjtcbiAgcmVhZG9ubHkgc3RhdGlvbnM6IFN0YXRpb25bXTtcbiAgcmVhZG9ubHkgeFBvczogbnVtYmVyIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBzdGF0aW9uczogU3RhdGlvbltdLCB4UG9zOiBudW1iZXIgfCBudWxsKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMuc3RhdGlvbnMgPSBzdGF0aW9ucztcbiAgICB0aGlzLnhQb3MgPSB4UG9zO1xuICB9XG5cbiAgdG9KU09OKCkge1xuICAgIHJldHVybiB7XG4gICAgICAnaWQnOiB0aGlzLmlkLFxuICAgICAgJ3N0YXRpb25zJzogdGhpcy5zdGF0aW9ucyxcbiAgICAgICd4UG9zJzogdGhpcy54UG9zXG4gICAgfVxuICB9XG5cbiAgaGFzU3RhdGlvbihzdGF0aW9uSWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnN0YXRpb25zLnNvbWUoc3RhdGlvbiA9PiBzdGF0aW9uLmlkID09IHN0YXRpb25JZCk7XG4gIH1cblxuICBmaW5kU3RhdGlvbihzdGF0aW9uSWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnN0YXRpb25zLmZpbmQoc3RhdGlvbiA9PiBzdGF0aW9uLmlkID09IHN0YXRpb25JZCk7XG4gIH1cblxuICBmaW5kU3RhdGlvbklkeChzdGF0aW9uSWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLnN0YXRpb25zLmZpbmRJbmRleChzdGF0aW9uID0+IHN0YXRpb24uaWQgPT0gc3RhdGlvbklkKTtcbiAgfVxufVxuXG5leHBvcnQgbmFtZXNwYWNlIExpbmUge1xuICBleHBvcnQgZnVuY3Rpb24gZnJvbU9iaihsaW5lOiBMaW5lT2JqKSB7XG4gICAgY29uc3Qgc3RhdGlvbnMgPSBsaW5lLnN0YXRpb25zLm1hcChzdCA9PiBuZXcgU3RhdGlvbihzdCkpO1xuICAgIHJldHVybiBuZXcgTGluZShsaW5lLmlkLCBzdGF0aW9ucywgbGluZS54UG9zKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU3ViTGluZSB7XG4gIHJlYWRvbmx5IGxpbmU6IExpbmU7XG4gIHJlYWRvbmx5IHRyYW5zZmVyOiBTdGF0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmU6IExpbmUsIG1haW46IExpbmUpIHtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICAgIGNvbnN0IG1haW5TdGF0aW9ucyA9IG1haW4uc3RhdGlvbnMubWFwKHN0ID0+IHN0LmlkKTtcbiAgICBjb25zdCB0cmFuZmVyOiBTdGF0aW9uIHwgdW5kZWZpbmVkID0gbGluZS5zdGF0aW9ucy5maW5kKHN0ID0+IG1haW5TdGF0aW9ucy5pbmNsdWRlcyhzdC5pZCkpO1xuICAgIGlmKHRyYW5mZXIgPT0gdW5kZWZpbmVkKSB0aHJvdyBuZXcgRXJyb3IoYExpbmUgaWQ9JHtsaW5lLmlkfSBkb2VzIG5vdCBleGlzdHMgdHJhbnNmZXIgc3RhdGlvbi5gKTtcbiAgICB0aGlzLnRyYW5zZmVyID0gdHJhbmZlcjtcbiAgfVxuXG4gIGlkKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmUuaWQ7XG4gIH1cblxuICBzdGF0aW9ucygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lLnN0YXRpb25zO1xuICB9XG5cbiAgeFBvcygpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lLnhQb3M7XG4gIH1cblxuICBzaW5nbGVMaW5lU3RhdGlvbnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGlvbnMoKS5maWx0ZXIoc3QgPT4gc3QuaWQgIT0gdGhpcy50cmFuc2Zlci5pZCk7XG4gIH1cblxuICB0cmFuc2ZlcklkeCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0aW9ucygpLmZpbmRJbmRleChzdCA9PiBzdC5pZCA9PSB0aGlzLnRyYW5zZmVyLmlkKVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIExpbmVPYmogPSB7XG4gIGlkOiBudW1iZXIsXG4gIHN0YXRpb25zOiBTdGF0aW9uT2JqW11cbiAgeFBvczogbnVtYmVyIHwgbnVsbDtcbn1cbiIsIlxuZXhwb3J0IGNsYXNzIFN0YXRpb24ge1xuICByZWFkb25seSBpZDogbnVtYmVyO1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG4gIHJlYWRvbmx5IHJhbms6IFN0YXRpb25SYW5rIHwgbnVsbDtcblxuICBjb25zdHJ1Y3RvcihzdGF0aW9uOiBTdGF0aW9uT2JqKSB7XG4gICAgdGhpcy5pZCA9IHN0YXRpb24uaWQ7XG4gICAgdGhpcy5uYW1lID0gc3RhdGlvbi5uYW1lO1xuICAgIHRoaXMucmFuayA9IFN0YXRpb25SYW5rLnBhcnNlKHN0YXRpb24ucmFuayk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgU3RhdGlvbk9iaiA9IHtcbiAgaWQ6IG51bWJlcixcbiAgbmFtZTogc3RyaW5nLFxuICByYW5rOiBudW1iZXIgfCBudWxsXG59XG5cbmV4cG9ydCB0eXBlIFN0YXRpb25SYW5rID0gMSB8IDIgfCAzIHwgNCB8IDVcblxuZXhwb3J0IG1vZHVsZSBTdGF0aW9uUmFuayB7XG4gIGV4cG9ydCBmdW5jdGlvbiBpc1JhbmsoeDogbnVtYmVyKTogeCBpcyBTdGF0aW9uUmFuayB7XG4gICAgcmV0dXJuIDEgPD0geCAmJiB4IDw9IDU7XG4gIH1cblxuICBleHBvcnQgZnVuY3Rpb24gcGFyc2UoeDogbnVtYmVyIHwgbnVsbCk6IFN0YXRpb25SYW5rIHwgbnVsbCB7XG4gICAgcmV0dXJuIHggPyAoU3RhdGlvblJhbmsuaXNSYW5rKHgpID8geCA6IG51bGwpIDogbnVsbDtcbiAgfVxufVxuIiwiXG5leHBvcnQgY2xhc3MgRGlhZ3JhbUF0dHJzIHtcbiAgcmVhZG9ubHkgdGl0bGU6IHN0cmluZztcbiAgcmVhZG9ubHkgYXV0aG9yOiBzdHJpbmc7XG4gIHJlYWRvbmx5IGNvbXBhbnk6IHN0cmluZztcbiAgcmVhZG9ubHkgcmVnaW9uOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodGl0bGU6IHN0cmluZywgYXV0aG9yOiBzdHJpbmcsIGNvbXBhbnk6IHN0cmluZywgcmVnaW9uOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5hdXRob3IgPSBhdXRob3I7XG4gICAgdGhpcy5jb21wYW55ID0gY29tcGFueTtcbiAgICB0aGlzLnJlZ2lvbiA9IHJlZ2lvbjtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3RpdGxlJzogdGhpcy50aXRsZSxcbiAgICAgICdhdXRob3InOiB0aGlzLmF1dGhvcixcbiAgICAgICdjb21wYW55JzogdGhpcy5jb21wYW55LFxuICAgICAgJ3JlZ2lvbic6IHRoaXMucmVnaW9uXG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge0xpbmVzLCBUcmFpbn0gZnJvbSBcIi4vbGluZXNcIjtcbmltcG9ydCB7VHJhaW5TdG9wc30gZnJvbSBcIi4vdHJhaW5TdG9wc1wiO1xuaW1wb3J0IHtMaW5lfSBmcm9tIFwiLi4vY29tbW9uL2xpbmVcIjtcbmltcG9ydCB7RGlhZ3JhbUF0dHJzfSBmcm9tIFwiLi9kaWFncmFtQXR0cnNcIjtcbmltcG9ydCB7U3RhdGlvbiwgU3RhdGlvblJhbmt9IGZyb20gXCIuLi9jb21tb24vc3RhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgRmlyc3RQYXJzZXIge1xuICByZWFkb25seSByb3dzOiBzdHJpbmdbXVtdO1xuICByZWFkb25seSBhdHRyczogRGlhZ3JhbUF0dHJzO1xuICByZWFkb25seSBmb3J3YXJkVHJhbnNmZXJzOiBTZXQ8bnVtYmVyPiA9IG5ldyBTZXQoKTtcbiAgcmVhZG9ubHkgaGFzTmFtZTogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaGFzUmFuazogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihyb3dzOiBzdHJpbmdbXVtdLCBhdHRyczogRGlhZ3JhbUF0dHJzKSB7XG4gICAgdGhpcy5yb3dzID0gcm93cztcbiAgICB0aGlzLmF0dHJzID0gYXR0cnM7XG4gICAgdGhpcy5oYXNOYW1lID0gcm93c1syXVswXSA9PSAnbmFtZSc7XG4gICAgdGhpcy5oYXNSYW5rID0gIWlzTmFOKHBhcnNlSW50KHJvd3NbdGhpcy5oZWFkZXJDb3VudCgpXVsxXSkpO1xuICB9XG5cbiAgcGFyc2UoKSB7XG4gICAgY29uc3QgbGluZXMgPSB0aGlzLnBhcnNlU3RhdGlvbnMoKTtcbiAgICBsaW5lcy5zdWJzLmZvckVhY2goc3ViID0+IHRoaXMuYWRkRm9yd2FyZFRyYW5zZmVycyhsaW5lcy5tYWluLCBzdWIpKTtcbiAgICBjb25zdCB0cmFpbnMgPSB0aGlzLnBhcnNlVHJhaW5zKGxpbmVzKTtcbiAgICByZXR1cm4gbGluZXMudG9KU09OKHRyYWlucywgdGhpcy5hdHRycyk7XG4gIH1cblxuICBwcml2YXRlIGFkZEZvcndhcmRUcmFuc2ZlcnMobWFpbjogTGluZSwgc3ViOiBMaW5lKSB7XG4gICAgY29uc3QgbWFpblN0YXRpb25zID0gbWFpbi5zdGF0aW9ucy5tYXAoc3QgPT4gc3QuaWQpO1xuICAgIGNvbnN0IGlkeCA9IHN1Yi5zdGF0aW9ucy5maW5kSW5kZXgoc3QgPT4gbWFpblN0YXRpb25zLmluZGV4T2Yoc3QuaWQpICE9IC0xKTtcbiAgICBzdWIuc3RhdGlvbnMuc2xpY2UoMCwgaWR4KS5mb3JFYWNoKHN0ID0+IHRoaXMuZm9yd2FyZFRyYW5zZmVycy5hZGQoc3QuaWQpKTtcbiAgfVxuXG4gIHBhcnNlU3RhdGlvbnMoKSB7XG4gICAgY29uc3Qgc3RhdGlvblJvd3MgPSB0aGlzLnJvd3Muc2xpY2UodGhpcy5oZWFkZXJDb3VudCgpKTtcbiAgICBjb25zdCByYXdMaW5lczogUmF3TGluZVtdID0gW3t4UG9zOiAwLCBzdGF0aW9uczogW119XTtcbiAgICBzdGF0aW9uUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBjb25zdCBmaXJzdCA9IHBhcnNlSW50KHJvd1swXSk7IC8vIElEIG9yIHhQb3NcbiAgICAgIGNvbnN0IFtuYW1lLCByYW5rXSA9IHRoaXMuaGFzUmFuayA/IFtyb3dbMl0sIHBhcnNlSW50KHJvd1sxXSldIDogW3Jvd1sxXSwgbnVsbF07XG4gICAgICBpZihuYW1lKSByYXdMaW5lc1tyYXdMaW5lcy5sZW5ndGggLSAxXS5zdGF0aW9ucy5wdXNoKHtpZDogZmlyc3QsIG5hbWU6IG5hbWUsIHJhbms6IFN0YXRpb25SYW5rLnBhcnNlKHJhbmspfSk7XG4gICAgICBlbHNlIHJhd0xpbmVzLnB1c2goe3hQb3M6IGZpcnN0IHx8IDAsIHN0YXRpb25zOiBbXX0pXG4gICAgfSk7XG4gICAgY29uc3QgbGluZXMgPSByYXdMaW5lcy5tYXAoKGxpbmUsIGlkeCkgPT4gbmV3IExpbmUoaWR4ICsgMSwgbGluZS5zdGF0aW9ucywgbGluZS54UG9zKSk7XG4gICAgcmV0dXJuIG5ldyBMaW5lcyhsaW5lc1swXSwgbGluZXMuc2xpY2UoMSkpO1xuICB9XG5cbiAgcGFyc2VUcmFpbnMobGluZXM6IExpbmVzKSB7XG4gICAgY29uc3QgaENvdW50ID0gdGhpcy5zdGF0cmlvbkhlYWRlckNvdW50KCk7XG4gICAgY29uc3Qgc3BlZWRzID0gdGhpcy5yb3dzWzBdLnNsaWNlKGhDb3VudCk7XG4gICAgY29uc3QgY291bnRzID0gdGhpcy5yb3dzWzFdLnNsaWNlKGhDb3VudCk7XG4gICAgY29uc3QgbmFtZXMgPSB0aGlzLmhhc05hbWUgPyB0aGlzLnJvd3NbMl0uc2xpY2UoaENvdW50KSA6IG51bGw7XG4gICAgY29uc3QgdHJhaW5fc3RvcHM6IFRyYWluU3RvcHNbXSA9IFtdO1xuICAgIHNwZWVkcy5mb3JFYWNoKF8gPT4gdHJhaW5fc3RvcHMucHVzaChuZXcgVHJhaW5TdG9wcyhsaW5lcywgW10pKSk7XG4gICAgdGhpcy5yb3dzLnNsaWNlKHRoaXMuaGVhZGVyQ291bnQoKSkuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgaWYocm93WzBdKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpb25JZCA9IHBhcnNlSW50KHJvd1swXSk7XG4gICAgICAgIGNvbnN0IHN0b3BzID0gcm93LnNsaWNlKGhDb3VudCk7XG4gICAgICAgIHNwZWVkcy5mb3JFYWNoKChzcGVlZCwgaWR4KSA9PiB7XG4gICAgICAgICAgaWYoc3RvcHNbaWR4XSkge1xuICAgICAgICAgICAgdHJhaW5fc3RvcHNbaWR4XS5wdXNoKHN0YXRpb25JZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdHJhaW5fc3RvcHMubWFwKChzdG9wcywgaWR4KSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFRyYWluKHN0b3BzLCBwYXJzZUludChzcGVlZHNbaWR4XSksIHBhcnNlSW50KGNvdW50c1tpZHhdKSwgbmFtZXM/LltpZHhdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgaGVhZGVyQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaGFzTmFtZSA/IDMgOiAyO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0cmlvbkhlYWRlckNvdW50KCkge1xuICAgIHJldHVybiB0aGlzLmhhc1JhbmsgPyAzIDogMjtcbiAgfVxufVxuXG50eXBlIFJhd0xpbmUgPSB7XG4gIHhQb3M6IG51bWJlcixcbiAgc3RhdGlvbnM6IFN0YXRpb25bXVxufVxuIiwiaW1wb3J0IHtUcmFpblN0b3BzfSBmcm9tIFwiLi90cmFpblN0b3BzXCI7XG5pbXBvcnQge0xpbmV9IGZyb20gXCIuLi9jb21tb24vbGluZVwiO1xuaW1wb3J0IHtEaWFncmFtQXR0cnN9IGZyb20gXCIuL2RpYWdyYW1BdHRyc1wiO1xuXG5leHBvcnQgY2xhc3MgTGluZXMge1xuICByZWFkb25seSBtYWluOiBMaW5lO1xuICByZWFkb25seSBzdWJzOiBMaW5lW107XG5cbiAgY29uc3RydWN0b3IobWFpbjogTGluZSwgc3ViczogTGluZVtdKSB7XG4gICAgdGhpcy5tYWluID0gbWFpbjtcbiAgICB0aGlzLnN1YnMgPSBzdWJzO1xuICB9XG5cbiAgbGluZXMoKSB7XG4gICAgcmV0dXJuIFt0aGlzLm1haW5dLmNvbmNhdCh0aGlzLnN1YnMpO1xuICB9XG5cbiAgdG9KU09OKHRyYWluczogVHJhaW5bXSwgYXR0cnM6IERpYWdyYW1BdHRycykge1xuICAgIHJldHVybiB7XG4gICAgICAnbWFpbkxpbmUnOiB0aGlzLm1haW4udG9KU09OKCksXG4gICAgICAnc3ViTGluZXMnOiB0aGlzLnN1YnMubWFwKHN1YiA9PiBzdWIudG9KU09OKCkpLFxuICAgICAgJ3RyYWlucyc6IHRyYWlucy5tYXAodHJhaW4gPT4gdHJhaW4udG9KU09OKCkpLFxuICAgICAgLi4uYXR0cnMudG9KU09OKClcbiAgICB9O1xuICB9XG5cbiAgZmluZExpbmVGcm9tU3RhdGlvbihzdGF0aW9uOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lcygpLmZpbmQobGluZSA9PiBsaW5lLmhhc1N0YXRpb24oc3RhdGlvbikpXG4gIH1cblxuICBmaW5kU3ViKGxpbmVJZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuc3Vicy5maW5kKGxpbmUgPT4gbGluZS5pZCA9PSBsaW5lSWQpXG4gIH1cblxuICBicmFuY2hTdGF0aW9uKGxpbmVJZDogbnVtYmVyKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBsaW5lID0gdGhpcy5maW5kU3ViKGxpbmVJZCk7XG4gICAgaWYobGluZSA9PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XG4gICAgY29uc3QgbWFpblN0YXRpb25zID0gdGhpcy5tYWluLnN0YXRpb25zLm1hcChzdCA9PiBzdC5pZCk7XG4gICAgcmV0dXJuIG1haW5TdGF0aW9ucy5maW5kKHN0ID0+IHN0ID09IGxpbmUuc3RhdGlvbnNbMF0uaWQpIHx8XG4gICAgICBtYWluU3RhdGlvbnMuZmluZChzdCA9PiBzdCA9PSBsaW5lLnN0YXRpb25zW2xpbmUuc3RhdGlvbnMubGVuZ3RoIC0gMV0uaWQpXG4gIH1cblxuICBjb21wYXJlU3RhdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IE9yZGVyIHwgbnVsbCB7XG4gICAgY29uc3QgeExpbmUgPSB0aGlzLmZpbmRMaW5lRnJvbVN0YXRpb24oeCk7XG4gICAgY29uc3QgeUxpbmUgPSB0aGlzLmZpbmRMaW5lRnJvbVN0YXRpb24oeSk7XG4gICAgaWYoeExpbmUgPT0gdW5kZWZpbmVkKSB0aGlzLnRocm93Tm90Rm91bmRTdGF0aW9uKHgpO1xuICAgIGlmKHlMaW5lID09IHVuZGVmaW5lZCkgdGhpcy50aHJvd05vdEZvdW5kU3RhdGlvbih5KTtcbiAgICBpZih4TGluZS5pZCA9PSB5TGluZS5pZCkge1xuICAgICAgY29uc3QgY29tcCA9IHhMaW5lLmZpbmRTdGF0aW9uSWR4KHkpIC0geExpbmUuZmluZFN0YXRpb25JZHgoeCk7XG4gICAgICBpZihjb21wIDwgMCkgcmV0dXJuIE9yZGVyLkRlc2M7XG4gICAgICBpZihjb21wID09IDApIHJldHVybiBPcmRlci5FcXVhbDtcbiAgICAgIHJldHVybiBPcmRlci5Bc2M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IFtzdWJMaW5lLCBtYWluU3RhdGlvbl0gPSB4TGluZS5pZCA9PSB0aGlzLm1haW4uaWQgPyBbeUxpbmUsIHhdIDogW3hMaW5lLCB5XTtcbiAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuYnJhbmNoU3RhdGlvbihzdWJMaW5lLmlkKSE7XG4gICAgICBjb25zdCBzdWJPcmRlciA9IGJyYW5jaCA9PSBzdWJMaW5lLnN0YXRpb25zWzBdLmlkID8gT3JkZXIuRGVzYyA6IE9yZGVyLkFzYztcbiAgICAgIGNvbnN0IG1haW5PcmRlciA9IE9yZGVyLm51bWJlcihtYWluU3RhdGlvbiwgYnJhbmNoKTtcbiAgICAgIGlmKHN1Yk9yZGVyID09IG1haW5PcmRlcikgcmV0dXJuIG51bGw7XG4gICAgICBpZihtYWluU3RhdGlvbiA9PSB4KSByZXR1cm4gT3JkZXIucmV2ZXJzZShzdWJPcmRlcik7XG4gICAgICByZXR1cm4gc3ViT3JkZXI7XG4gICAgfVxuICB9XG5cbiAgdGhyb3dOb3RGb3VuZFN0YXRpb24oaWQ6IG51bWJlcik6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE5vdCBmb3VuZCBzdGF0aW9uLiBpZD0ke2lkfWApO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUcmFpbiB7XG4gIHJlYWRvbmx5IHN0b3BzOiBUcmFpblN0b3BzO1xuICByZWFkb25seSBzcGVlZDogbnVtYmVyO1xuICByZWFkb25seSBjb3VudDogbnVtYmVyO1xuICByZWFkb25seSBuYW1lPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHN0b3BzOiBUcmFpblN0b3BzLCBzcGVlZDogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBuYW1lPzogc3RyaW5nKSB7XG4gICAgdGhpcy5zdG9wcyA9IHN0b3BzO1xuICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcbiAgICB0aGlzLmNvdW50ID0gY291bnQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICBjb25zdCBzdG9wcyA9IHRoaXMuc3RvcHMudG9KU09OKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICdzdGF0aW9ucyc6IHN0b3BzLnN0YXRpb25zLFxuICAgICAgJ2JyYW5jaGVzJzogMCA8IHN0b3BzLmJyYW5jaGVzLmxlbmd0aCA/IHN0b3BzLmJyYW5jaGVzIDogdW5kZWZpbmVkLFxuICAgICAgJ3NwZWVkJzogdGhpcy5zcGVlZCxcbiAgICAgICdjb3VudCc6IHRoaXMuY291bnQsXG4gICAgICAnbmFtZSc6IHRoaXMubmFtZVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZW51bSBPcmRlciB7XG4gIERlc2MgPSAtMSxcbiAgRXF1YWwgPSAwLFxuICBBc2MgPSAxXG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgT3JkZXIge1xuICBleHBvcnQgZnVuY3Rpb24gcmV2ZXJzZShvcmRlcjogT3JkZXIpIHtcbiAgICBzd2l0Y2ggKG9yZGVyKSB7XG4gICAgICBjYXNlIE9yZGVyLkFzYzogcmV0dXJuIE9yZGVyLkRlc2M7XG4gICAgICBjYXNlIE9yZGVyLkVxdWFsOiByZXR1cm4gT3JkZXIuRXF1YWw7XG4gICAgICBjYXNlIE9yZGVyLkRlc2M6IHJldHVybiBPcmRlci5Bc2M7XG4gICAgfVxuICB9XG5cbiAgZXhwb3J0IGZ1bmN0aW9uIG51bWJlcih4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgIGlmKHggPCB5KSByZXR1cm4gT3JkZXIuQXNjO1xuICAgIGlmKHggPT0geSkgcmV0dXJuIE9yZGVyLkVxdWFsO1xuICAgIHJldHVybiBPcmRlci5EZXNjO1xuICB9XG59XG4iLCJpbXBvcnQge0xpbmVzLCBPcmRlcn0gZnJvbSBcIi4vbGluZXNcIjtcblxuZXhwb3J0IGNsYXNzIFRyYWluU3RvcHMge1xuICByZWFkb25seSBsaW5lczogTGluZXM7XG4gIHJlYWRvbmx5IHN0b3BzOiBudW1iZXJbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKGxpbmVzOiBMaW5lcywgc3RvcHM6IG51bWJlcltdW10pIHtcbiAgICB0aGlzLmxpbmVzID0gbGluZXM7XG4gICAgdGhpcy5zdG9wcyA9IHN0b3BzO1xuICB9XG5cbiAgcHVzaChzdGF0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBsYXN0QnJhbmNoID0gMCA8IHRoaXMuc3RvcHMubGVuZ3RoID8gdGhpcy5zdG9wc1t0aGlzLnN0b3BzLmxlbmd0aCAtIDFdIDogbnVsbDtcbiAgICBpZihsYXN0QnJhbmNoID09IG51bGwpIHtcbiAgICAgIHRoaXMuc3RvcHMucHVzaChbc3RhdGlvbl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBsYXN0U3RvcCA9IGxhc3RCcmFuY2hbbGFzdEJyYW5jaC5sZW5ndGggLSAxXTtcbiAgICAgIHN3aXRjaCAodGhpcy5saW5lcy5jb21wYXJlU3RhdGlvbihsYXN0U3RvcCwgc3RhdGlvbikpIHtcbiAgICAgICAgY2FzZSBPcmRlci5Bc2M6XG4gICAgICAgICAgbGFzdEJyYW5jaC5wdXNoKHN0YXRpb24pO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE9yZGVyLkVxdWFsOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRoaXMuc3RvcHMucHVzaChbc3RhdGlvbl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHRvSlNPTigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgJ3N0YXRpb25zJzogdGhpcy5zdG9wc1swXSxcbiAgICAgICdicmFuY2hlcyc6IHRoaXMuc3RvcHMuc2xpY2UoMSlcbiAgICB9XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGV4aXN0cyAoZGV2ZWxvcG1lbnQgb25seSlcblx0aWYgKF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIHBhcGEgZnJvbSAncGFwYXBhcnNlJztcbmltcG9ydCB7Rmlyc3RQYXJzZXJ9IGZyb20gXCIuL2NzdjJqc29uL2ZpcnN0UGFyc2VyXCI7XG5pbXBvcnQge0RpYWdyYW1BdHRyc30gZnJvbSBcIi4vY3N2Mmpzb24vZGlhZ3JhbUF0dHJzXCI7XG5cbmNvbnN0IE9QVElPTlMgPSB7aGVhZGVyczoge1wiQ29udGVudC1UeXBlXCI6IFwidGV4dC9jc3ZcIn19O1xuXG5jb25zdCB1cmxGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VybF9mb3JtJyk7XG51cmxGb3JtICYmIHVybEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2F2ZUpzb25FdmVudCk7XG5cbmZ1bmN0aW9uIHNhdmVKc29uRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBzYXZlSlNPTigpO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZUZyb21FbGVtZW50SWQoaWQ6IHN0cmluZykge1xuICBjb25zdCBpbnB1dCA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7XG4gIHJldHVybiBpbnB1dC52YWx1ZTtcbn1cblxuZnVuY3Rpb24gc2F2ZUpTT04oKSB7XG4gIGNvbnN0IHVybCA9IGdldFZhbHVlRnJvbUVsZW1lbnRJZCgndXJsJyk7XG4gIGNvbnN0IHRpdGxlID0gZ2V0VmFsdWVGcm9tRWxlbWVudElkKCd0aXRsZScpO1xuICBjb25zdCBhdXRob3IgPSBnZXRWYWx1ZUZyb21FbGVtZW50SWQoJ2F1dGhvcicpO1xuICBjb25zdCBjb21wYW55ID0gZ2V0VmFsdWVGcm9tRWxlbWVudElkKCdjb21wYW55Jyk7XG4gIGNvbnN0IHJlZ2lvbiA9IGdldFZhbHVlRnJvbUVsZW1lbnRJZCgncmVnaW9uJyk7XG4gIGNvbnN0IGF0dHJzID0gbmV3IERpYWdyYW1BdHRycyh0aXRsZSwgYXV0aG9yLCBjb21wYW55LCByZWdpb24pO1xuICBmZXRjaCh1cmwsIE9QVElPTlMpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgIHJlc3BvbnNlLnRleHQoKS50aGVuKHRleHQgPT4ge1xuICAgICAgY29uc3QgcmVjb3JkcyAgPSBwYXBhLnBhcnNlPHN0cmluZ1tdPih0ZXh0KS5kYXRhO1xuICAgICAgY29uc3QgZmlyc3QgPSBuZXcgRmlyc3RQYXJzZXIocmVjb3JkcywgYXR0cnMpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gSlNPTi5zdHJpbmdpZnkoZmlyc3QucGFyc2UoKSwgbnVsbCwgMik7XG4gICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtyZXN1bHRdLCB7dHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nfSk7XG4gICAgICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgYS5kb3dubG9hZCA9ICdmaWxlLmpzb24nO1xuICAgICAgYS5jbGljaygpO1xuICAgIH0pO1xuICB9KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==