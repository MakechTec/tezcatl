import Pattern from "./pattern/Pattern.mjs";
import Argument from "./Argument.mjs";
import {argv} from "node:process";
import {ARGUMENT_FLAG} from "./constants/constants.mjs";

export const CLI = {
    getArgumentValue: function(name, params = argv) {
        let nameParam = params.find((param) => Pattern.testArg(name, param));
        let value = nameParam.split("=")[1]
        return new Argument(name, value);
    },
    getArgumentsGroup: function(prefix, params = argv) {
        return params.filter( (param) => Pattern.testArg(prefix, param))
                    .map((placeholder) => placeholder.replace(prefix, ""))
                    .map((placeholder) => {
                        let name = placeholder.split("=")[0];
                        let value = placeholder.split("=")[1];
                        return new Argument(name, value);
                    });
    },
    getFlagsGroup: function(params = argv) {
        return params.filter( (param) => Pattern.testFlag(param))
                    .map((flag) => flag.replace(ARGUMENT_FLAG, ""))
                    .map((flag) => new Argument(flag, true));
    },
    isFlag: (name, params = argv) => params.includes(ARGUMENT_FLAG + name)
    
};

export default CLI;