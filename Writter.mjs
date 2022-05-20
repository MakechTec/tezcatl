import fs from "node:fs";

export const Writter = {
    writeFile: function(fileName, content) {
        fs.writeFileSync(fileName, content);
    }
};