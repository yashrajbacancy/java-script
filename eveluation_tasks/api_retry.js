/*
JS: Implement API Retry Logic

Write a function that takes a url and retry count,
calls the API, and retries the request up to
the given number of times if the API call fails.
*/

async function fetchWithRetry(url, retryCount) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API Failed");
    }

    const data = await response.json();
    console.log("Success:", data);
    return data;
  } catch (error) {
    if (retryCount > 0) {
      console.log("Retrying...", retryCount);
      return fetchWithRetry(url, retryCount - 1);
    } else {
      console.error("All retries failed");
    }
  }
}

fetchWithRetry("https://jsonplaceholder.typicode.com/posts/1", 3);
