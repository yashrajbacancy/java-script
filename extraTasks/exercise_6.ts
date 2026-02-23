//Convert below code in typescript

// const response = {
//     status: 200,
//     data: {
//         users: [
//             { id: 1, name: "Amit", age: 25, isActive: true, role: "admin" },
//             { id: 2, name: "Neha", age: 17, isActive: false, role: "user" },
//             { id: 3, name: "Raj", age: 30, isActive: true, role: "user" },
//             { id: 4, name: "Simran", age: 22, isActive: true, role: "moderator" }
//         ]
//     }
// };
// function getEligibleUsers(response) {
//     var _a, _b;
//     const users = (_b = (_a = response === null || response === void 0 ? void 0 : response.data) === null || _a === void 0 ? void 0 : _a.users) !== null && _b !== void 0 ? _b : [];
//     if (!users.length)
//         return "Users not found";
//     const eligibleUsers = users
//         .filter(user => user.isActive && user.age > 20)
//         .map(user => ({
//         id: user.id,
//         name: user.name
//     }));
//     if (!eligibleUsers.length)
//         return "Users not found";
//     const sortedUsers = sortHelper(eligibleUsers);
//     return { users: sortedUsers };
// }
// function sortHelper(users) {
//     const collator = new Intl.Collator("en", { sensitivity: "base" });
//     return [...users].sort((a, b) => collator.compare(b.name, a.name));
// }
// console.log(getEligibleUsers(response));

type User = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  role: string;
};

type Users = {
  users: User[];
};

type Response = {
  status: number;
  data: Users;
};

type MidResponse = {
  users: MidResponse[];
};

type MidUser = {
  id: number;
  name: string;
};

const response: Response = {
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

function getEligibleUsers(response: Response): MidResponse | string {
  const users = response?.data?.users ?? [];

  if (!users.length) return "Users not found";

  const eligibleUsers = users
    .filter((user) => user.isActive && user.age > 20)
    .map((user) => ({
      id: user.id,
      name: user.name,
    }));

  if (!eligibleUsers.length) return "Users not found";

  const sortedUsers = sortHelper(eligibleUsers);

  return { users: sortedUsers };
}

function sortHelper(users: MidUser[]): MidUser[] {
  const collator = new Intl.Collator("en", { sensitivity: "base" });
  return [...users].sort((a, b) => collator.compare(b.name, a.name));
}

console.log(getEligibleUsers(response));
