# React #

It use one required argument:

- com: The component name.

All other arguments are for the template itself.

For this preset it use the react-component.tzl template and the exported file has the component name.

This preset is yet in development.

### Example ##

The command line:

    $ tzl com=App

The result is the following: 

    export const App = () => {

    }

    export default App;

More options:

- template: another template to use instead of the default one.
- targetDir: the directory to create the file in.
- file: the file name to create if it's different than the component name.
- ext: the extension of the file by default is `.jsx`it must have dot.

A few examples:

    $ tzl com=App template=component file=src/App.js
    $ tzl com=App template=component file=App.js targetDir=src
    $ tzl com=App targetDir=src ext=.tsx

To export a class component add the `--class` flag:

    $ tzl com=App --class

The result is:

    export default class App extends React.Component{

    }

