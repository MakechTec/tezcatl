import {CLI} from "@makechtec/tezcatl-cli";
import {cwd} from "node:process";

export class Chooser{
 
    find(){
        let preset = CLI.getArgumentValue("preset");

        if(preset.value === ""){
            preset.value = "default";
        }

        let presetLocation = PRESET_DIR_PREFIX + preset.value;

        import(presetLocation)
        .then(preset => {
            preset.run();
        })
        .catch((error) => {
            import("@makechtec/tezcatl-preset-default")
            .then(defaultPreset => {
                defaultPreset.run();
            })
            .catch((error) => {
                console.error("error trying to load default preset");
                console.error(error);
            });
        });
    }
};

export const PRESET_DIR_PREFIX = cwd() + "/node_modules/@makechtec/tezcatl-preset-";

export const CLIChooser = new Chooser();