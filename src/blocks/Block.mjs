

export default class Block{
    id;
    originalContent;
    contentWithIds;
    blocks;
    finalContent;

    constructor(originalContent = "", id = 0 ){
        this.originalContent = originalContent;
        this.id = id;
        this.contentWithIds = "";
        this.blocks = [];
    }

    generateContent(){
        this.generateContentWithIds();
        this.changeBlocks();
        this.getFinalContent();
        return this.finalContent;
    }

    changeBlocks(){

        let newContent = this.contentWithIds;

        this.blocks.forEach((block) => {

            let blockContent = block.getFinalContent();
            newContent = newContent.replace(block.originalContent, blockContent);
        });
    }
}

export const countMatches = (str, pattern) => {
    const re = new RegExp(pattern, 'g');
    return ((str || '').match(re) || []).length
}