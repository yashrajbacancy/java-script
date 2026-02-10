/*JS: Async Data Aggregation Using Promises

You are required to fetch related data from multiple APIs and create a summary.

Steps:

Fetch a user

Fetch posts for that user

Fetch comments for one of the posts

Combine the results into a single summary object

Example Output:
summary: {
  user: "Leanne Graham",
  postCount: 10,
  commentCount: 5
}

Constraints:

Use Promise.all

Use async/await

Handle errors properly

Return or log a summary object

*/

async function getSummary() {
  try {
    const userRes = await fetch("user api");
    const user = await userRes.json();

    const postsRes = await fetch("posts api");
    const posts = await postsRes.json();

    const commentsRes = await fetch("comments api");
    const comments = await commentsRes.json();

    const summary = {
      user: user.name,
      postCount: posts.length,
      commentCount: comments.length,
    };

    return summary;
  } catch (error) {
    console.error("Error in fetching data:", error);
  }
}

console.log(getSummary());
