import {CLI, Reader} from "@makechtec/tezcatl-cli";
import {cwd} from "node:process";
import {CONFIG_FILE} from "@makechtec/tezcatl-constants";

export class Chooser{
 
    find(){

        let config = this.readConfig();

        let presetName = CLI.getArgumentValue("preset");

        if(presetName === ""){
            presetName = config.preset;

            if(presetName === ""){
                presetName = "default";
            }
        }

        let presetLocation = PRESET_DIR_PREFIX + presetName;

        return presetLocation;
    }

    readConfig(){
        let configFile = cwd() + "/" + CONFIG_FILE;
        let content = Reader.read(configFile);

        try{
            return JSON.parse(content);
        }
        catch(e){
            console.error(e);
            return {
                preset: ""
            };
        }

    }
};

export const PRESET_DIR_PREFIX = "@makechtec/tezcatl-preset-";

export const CLIChooser = new Chooser();
