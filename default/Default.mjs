import CLI from "../src/CLI.mjs";
import Reader from "../src/Reader.mjs";
import { Writter } from "../src/Writter.mjs";

export const Default = {
    run: function() {
        let template = CLI.getArgumentValue("name");
        let placeholders = CLI.getArgumentsGroup("placeholder");
        let file = CLI.getArgumentValue("file");

        let content = Reader.readTemplate(template.value);
        content = Reader.changePlaceholders(content, placeholders);

        Writter.writeFile(file.value, content);
    }
};

export default Default;