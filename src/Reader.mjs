import fs from "node:fs";
import { DEFAULT_TEMPLATE_DIR, LOCAL_TEMPLATE_DIR } from "./constants/constants.mjs";
import { cwd } from "node:process";
import Pattern from "./pattern/Pattern.mjs";

export const Reader = {
    fill: function(templateName, placeholders) {
        let content = this.readTemplate(templateName);
        content = this.changePlaceholders(content, placeholders);
        return content;
    },
    readTemplate: function(templateName) {

        let templatePath = "";

        if(fs.existsSync(LOCAL_TEMPLATE_DIR)){
            console.info("Reading templates from: " + LOCAL_TEMPLATE_DIR);
            templatePath = this.getTemplatePath(templateName, LOCAL_TEMPLATE_DIR);
        }
        else if(fs.existsSync(DEFAULT_TEMPLATE_DIR)){
            console.info("Reading templates from: " + LOCAL_TEMPLATE_DIR);
            templatePath = this.getTemplatePath(templateName, DEFAULT_TEMPLATE_DIR);
            console.log(DEFAULT_TEMPLATE_DIR);
        }
        else{
            console.error("Template directory not found for: "+ cwd());
            return "";
        }

        return fs.readFileSync(templatePath, "utf8");
        
    },
    getTemplatePath: function(templateName, templateDir = DEFAULT_TEMPLATE_DIR) {
        return templateDir + "/" + templateName + ".temp";
    },
    changePlaceholders: function(content, placeholders) {

        let newContent = content;
        placeholders.forEach((placeholder) => {
            newContent = Pattern.replacePlaceholder(newContent, placeholder);
        });
        return newContent;
    }
}

export default Reader;
