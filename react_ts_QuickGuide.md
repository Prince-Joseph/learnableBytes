# React with TypeScript

It's awesome trust me! or else your will suffer with endless pain undebuggable javascript.

Reference: [https://react-typescript-cheatsheet.netlify.app/docs/basic/setup](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)

## `TypeScript`

It is just javascript with more syntax.
TypeScript is a superset of javascript.
C++ is a superset of C.

## why no `js`?

JS is unreliable.  
Dynamic type it can execute stuff which are not supposed to be executed.  
It just doesn't show us our errors.  
It also has poor support with any text editor for autocomplete, type check and error raising features.  

## fine, how does `ts` work?

Well the working is quite simple, typescript is converted to javascript by a interpreter.
Similar to `sass` and `css` relationship, if you ever worked on it.  

## idc! How does it help me?

`TS` is reliable as a rock at the cost of more code.  
It is staticly typed. means we have to declare the type of variable.  
It shows our errors.  
It has great support with text editors along with all the features.  

## `ts` basics

`let` modifiable in scope.
`const` unmodifiable.

```ts
const year_WW2:int = 1945; // unmodifiable 
let year_curent :int = 2022; // modifiable
const name :string = "Charector";
const isPass: boolean = true;
```

```ts
const add = (x:int, y:int){
    return x+y;
}

console.log(add(2,8));
```

[Cheat Sheet: Control Flow](https://www.typescriptlang.org/static/TypeScript%20Control%20Flow%20Analysis-8a549253ad8470850b77c4c5c351d457.png)  
[Complete List of Cheat Sheets](https://www.typescriptlang.org/cheatsheets)

[This seems like a good place to start](https://handsonreact.com/docs/labs/react-tutorial-typescript)
