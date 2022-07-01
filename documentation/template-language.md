## Template Language ##

when you install tezcatl locally you can find the template directory in "node_modules/@makechtec/tezcatl-preset-default/templates".  

To override this templates copy this directory in your root directory. By default tezcatl going to search in this
place first.

The template file extension must be `.tzl`.

### Syntax ###

#### placeholders ####

The syntax is the following:

    ${placeholderName}

then, the placeholder name is now an argument that must be passed from the command line to be filled or the result is
empty.

Suppose the following scenario:

template1 file:

    // some code
    console.log(${tool});
    // some code

And in the command line:

    $ tezcatl ... // some arguments and then ... tool=Navbar

Finally the result in the final file is:

    console.log(Navbar);

Also the placeholder support the default values:

    ${tool | DefaultValue}

In the command line if whe ommit the tool value

    $ tezcatl ... // some arguments and then ...

The finall result is:

    console.log(DefaultValue);

#### conditions ####

The syntax is the following:

    @if(flag)
        // some code
    @else
        // some code
    @endif

When you create a condition it needs a flag name, it going to be passed from the command line. If it's present the first block will be executed, else the second.

Suppose the following scenario:

template1.tzl

    @if(class)
        class App {

        }
    @else
        const App;
    @endif

Also from the command line you type:

    tezcatl ... // some arguments and then ... --class

The result is the following:

    class App {

    }

Now suppose the you change the command line to:

    tezcatl ... // some arguments and then ... 

the result is:

    const App;


#### loops ####

It's a bit more complicated than the previous ones. Let's see an example:

    @foreach(item)
        console.log("Item name: " + ${item.name});
        console.log("Item type: " + ${item.type});
    @endforeach

When we create a loop we use the name of the loop variable in the template file. But in the command line 
we use this name as prefix, so the command line is:

    tezcatl ... // some arguments and then ... item1.name=One item1.type=One item2.name=Two item2.type=Two

Then for each group of arguments with the same prefix and number we have a group of loop variables inside the
template file. In this case we create a variable called item in the file with a name and a type.

Then in the command line we pass an item1.name and an item.type. In the first iteration they are the loop variables, in the second iteration the variables are item2.name and item2.type, if we use item3.name and item3.type we have a third iteration with new variables.