---
layout: blog
title: Global and Local Scopes of Python Variables
date: 2021-11-01T20:28:29.029Z
thumbnail: ""
tags: Python, Docker
category: Dev
slug: global-and-local-scopes-of-python-variables
description: As you may or may not know; In python, a variable is created the
  moment you assign a value to it using the “=“ sign. Due to their scopes,
  Variables are classified into two main groups.
---

As you may or may not know; In python, a variable is created the moment you assign a value to it using the “=“ sign. Due to their scopes, Variables are classified into two main groups. 

### What is a scope?

The scope of a variable refers to the area where you can the variable from. In other words, it is the container holding a variable. 

### Types of Variables

As earlier mentioned, there are two types of variables; 

- Global Variable
- Local Variable

### Global Variables

A Global Variable exists in a Global Scope. It can be reached and modified anywhere in a program, and all functions of a program exist in the Global Scope. Therefore, once you start writing a program or lines of code, every variable declared outside of a function is referred to as a Global Variable.

```python
username = "Lulu"
def myFunction():
    print ("What can I call you?") 
    name = input()
    print ("Hi, " + name + "!")

myFunction()
print ("Your username is " + username)
```

In this program above, the Global variable is “username” because it is outside the function. 

### Local Variables

A Local Variable is nested in a function, and each function has its own Local Scope. A Local Scope is created once a function is called. The variables nested in this function are considered temporary because they don’t exist after the function returns a statement. 

```python
username = "Lulu" #global variable
def myFunction():
    print ("What can I call you?") 
    name = input() #local variable
    print (username)

myFunction()
print ("Your username is " + username)
```

Here, we’re calling the global variable (username) in the local scope with the print function. This program would run smoothly because the local scope can access global variables.

## Differences between Global and Local Variables

1. A global variable is declared outside a function while a local variable is declared inside the function. 
2. When the value of a global variable is modified in a function, the effect of change is visible all through the program unlike a local variable whereas change only has effect in the function it was declared in. 
3. The value of a local variable cannot be shared because it is only accessible in one function. However, the value of a global variable is accessible by multiple functions across the program. 
4. Local variables are created when a function starts and are lost when a function is terminated, while a Global Variable is created at the beginning of a program and ends when the program is terminated. 

## Advantages and Disadvantages of Using Global Variables

### Advantages

- You can access Global Variables from all functions or modules in a program.
- No repetition is needed as you only need to declare a global variable once; outside the modules.
- It is mainly used for storing constants to allow consistency and reuse.
- A global variable allows multiple functions access the same data.

### Disadvantages

- Data can be easily altered by any function and any newly written statement in the program can change the value of the global variable.
- If a global variable is subjected to change, you will need to change all modules where they are called.

## Advantages and disadvantages of using Local Variables

### Advantages

- Local variables can have the same names in different functions because they are only recognized in the one they are declared in.
- Using local variables ensures you that the values of variables will remain intact while the program is running.
- In cases of bugs, refactoring codes is easier when local variables are used.

### Disadvantages

- Local variables are not reusable by other functions.

Every variable is either local or global and cannot be both. This shows that local and global variables are equally important in every program. However, declaring unwanted global variables should be avoided and to enhance the readability of your code, make use of local variables more.