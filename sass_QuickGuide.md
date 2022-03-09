<!-- SASS_QuickGuide.md -->
# Learning `Sass`

`sass`: Syntactically Awesome Style Sheets  

> CSS with "wings", "Super Powered" CSS , Turbocharged CSS

These are the things which visualise in my head.
It can be considered as a superset of `css`.

## but why?

`sass` is basically `css` under the hood.  
Whenever we write a sass file it gets converted into css for our html files to be used.  
The reason why we do that is Efficiency and makes things easier to maintain.
Why do we have to physically keep tab and manually edit every line of `css` for a small change.  
When we have `sass`'s variables and functions ready to be exploited.  

## Getting Started

There are several ways to get starte.

* Install Compiler using `npm` in `node` environment.
* Install Compiler using `pip` in `python` environment.
* Use online `SASS` to `CSS` converter.
* Use VScode plugin. 😎  

Using any one method would suffice.

### Installation

#### 1. `node`

Reference: <https://www.npmjs.com/package/node-sass>  
Reference: [Node Installation Guide](https://sunlightmedia.org/sass/)

We will be installing a *`sass` compiler* to convert `sass` to `css`.  

Install `node` and `npm`

```bash
npm install -g node-sass
npm init
```

spam Enter and open `package.json`

```json
{
  "name": "sass-learning",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "scss": "node-sass --watch assets/scss -o assets/css"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "node-sass": "^7.0.1"
  }
}

```

Create `assets/css` and `assets/scss`.
put your `styles.scss` in `assets/scss`.

```console
npm run scss    <--command

#Expected output

> sass-learning@1.0.0 scss /home/pj/Projects/sass-learning
> node_modules/node-sass/bin/node-sass --watch assets/scss -o assets/css
```

#### 2. `python3`

Reference: <https://sass.github.io/libsass-python/>

Install `python` and `pip`

```bash
pip install libsass
```

#### 3. Online Compiler

Here you go!

<https://beautifytools.com/scss-compiler.php>

#### 4. VScode Plugin

Compiler

>Name: Live Sass Compiler  
Id: ritwickdey.live-sass  
Description: Compile Sass or Scss to CSS at realtime with live browser reload.  
Version: 3.0.0  
Publisher: Ritwick Dey  
VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass>

Syntax Highlighter, Autocomplete .. blah blah
>Name: Sass  
Id: syler.sass-indented  
Description: Indented Sass syntax Highlighting, Autocomplete & Formatter  
Version: 1.8.18  
Publisher: Syler  
VS Marketplace Link: <https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented>  

### Lets get going

After installing the plugin or locally we must initiate the watch, which watches for changes in sass file and outputs into css.
We will be using Vscode as of now primarily.

1. Create a Folder `sass_learning` and open it in `vscode`
2. Create a file named `index.html`

    ```html
    <!-- index.html -->

    <html>
    <head>
        <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
    <h1> whatever thine heart desireth here </h1>
    </body>
    </html>
    ```

3. Create a file named `styles.scss`  
    **Note**: `sass` language extensions can be `.sass` or `.scss`, Most prefer `.scss` due to its similarity with its root language.

    ```scss
    // style.scss

    h1{
        color:#DA667B;
    }
    ```

4. Open the `style.scss` and click **Watch Sass** button in the bottom rightside of the screen.

5. Open the `index.html` folder in browser.

You should able to color of h1 turn to pink.

## Basics of `SASS`

Reference: <https://devhints.io/sass>

It is a programming language built upon `Css`. Hence, code is quite similiar.  
Lets learn basic stuff here.  

### Variables

```scss
// Declaration

$primary-color: #DA667B;
$yourfavoriteBGcolor123: #F1E0C5;

// Usage

body{
    background-color: $yourfavoriteBGcolor123;
    color: $primary-color;
}
```

### Selectors

4 types of selectors
out of which is an *Place Holder Selector*imaginary selector which helps us to reduce code (DRY).  

```scss
h1{
    ...;
}

.class{
    ...;
}

#id123{
    ...;
}

// This is just dummy css attributes which can be considered as variable of attributes

%placeholderselector{
    ...;
}

```

### `@extend`

this borrows and pastes attribute from **any selector**.  
(classes/ids/htmltags/placeholder selectors).  
@extend `anyselector`;

```scss
%button-var{
size,shape,padding,margin;
}

.danger-button{
    @extends %button-var; // borrows attributes from %button.var
    background-color: red; //we add new attributes from our specific use
}

.success-button{
    @extends %button-var;
    background-color: green;
}

```

### `@mixin`

Similar to `@extend` but with superpowers.
it is lowkey a function.  
`@mixin` to declare  
`@include` to utilise

```scss
@mixin heading-font {
  font-family: sans-serif;
  font-weight: bold;
}

h1 {
  @include heading-font;
}
```

Below example accepts parameters from include and applies the attributes.

```scss
// with parameters

@mixin font-size($n) {
  font-size: $n * 1.2em;
}

body {
  @include font-size(2);
}
```

Below example accepts superficially parameters from `@include` but **does not apply** the attributes instead uses a default value.

```scss
// with default values

@mixin pad($n: 10px) {
  padding: $n;
}

body {
  @include pad(15px);
}
```

Below example accepts superficially parameters from `@include` but **does not apply** the attributes instead uses a default value from an **already declared variable**.

```scss
// with a default variable

// Set a default value
$default-padding: 10px;

@mixin pad($n: $default-padding) {
  padding: $n;
}

body {
  @include pad(15px);
}
```

### Concept of Nesting

```scss
/* simple css*/
.hoverable_link{
    text-decoration:none;
}

a .hoverable_link{
    color:red;
}
// on hover changes to blue
a .hoverable_link:hover{
    color:blue;
}
```

The above code can besimplified into below code and can be folded into component style

```scss
/* sass style */
.hoverable_link{
    a{
        color:red;
    }
    a:hover{
        color:blue;
    }
}

```

we can also do nest attributes, but it makes code longer. But can be used when needed/

```scss

margin-top:3px;

margin: 1px 4px 4px 4px;

// nested properties/attributes
margin:{
    top:5px;
    bottom:2px;
    left: $component-width/2;
    right: 2rem;
}
```

### `@import`

Importing other sass documents into our file, for better organisation.

```scss
@import "_config.scss";
@import "_themes.scss"; // contains $primary-color: red;
@import "buttons.scss";

body{
    background-color: $primary-color; //we have retrieved this existing variable from one of the imports above
}
```

---
Author: Prince Joseph S E
