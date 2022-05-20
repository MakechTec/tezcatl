import Placeholder from "./placeholder.mjs";

export const Cleaner = {
    isName: function(param) {
        let pattern = /^name=/;
        return pattern.test(param);
    },
    checkWarnings: function(params) {
        let nameParam = params.map(function(param){
            if (Cleaner.isName(param)) {
                return param;
            }
        });

        let message = "";

        if(nameParam.length > 1) {
            message = "duplicated name param";
        }
        else if(nameParam == 0) {
            message = "no name param";
        }
        else{
            message = "unknown error";
        }

        console.warn(message);
        
    },
    getTemplateNameFromParams: function(params) {
        this.checkWarnings(params);
        let nameParam = params.filter((param) => Cleaner.isName(param));

        return nameParam[0].split("=")[1];
    },
    isPlaceholder: function(param) {
        let pattern = /^placeholder/;
        return pattern.test(param);
    },
    getPlaceholdersFromParams: function(params) {
        return params.filter( (param) => Cleaner.isPlaceholder(param))
                                .map((placeholder) => placeholder.replace("placeholder", ""))
                                .map((placeholder) => {
                                    let name = placeholder.split("=")[0];
                                    let value = placeholder.split("=")[1];
                                    return new Placeholder(name, value);
                                });
    },
    isExtension: function(param) {
        let pattern = /^extension=/;
        return pattern.test(param);
    },
    getExtensionFromParams: function(params) {
        let extensionParam = params.filter((param) => Cleaner.isExtension(param));
        return extensionParam[0].split("=")[1];
    },
    isFilename: function(param) {
        let pattern = /^filename=/;
        return pattern.test(param);
    },
    getFilenameFromParams: function(params) {
        let filenameParam = params.filter((param) => Cleaner.isFilename(param));
        return filenameParam[0].split("=")[1];
    }
    
};

export default Cleaner;