(()=>{var e={165:(e,t,r)=>{!function(){"use strict";var e={d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},n={};e.r(n),e.d(n,{ARGUMENT_FLAG:function(){return c},Argument:function(){return l},CLI:function(){return u},Pattern:function(){return a},Reader:function(){return s},Writter:function(){return f}});var o=r(742),i=r(561);var u={getArgumentValue:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv,r=t.find((function(t){return a.testArg(e,t)}));if(void 0===r)return new l(e,"");var n=r.split("=")[1];return new l(e,n)},getArgumentsGroup:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.filter((function(t){return a.testArg(e,t)})).map((function(t){return t.replace(e,"")})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new l(t,r)}))},getFlagsGroup:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv;return e.filter((function(e){return a.testFlag(e)})).map((function(e){return e.replace(c,"")})).map((function(e){return new l(e,!0)}))},isFlag:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:o.argv;return t.includes(c+e)},getAllArguments:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o.argv,t=e.slice(2);return t.filter((function(e){return a.testIsArg(e)})).map((function(e){var t=e.split("=")[0],r=e.split("=")[1];return new l(t,r)}))}},c="--",a={testStart:function(e,t){return new RegExp("^"+e).test(t)},testArg:function(e,t){return new RegExp("^"+e).test(t)},testIsArg:function(e){return e.includes("=")},testFlag:function(e){return new RegExp("^"+c).test(e)},testHasDirectory:function(e){return new RegExp("/").test(e)},replacePlaceholder:function(e,t){var r=new RegExp("\\$\\{"+t.name+"\\}","g");return e.replace(r,t.value)},countMatches:function(e,t){var r=new RegExp(t,"g");return((e||"").match(r)||[]).length}},s={readTemplate:function(e){this.read(e)},read:function(e){return i.existsSync(e)?i.readFileSync(e,"utf8"):(console.error("file not found in : "+e),"")},changePlaceholders:function(e,t){var r=e;return t.forEach((function(e){r=a.replacePlaceholder(r,e)})),r},readConfig:function(e){}},f={writeFile:function(e,t){if(a.testHasDirectory(e)){var r=e.lastIndexOf("/"),n=e.substring(0,r);this.createDirectory(n)}i.writeFileSync(e,t)},createDirectory:function(e){i.mkdirSync(e,{recursive:!0})},insertInLine:function(e,t,r){if(t-=1,a.testHasDirectory(e)){var n=e.lastIndexOf("/"),o=e.substring(0,n);this.createDirectory(o)}var u=i.readFileSync(e,"utf8").split(/\r?\n/);u.splice(t,0,r);var c=u.join("\n");i.writeFileSync(e,c)}},l=function(e,t,r){return Object.defineProperty(e,"prototype",{writable:!1}),e}((function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.name=t,this.value=r}));t.ARGUMENT_FLAG=n.ARGUMENT_FLAG,t.Argument=n.Argument,t.CLI=n.CLI,t.Pattern=n.Pattern,t.Reader=n.Reader,t.Writter=n.Writter,Object.defineProperty(t,"__esModule",{value:!0})}()},468:(e,t)=>{"use strict";t.__esModule=!0,t.TEMPLATE_EXTENSION=t.CONFIG_FILE=void 0,t.CONFIG_FILE="tezcatl.config.json",t.TEMPLATE_EXTENSION=".tzl"},98:(e,t,r)=>{"use strict";t.__esModule=!0,t.CLIChooser=t.PRESET_DIR_PREFIX=t.Chooser=void 0;var n=r(165),o=r(742),i=r(468),u=function(){function e(){}return e.prototype.find=function(){var e=this.readConfig(),r=n.CLI.getArgumentValue("preset");return""===r&&""===(r=e.preset)&&(r="default"),t.PRESET_DIR_PREFIX+r},e.prototype.readConfig=function(){var e=(0,o.cwd)()+"/"+i.CONFIG_FILE,t=n.Reader.read(e);try{return JSON.parse(t)}catch(e){return console.error(e),{preset:""}}},e}();t.Chooser=u,t.PRESET_DIR_PREFIX="@makechtec/tezcatl-preset-",t.CLIChooser=new u},561:e=>{"use strict";e.exports=require("node:fs")},742:e=>{"use strict";e.exports=require("node:process")}},t={},r=function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}(98);exports.CLIChooser=r.CLIChooser,exports.Chooser=r.Chooser,exports.PRESET_DIR_PREFIX=r.PRESET_DIR_PREFIX,exports.__esModule=r.__esModule,Object.defineProperty(exports,"__esModule",{value:!0})})();