import CLIChooser from "./src/CLIChooser.mjs";
import ReactCLI from "@makechtec/tezcatl-react";
import DefaultCLI from "@makechtec/tezcatl-cli";

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