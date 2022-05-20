import fs from "node:fs";
import { DEFAULT_TEMPLATE_DIR, LOCAL_TEMPLATE_DIR } from "./constants/constants.mjs";

export const Reader = {
    fill: function(templateName, placeholders) {
        let content = this.readTemplate(templateName);
        content = this.changePlaceholders(content, placeholders);
        return content;
    },
    readTemplate: function(templateName) {

        let templatePath = "";

        if(fs.existsSync(LOCAL_TEMPLATE_DIR)){
            templatePath = this.getTemplatePath(templateName, LOCAL_TEMPLATE_DIR);
        }
        else if(fs.existsSync(DEFAULT_TEMPLATE_DIR)){
            templatePath = this.getTemplatePath(templateName, DEFAULT_TEMPLATE_DIR);
        }
        else{
            console.error("Template directory not found");
            return "";
        }

        return fs.readFileSync(templatePath, "utf8");
        
    },
    getTemplatePath: function(templateName, templateDir = DEFAULT_TEMPLATE_DIR) {
        return templateDir + "/" + templateName + ".temp";
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
