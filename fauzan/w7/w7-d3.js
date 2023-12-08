// Async/Await -------------------------------------------------------------------------------------
async function doSomethingAsync() {
  // Simulate a random success or failure
  const randomNum = Math.random();
  const isSuccess = randomNum > 0.5;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isSuccess) {
        console.log("Async operation completed successfully");
        resolve("Success");
      } else {
        console.log("Async operation failed");
        reject(new Error("Failure"));
      }
    }, 1000);
  });
}

const triggerAsyncAwait = async () => {
  try {
    const result = await doSomethingAsync();
    const result2 = await doSomethingAsync();
    console.log("then 2");
    const result3 = await doSomethingAsync();
    console.log(`Async/Await resolved with result: ${result}`);
  } catch (error) {
    console.log(`Async/Await rejected with error: ${error.message}`);
  } finally {
    console.log("Async/Await completed!");
  }
};

const third = async () => {
  console.log("start");
  await triggerAsyncAwait();
  console.log("end");
};

// third();

// WITHOUT ASYNC/AWAIT -------------------------------------------------------------------------------------

// useEffect

async function triggerAsyncWithoutAsyncAwait() {
  doSomethingAsync()
    .then((result) => {
      console.log(`Async operation resolved with result: ${result}`);
      // we do something async again
      triggerAsyncAwait().then(() => {
        console.log("Async operation completed!");
        triggerAsyncAwait().then(() => {
          console.log("Async operation completed!");
          triggerAsyncAwait().then(() => {
            console.log("Async operation completed!");
          });
        });
      });
    })
    .catch((error) => {
      console.log(`Async operation rejected with error: ${error.message}`);
    })
    .finally(() => {
      // func2()
      console.log("Async operation completed!");
    });
}

triggerAsyncWithoutAsyncAwait();

// Callbacks -------------------------------------------------------------------------------------

function doSomethingAsyncWithCallback(callback) {
  const randomNum = Math.random();
  const isSuccess = randomNum > 0.5;

  setTimeout(() => {
    if (isSuccess) {
      console.log("Async operation completed successfully");
      callback(null, "Success");
    } else {
      console.log("Async operation failed");
      callback(new Error("Failure"), null);
    }
  }, 1000);
}

function triggerAsyncWithCallback() {
  doSomethingAsyncWithCallback((error, result) => {
    if (error) {
      console.log(`Async operation rejected with error: ${error.message}`);
    } else {
      console.log(`Async operation resolved with result: ${result}`);
    }
    console.log("Async operation completed!");
  });
}

// Call the function
// triggerAsyncWithCallback();
