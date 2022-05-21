
import ConditionalBlock, {IF_PATTERN,IF_STATEMENT, END_IF_PATTERN, END_IF_STATEMENT} from "./ConditionalBlock.mjs";

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
    }
};

export default BlockExtractor;