# React Learning

 For Reference: [**MDN web docs**](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)

## Installation and Prerequisites

### NodeJs

`NodeJs` is back-end JavaScript Environment. It can be simple considered as `Python3` Console for JavaScript. `NodeJs` is the terminal version of Browser’s Environments/Console which understand JavaScript.  

#### Installing Node

```console
$ sudo apt install nodejs
```

Initiating the NodeJs Terminal Console

```console
$ node
>
```

Here you can Execute Vanilla JavaScript 

```JavaScript
> console.log(‘Hello’);
Hello
> var x = 20; x;
20
```
Type `Ctrl+D` or `.exit` to exit the console.<br />

NodeJs is used to run as server for the React App.

### `npm`

Node Package Manager, it makes our job easier. It's equivalent in `python` is `pip`  (python package installer).  
Simpler version of `npm` is `npx` which is installed along with `npm` automatically (*No need to Fret*).  

```Console
$ sudo apt install npm # npm install
$ npm
```

---

## Procedure to Create A React App

1. Installing `node` and `npm`:
```console
    $ sudo apt install nodejs
    $ sudo apt install npm 
```

2. Creating a React App:   
	```console
    $ npx create-react-app custom_name
   ```
   *Please wait until download is done*
> Note:
> **`npx create-react-app custom_name`**
>
> * **`custom_name`** is the name of the folder of your React app
> * **`create-react-app`** is a command which creates the React app.
> * **`npx`** is simplified version of `npm` (*making our life easier*)

After the download, In directory of *custom_name* contains: 
```console
custom_name
    ├── node_modules
    ├── package.json
    ├── package-lock.json
    ├── public
    ├── README.md
    └── src
```
The only thing which we are gonna tweak is the `src` Directory.

3. Running the App:  
    We must be in the directory of your React App and start our node server using `npm`
    
    ```console
    $   cd custom_name
    $   npm start
    ```
    ```console
    Compiled successfully!
    You can now view my-app in the browser.
    
    Local:            http://localhost:3000
    On Your Network:  http://192.168.0.5:3000
    
    Note that the development build is not optimized.
    To create a production build, use npm run build.
    ```
`Ctrl+C` or `.exit` End
Click to view your App: [http://localhost:3000](http://localhost:3000)
    
4. Customising your App:  
	Delete Everything in `src` directory, and Create a file named `index.js`.
    ```console
    $   cd src
    $   rm -rf *
    $   touch index.js
    ```
    Open `index.js` and type the below code to display text.
    ```JSX 
    import React from 'react';
    import ReactDOM from 'react-dom';
    ReactDOM.render(<p>Your First App</p>,document.getElementById('root'));
    ```
    And start your server by `npm start` in `custom_app` Directory.

---
## Understanding `JSX`

**`JSX`** (JavaScript XML) is JavaScript and HTML Hybrid Language. It can be considered as a special JavaScript which can accommodate `HTML`. Most of the syntax is similar to `JS` & `HTML`, Except for few modified syntax.
It is absolutely easy, when you know bare basis of `JS` & `HTML`.

### `HTML`

Hypertext Markup Language, There is no website out there without `HTML`. So if you don't know please do yourself a favour and learn it, it was created decades ago (1989).
#### Tags

Everything in `HTML` is in Tags. The two types of tags are:
1. Closed Tags  
    It is basis of `HTML`, Content is in between the tags,it can have attributes.
    They can be Nested
    
    ```HTML
    <html></html>
    ```
2. Open Tags
    It does not have a closing tag. Content is specified in the attributes.
    Examples: `br`, `input`, `button`,`img`
    
    ```HTML
    <button type="submit">
    ```
> *Note:*  
> **In `JSX` it is required for Open tags to be closed by ading `/` near the the angle bracket `>`**
> ```HTML 
>   <input id="#in" type="text" />
>   ```
> Similarly for line Break
>```HTML
>   <br />
>```

> Few attributes might change. Example attributes 
>    * `class` is changed to `className`isad 
>    * `for` is changed to `htmlFor`
>```HTML
><p className="align-left"> Lorem Epsum.. </p>
>```

###  `JavaScript`

It is a scripting language. you can add functionality to the code. In a `HTML` file it is general written inside `<script>` tags.

```javascript
document.getElementById('root') 
variable, const, loops , if conditons,camelCasing
```
#### Object
In `JS`, Object stores our data. You can visualise an object as a Box, when created it is empty, we can name our box anything. 
```javascript
var box ; // creates a empty box (variable)
const box; // creates a read-only variable 
let box; // creates a variable which can be used inside a specific code block only
```

#### `document.getElementById()`

This Function searches the entire `HTML` document and finds an element which has matching `id `, gives it to us. 

There are two common ways to use this function:

1. To set value of the Element

   ```JS
   var element = document.getElementById("root");
   element.innerHTML = "New Heading";
   ```

2. To receive value from the Element

   ```JS
   var x = document.getElementById("myText").value; 
   console.log('x')
   ```

#### `map()` 
This inbuilt function `map()` 

```console 
$ node
```
```JS
function twicer(item){
    return item * 2
}

var originalArray = [1,2,3];
var doubleArray = originalArray.map(twicer);

console.log(originalArray)
console.log(doubleArray)

```
We can even pass function in `map()` function directly
<!-- two arrays diagram with function in between -->

### Functions
1. Simple Function Declaration
```JS
function add(x,y){
    return x+y;
}
var sum = add(1,5)
console.log(sum)
``` 

2. Function in a Object:
This reduces one Step
```js
const sum = function add(x,y){
    return x+y;
}
sum(1,5)
```

But if we observe the name of the function is redundant(useless), so lets remove that.

3. Function ES6:

```js
const sum = (x,y) => {
    return x+y;
}
sum(x,y)
```
>if your function is a single line statement you can do this:
>(I dont recommend this way to avoid confusion)
>```js
>const sum = (x,y) => x+y;
>sum(x,y)
>```
#### Classes


---

## React

Its time to React. 3 Major Steps to Make a Simple App:

1. Importing Libraries

   ```JSX
   import React from 'react';
   import ReactDOM from 'react-dom';
   ```

   `React` is a `JavaScript` Library. So we import two libraries `React`  & `ReactDOM` 

2. Creating Components:

   With Simplicity of `JSX` , `HTML` code is stored in a object (`const`) named `contentElement`.

   ```JSX
   const contentElement = <h1>This is a HTML Element</h1>
   ```
   
   > Note:
   >
   > You can change the name of your object .
   >
   > ```jsx
   > const anything = <p> this is a p tag </p>
   > ```


3. Rendering Components:

   Here `ReactDOM.render` function renders `HTML` content from `element` in the web page. 
   
   ```jsx
   ReactDOM.render(contentElement,document.getElementById('root'));
   ```
   > `ReactDOM.render(element,reference);`
   >
   > Generally inside `ReactDOM.render()` we pass two parameters:
   >
   > 1.  `element` : The `html` content which must be displayed should be specified. 
   > 2. `reference` : The reference to the location where the element must be rendered. 
   
   Voila! Your done.
   
---

>  `ReactDOM.render()` generally accepts
1. Object Component 
2. Function Component
3. Class Component

#### Object Component

The `html` content is stored inside a simple object ( `const` , `var`, `let` ).

```jsx
const element = <h1>This is a HTML Element</h1>
```
We can render it mentioning the object name (`element` in this case)

```jsx
ReactDOM.render(element,document.getElementById("root"));
```



#### Function Components

The `html` content is present in Function and is returned to when called.

The `PascalCase` is used here.

```JSX
function FunctionComponent() {
    return <h1>This is a Function Component</h1>
}
```

This function is called using `<FunctionComponent />`

```JSX
ReactDOM.render(<FunctionComponent />,document.getElementById("root"));
```

>>``` JSX
>>function Wrestler (props){
>>        return ( <p>Hello,{prop.name}</p>);
>>}
>>```

```JSX
const Wrestler = function random_BS(props) {
    return (<>Hello,{prop.name}</>);
}
```
```JSX
const Wrestler = (props) => {
    return (<>Hello,{prop.name}</>);
}
```


#### Class Components

The `html` content is present in Class and is returned to when called.
Class can contain functions like `constructor()` and `render()` 
Inside render(), The `html` content is present with `return`, since it is a function.

```JSX
class ClassComponent() {
    render() {
        return <h1>This is a Class Component</h1>
    }
}
```
This function is called using `<FunctionComponent />`

```JSX
ReactDOM.render(<ClassComponent />,document.getElementById("root"));
```

---
### `props`
`props` are read-only passable arguments.
Props are passed from sent from function calls into the functions.

```JSX
import React from 'react';
import ReactDOM from 'react-dom'

function Greeter(props){
    return <h1> Hello {props.name}</h1>
}

ReactDOM.render(<Greeter name="John Doenut" />);
```
The content in the name can be extracted by props.  
Classes use `this.props.name`

#### Callback `props`
It is generally uni-directional Parent to Child. We cannot communicate backwards from Child to Parent. Work around to that is Callback props.  
This can be acheived by created a function in Parent and call the props from the child.
```JSX
// In Parent Component
function Parent(){
  function Callback(variabe){
    alert(variable);
      }
  return <Child Callback={Callback} />
}
```
```JSX
// In Child Component
function Child(props){
  function sendCallBack(e){
    e.preventDefault();
    props.Callback('This is callback material')
  }
  return <button onClick={sendCallBack}> CallBack Time!! </button>
}
```

### `state`
`state` are modifiable passable objects.

[Relation of state and Props: Beutifully Explained](https://stackoverflow.com/a/27992380)

---

### Passing `JSON` Data
Simlarly you can pass `JSON` Data.

```JS
import React from 'react';
import ReactDOM from 'react-DOM';

const DATA = [
  { id: "1", name: "John", gender: "male" },
  { id: "2", name: "Suo", gender: "male" },
  { id: "3", name: "Rioes", gender: "female" },
];

const Display = (props) =>{
    return (
        <div>
          {props.info.map(person => <p>{person.name} {person.gender}</p>)}
        </div>
    );
}

ReactDOM.render(<Display info={DATA} />, document.getElementById('root'));
```

**`props.info.map(person => <p>{person.name} {person.gender}`**
Through `props` we get `info` in which we have `JSON` Content and is extract via `map()` function and put it in `person` variable.  
Now instead of passing the this complicated function in `return`. We will make it much more Readable.

```JS
const Display = (props) =>{
const personDetailsList = props.info.map(person=> <p>{person.name} {person.gender}</p>);   
return (
        <div>
        {personDetailsList}
        </div>
    );
}
```

but it is not lookig nice Right? Lets make it look glorius. By adding a Function and passing our values in `personDetailsList` as props to secondary function.
```JS
from React import 'react';
from ReactDOM import 'react-dom';

const DATA = [
    // we have already typed above, ommited for brevity
]

function Formatted (props) {
    return <div>
        <h3>{props.name}</h3>
        <p>the person is {props.gender}</p>
    </div> 
}

const Display = (props) =>{
const personDetailsList = props.info.map(person=> <Formatted name={person.name} gender={person.gender } />);   
return (
        <div>
        {personDetailsList}
        </div>
    );
}

```
> the `const personDetailsList` calls `Formatted()` function by passing each every child of the `JSON`.  
>```JSX
><Formatted name= {person.name} gender = {person.gender} /> // Every time is a unique JSON CHILD
><Formatted name= {person.name} gender = {person.gender} /> // Every time is a unique JSON CHILD
><Formatted name= {person.name} gender = {person.gender} /> // Every time is a unique JSON CHILD
>```

---

>*Note:*
>From `React` Library, We retrieve the function `React.createElement()`. 
>
>> The above simple code is `JSX` is converted to complicated code below using `babel`
>>
>>  ```jsx
>> const element = React.createElement ('h1',null,"This is a HTML Element")  
>> ```

---

Author: Sindala E Prince Joseph
