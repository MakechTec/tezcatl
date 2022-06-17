import {CLI} from "@makechtec/tezcatl-cli";

export class Chooser{
 
    find(){
        let preset = CLI.getArgumentValue("preset");

        if(preset.value === ""){
            preset.value = "default";
        }

        let presetLocation = PRESET_DIR_PREFIX + preset.value;

        return presetLocation;
    }
};

const PRESET_DIR_PREFIX = "@makechtec/tezcatl-preset-";

export const CLIChooser = new Chooser();