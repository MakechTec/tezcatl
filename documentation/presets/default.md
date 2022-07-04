# Default #

It use two required arguments:

- template: The template to read, it must the file name without extension. This file is searched in the `./templates` directory, if it's not present then, in the `node_modules/@makechtec/tezcatl-preset-default/templates` directory.

- file: The file name to create from the root directory.

All other arguments are for the template itself.


### Example ###

Suppose we have the following template file `./templates/component.tzl`:

@if(class)
export default class ${component}{

}
@else
export const ${component} = () => {

}
@endif


And we want to create a file  in `./src/App.js`:

Then the command line:

    $ tzl template=component file=src/App.js component=App --class

The result is, in the `./src/App.js` file:

    export default class App{

    }

but, if we want a constant then we ommit the `--class`flag:

    $ tzl template=component file=src/App.js component=App

The result is:

    export const App = () => {

    }

Notice only the first two arguments are referent to the preset, the rest are for the template.