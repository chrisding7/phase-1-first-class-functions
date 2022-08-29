function receivesAFunction(f) {
    f();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function")
    }
}