
import ConditionalBlock, {IF_PATTERN, extractConditionalBlock} from "./ConditionalBlock.mjs";
import { FOREACH_PATTERN_GEN, extractIterativeBlock } from "./IterativeBlock.mjs";
import { countMatches } from "./Block.mjs";

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

        let numberOfIfs = countMatches(newContent, IF_PATTERN);

        for(let i = 0; i < numberOfIfs; i++){
            let ifBlock = extractConditionalBlock(newContent);
            ifBlock.fillBlocks();
            
            newContent = newContent.replace(ifBlock.content, ifBlock.getFinalContent());
        }

        return newContent;
    },
    processIterations: function(content){
        let newContent = content;
        let numberOfForeach = this.countMatches(newContent, FOREACH_PATTERN_GEN);

        for(let i = 0; i < numberOfForeach; i++){
            let iterativeBlock = extractIterativeBlock(newContent);
            newContent = newContent.replace(iterativeBlock.content, iterativeBlock.getFinalContent());
        }

        return newContent;
    }
};

export default BlockExtractor;