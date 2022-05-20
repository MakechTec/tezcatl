import CLI from "../src/CLI.mjs";
import Reader from "../src/Reader.mjs";
import { Writter } from "../src/Writter.mjs";
import * as reactConstants from "./constants.mjs";

export const ReactCLI = {
    run: function() {
        let component = CLI.getArgumentValue(reactConstants.COMPONENT);
        let content = Reader.fill(reactConstants.TEMPLATE, [ component ]);
        Writter.writeFile(component.value + reactConstants.EXTENSION, content);
    }
};

export default ReactCLI;