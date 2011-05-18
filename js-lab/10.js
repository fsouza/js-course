var encapsulateFunction = function (fun) {
    var inner = function() {};
    inner.callFunction = fun;
    return inner;
};
