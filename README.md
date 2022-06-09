# Tezcatl #

create file from template follow the example:

    $ npm install --global

Then:

    tezcatl template=jscomponent file=test/J.js --class const1=Navbar func1=toggle component=App

Params:

template: is the template name located in __./src/templates or ./node_modules/@makechtec/tezcatl-preset-default/templates__ directory.
file: filename to create.
const*, func* : the arguments with same prefix like const[number] are taked to fill the const loop foreach variable (open the template file to see the loop).

--class: it's a flag and is taken for the template, when it's present the condition in the template is true, else it's false.

component: this is a simple argument with their value and it's replaced in the template file for the value, in this case all matches for ${component} are replaced by App.

## template structure ##

the example above is for the next template:

react-component.temp

    @foreach(import)
    import ${import} from '';
    @endforeach

    @if(class)
    export default class ${component}{

    }
    @endif
    @if(const)
    export const ${component} = {
        
    };
    export default ${component};
    @endif
    @if(func)
    export const ${component} = () => {
        return;
    };

    export default ${component};
    @endif

    @foreach(const)
    export const ${const} = {
        name: "m",
    };
    @endforeach

    @foreach(func)
    export const ${func} = () => {
        return;
    };
    @endforeach


## Conditions ##

when you create a condition it should be closed for:

    @if(flag)
    // some code
    else
    // false content condition
    @endif

where the flag is passed by cli like __--class__.

    tezcatl ... // some arguments and then ... --class

if it's present the result is:

    // some code

else if it's not present:

    //false content condition

will be rendered in the final file.

## Loops ##

for declare loops in the template file:

    @foreach(item)
    console.log(${item});
    @endforeach

the values are passed from command line:

    tezcatl  ... //some arguments and then ... item1=One item2=Two

the result is:

    console.log(One);
    console.log(Two);

in this case the loop variable is called __item__ then the arguments 
should be called item[number] to be valid.

## Another placeholders ##

simply declare in the template file the placeholder name inside curly brackets
and dollar.

    // some code
    console.log(${tool});
    // some code

from the command line writte:

    tezcatl ... // some arguments and then ... tool=Navbar

the result in the final file is:

    console.log(Navbar);

## Create own templates ##

The first goal of tezcatl is be useful to create custom templates. 

To copy the existing templates go to __./node_modules/@makechtec/tezcatl-preset-{presetname}/templates__
to __./templates__ for the root directory by default this dir has more precedence. The {presetname} is the
preset module name installed by default tezcatl install __tezcatl-preset-default__ module. 

To create new templates only create the __./templates__ directory and create files with .temp extension, then in the cli you have to indicate the template name with __template__ argument.