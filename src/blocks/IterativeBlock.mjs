import CLI from "../CLI.mjs";
import Pattern from "../pattern/Pattern.mjs";
import Argument from "../Argument.mjs";
import Block from "./Block.mjs";

export default class IterativeBlock extends Block{

    constructor(content){
        this.content = content;
    }

    extractLocal(){
        let newContent = this.content;
        let localText = newContent.match(FOREACH_STATEMENT);
        let localName = localText[0].replace("@foreach(", "").replace(")", "");
        return localName;
    }

    extractForContent(){
        let newContent = this.content;
        let forText = newContent.match(FOREACH_PATTERN_GEN);
        newContent = newContent.replace(forText[0], "");

        let endForIndex = newContent.indexOf(END_FOREACH_STATEMENT);
        return newContent.substring(0, endForIndex);
    }

    findPlaceholders(prefix){
        return CLI.getArgumentsGroup(prefix);
    }

    getFinalContent(){
        let localName = this.extractLocal();
        let forContent = this.extractForContent();
        let placeholders = this.findPlaceholders(localName);
        let newContent = "";

        let newPlaceholders = placeholders.map((placeholder) => {
            return new Argument(localName, placeholder.value);
        });

        newPlaceholders.forEach(( placeholder ) => {
            newContent += Pattern.replacePlaceholder(forContent, placeholder) + "\n";
        })

        return "\n" + newContent;

    }

}

export const FOREACH_STATEMENT = "@foreach\(.*\)";
export const END_FOREACH_STATEMENT = "@endforeach";
export const FOREACH_PATTERN_GEN = "\n*\s*@foreach\s*\(\s*.*\s*\)\s*\n*";

export const extractIterativeBlock = (content) => {
    let newContent = content;
    let foreachIndex = newContent.search(FOREACH_PATTERN_GEN);
    let endForeachIndex = newContent.indexOf(END_FOREACH_STATEMENT);

    let contentWithFor = newContent.substring(foreachIndex, endForeachIndex) + END_FOREACH_STATEMENT;
    return new IterativeBlock(contentWithFor);
}