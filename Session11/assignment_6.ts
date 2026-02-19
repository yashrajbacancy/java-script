// Create a type UserPublicProfile without email and isActive .
// Create a Record that maps user IDs (string) to User objects.


type User = {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
};

type UserPublicProfile = Omit<User, "email" | "isActive">;
type UserRecord = Record<string, User>;


const publicProfile: UserPublicProfile = {
  id: "1",
  name: "Yashraj"
};

const users: UserRecord = {
  "1": {
    id: "1",
    name: "Yashraj",
    email: "yash@test.com",
    isActive: true
  },
  "2": {
    id: "2",
    name: "Rahul",
    email: "rahul@test.com",
    isActive: false
  }
};
console.log(users, publicProfile);
