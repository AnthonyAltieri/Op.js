/**
 * The Op (Operator) object that will act as a liason to pseudo-overload operators
 * in order to tailor operators to your own objects.
 * @constructor
 */
function Op () {
    this._lt = null;
    this._gt = null;
    this._eq = null;
    this._neq = null;
    this._a = null;
    this._s = null;
    this._d = null;
}

/**
 * Sets the less than function in the Op object
 * @param ltFunction - the function that replaces the '<' operator
 */
Op.prototype.setLT = function (ltFunction) {
    this._lt = ltFunction;
};

/**
 * Sets the greater than function in the Op object
 * @param gtFunction - the function that replaces the '>' operator
 */
Op.prototype.setGT = function (gtFunction) {
    this._gt = gtFunction;
};

/**
 * Sets the equal to function in the Op object
 * @param eqFunction - the function that replaces the '===' operator
 */
Op.prototype.setEQ = function (eqFunction) {
    this._eq = eqFunction;
};

/**
 * Sets the not equal to function in the Op object
 * @param neqFunction - the function that replaces the '!=' operator
 */
Op.prototype.setNEQ = function (neqFunction) {
    this._neq = neqFunction;
};

/**
 * Sets the addition function in the Op object
 * @param pFunction - the function that replaces the '+' operator
 */
Op.prototype.setA = function (aFunction) {
    this._a = aFunction;
};

/**
 * Sets the subtraction function in the Op object
 * @param sFunction - the function that replaces the '-' operator
 */
Op.prototype.setS = function (sFunction) {
    this._s = sFunction;
};

/**
 * Sets the division function in the Op object
 * @param dFunction - the function that replaces the '/' operator
 */
Op.prototype.setD = function (dFunction) {
    this._d = dFunction;
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


module.exports = Op;
