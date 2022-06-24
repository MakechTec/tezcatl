import * as DefaultCLI from "@makechtec/tezcatl-preset-default";
import * as ReactCLI from "@makechtec/tezcatl-preset-react";
import * as PuzzleCLI from "@makechtec/tezcatl-preset-puzzle";

export const presets = [
    {
        name: "default",
        cli: DefaultCLI,
    },
    {
        name: "react",
        cli: ReactCLI,
    },
    {
        name: "puzzle",
        cli: PuzzleCLI,
    }
];

export default presets;