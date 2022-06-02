import CLI from "@makechtec/tezcatl-cli";

export class Chooser{
    CLIs: Array<CLIConfig>;

    availableCLIs(CLIs: Array<CLIConfig> = []){
        this.CLIs = CLIs;
    }

    runCLI(){
        for(let i = 0; i < this.CLIs.length; i++){
            let cli = this.CLIs[i];
            if(CLI.isFlag(cli.flag)){
                cli.entry.run();
                break;
            }
        }
    }
};

export interface CLIConfig{
    name: string;
    flag: string;
    description: string;
    entry: CLIRunner;
}

export interface CLIRunner{
    run(): void;
}

export const CLIChooser = new Chooser();

export default CLIChooser;