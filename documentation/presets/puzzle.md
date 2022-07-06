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


## Templates ##

### js-class ###

command:

    $ tzl b=js-class

placeholders:

- name: The name of the class.

flags:

- export
- default
- constructor

loop variables:

- prop.name

example: 

    $ tzl b=js-class l=1 name=MyClass --export --default --constructor prop1.name=property1 prop2.name=property2

### js-const ###

command:

    $ tzl b=js-const

placheholders:

- name: The name of the constant.

flags:

- export
- default

loop variables:


example: 

    $ tzl b=js-const l=1 name=MyConstant --export --default

### js-func ###

command:

    $ tzl b=js-func

placeholders:

- name: The name of the function.

flags:

- export
- default
- return

loop variables:

- param.name

example: 

    $ tzl b=js-func l=1 name=MyFunction --export --default --return param1.name=param1 param2.name=param2

### js-method ###

command:

    $ tzl b=js-method

placeholders:

- name: The name of the method.

flags:

- private
- return

loop variables:

- param.name

example: 

    $ tzl b=js-method l=1 name=myMethod --private --return param1.name=foo param2.name=bar

### react-component ###

command:

    $ tzl b=react-component

placeholders:

- name: The name of the component.
- wrapper: the wrapper return tag.

flags:

- export
- default
- style
- children

loop variables:

- prop.name: properties for the component.

- state.name
- state.default

- effect.name

- attr.name: attributes for the wrapper return tag.
- attr.value: values for the wrapper return tag.

example: 

    $ tzl b=react-component l=1 name=Navbar wrapper=div --export --default --style --children prop1.name=isMobile prop2.name=isFixed state1.name=navItems state1.default=[] state2.name=categories state2.default=[] effect1.name=oneEffect effect2.name=secondEffect attr1.name=class attr1.value="navbar-brand" attr2.name=id attr2.value="main-nav"

### react-jsx-code ###

command:

    $ tzl b=react-jsx-code

placeholders:

- name: The name of the tag.

flags:

- self-closed
- children: it only apply if self-closed is not present
- style

loop variables:

- attr.name
- attr.value

example: 

    $ tzl b=react-jsx-code l=1 name=MyTag --self-closed --style attr1.name=class attr1.value="my-class" attr2.name=id attr2.value="my-id"

    $ tzl b=react-jsx-code l=1 name=MyTag --children --style attr1.name=class attr1.value="my-class" attr2.name=id attr2.value="my-id"
