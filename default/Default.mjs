import CLI, {Reader, Writter} from "@makechtec/tezcatl-cli";
import Pipe from "@makechtec/pipe/pipe";
import BlockExtractor from "../src/blocks/BlockExtractor.mjs";

export const Default = {
    run: function() {

        if(CLI.isFlag("test")){
            let content = Reader.readTemplate("foreach");
            let p = new Pipe(content);
            let filename = "test.js";

            p.addAction((content) => {
                return BlockExtractor.processIterations(content);
            })
            .addAction((content, filename) => {
                return Writter.writeFile(filename, content);
            }, filename);
    
            p.execActions();
            return;
        }

        let template = CLI.getArgumentValue("name");
        let placeholders = CLI.getArgumentsGroup("ph");
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