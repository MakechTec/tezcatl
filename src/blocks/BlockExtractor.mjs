
import ConditionalBlock, {IF_PATTERN,IF_STATEMENT, END_IF_PATTERN, END_IF_STATEMENT} from "./ConditionalBlock.mjs";
import IterativeBlock, { FOREACH_PATTERN_GEN, END_FOREACH_STATEMENT } from "./IterativeBlock.mjs";

export const BlockExtractor = {
    checkSintax: function(content) {
        let matchAll = content.matchAll(ConditionalBlock.IF_PATTERN);
        let matchAllEndIf = content.matchAll(ConditionalBlock.END_IF_PATTERN);

        if(matchAll.length !== matchAllEndIf.length){
            console.error("Sintax error: @if and @endif are not balanced");
        }

    },
    processConditions: function(content) {
        let newContent = content;
        this.checkSintax(newContent);

        let numberOfIfs = this.countMatches(newContent, IF_PATTERN);

        for(let i = 0; i < numberOfIfs; i++){
            let ifBlock = this.extractConditionalBlock(newContent);
            ifBlock.fillBlocks();
            
            newContent = newContent.replace(ifBlock.content, ifBlock.getFinalContent());
        }

        return newContent;
    },
    extractConditionalBlock: function(content){
        let newContent = content;
        let ifIndex = newContent.search(IF_PATTERN);
        let endIfIndex = newContent.indexOf(END_IF_STATEMENT);

        let contentWithCondition = newContent.substring(ifIndex, endIfIndex) + END_IF_STATEMENT;
        return new ConditionalBlock(contentWithCondition);
    },
    countMatches: function(str, pattern) {
        const re = new RegExp(pattern, 'g');
        return ((str || '').match(re) || []).length
    },
    processIterations: function(content){
        let newContent = content;
        let numberOfForeach = this.countMatches(newContent, FOREACH_PATTERN_GEN);

        for(let i = 0; i < numberOfForeach; i++){
            let iterativeBlock = this.extractIterativeBlock(newContent);
            newContent = newContent.replace(iterativeBlock.content, iterativeBlock.getFinalContent());
        }

        return newContent;
    },
    extractIterativeBlock: function(content){
        let newContent = content;
        let foreachIndex = newContent.search(FOREACH_PATTERN_GEN);
        let endForeachIndex = newContent.indexOf(END_FOREACH_STATEMENT);

        let contentWithFor = newContent.substring(foreachIndex, endForeachIndex) + END_FOREACH_STATEMENT;
        return new IterativeBlock(contentWithFor);
    }
};

export default BlockExtractor;