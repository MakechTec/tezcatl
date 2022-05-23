import CLI from "../src/CLI.mjs";
import Pipe from "../src/pipe/Pipe.mjs";
import Reader from "../src/Reader.mjs";
import { Writter } from "../src/Writter.mjs";
import BlockExtractor from "../src/blocks/BlockExtractor.mjs";

export const Default = {
    run: function() {

        let template = CLI.getArgumentValue("name");
        let placeholders = CLI.getArgumentsGroup("placeholder");
        let file = CLI.getArgumentValue("file");
        let content = Reader.readTemplate(template.value);
        let p = new Pipe(content);

        p.addAction((content) => {
            return BlockExtractor.processConditions(content);
        })
        .addAction((content, placeholders) => {
            return Reader.changePlaceholders(content, placeholders);
        }, placeholders)
        .addAction((content, filename) => {
            return Writter.writeFile(filename, content);
        }, file.value);

        p.execActions();
    }
};

export default Default;