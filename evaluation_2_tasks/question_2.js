// 2. JS: Convert Promise Chain to async/await

// Untitled 1

// Description
// You are given a function implemented using Promise chaining.
// Rewrite the same logic using async / await .
// Do not change the behaviour.
// Existing code:

// function getUserPostTitles(userId) {
// return fetch(`/users/${userId}`)
// .then(res => res.json())
// .then(user => {
// return fetch(`/posts?userId=${user.id}`);
// })
// .then(res => res.json())
// .then(posts => {
// return posts.map(p => p.title);
// });
// }

// Rewrite the above function using async / await .
// Constraints
// Use async / await
// Do not use .then() or .catch()
// Behaviour must remain the same
// Return the same result

async function getUserPostTitles(userId) {
  const userResponse = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
  );
  const user = await userResponse.json();

  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
  );
  const posts = await postResponse.json();

  return posts.map((post) => post.title);
}
//With Proper Error Handling

async function getUserPostTitlesWithErrorHandling(userId) {
  try {
    const userResponse = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`,
    );
    if (!userResponse.ok) {
      throw new Error(`User request failed: ${userResponse.status}`);
    }
    const user = await userResponse.json();

    const postResponse = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`,
    );
    if (!postResponse.ok) {
      throw new Error(`Post request failed: ${postResponse.status}`);
    }
    const posts = await postResponse.json();

    return posts.map((post) => post.title);
  } catch (error) {
    throw error;
  }
}

getUserPostTitles(2).then(console.log).catch(console.error);

getUserPostTitlesWithErrorHandling(4).then(console.log).catch(console.error);
