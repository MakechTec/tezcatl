import Action from "./Action.mjs";


export default class Pipe{
    
    actions = [];
    mutable = null;

    constructor(mutable = null, actions = []){
        this.mutable = mutable;
        this.actions = actions;
    }

    addAction(action, ...extras){
        this.actions.push(new Action(action, ...extras));
        return this;
    }

    setActions(actions){
        this.actions = actions;
    }

    execActions(){
        this.actions.forEach( (action) => {
            this.mutable = action.action(this.mutable, ...action.args);
        } );
    }

}