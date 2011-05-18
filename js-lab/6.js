var addToObjects = function (x, y) {
    var clone = function (object) {
        var clonedObject = {};

        for (var key in object) {
            clonedObject[key] = object[key];
        }

        return clonedObject;
    };

    var x = clone(x), y = clone(y);
    console.log(++x.a, ++y.b);
};
