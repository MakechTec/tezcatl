## CLI Usage ##

Tezcatl use the `tezcatl` command to work, the `tzl` is an alias. 

Tezcatl use commands created by the current preset and the current template. But in general the following
are the three types of arguments passed.

By default Tezcatl has the [tezcatl-preset-default](https://github.com/MakechTec/tezcatl/blob/master/documentation/presets.md) behavior.

### Flags ###

The flags are represented by the `--` prefix and the flag name. when it's present the flag is true.
This type of variables are used in conditions for template files.

    $ tezcatl --class

If the flag is not present, the flag is considered as `false`.

### Arguments ###

The arguments are represented by the name of the argument and the `=` symbol, the value of the argument, like this.
This type of variables are used in placeholders for template files.

    $ tezcatl component=App

### Loop Variables ###

The loop variables are represented by a prefix, a number, the `.`symbol and the variable value, like this.
This type of variables are used in loops for template files.

    $ tezcatl const1.name=Hello const1.age=18 const2.name=World const2.age=20


Next Step [template language](https://github.com/MakechTec/tezcatl/blob/master/documentation/template-language.md)