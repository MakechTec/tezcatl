import fs from "node:fs";


export const Settings = {
    runConfig: function() {
        if(fs.existsSync("./tezcatl.config.js")){
            let config = require("./tezcatl.config.js");
            this.config = config;
        }
    }
}

export default Settings;