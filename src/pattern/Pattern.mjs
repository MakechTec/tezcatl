import {ARGUMENT_FLAG} from "../constants/constants.mjs";

export const Pattern = {
    testStart: function(search, target){
        let start = new RegExp("^" + search);
        return start.test(target);
    },
    testArg: function(search, target){
        let start = new RegExp("^" + search);
        return start.test(target);
    },
    testIsArg: function(target){
        return target.includes("=");
    },
    testFlag: function(target){
        let start = new RegExp("^" + ARGUMENT_FLAG);
        return start.test(target);
    },
    testHasDirectory: function(target){
        let start = new RegExp("\/");
        return start.test(target);
    },
    replacePlaceholder: function(content, placeholder){
        let pattern = new RegExp("\\$\\{" + placeholder.name + "\\}", "g");
        return content.replace(pattern, placeholder.value);
    },
};

export default Pattern;