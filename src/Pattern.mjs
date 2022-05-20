import {ARGUMENT_FLAG} from "./constants/constants.mjs";


export const Pattern = {
    testStart: function(search, target){
        let start = new RegExp("^" + search);
        return start.test(target);
    },
    testArg: function(search, target){
        let start = new RegExp("^" + search);
        return start.test(target);
    },
    testFlag: function(target){
        let start = new RegExp("^" + ARGUMENT_FLAG);
        return start.test(target);
    }
};

export default Pattern;