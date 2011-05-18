var swapArgs = function () {
    if (arguments.length != 2) {
        throw "This function receives exactly arguments!";
    };
    return [arguments[1], arguments[0]];
};
