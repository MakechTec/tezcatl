## Presets ##

Actually there are three presets.

- `default`: The default preset.
- `react`: The preset for React.
- `puzzle`: The preset for Puzzle.

### Default ###

It use two required arguments:

- template: The template to read, it must the file name without extension. This file is searched in the `./templates` directory, if it's not present then, in the `node_modules/@makechtec/tezcatl-preset-default/templates` directory.

- file: The file name to create from the root directory.

All other arguments are for the template itself.

### React ###

It use one required argument:

- com: The component name.

All other arguments are for the template itself.

For this preset it use the react-component.tzl template and the exported file has the component name.

This preset is yet in development.

### Puzzle ###

This is the more interesting preset. Because it add code blocks. 

It has three required arguments:

- f: The current file to modify.
- b: The block of code to add, it's in fact the template name without extension.
- l: The line number to add the block in the file.

For example suppose the following template:

    @foreach(import)
    import ${import.name} from '${import.path}';
    @endforeach

Then in the command line:

    $ tzl f=./src/App.js b=import l=1 import1.name=React import1.path=react  

Then the result is:

    import React from 'react';

It's added in the line 1 of ./src/App.js.

We can avoid the f argument using the file option in the tezcatl.config.json file.

{
    preset: 'puzzle',
    file: './src/App.js',
}

Then in the command line:

    $ tzl b=import l=1 import1.name=React import1.path=react  

Then the result is the same:

    import React from 'react';