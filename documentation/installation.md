## Installation & Configuration ##

### installation ###

Before continue, Tezcatl use nodejs, then it needs to be installed in your system.

Do you need to install it globally to use the CLI and locally to use the templates directory.

    $ npm install location=global @makechtec/tezcatl 
    $ npm install location=local @makechtec/tezcatl

### Configuration ###

Create a file called `tezcatl.config.json` in your home directory. Then add the following content:

    {
        "preset": "default",
    }

The config file use more options depending on the preset.

Now the `tezcatl` and `tzl`commands are available from the cmd. 

By default Tezcatl use the [tezcatl-preset-default](https://github.com/MakechTec/tezcatl/blob/master/documentation/presets.md)


The Next Step is: [CLI usage](https://github.com/MakechTec/tezcatl/blob/master/documentation/cli-usage.md)
