
import CLI from "../CLI.mjs";

export default class ConditionalBlock{

    constructor(content){
        this.content = content;
    }

    fillBlocks(){
        this.extractFlag(this.content);
        this.extractIfContent(this.content);

        if(this.content.includes(ELSE_STATEMENT)){
            this.extractElseContent(this.content);
        }
        else{
            this.elsecontent = "";
        }
    }

    extractFlag(content){
        let ifText = content.match(IF_STATEMENT);
        let flagName = ifText[0].replace("@if(", "").replace(")", "");
        this.flagName = flagName;
    }

    extractIfContent(content){
        let newContent = content;
        let ifText = newContent.match(IF_PATTERN_GEN);
        newContent = newContent.replace(ifText[0], "");

        if(newContent.includes(ELSE_STATEMENT)){
            let elseIndex = newContent.indexOf(ELSE_STATEMENT);
            this.ifcontent = newContent.substring(0, elseIndex);
        }
        else{
            let endIfIndex = newContent.indexOf(END_IF_STATEMENT);
            this.ifcontent = newContent.substring(0, endIfIndex);
        }
    }

    extractElseContent(content){
        let newContent = content;
        let elseIndex = newContent.indexOf(ELSE_STATEMENT);
        let notUsedString = newContent.substring(0, elseIndex);
        newContent = newContent.replace(notUsedString, "");
        content.replace(ELSE_STATEMENT, "");
        let endIfIndex = content.indexOf(END_IF_STATEMENT);
        this.elsecontent = content.substring(0, endIfIndex);
    }

    getFinalContent(){
        this.fillBlocks();
        let result = CLI.isFlag(this.flagName);
        
        let newText = result ? this.ifcontent : this.elsecontent;
        return "\n" + newText + "\n";
    }
}

export const IF_PATTERN = new RegExp("@if\\(.*\\)");
export const ELSE_PATTERN = new RegExp("@else");
export const END_IF_PATTERN = new RegExp("@endif");

export const IF_STATEMENT = "@if\\(.*\\)";
export const ELSE_STATEMENT = "@else";
export const END_IF_STATEMENT = "@endif";

export const IF_PATTERN_GEN = "\n*\s*@if\s*\(\s*.*\s*\)\s*\n*";