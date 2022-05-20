#! /usr/bin/env node

import {argv} from "node:process";
import Cleaner from "../Cleaner.mjs";
import Reader from "../Reader.mjs";
import { Writter } from "../Writter.mjs";
import Settings from "../Settings.mjs";

Settings.runConfig();

console.log(Cleaner.getTemplateNameFromParams(argv));

let name = Cleaner.getTemplateNameFromParams(argv);
let placeholders = Cleaner.getPlaceholdersFromParams(argv);
let fileName = Cleaner.getFilenameFromParams(argv);

let content = Reader.readTemplate(name);
content = Reader.changePlaceholders(content, placeholders);

Writter.writeFile(fileName, content);