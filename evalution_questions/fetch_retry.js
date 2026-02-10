/* JS: Implement API Retry Logic

Write a function that takes a url and a retry count, calls the API, and retries the request up to the given number of times if the API call fails.
*/
async function fetchRetry(url, retry_count) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return await response.json();
  } catch (err) {
    if (retry_count == 0) {
      throw err;
    }

    console.log(`${retry_count} count remaining`);
    return fetchRetry(url, retry_count - 1);
  }
}

fetchRetry("abcd.com", 3)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
