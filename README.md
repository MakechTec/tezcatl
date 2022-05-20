# Tezcatl #

create file from template follow the example:

    $ npm install --global

Then:

    tezcatl name=react-component filename=App.jsx placeholdercomponent=App placeholceranother=anothervar

Params:

Name: is the template name.
Filename: is the result file name.
Placeholder*: for each placeholder the word placeholder is appened to the start.

## template structure ##

the example above is for the next template:

react-component.temp

    export const ${component} = () => {
        let ${anotherplaceholder} = true;

        return (
            <div>
            <h1>${component}</h1>
            </div>
        );
    };

    export default ${component};

all words inside curly brackets __${}__ are replaced for the same name arguments
