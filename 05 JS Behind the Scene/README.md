# How Javascript works behind the scene

In this section we are going to dive deep into how js works under the hood and get a better understanding of how things do what they do.

## Table of Contents

- An High-Level Overview of Javascript.
- The Javascript Engine and Runtime.

## An High-Level Overview of Javascript

### What is Javascript: Revisited

Remember we once defined js as "A high-level, object-oriented, multi-paradigm programming language."
Well it is coorect but this is just the tip of the iceberg.

So here is the new defination for you,

> **Javascript is a High-Level, Prototype-Based Object-Oriented, Multi-Paradigm, Interpreted or Just-In-Time Compiled, Dynamic, Single-Threaded, Garbage-Collected Programming Language with First-Class Functions and a Non-Blocking Event Loop Concurrency Model.😆😆**

Let's Deconstruct these Monster Defination :-

| Keyword | Meaning |
|---------|---------|
| High-level | Any computer program that run on computer needs hardware resources like memory and CPUs to do there work. Now there are Low-level Languages like C where you have to manually manage these resources for example asking the computer to create a new variable, on the other side there are High-level languages like python and Javascript where we do not have to manage resources at all because these languages have so called abstaraction that take all that work away from us (everything happens automatically) this make the languages easy to learn and use but the down side is these languages will never be as fast or as optimized as for example C programs |
| Garbage-collector | It is one of the tool that take memory management away from us which is basically an algorithm inside js engine which automatically remove all unused objects from computer memory in order to not clog it up with all the unnecessary stuff. Basically like a cleaning guy. |
| Interpreted or just-in-time compiled | A computer processor only understands 0s and 1s called machine code. We write humanreadable code which is an abstraction over machine code, the code that we write need to be converted to machine code which is either done by compiling or interpreting. In JS this happens inside the JS engine (More on this later in this section)|
| Multi-paradigm | JS is Multi-paradigm language. In programming, Paradigm is an approch and mindset of structuring code, which will direct your coding style and technique (it will get more clear as we more forward). There are three most popular paradigms they are  |
| | 1. Procedural programming : The one we've been using so far which is writing code in a very linear way and writing some function in between|
| | 2. Object Oriented Programming (OOP): (We will learn later in this course) |
| | 3. Functional programming (FP): (We will learn later in this course) |
| | We can also classify paradigms as *Imperative* or *Declarative*, more on that later. Many languages are only procedural, object oriented or functional but js is all three making it flexible and versatile. |
| Prototype-based object-oriented | Almost everything in javascript is an object except for primitive values, have you wondered why we can create an array and then use the for example push method on it that is because of prototypal inheritance. Basically we create arrays from an array blueprint which is like a template and this called the prototype, this prototype contain all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays. This is the most oversimplified explaination (more on this in oops section)|
| First-class functions | Function are treated just as regular variables so we can pass functions into other functions and even return functions from functionsand this allows us to use a lot of powerfull techniques and also allows for functional-programming, not all languages have first-class functions but js does. |
| Dynamic | It is Dynamically typed, as we know we don't assign data type to variables infact they only became known when the js engine executes our code also the type of variable can easily be changed as we reassign variables and this is basically what dynamically-typed means and if we want to avoid this we can always look into TypeScript  |
| Single-threaded | Complex topic deal with it later |
| Non-blocking event loop | Complex topic deal with it later |

- **Concurrency model**: how the JavaScript engine handles multiple tasks happening at the same time.

       ⬇ Why do we need that?
- JavaScript runs in one **single thread** so it can only do one thing at a time

       ⬇ So what about a long-running task?
- Sounds like it would block the single thread. However, we want non-blocking behavior!

       ⬇ How do we achieve that?
- By using an **event loop** takes long running tasks, executes them in the "background", and puts them back in the main thread once they are finished.

       ⬆ (Oversimplified!)

## The Javascript Engine and Runtime

### What is a javascript engine?

*Js engine is simply a program that **Executes** Javascript code* example Google's V-Eight engine ➡️ powers Google crome and Node.js which is a JS runtime enviroment.

### Inside the JS Engine

A Js engine contains two things :-
- Call Stack : A call stack is where our code is actually executed using something called execution contexts
- Heap : The heap is an unstructured memory pool which stores all the objects that our application needs

### Computer science sidenote: Compilation Vs Interpretation

1. Compilation: Entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

```
 ----------------                 ----------------                 ------------------- 
|                |    Step 1     | Portable file: |     Step2     |                   |
|  Source code   | ------------> | machine code   |  ---------->  |  Program running  |
|                | Compilation   |                |   Execution   |                   |
 ----------------                 ----------------                 -------------------

```
Execution can happen way after compilation.

2. Interpretation: Interpreter runs through the source code and executes it line by line 

```
 ----------------                      -----------------
|                |    Step 1          |                 |     
|  Source code   | ------------------>| Program running | 
|                | Executed line      |                 |
 ----------------    by line           -----------------
```
Code still needs to be converted to machine code but that happens right before it's executed and not ahead of time.

*JavaScript **Used** to be a purely interpreted language*, but the problem with interpreted language is they are much much slower than compiled languages. This used to be ok for Javascript but now with modern javascript and fully fledged web apps that we built and use today example Google Maps, low performance is no longer acceptable.

Many people still thinks that JS is an interpreted language but that's **not really true anymore**. 

Modern Javascript engine **now** use a mix between compilation and interpretation which is called **just-in-time compilation**

3. Just-in-time (JIT) compilation: Entire code is converted into machine code at once, then executed immediately.

```
 ----------------                 --------------                 ------------------- 
|                |    Step 1     |              |     Step2     |                   |
|  Source code   | ------------> | Machine code |  ---------->  |  Program running  |
|                | Compilation   |              |   Execution   |                   |
 ----------------                 --------------                 -------------------

```
There is no portable file to execute and execution happens immediately after compilation, this makes JS faster than just executing codes line by line.

## So How does it works?

**Modern JIT Compilation of JavaScript**

**Code** : The code that is written in JavaScript

       ⬇️ Step 1

**Parsing** : To parse the code which essentially means to read the code. During the parsing process, the code is parsed into a data stucture called the **Abstact syntax tree or AST**. This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords and then saving all these peieces into the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will be later be used to generate the machine code

![AST Example](AST-Example.png)

We don't need to know what an AST Look like it's just to show how the tree is created. 

*Remember* - This AST tree is nothing to do with the Dom tree, it is just the representation of code inside the js engine.

       ⬇️ Step 2

**Compilation** : Which takes the generated AST and comiples it into machine code.

       ⬇️ Step 3

**Execution** : This machine code then gets executed right away due to JIT compilation. And this execution happens inside JS engines call stack.

Now you might think that it's over but no actually Because modern JavaScript engines actually have some pretty clever optimization strategies, what they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. Then in the background, this code is being optimized and recompiled during the already running program execution and this can be done multiple times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution of course. This process is what makes modern engines such as V-Eight so fast.

Compilation➡️Execution➡️Optimization➡️Compilation

All this parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code, completely separate from the main thread that is basically running into call stack executing our own code.

Now diffrent engines implements in slightly different ways but in a nutshell this is what modern JIT comilation looks like for JS.

## The Bigger Picture: JavaScript Runtime

### JavaScript Runtime in Browser

![Runtime in Browser](runtime-in-browser.png)

We can imagine a **JS runtime as a big box** which includes all the things that we need in order to use JS in this case, in the browser. And the **heart of any javascript runtime is always a javascript engine**, without this there is no runtime and no javascript at all however the engine alone is not enough. In order to work properly we also need access to the web API's. So essentially **web API's are functionalities provided to the engine but which are actually not part of the JavaScript language itself**. JS simply gets access to these API's through the **global window object**. But it still make sense that the web API's are also part of the runtime. Next a typical JS runtime also include a so called **callback queue**. This is a **data structure that contains all the callback functions that are ready to be executed**. For example we attach event handler functions to DOM elements like a button to react to certain events, and these event handler functions are also called callback functions. So as the event happens for example a click, the callback function will be called. The first thing that actually happens after the event is that the callback is put into the callback queue then when the stack is empty the callback function is passed to the stack so that it can be executed. And this happens by something called the event loop so basically **the event loop takes callback functions from the callback queue** and puts them in the call stack so that they can be executed. The **event loop is how javascript non-blocking concurrency model** is implemented and this was the overview of how that works(we will learn more of Non-blocking and event loops later). 

### JavaScript Runtime outside the Browser

![Runtime in Node JS](runtime-in-node.png)

It is pretty similar, but since we don't have a browser of course, we cant have the web API's because it's the browser who provides these. Instead we have multiple C++ bindings and a so called thread pool.