THIS KEYWORD

1. this does NOT depend on where a function is written
   it depends on HOW the function is called.

2. Global scope

   ==> In browser (non-strict):
   this === window
   ==> var variables attach to window
   ==> let / const do NOT attach to window

3. Regular function (standalone call)
   function x() { console.log(this.a) }
   x() → this refers to window

   ==> if window.a exists → value printed
   ==> if not → undefined

4. Arrow functions

   ==> arrow functions do NOT have their own this
   ==> they take this from surrounding scope (lexical this)
   ==> calling them with obj.arrowFn() does NOT change this

5. Method call
   obj.fn()
   ==> this refers to obj

6. Function reference loss
   const fn = obj.fn
   fn()
   ==> this is lost (becomes window / undefined)

7. call / apply / bind
   fn.call(obj)
   ==> explicitly sets this to obj

8. var vs let in global scope
   var a = 10 → this.a exists
   let a = 10 → this.a does NOT exist

9. Hoisting rules

   ==> function declarations are fully hoisted
   ==> var is hoisted but initialized as undefined
   ==> let / const are hoisted but stay in Temporal Dead Zone
   ==> arrow functions assigned to const are NOT callable before definition

10. IIFE behavior

    ==> normal IIFE executes immediately as standalone function
    ==> this → window (non-strict)
    ==> arrow IIFE inherits this from surrounding scope

11. Getter and Setter

    ==> getter runs when property is READ
    ==> setter runs when property is SET
    ==> they do not store value directly
    ==> this refers to the object owning the property

MAP

1. map creates a NEW array
2. it transforms each element
3. length of output array = length of input array
4. does NOT modify original array

Example:
[1,2,3].map(x => x \* 2)
→ [2,4,6]

Use map when:

==> you want to transform data
==> you want one-to-one mapping

FILTER

1. filter creates a NEW array
2. returns only elements that satisfy a condition
3. output array can be smaller or empty
4. does NOT modify original array

Example:
[1,2,3,4].filter(x => x > 2)
→ [3,4]

Use filter when:

==> you want to remove unwanted elements
==> condition returns true / false

REDUCE

1. reduce converts an array into a SINGLE value
2. accumulator stores result step by step
3. initial value is very important
4. reduce can return number, array, object, anything

Syntax:
array.reduce((acc, curr) => {
return acc
}, initialValue)

Example (sum):
[1,2,3].reduce((acc, curr) => acc + curr, 0)
→ 6

Example (count):
["a","b","a"].reduce((acc, curr) => {
acc[curr] = (acc[curr] || 0) + 1
return acc
}, {})

Use reduce when:

==> you want to combine everything into one result
==> map + filter feel insufficient
