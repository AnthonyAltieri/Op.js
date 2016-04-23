# Op.js
Pseudo-operator overloading for Node.js!

Like many of you I am a big fan of Node.js and I believe we will see it being used in software that has been traditionally
developed in languages like C++ as the support by the community and the framework pushes it to a more Object-Oriented role.
I enjoy javascript because of its idiosycracies that make it a unique Scripting language with some Object-Oriented caveats;
however, I also really enjoy the power C++ gives a programmer and operator overloading is one of my favorite features that
come with the language. As of recent I've been dabbling in Object-Oriented programming in Node.js for my own practice and
education and have found myself yearning for the ability to overload operators in Node.js but that is just not possible...
until now! I have designed a utility object called Op that will accept functions that take the place of operators, because
it is an object a unique Op object can be created for each of your own Classes and it can be loaded with functions that allow
it to behave as a pseudo-operator overload.  
  
### How to use Op.js
Set the functions that act as your overloaded operators 
with functions that you create to cater to your own custom Classes  
  
## Operators Currently Supported  
  
##### '==='
``` Javascript
/**
 * Sets the equal to function in the Op object
 * @param eqFunction - the function that replaces the '===' operator
 */
Op.prototype.setEQ = function (eqFunction) {
    this._eq = eqFunction;
};

/**
 * Calls the function that replaces the '===' (equal to) operator
 * @param lhs - the left hand side of the pseudo-overloaded '===' operator
 * @param rhs - the right hand side of the pseudo-overloaded '===' operator
 * @returns {boolean}
 */
Op.prototype.eq = function (lhs, rhs) {
    if (this._eq != null) {
        return this._eq(lhs, rhs);
    }
};
```

##### '!='
``` Javascript
/**
 * Sets the not equal to function in the Op object
 * @param neqFunction - the function that replaces the '!=' operator
 */
Op.prototype.setNEQ = function (neqFunction) {
    this._neq = neqFunction;
};

/**
 * Calls the function that replaces the '!=' (not equal to) operator
 * @param lhs - the left hand side of the pseudo-overloaded '!=' operator
 * @param rhs - the right hand side of the pseudo-overloaded '!=' operator
 * @returns {boolean}
 */
Op.prototype.neq = function (lhs, rhs) {
    if (this._neq != null) {
        return this._neq(lhs, rhs);
    }
};
```  

##### '>' and '>='
``` Javascript
/**
 * Sets the greater than function in the Op object
 * @param gtFunction - the function that replaces the '>' operator
 */
Op.prototype.setGT = function (gtFunction) {
    this._gt = gtFunction;
};

/**
 * Calls the function that replaces the '>' (greater than) operator
 * @param lhs - the left hand side of the pseudo-overloaded '>' operator
 * @param rhs - the right hand side of the pseudo-overloaded '>' operator
 * @returns {boolean}
 */
Op.prototype.gt = function (lhs, rhs) {
    if (this._gt != null) {
        return this._gt(lhs, rhs);
    }
};

/**
 * Calls the function that replaces the '>=' (greater than or equal to) operator.
 * This function uses the Op.gt() and the Op.eq() functions to get it's result so
 * those functions must be set before using Op.geq()
 * @param lhs - the left hand side of the pseudo-overloaded '>=' operator
 * @param rhs - the right hand side of hte pseudo-overloaded '>=' operator
 * @returns {*}
 */
Op.prototype.geq = function (lhs, rhs) {
    if (this._gt != null && this._eq != null){
        return this._gt(lhs, rhs) || this._eq(lhs, rhs);
    }
};
```  

#### '<' and '<='
``` Javascript
/**
 * Sets the less than function in the Op object
 * @param ltFunction - the function that replaces the '<' operator
 */
Op.prototype.setLT = function (ltFunction) {
    this._lt = ltFunction;
};

/**
 * Calls the function that replaces the '<' (less than) operator
 * @param lhs - the left hand side of the pseudo-overloaded '<' operator
 * @param rhs - the right hand side of the pseudo-overloaded '<' operator
 * @returns {boolean}
 */
Op.prototype.lt = function (lhs, rhs) {
    if (this._lt != null) {
        return this._lt(lhs, rhs);
    }
};

/**
 * Calls the function that replaces the '<=' (less than or equal to) operator.
 * This function uses the Op.lt() and the Op.eq() functions to get it's result so
 * those functions must be set before using Op.leq()
 * @param lhs - the left hand side of the pseudo-overloaded '<=' operator
 * @param rhs - the right hand side of hte pseudo-overloaded '<=' operator
 * @returns {*}
 */
Op.prototype.leq = function (lhs, rhs) {
    if (this._lt != null && this._eq != null){
        return this._lt(lhs, rhs) || this._eq(lhs, rhs);
    }
};
```  

##### '+'
``` Javascript
/**
 * Sets the addition function in the Op object
 * @param pFunction - the function that replaces the '+' operator
 */
Op.prototype.setA = function (aFunction) {
    this._a = aFunction;
};

/**
 * Calls the function that replaces the '+' (addition) operator
 * @param lhs - the left hand side of the pseudo-overloaded '+' operator
 * @param rhs - the right hand side of the pseudo-overloaded '+' operator
 * @returns {boolean}
 */
Op.prototype.a = function (lhs, rhs) {
    if (this._a != null) {
        return this._a(lhs, rhs);
    }
};
```  

##### '-'
``` Javascript
/**
 * Sets the subtraction function in the Op object
 * @param sFunction - the function that replaces the '-' operator
 */
Op.prototype.setS = function (sFunction) {
    this._s = sFunction;
};

/**
 * Calls the function that replaces the '-' (subtraction) operator
 * @param lhs - the left hand side of the pseudo-overloaded '+' operator
 * @param rhs - the right hand side of the pseudo-overloaded '+' operator
 * @returns {boolean}
 */
Op.prototype.s = function (lhs, rhs) {
    if (this._s != null) {
        return this._s(lhs, rhs);
    }
};
```  

##### '/'
``` Javascript
/**
 * Sets the division function in the Op object
 * @param dFunction - the function that replaces the '/' operator
 */
Op.prototype.setD = function (dFunction) {
    this._d = dFunction;
};

/**
 * Calls the function that replaces the '/' (division) operator
 * @param lhs - the left hand side of the pseudo-overloaded '/' operator
 * @param rhs - the right hand side of the pseudo-overloaded '/' operator
 * @returns {boolean}
 */
Op.prototype.d = function (lhs, rhs) {
    if (this._d != null) {
        return this._d(lhs, rhs);
    }
};
```




