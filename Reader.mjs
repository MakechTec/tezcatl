import fs from "node:fs";

export const Reader = {
    readTemplate: function(templateName) {
        return fs.readFileSync("./templates/" + templateName + ".temp", "utf8");
    },
    changePlaceholders: function(content, placeholders) {

        placeholders.forEach((placeholder) => {
            let pattern = new RegExp("\\$\\{" + placeholder.name + "\\}", "g");
            content = content.replace(pattern, placeholder.value);
        });
        return content;
    }
}

export default Reader;
