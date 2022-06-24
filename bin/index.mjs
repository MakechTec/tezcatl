#! /usr/bin/env node

import {CLIChooser} from "../index.js";

const p = CLIChooser.find();

console.log("importing preset: " + p);

import(p)
        .then(currentPreset => {
            currentPreset.run();
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