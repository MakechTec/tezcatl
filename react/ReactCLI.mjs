import CLI from "../src/CLI.mjs";
import Reader from "../src/Reader.mjs";
import { Writter } from "../src/Writter.mjs";
import * as reactConstants from "./constants.mjs";
import BlockExtractor from "../src/blocks/BlockExtractor.mjs";
import Pipe from "../src/pipe/Pipe.mjs";
import {argv} from "node:process";

export const ReactCLI = {
    run: function() {

        let component = CLI.getArgumentValue(reactConstants.COMPONENT);
        let content = Reader.readTemplate(reactConstants.TEMPLATE);
        let p = new Pipe(content);

        p.addAction((content) => {
            return BlockExtractor.processConditions(content);
        })
        .addAction((content, placeholders) => {
            return Reader.changePlaceholders(content, placeholders);
        }, [ component ])
        .addAction((content, filename) => {
            return Writter.writeFile(filename, content);
        }, component.value + reactConstants.EXTENSION);

        p.execActions();
    }
};

export default ReactCLI;