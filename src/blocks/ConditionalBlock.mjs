
import Id from "@makechtec/randomkey";
import CLI from "../CLI.mjs";
import Block from "./Block.mjs";

export default class ConditionalBlock extends Block{

    flagName;
    ifcontent;
    elsecontent = "";

    getFinalContent(){
        this.fillBlocks();
        let result = CLI.isFlag(this.flagName);
        
        let newText = result ? this.ifcontent : this.elsecontent;
        return "\n" + newText + "\n";
    }

    generateContentWithIds(){
        let newContent = this.originalContent;
        let numberOfIfs = this.countMatches(newContent, IF_PATTERN);

        for(let i = 0; i < numberOfIfs; i++){
            let ifBlock = extractConditionalBlock(newContent, Id.generate());
            ifBlock.fillBlocks();
            
            newContent = newContent.replace(ifBlock.content, ifBlock.getFinalContent());
        }
    }

    fillBlocks(){
        this.extractFlag();
        this.extractIfContent();

        if(this.originalContent.includes(ELSE_STATEMENT)){
            this.extractElseContent();
        }
    }

    extractFlag(){
        let ifText = this.content.match(IF_STATEMENT);
        let flagName = ifText[0].replace("@if(", "").replace(")", "");
        this.flagName = flagName;
    }

    extractIfContent(){
        let newContent = this.content;
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

    extractElseContent(){
        let newContent = this.originalContent;
        let elseIndex = newContent.indexOf(ELSE_STATEMENT);
        let notUsedString = newContent.substring(0, elseIndex) + ELSE_STATEMENT;

        newContent = newContent.replace(notUsedString, "");

        let endIfIndex = newContent.indexOf(END_IF_STATEMENT);
        this.elsecontent = newContent.substring(0, endIfIndex);
    }
}

export const IF_PATTERN = new RegExp("@if\\(.*\\)");
export const ELSE_PATTERN = new RegExp("@else");
export const END_IF_PATTERN = new RegExp("@endif");

export const IF_STATEMENT = "@if\\(.*\\)";
export const ELSE_STATEMENT = "@else";
export const END_IF_STATEMENT = "@endif";

export const IF_PATTERN_GEN = "\n*\s*@if\s*\(\s*.*\s*\)\s*\n*";

export const extractConditionalBlock = (content) => {
    let newContent = content;
    let ifIndex = newContent.search(IF_PATTERN);
    let endIfIndex = newContent.indexOf(END_IF_STATEMENT);

    let contentWithCondition = newContent.substring(ifIndex, endIfIndex) + END_IF_STATEMENT;
    return new ConditionalBlock(contentWithCondition);
};