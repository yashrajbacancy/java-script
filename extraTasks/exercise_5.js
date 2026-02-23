/* Problem Statement

You are given an asynchronous operation (such as an API call) that returns a Promise.

Your task is to create a utility function:

fetchWithTimeout(promise, timeoutMs)
 Requirements:

If the given promise resolves within the specified time (timeoutMs), return the resolved value.
If the promise takes longer than timeoutMs, reject with a "Timeout Error".
Do not modify the original promise.
Proper error handling should be implemented.
*/

function fetchWithTimeout(promise, timeoutMs) {
  const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Request Timed Out"));
    }, timeoutMs);
  });

  return Promise.race([ timeoutPromise,promise]);
}

function fakeApicall(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data Fetched Successfully");
    }, delay);
  });
}


for (let i=0;i<1000;i++){

    fetchWithTimeout(fakeApicall(1000), 1000)
    .then(console.log)
    .catch(console.error);
}
