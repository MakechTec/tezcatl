import CLI from "../src/CLI.mjs";
import Reader from "../src/Reader.mjs";
import { Writter } from "../src/Writter.mjs";
import * as reactConstants from "./constants.mjs";
import BlockExtractor from "../src/blocks/BlockExtractor.mjs";
import {argv} from "node:process";
import { Console } from "node:console";

export const ReactCLI = {
    run: function() {

        if(true){
            let component = CLI.getArgumentValue(reactConstants.COMPONENT);
            let content = Reader.readTemplate("if-component");
            let newContent = BlockExtractor.processConditions(content);

            Writter.writeFile(component.value, newContent);
            console.log(newContent);
        }
        else{
            let component = CLI.getArgumentValue(reactConstants.COMPONENT);
            let content = Reader.fill(reactConstants.TEMPLATE, [ component ]);
            Writter.writeFile(component.value + reactConstants.EXTENSION, content);
        }
    }
};

export default ReactCLI;