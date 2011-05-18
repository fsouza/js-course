var callFunction = function (fun) {
    var functionArguments = Array.prototype.slice.call(arguments, 1);
    fun.apply(this, functionArguments);
};

callFunction(function (a, b) { console.log(a, b); }, '1', '2')
