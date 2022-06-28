import {CLI} from "@makechtec/tezcatl-cli";
import {Settings} from "@makechtec/tezcatl-settings";

export class Chooser{
 
    find(){

        let config = Settings.get();

        let presetName = CLI.getArgumentValue("preset").value;

        if(presetName === ""){
            presetName = config.preset;

            if(presetName === ""){
                presetName = "default";
            }
        }

        return presetName;
    }
};

export const CLIChooser = new Chooser();
