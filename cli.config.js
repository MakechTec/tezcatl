import CLIChooser from "./src/CLIChooser.mjs";
import ReactCLI from "./react/ReactCLI.mjs";
import DefaultCLI from "./default/DefaultCLI.mjs";

CLIChooser.availableCLIs([
        {
            name: "react",
            flag: "react",
            description: "Run the React CLI",
            entry: ReactCLI,
        },
        {
            name: "default",
            flag: "default",
            description: "Run the default CLI",
            entry: DefaultCLI,
        }
    ]);