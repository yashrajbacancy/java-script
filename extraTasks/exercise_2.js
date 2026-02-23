const response = {
  status: 200,
  data: {
    users: [
      { id: 1, name: "Amit", age: 25, isActive: true, role: "admin" },
      { id: 2, name: "Neha", age: 17, isActive: false, role: "user" },
      { id: 3, name: "Raj", age: 30, isActive: true, role: "user" },
      { id: 4, name: "Simran", age: 22, isActive: true, role: "moderator" },
    ],
  },
};
// condition: isActive=true and age>20;
// then sort by name in descending order

// output:[
//   { id: 4, name: 'Simran' },
//   { id: 3, name: 'Raj' },
//   { id: 1, name: 'Amit' }
// ]

function getEligibleUsers(response) {
  const users = response?.data?.users ?? [];

  if (!users.length) return "Users Not Found!";

  const filteredUsers = users
    .filter((user) => user.isActive && user.age > 20)
    .map((user) => ({ id: user.id, name: user.name }));

  const output = sortingHelper(filteredUsers);
  console.log(output);
}

getEligibleUsers(response);

function sortingHelper(users) {
  return users.sort((a, b) => b.name.localeCompare(a.name));
}
