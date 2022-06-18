(()=>{var e={165:(e,t,r)=>{!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{ARGUMENT_FLAG:function(){return a},Argument:function(){return p},CLI:function(){return i},Pattern:function(){return s},Reader:function(){return f},Writter:function(){return l},default:function(){return c}});var o=r(742),u=r(561);var i={getArgumentValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv,r=t.find((function(t){return s.testArg(e,t)}));if(void 0===r)return new p(e,"");var n=r.split("=")[1];return new p(e,n)},getArgumentsGroup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.filter((function(t){return s.testArg(e,t)})).map((function(t){return t.replace(e,"")})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new p(t,r)}))},getFlagsGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv;return e.filter((function(e){return s.testFlag(e)})).map((function(e){return e.replace(a,"")})).map((function(e){return new p(e,!0)}))},isFlag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.includes(a+e)},getAllArguments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv,t=e.slice(2);return t.filter((function(e){return s.testIsArg(e)})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new p(t,r)}))}},c=i,a="--",s={testStart:function(e,t){return new RegExp("^"+e).test(t)},testArg:function(e,t){return new RegExp("^"+e).test(t)},testIsArg:function(e){return e.includes("=")},testFlag:function(e){return new RegExp("^"+a).test(e)},testHasDirectory:function(e){return new RegExp("/").test(e)},replacePlaceholder:function(e,t){var r=new RegExp("\\$\\{"+t.name+"\\}","g");return e.replace(r,t.value)},countMatches:function(e,t){var r=new RegExp(t,"g");return((e||"").match(r)||[]).length}},f={readTemplate:function(e){return u.existsSync(e)?u.readFileSync(e,"utf8"):(console.error("Template directory not found for: "+(0,o.cwd)()),"")},changePlaceholders:function(e,t){var r=e;return t.forEach((function(e){r=s.replacePlaceholder(r,e)})),r}},l={writeFile:function(e,t){if(s.testHasDirectory(e)){var r=e.lastIndexOf("/"),n=e.substring(0,r);this.createDirectory(n)}u.writeFileSync(e,t)},createDirectory:function(e){u.mkdirSync(e,{recursive:!0})}},p=function(e,t,r){return Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.value=r}));t.ARGUMENT_FLAG=n.ARGUMENT_FLAG,t.Argument=n.Argument,t.CLI=n.CLI,t.Pattern=n.Pattern,t.Reader=n.Reader,t.Writter=n.Writter,t.default=n.default,Object.defineProperty(t,"__esModule",{value:!0})}()},468:(e,t)=>{"use strict";t.__esModule=!0,t.TEMPLATE_EXTENSION=t.CONFIG_FILE=void 0,t.CONFIG_FILE="tezcatl.config.json",t.TEMPLATE_EXTENSION=".tzl"},98:(e,t,r)=>{"use strict";t.__esModule=!0,t.CLIChooser=t.PRESET_DIR_PREFIX=t.Chooser=void 0;var n=r(165),o=r(742),u=r(468),i=function(){function e(){}return e.prototype.find=function(){var e=this.readConfig(),r=n.CLI.getArgumentValue("preset");return""===r&&""===(r=e.preset)&&(r="default"),t.PRESET_DIR_PREFIX+r},e.prototype.readConfig=function(){var e=(0,o.cwd)()+"/"+u.CONFIG_FILE,t=n.Reader.read(e);try{return JSON.parse(t)}catch(e){return console.error(e),{preset:""}}},e}();t.Chooser=i,t.PRESET_DIR_PREFIX="@makechtec/tezcatl-preset-",t.CLIChooser=new i},561:e=>{"use strict";e.exports=require("node:fs")},742:e=>{"use strict";e.exports=require("node:process")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n](u,u.exports,r),u.exports}(98);exports.CLIChooser=r.CLIChooser,exports.Chooser=r.Chooser,exports.PRESET_DIR_PREFIX=r.PRESET_DIR_PREFIX,exports.__esModule=r.__esModule,Object.defineProperty(exports,"__esModule",{value:!0})})();