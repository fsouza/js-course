onmessage = function (event) {
    if (event.data == "Olá, mundo!") {
        postMessage("Hello");
    };
};
