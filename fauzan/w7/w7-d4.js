// Callbacks -------------------------------------------------------------------------------------

// Define a function with a callback parameter
function doSomethingAsync(callback) {
  // Simulate an asynchronous operation
  setTimeout(() => {
    console.log("Async operation completed");
    // Call the callback function
    callback();
  }, 1000);
}

// Define a callback function
function callbackFunction() {
  console.log("Callback executed!");
}

// Call the main function with the callback
doSomethingAsync(callbackFunction);

// Promises -------------------------------------------------------------------------------------

// Define a function that returns a Promise
function doSomethingAsyncPromise() {
  return new Promise((resolve) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      console.log("Async operation completed");
      // Resolve the Promise
      resolve();
    }, 1000);
  });
}

// Call the function using Promises
doSomethingAsyncPromise().then(() => {
  console.log("Promise resolved!");
});

// Async/Await -------------------------------------------------------------------------------------

// Define a function with async keyword
async function doSomethingAsyncAsyncAwait() {
  // Wrap the asynchronous operation in a Promise
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async operation completed");
      resolve();
    }, 1000);
  });

  console.log("Async/Await completed");

  return result;
}

// Call the function using Async/Await
doSomethingAsyncAsyncAwait();
