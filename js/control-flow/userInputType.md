# Tutorial breakdown of userInputType.js

A function is needed because if I simply declare a variable, then it is declared in global scope.

Global scope is not accessible within blocks
i.e. { }. You must have a function that returns a variable - then call to that function within a block.

typeof returns a string value listing the variable type. Cannot parse typeof into a number since it returns types written as strings e.g. "String" or "Number", which don't have a numerical equivalent, unlike "43".

Example syntax for typeof: 
f = 25 => typeof f = "number" 
f = "Bird" => typeof f = "string"
f = car => typeof f = "undefined" because a string must be contained within quotes "".

If you need to parse a string number, e.g. "43" use parseInt("43"); or Number("43");.

Concatenation is an operation to join two
or more strings together. It is activated by backticks `` and makes for more readable code. It also allows you to break up lines by spacing them apart in your code, which is visual and feels more intuitive.

E.g. console.log(`Github.com is managed
        by some uptight people
        who could probably benefit
        from an industrial quantity of opiates`);

The above code would display in console,
spread across 4 separate lines. The spacing in the console corresponds to how many spaces you have in your code.

Interpolation refers to a method aof inserting a variable, or method, into a template literal.

It is activated by a $ & {}.
E.g. console.log(`The square root of 
         576 is ${Math.sqrt(576)}`);