// 3. TS: Typed async function for fetching user names
// Description
// You are given an API that returns a list of users.
// GET /users
// Each user has the following shape:
// {id:number;name:string;
// }
// Implement the following function:
// asyncfunctiongetUserNames():Promise<string[]>
// The function should:
// 1. Fetch users from /users
// 2. Return only the list of user names
// Constraints
// Use TypeScript
// Define a User type
// Use async / await
// Do not use any



type User = {
  id: number;
  name: string;
};

async function getUserNames(): Promise<string[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  const users: User[] = await response.json();

  return users.map((user: User) => user.name);
}

getUserNames()
  .then(names => console.log(names))
  .catch(err => console.error(err));