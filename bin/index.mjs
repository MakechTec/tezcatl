#! /usr/bin/env node

import CLI from "../src/CLI.mjs";
import ReactCLI from "../react/ReactCLI.mjs";
import Default from "../default/Default.mjs";
import {cwd} from "node:process";

console.log("The current cwd is: " + cwd());

if(CLI.isFlag("react")) {
    ReactCLI.run();
} else {
    Default.run();
}