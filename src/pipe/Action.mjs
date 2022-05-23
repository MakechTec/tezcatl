

export default class Action{

    action = () => {};
    args = [];

    constructor(action = () => {}, ...args){
        this.action = action;
        this.args = args;
    }
        
}