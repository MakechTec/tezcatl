#! /usr/bin/env node

import {CLIChooser} from "../index.js";
import presets from "../presets.registry.js";

const p = CLIChooser.find();

console.info("importing preset: " + p);

const selectedPreset = presets.find((preset) => preset.name === p);

selectedPreset.cli.run();