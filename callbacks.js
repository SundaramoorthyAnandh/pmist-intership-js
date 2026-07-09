// callback - callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. It allows for asynchronous programming and can be used to handle events, perform actions after a delay, or manage the flow of data in a program.

function normalFunction(callback) { // declaration / initialization
    console.log('Normal function is called');
    callback();
}

callbackFunction = () => {
    console.log('Callback function is called');
}

normalFunction(callbackFunction); // execution / invocation