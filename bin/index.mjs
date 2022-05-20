#! /usr/bin/env node

import CLI from "../src/CLI.mjs";
import ReactCLI from "../react/ReactCLI.mjs";
import Default from "../default/Default.mjs";

if(CLI.isFlag("react")) {
    ReactCLI.run();
} else {
    Default.run();
}