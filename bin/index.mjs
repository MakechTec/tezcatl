#! /usr/bin/env node

import fs from "node:fs";
import { cwd } from "node:process";

import CLIChooser from "../dist/cli-chooser";

const config = cwd() + "/cli.config.js";

if(fs.existsSync(config)){
    let codeOfConfiguration = fs.readFileSync(config, "utf8");
    eval(codeOfConfiguration);
    CLIChooser.runCLI();
}