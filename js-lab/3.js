var swapArgs = function () {
    var newArgs = [];
    for (var i=arguments.length - 1; i >= 0; i--) {
        newArgs.push(arguments[i]);
    };
    return newArgs;
};
