/*
JS: Async Data Aggregation Using Promises

You are required to fetch related data from multiple APIs and create a summary.

Steps:
Fetch a user
Fetch posts for that user
Fetch comments for one of the posts

Combine the results into a single summary object

Constraints:
Use Promise.all
Use async/await
Handle errors properly
Return or log a summary object
*/

async function getSummary() {
  try {
    // Fetch user
    const userRes = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await userRes.json();

    // Fetch posts of user
    const postsRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`
    );
    const posts = await postsRes.json();

    // Fetch comments for first post
    const firstPost = posts[0];

    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${firstPost.id}`
    );
    const comments = await commentsRes.json();

    // Summary Object
    const summary = {
      user: user.name,
      postCount: posts.length,
      commentCount: comments.length,
    };

    console.log(summary);
    return summary;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getSummary();
