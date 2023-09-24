import React from 'react'
import './Javascript.css'

const Javascript = () => {
  return (
    <div>
      <section className='javascript'>
        <h1>Javascript Interview Question</h1>
        <div className="question"><strong>1. Why do we use the word “debugger” in javascript?</strong></div>
        <p className="answer">The debugger for the browser must be activated in order to debug the code. Built-in debuggers may be switched on and off, requiring the user to report faults. The remaining section of the code should stop execution before moving on to the next line while debugging.</p>

        <div className="question"><strong>2. Explain Hoisting in javascript.?</strong></div>
        <p className="answer">Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top. <br />Example 1: hoistedVariable = 3; console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized var hoistedVariable;</p>

        <div className="question"><strong>3. Difference between “ == “ and “ === “ operators.</strong></div>
        <p className="answer">Both are comparison operators. The difference between both the operators is that “==” is used to compare values whereas, “ === “ is used to compare both values and types. <br />Example: var x = 2; var y = "2"; (x == y)  // Returns true since the value of both x and y is the same (x === y) // Returns false since the typeof x is "number" and typeof y is "string"</p>

        <div className="question"><strong>4. Difference between var and let keyword in javascript?</strong></div>
        <p className="answer">1. From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015. <br />2. The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope. <br />3. In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.</p>

        <div className="question"><strong>5. What is NaN property in JavaScript?</strong></div>
        <p className="answer">NaN property represents the “Not-a-Number” value. It indicates a value that is not a legal number. <br />Example : isNaN("Hello")  // Returns true <br />isNaN(345)   // Returns false <br />isNaN('1')  // Returns false, since '1' is converted to Number type which results in 0 ( a number) <br />isNaN(true) // Returns false, since true converted to Number type results in 1 ( a number) <br />isNaN(false) // Returns false <br />isNaN(undefined) // Returns true</p>

        <div className="question"><strong>6. What do you mean by strict mode in javascript and characteristics of javascript strict-mode?</strong></div>
        <p className="answer">1. Duplicate arguments are not allowed by developers. <br />2. In strict mode, you won't be able to use the JavaScript keyword as a parameter or function name. <br />3. The 'use strict' keyword is used to define strict mode at the start of the script. Strict mode is supported by all browsers. <br />4. Engineers will not be allowed to create global variables in 'Strict Mode.</p>

        <div className="question"><strong>7. Explain Higher Order Functions in javascript.</strong></div>
        <p className="answer">Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. <br />Examples of higher-order functions: function higherOrder(fn) higherOrder(function() { console.log("Hello world") }); </p>
      </section>
    </div>
  )
}

export default Javascript