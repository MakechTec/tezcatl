# Puzzle #

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