
// filter active users and transform data into below format:
// { userId: 1, userName: "Amit" }

// output:
// [
//   { userId: 8379841, userName: 'Kashyapi Saini' },
//   { userId: 8379836, userName: 'Akshayakeerti Agarwal' },
//   { userId: 8379830, userName: 'Krishna Pilla' }
// ]

async function fetchUserData() {
  try {
    const response = await fetch("https://gorest.co.in/public/v2/users");
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();

    if (!Array.isArray(users)) {
      throw new Error(`Invalid API Response Format`);
    }
    const transformed = transformUsers(users);

    if (!transformed.length) {
      console.warn(`No Active Users Found!`);
    }
    console.log(transformed);
    return transformed;
  } catch (error) {
    console.error(`Error in Fetching Users: ${error.message}`);
    return [];
  }
}

fetchUserData();


function transformUsers(response) {
  return response
    .filter((user) => user.status == "active")
    .map((user) => ({ userId: user.id, userName: user.name }));
}
